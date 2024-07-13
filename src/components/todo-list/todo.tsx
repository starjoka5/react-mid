import { useCallback, useEffect, useRef, useState } from 'react'
import { DEFAULT_TODOS, ITask } from '../../interface/app'
import { Button } from '@nextui-org/react'
import { TodoItem } from './todoItem'

// type SetTodoType = ITask[] | ((todos: ITask[]) => ITask[])
export const Todo = () => {
    //const [todosStorage, setTodosStorage] = useStateStorage('todos', DEFAULT_TODOS)
    const [todos, _setTodos] = useState<ITask[]>(DEFAULT_TODOS)
    const [newTask, setNewTask] = useState<string>('')
    const originalTodos = useRef(todos)

    const setTodos = useCallback((todos: ITask[]) => {
        localStorage.setItem('todos', JSON.stringify(todos))
        _setTodos(todos)
    }, [])

    useEffect(() => {
        const _todos = localStorage.getItem('todos')
        if (!_todos)
            return
        setTodos(JSON.parse(_todos))
    }, [setTodos])



    // const [count, setCount] = useState(0)
    // const memoizedValue = useMemo(() => (s:string) => {

    // }, [])

    // const callback = useCallback((s:string)=>{

    // },[])


    const handleDelete = useCallback((id: number) => {
        _setTodos(todos.filter((todo) => todo.id !== id))
    }, [todos])

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        //API Call
        setNewTask(value)
    }

    const handleAdd = () => {
        _setTodos([...todos, { id: Math.random(), description: newTask, completed: false }])
    }

    const toggleTask = useCallback((id: ITask['id']) => {
        _setTodos(todos.map((todo) => {
            if (todo.id === id) {
                return { ...todo, completed: !todo.completed }
            }
            return todo
        }))
    }, [todos])

    const filter = (filter: 'completed' | 'active' | 'all') => () => {
        _setTodos(originalTodos.current.filter((todo) => {
            if (filter === 'completed') {
                return todo.completed
            }
            if (filter === 'active') {
                return !todo.completed
            }

            return true
        }))
    }
    // const _todos = useMemo(()=>{
    //    return todos.filter((todo) => {
    //     if (filter === 'completed') {
    //       return todo.completed
    //     }
    //     if (filter === 'active') {
    //       return !todo.completed
    //     }

    //     return true
    //   }))
    // },[filter])

    return (
        <div className='flex justify-center font-sans'>
            <div>
                <h1 className='text-4xl p-5 font-bold'>Todo List</h1>
                <div className='flex gap-4 p-5'>
                    <Button color="success" onClick={filter('completed')} >Completed</Button>
                    <Button color="secondary" onClick={filter('all')} >All</Button>
                    <Button color="warning" onClick={filter('active')}>Active</Button>
                </div>
                <div>
                    <div className='p-5 flex gap-2'>
                        <input type="text" value={newTask} onChange={handleInput} className='rounded-md px-4 bg-slate-300' placeholder='Ej: Dormir, Estudiar, Trabajar' />
                        <Button className='disabled:opacity-45' onClick={handleAdd} color='primary' disabled={newTask === ''}>Add</Button>
                    </div>
                    <div className='p-5'>
                        <ul className='flex flex-col gap-2'>
                            {todos.map((task) => (
                                <TodoItem key={task.id} task={task} />
                            ))}
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    )
}

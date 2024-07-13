export type ITask = {
    id: number,
    description: string
    completed: boolean
}
export const DEFAULT_TODOS = [
    { id: 1, description: 'Learn Angular', completed: false },
    { id: 2, description: 'Learn React', completed: true },
    { id: 3, description: 'Learn Vue', completed: false }
]
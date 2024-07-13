import { Button, Input } from "@nextui-org/react"
import { ITask } from "../../interface/app"
import { useState } from "react"
import React from "react"

type Props = {
    task: ITask
    toggleTask?: (id: ITask["id"]) => void
    deleteTask?: (id: number) => void
}
export const TodoItem = React.memo(function TodoItem({ task, toggleTask }: Props) {

    console.log('is renderer');

    //const [description, setDescription] = useState(task.description)

    return <li className={`text-lg flex gap-4 ${task.completed ? 'line-through' : ''}`}>
        <span>
            {task.description}

        </span>
        <Button color="danger" size="sm"> x </Button>
    </li>
})
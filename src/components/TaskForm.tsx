import { useState } from "react";

type TaskFormProps = {
    handleSubmit: (value: string) => void; 
}

export default function TaskForm({ handleSubmit }: TaskFormProps) {

    const [taskText, setTaskText] = useState<string>('');

    return (
        <form onSubmit={(e) => {e.preventDefault(); handleSubmit(taskText)}}>
            <input name="task" type="text" placeholder="Task" value={taskText} onChange={(e) => setTaskText(e.target.value)}/>
            <button type="submit">Add</button>
        </form>
    )
}
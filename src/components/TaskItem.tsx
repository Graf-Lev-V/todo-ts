type TaskItemProps = {
    taskText: string;
    handleCompleted: (value: number) => void;
    id: number;
    completed: boolean;
    handleDelete: (value: number) => void;
}

export default function TaskItem({ taskText, handleCompleted, id, completed, handleDelete }: TaskItemProps) {

    return (
        <>
            <p style={{textDecoration: completed? "line-through" : "none"}}>{taskText} <input type="checkbox" checked={completed} onChange={() => handleCompleted(id)}/></p>
            <button type="button" onClick={() => handleDelete(id)}>Delete</button>
        </>
    )
}
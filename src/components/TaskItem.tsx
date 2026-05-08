export default function TaskItem({ taskText, handleCompleted, id, completed, handleDelete }) {

    return (
        <>
            <p style={{textDecoration: completed? "line-through" : "none"}}>{taskText} <input type="checkbox" checked={completed} onChange={() => handleCompleted(id)}/></p>
            <button type="button" onClick={() => handleDelete(id)}>Delete</button>
        </>
    )
}
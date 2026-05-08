export default function TaskForm({ handleSubmit }) {
    return (
        <form onSubmit={(e) => {e.preventDefault(); handleSubmit(e.target.task.value)}}>
            <input name="task" type="text" placeholder="Task"/>
            <button type="submit">Add</button>
        </form>
    )
}
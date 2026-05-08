export default function TaskFilter({ select, setSelect }) {
    return (
        <>
            <select value={select} onChange={(e) => setSelect(e.target.value)}>
                <option value="All">All</option>
                <option value="Active">Active</option>
                <option value="Completed">Completed</option>
            </select>
        </>
    )
}
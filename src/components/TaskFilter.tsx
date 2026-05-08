type TaskFilterProps = {
    select: string;
    setSelect: (value: string) => void;
}

export default function TaskFilter({ select, setSelect }: TaskFilterProps) {
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
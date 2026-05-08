type TaskSearchProps = {
    search: string;
    setSearch: (value: string) => void
}

export default function TaskSearch({ search, setSearch }: TaskSearchProps) {
    return (
        <input value={search} onChange={(e) => setSearch(e.target.value)}/>
    )
}
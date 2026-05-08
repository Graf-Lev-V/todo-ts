import TaskFilter from "./components/TaskFilter"
import TaskForm from "./components/TaskForm"
import TaskList from "./components/TaskList"
import TaskSearch from "./components/TaskSearch"
import { useState } from "react"
import type { Task } from './types'

function App() {
  
  const [taskList, setTaskList] = useState<Task[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [select, setSelect] = useState<string>("All");
  const [search, setSearch] = useState<string>("");

  function handleSubmit(taskText: string): void {
    if (!taskText) {
      setError("Text Required!");
      return;
    }
    setError(null);
    taskText = taskText.trim();
    setTaskList([...taskList, {id: Date.now(), text: taskText, completed: false}])
  }
  function handleCompleted(id: number): void {
    setTaskList(taskList.map((task) => task.id === id ? {...task, completed: !task.completed} : task))
  }
  function handleDelete(id: number): void {
    setTaskList(taskList.filter((task) => task.id !== id))
  }

  const filteredTaskList: Task[] = taskList.filter((task) => {
    if (select === "Active") return !task.completed;
    if (select === "Completed") return task.completed;
    return true;
  }).filter((task) => {
    if (search) return task.text.includes(search);
    return true;
  });
  

  return (
    <>
      <TaskFilter select={select} setSelect={setSelect}/>
      <TaskSearch search={search} setSearch={setSearch}/>
      <TaskForm  handleSubmit={handleSubmit} />
      <TaskList taskList={filteredTaskList} handleCompleted={handleCompleted} handleDelete={handleDelete} />
      {error && <p>{error}</p>}
    </>
  )
}

export default App

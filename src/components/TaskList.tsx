import TaskItem from './TaskItem';
import type { Task } from '../types'

type TaskListProps = {
    taskList: Task[];
    handleCompleted: (value: number) => void;
    handleDelete: (value: number) => void;
}

export default function TaskList({ taskList, handleCompleted, handleDelete }: TaskListProps) {

    return (
        <>
            {taskList.map((item) => 
                <TaskItem key={item.id} taskText={item.text} handleCompleted={handleCompleted} id={item.id} completed={item.completed} handleDelete={handleDelete}/>
            )}
        </>
    )
}
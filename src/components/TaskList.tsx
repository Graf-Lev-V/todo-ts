import TaskItem from './TaskItem';

export default function TaskList({ taskList, handleCompleted, handleDelete }) {

    return (
        <>
            {taskList.map((item) => 
                <TaskItem key={item.id} taskText={item.text} handleCompleted={handleCompleted} id={item.id} completed={item.completed} handleDelete={handleDelete}/>
            )}
        </>
    )
}
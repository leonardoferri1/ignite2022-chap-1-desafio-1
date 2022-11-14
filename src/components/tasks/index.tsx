import { Task, TasksContainer } from "./styles";
import { FaTrashAlt } from "react-icons/fa";
import { TaskContext, TaskProps } from "../../hooks/CreateTaskHook";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { useContext } from "react";

export function TaskList() {
  const { tasks, toggleTaskCompleted, deleteTask } = useContext(TaskContext);

  function handleToggleTaskCompleted(taskId: string) {
    toggleTaskCompleted(taskId);
  }

  function handleRemoveTask(taskId: string) {
    deleteTask(taskId);
  }

  return (
    <>
      <TasksContainer>
        {tasks.map((task) => (
          <Task key={task.id}>
            <button
              className="checkBox"
              onClick={() => handleToggleTaskCompleted(task.id)}
            >
              {task.isCompleted ? <BsFillCheckCircleFill /> : <div />}
            </button>
            <p>{task.title}</p>
            <button
              className="delete"
              onClick={() => handleRemoveTask(task.id)}
            >
              <FaTrashAlt size={20} />
            </button>
          </Task>
        ))}
      </TasksContainer>
    </>
  );
}

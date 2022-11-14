import {
  HeaderContainer,
  HeaderContent,
  TaskCounterContainer,
  TaskCounterContent,
} from "./styles";
import Logo from "../../assets/Logo.svg";
import { MdOutlineSummarize } from "react-icons/md";
import { useContext, useState } from "react";
import { TaskContext } from "../../hooks/CreateTaskHook";

export function Header() {
  const { addTask, tasks } = useContext(TaskContext);

  const [title, setTitle] = useState("");
  function handleCreateNewTask() {
    addTask(title);
    setTitle("");
  }

  const tasksAmount = tasks.length;
  const completedTasks = tasks.filter((task) => task.isCompleted).length;

  return (
    <>
      <HeaderContainer>
        <img src={Logo} alt="ToDo list" />
        <HeaderContent>
          <div>
            <input
              placeholder="Adicione uma nova tarefa"
              type="text"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
            <button
              type="button"
              onClick={handleCreateNewTask}
              disabled={!title}
            >
              Criar
              <MdOutlineSummarize size={20} />
            </button>
          </div>
        </HeaderContent>
      </HeaderContainer>
      <TaskCounterContainer>
        <TaskCounterContent>
          <p>Tarefas criadas</p>
          <span>{tasksAmount}</span>
        </TaskCounterContent>

        <TaskCounterContent>
          <p className="textPurple">Concluídas</p>
          <span>
            {completedTasks} de {tasksAmount}
          </span>
        </TaskCounterContent>
      </TaskCounterContainer>
    </>
  );
}

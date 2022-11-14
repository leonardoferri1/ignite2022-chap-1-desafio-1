import { createContext, useState, ReactNode } from "react";

export interface TaskProps {
  id: string;
  title: string;
  isCompleted: boolean;
}

interface TaskProviderProps {
  children: ReactNode;
}

interface TasksContextData {
  tasks: TaskProps[];
  addTask: (taskTitle: string) => void;
  deleteTask: (taskId: string) => void;
  toggleTaskCompleted: (taskId: string) => void;
}

export const TaskContext = createContext<TasksContextData>(
  {} as TasksContextData
);

export function TaskProvider({ children }: TaskProviderProps) {
  const [tasks, setTask] = useState<TaskProps[]>([]);

  async function addTask(taskTitle: string) {
    const newTasks = [
      ...tasks,
      {
        id: crypto.randomUUID(),
        title: taskTitle,
        isCompleted: false,
      },
    ];

    setTask(newTasks);
  }

  async function deleteTask(taskId: string) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTask(newTasks);
  }

  async function toggleTaskCompleted(taskId: string) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted,
        };
      }
      return task;
    });
    setTask(newTasks);
  }

  return (
    <TaskContext.Provider
      value={{ tasks, addTask, deleteTask, toggleTaskCompleted }}
    >
      {children}
    </TaskContext.Provider>
  );
}

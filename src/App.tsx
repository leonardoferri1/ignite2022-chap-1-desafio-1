import { Header } from "./components/header";
import { TaskList } from "./components/tasks";
import { GlobalStyles } from "./styles/global";
import { useContext, useState } from "react";
import { TaskContext, TaskProvider } from "./hooks/CreateTaskHook";

function App() {
  return (
    <TaskProvider>
      <Header />
      <TaskList />
      <GlobalStyles />
    </TaskProvider>
  );
}

export default App;

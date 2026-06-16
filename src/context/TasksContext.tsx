import { createContext, useContext } from "react";
import { useTasks } from "../hooks/useTasks";

const TasksContext = createContext<ReturnType<typeof useTasks> | null>(null);

export function TasksProvider({ children }: { children: React.ReactNode }) {
  const tasks = useTasks();

  return (
    <TasksContext.Provider value={tasks}>
      {children}
    </TasksContext.Provider>
  );
}

export function useTasksContext() {
  const context = useContext(TasksContext);

  if (!context) {
    throw new Error("useTasksContext debe usarse dentro de TasksProvider");
  }

  return context;
}
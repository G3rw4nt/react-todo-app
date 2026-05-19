import { useState } from "react";
import { Header } from "./components/Header";
import { NewTaskForm } from "./components/NewTaskForm";
import { TaskList } from "./components/TaskList";
import { useTaskStore } from "./hooks/useTaskStore";
function App() {
  const [isFormShown, setIsFormShown] = useState(false);
  const numberOfTasks = useTaskStore((state) => state.tasks.length);

  return (
    <main className="min-h-screen bg-sky-500 px-4 py-10 font-sans">
      <div className="mx-auto max-w-xl rounded-3xl bg-white p-6 shadow-xl">
        <div>
          <Header
            onToggleForm={() => setIsFormShown((prev) => !prev)}
            isFormShown={isFormShown}
            numberOfTasks={numberOfTasks}
          />
          <NewTaskForm isFormShown={isFormShown} />
        </div>
        <TaskList />
      </div>
    </main>
  );
}

export default App;

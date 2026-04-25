import { useState } from "react";
import { Header } from "./components/Header";
import { NewTaskForm } from "./components/NewTaskForm";
import { TaskList } from "./components/TaskList";
function App() {
  const [isFormShown, setIsFormShown] = useState(false);
  const initialTasks = [
    { description: "Wynieść Śmieci", priority: "High" },
    { description: "Robić kurs", priority: "High" },
    { description: "Pójść po mleko", priority: "High" },
  ];
  const [tasks, setTasks] = useState(initialTasks);

  return (
    <main className="min-h-screen bg-sky-500 px-4 py-10 font-sans">
      <div className="mx-auto max-w-xl rounded-3xl bg-white p-6 shadow-xl">
        <div>
          <Header
            onToggleForm={() => setIsFormShown((prev) => !prev)}
            isFormShown={isFormShown}
            numberOfTasks={tasks.length}
          />
          <NewTaskForm isFormShown={isFormShown} />
        </div>
        <TaskList tasks={tasks} />
      </div>
    </main>
  );
}

export default App;

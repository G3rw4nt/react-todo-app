import { useState } from "react";
import { Header } from "./components/Header";
import { NewTaskForm } from "./components/NewTaskForm";
import { Task } from "./components/Task";
function App() {
  const [isFormShown, setIsFormShown] = useState(false);
  return (
    <main className="min-h-screen bg-sky-500 px-4 py-10 font-sans">
      <div className="mx-auto max-w-xl rounded-3xl bg-white p-6 shadow-xl">
        <div>
          <Header
            onToggleForm={() => setIsFormShown((prev) => !prev)}
            isFormShown={isFormShown}
          />
          <NewTaskForm isFormShown={isFormShown} />
        </div>
        <Task />
      </div>
    </main>
  );
}

export default App;

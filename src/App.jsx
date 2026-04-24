import { Header } from "./Header";
import { NewTaskForm } from "./NewTaskForm";
import { Task } from "./Task";
function App() {
  return (
    <main className="min-h-screen bg-sky-500 px-4 py-10 font-sans">
      <div className="mx-auto max-w-xl rounded-3xl bg-white p-6 shadow-xl">
        <div>
          <Header />
          <NewTaskForm />
        </div>
        <Task />
      </div>
    </main>
  );
}

export default App;

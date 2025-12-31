import { useEffect, useState } from "react";
import api from "../api/axios";
import { useAuth } from "../auth/AuthContext";
import TaskForm from "../components/TaskForm";
import TaskCard from "../components/TaskCard";

export default function Dashboard() {
  const { logout } = useAuth();
  const [tasks, setTasks] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    api.get("/tasks").then((res) => setTasks(res.data));
  }, []);

  const deleteTask = async (id) => {
    await api.delete(`/tasks/${id}`);
    setTasks(tasks.filter((t) => t._id !== id));
  };

  const filtered = tasks.filter((t) =>
    t.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between">
          <h1 className="font-bold text-lg">Dashboard</h1>
          <button onClick={logout} className="text-red-500">Logout</button>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-10">
        <TaskForm onTaskAdded={(task) => setTasks([task, ...tasks])} />

        <input
          placeholder="Search tasks..."
          className="w-full mb-4 border rounded-lg px-4 py-2"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="space-y-3">
          {filtered.map((task) => (
            <TaskCard
              key={task._id}
              task={task}
              onDelete={deleteTask}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

import { useState } from "react";
import api from "../api/axios";

export default function TaskForm({ onTaskAdded }) {
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async (e) => {
    e.preventDefault();

    if (!title.trim()) return;

    try {
      setLoading(true);
      const res = await api.post("/tasks", { title });
      onTaskAdded(res.data);
      setTitle("");
    } catch (err) {
      console.error("Add task failed", err.response?.data || err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={submit} className="flex gap-3 mb-4">
      <input
        className="flex-1 border rounded-lg px-4 py-2"
        placeholder="New task"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button
        type="submit"
        disabled={loading}
        className="bg-indigo-600 text-white px-5 rounded-lg hover:bg-indigo-700"
      >
        {loading ? "Adding..." : "Add"}
      </button>
    </form>
  );
}

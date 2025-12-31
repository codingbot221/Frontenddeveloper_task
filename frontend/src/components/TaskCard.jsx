export default function TaskCard({ task, onDelete }) {
  return (
    <div className="flex justify-between items-center bg-gray-50 p-4 rounded-lg border">
      <span>{task.title}</span>
      <button
        onClick={() => onDelete(task._id)}
        className="text-red-500 text-sm"
      >
        Delete
      </button>
    </div>
  );
}

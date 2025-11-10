import Link from "next/link";
import { notFound } from "next/navigation";
import { fetchTodoById } from "@/lib/api";

interface Todo {
  _id?: string;
  id?: number;
  title: string;
  done: boolean;
}

interface PageProps {
  params: Promise<{ id: string }>;
}

async function getTodo(id: string): Promise<Todo | null> {
  try {
    const todo = await fetchTodoById(id);
    return todo;
  } catch (error) {
    console.error("Error fetching todo:", error);
    return null;
  }
}

export default async function TodoModalPage({ params }: PageProps) {
  const { id } = await params;
  const todo = await getTodo(id);

  if (!todo) {
    notFound();
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl max-w-md w-full shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-300">
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-4 flex items-center justify-between">
          <h2 className="text-xl font-bold text-white">Task Details</h2>
          <Link
            href="/todos"
            className="text-white hover:bg-white hover:bg-opacity-20 rounded-lg p-1 transition-colors"
            title="Close modal"
          >
            <span className="text-2xl">×</span>
          </Link>
        </div>

        {/* Modal Content */}
        <div className="p-6 space-y-6">
          {/* ID Section */}
          <div>
            <p className="text-xs font-semibold text-slate-500 uppercase mb-1">Task ID</p>
            <p className="text-2xl font-bold text-slate-900">#{todo._id || todo.id}</p>
          </div>

          {/* Title Section */}
          <div>
            <p className="text-xs font-semibold text-slate-500 uppercase mb-1">Title</p>
            <p className={`text-lg font-semibold ${todo.done ? 'line-through text-slate-400' : 'text-slate-900'}`}>
              {todo.title}
            </p>
          </div>

          {/* Status Section */}
          <div>
            <p className="text-xs font-semibold text-slate-500 uppercase mb-2">Status</p>
            <div className="flex items-center gap-2">
              {todo.done ? (
                <>
                  <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center">
                    <span className="text-emerald-600 text-sm">✓</span>
                  </div>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-emerald-100 text-emerald-700">
                    Completed
                  </span>
                </>
              ) : (
                <>
                  <div className="w-6 h-6 border-2 border-amber-400 rounded-full"></div>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-amber-100 text-amber-700">
                    Pending
                  </span>
                </>
              )}
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-slate-200"></div>

          {/* Action Button */}
          <Link
            href="/todos"
            className="flex items-center justify-center w-full px-4 py-2 bg-slate-100 text-slate-900 font-semibold rounded-lg hover:bg-slate-200 transition-colors"
          >
            ← Back to Todos
          </Link>
        </div>
      </div>
    </div>
  );
}

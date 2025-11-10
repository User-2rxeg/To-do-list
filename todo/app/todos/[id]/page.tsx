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

export default async function TodoDetailPage({ params }: PageProps) {
  const { id } = await params;
  const todo = await getTodo(id);

  if (!todo) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          {/* Back Button */}
          <Link
            href="/todos"
            className="inline-flex items-center px-4 py-2 rounded-lg text-blue-600 hover:bg-blue-50 transition-colors font-medium mb-8 group"
          >
            <span className="group-hover:-translate-x-1 transition-transform">←</span>
            <span className="ml-2">Back to Todos</span>
          </Link>

          {/* Main Card */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
            {/* Header */}
            <div className="flex items-start gap-4 mb-8 pb-8 border-b border-slate-200">
              <div className="flex-shrink-0">
                {todo.done ? (
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-2xl">
                    ✓
                  </div>
                ) : (
                  <div className="w-12 h-12 border-2 border-slate-300 rounded-full flex items-center justify-center">
                    <span className="text-slate-400">○</span>
                  </div>
                )}
              </div>
              <div className="flex-1">
                <h1 className="text-3xl font-bold text-slate-900 mb-2">{todo.title}</h1>
                <div className="flex items-center gap-3">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold ${
                    todo.done 
                      ? 'bg-emerald-100 text-emerald-700' 
                      : 'bg-amber-100 text-amber-700'
                  }`}>
                    {todo.done ? '✓ Completed' : '⏳ Pending'}
                  </span>
                  <span className="text-slate-500 text-sm">ID: {todo.id}</span>
                </div>
              </div>
            </div>

            {/* Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* ID Card */}
              <div className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-xl p-6 border border-blue-200">
                <p className="text-slate-600 text-sm font-semibold mb-2">Task ID</p>
                <p className="text-3xl font-bold text-slate-900">{todo._id || todo.id}</p>
              </div>

              {/* Title Card */}
              <div className="bg-gradient-to-br from-purple-50 to-slate-50 rounded-xl p-6 border border-purple-200">
                <p className="text-slate-600 text-sm font-semibold mb-2">Title</p>
                <p className={`text-lg font-semibold ${todo.done ? 'line-through text-slate-400' : 'text-slate-900'}`}>
                  {todo.title}
                </p>
              </div>

              {/* Status Card */}
              <div className="bg-gradient-to-br from-emerald-50 to-slate-50 rounded-xl p-6 border border-emerald-200 md:col-span-2">
                <p className="text-slate-600 text-sm font-semibold mb-3">Status</p>
                <div className="flex items-center gap-3">
                  {todo.done ? (
                    <>
                      <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center text-white">✓</div>
                      <span className="text-lg font-bold text-emerald-700">Completed</span>
                    </>
                  ) : (
                    <>
                      <div className="w-8 h-8 border-2 border-amber-500 rounded-full"></div>
                      <span className="text-lg font-bold text-amber-700">Pending</span>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="pt-8 border-t border-slate-200">
              <Link
                href="/todos"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                ← Return to List
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

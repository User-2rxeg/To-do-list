import Link from "next/link";
import { fetchTodos } from "@/lib/api";

interface Todo {
  _id?: string;
  id?: number;
  title: string;
  done: boolean;
}

async function getTodos(): Promise<Todo[]> {
  try {
    const todos = await fetchTodos();
    return Array.isArray(todos) ? todos : [];
  } catch (error) {
    console.error("Error fetching todos:", error);
    return [];
  }
}

export default async function TodosPage() {
  const todos = await getTodos();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-10">
            <h1 className="text-4xl font-bold text-slate-900 mb-3">My Todos</h1>
            <p className="text-slate-600">Manage your daily tasks efficiently</p>
          </div>

          {todos.length === 0 ? (
            <div className="bg-white rounded-2xl p-12 text-center border border-slate-200 shadow-sm">
              <div className="text-6xl mb-4">📭</div>
              <h2 className="text-2xl font-bold text-slate-900 mb-2">No Todos Found</h2>
              <p className="text-slate-600 mb-6">
                Make sure the backend is running at http://localhost:3000
              </p>
              <Link
                href="/"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                ← Return to Home
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="flex items-center justify-between mb-6">
                <p className="text-slate-600 font-medium">
                  <span className="text-2xl font-bold text-slate-900">{todos.length}</span> tasks total
                </p>
                <p className="text-slate-600 font-medium">
                  <span className="text-emerald-600 font-bold">{todos.filter(t => t.done).length}</span> completed
                </p>
              </div>

              {todos.map((todo) => (
                <Link key={todo._id || todo.id} href={`/todos/${todo._id || todo.id}`} className="block group">
                  <div className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-blue-300 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-start gap-4 flex-1">
                        {/* Status Indicator */}
                        <div className="flex-shrink-0 mt-1">
                          {todo.done ? (
                            <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center">
                              <span className="text-emerald-600">✓</span>
                            </div>
                          ) : (
                            <div className="w-6 h-6 border-2 border-slate-300 rounded-full group-hover:border-blue-500 transition-colors"></div>
                          )}
                        </div>

                        {/* Content */}
                        <div className="flex-1 min-w-0">
                          <h3 className={`text-lg font-semibold group-hover:text-blue-600 transition-colors break-words ${
                            todo.done ? 'line-through text-slate-400' : 'text-slate-900'
                          }`}>
                            {todo.title}
                          </h3>
                        </div>
                      </div>

                      {/* Status Badge */}
                      <div className="flex-shrink-0">
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold whitespace-nowrap ${
                          todo.done 
                            ? 'bg-emerald-100 text-emerald-700' 
                            : 'bg-amber-100 text-amber-700'
                        }`}>
                          {todo.done ? '✓ Done' : '⏳ Pending'}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

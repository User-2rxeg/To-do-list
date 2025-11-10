import Link from "next/link";

interface PageProps {
  params: Promise<{
    projectId: string;
    todoId: string;
  }>;
}

export default async function NestedDynamicPage({ params }: PageProps) {
  const { projectId, todoId } = await params;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          {/* Back Button */}
          <Link
            href="/"
            className="inline-flex items-center px-4 py-2 rounded-lg text-blue-600 hover:bg-blue-50 transition-colors font-medium mb-8 group"
          >
            <span className="group-hover:-translate-x-1 transition-transform">←</span>
            <span className="ml-2">Back to Home</span>
          </Link>

          {/* Main Card */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 mb-8">
            <div className="mb-8">
              <h1 className="text-4xl font-bold text-slate-900 mb-2">Nested Dynamic Route Demo</h1>
              <p className="text-slate-600">Multiple dynamic parameters in a single route</p>
            </div>

            <div className="prose prose-sm max-w-none text-slate-600 mb-8 pb-8 border-b border-slate-200">
              <p>
                This page demonstrates advanced Next.js routing with nested dynamic segments.
                The URL contains multiple dynamic parameters that are extracted from the route path.
              </p>
            </div>

            {/* URL Parameters Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Project ID Card */}
              <div className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-2xl p-6 border-2 border-blue-200">
                <p className="text-slate-600 text-sm font-semibold uppercase mb-3">Project ID</p>
                <div className="space-y-2">
                  <p className="text-3xl font-bold text-blue-600">{projectId}</p>
                  <p className="text-slate-500 text-xs">Dynamic parameter: [projectId]</p>
                </div>
              </div>

              {/* Todo ID Card */}
              <div className="bg-gradient-to-br from-emerald-50 to-slate-50 rounded-2xl p-6 border-2 border-emerald-200">
                <p className="text-slate-600 text-sm font-semibold uppercase mb-3">Todo ID</p>
                <div className="space-y-2">
                  <p className="text-3xl font-bold text-emerald-600">{todoId}</p>
                  <p className="text-slate-500 text-xs">Dynamic parameter: [todoId]</p>
                </div>
              </div>
            </div>

            {/* Route Structure */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 mb-8">
              <h3 className="text-lg font-bold text-slate-900 mb-4">Route Structure</h3>
              <div className="space-y-3">
                <div className="bg-white rounded-lg p-4 border border-slate-200">
                  <p className="text-xs font-semibold text-slate-500 uppercase mb-1">Route Pattern</p>
                  <code className="text-sm font-mono text-blue-600">/projects/[projectId]/todos/[todoId]</code>
                </div>
                <div className="bg-white rounded-lg p-4 border border-slate-200">
                  <p className="text-xs font-semibold text-slate-500 uppercase mb-1">Current URL</p>
                  <code className="text-sm font-mono text-slate-900">/projects/{projectId}/todos/{todoId}</code>
                </div>
                <div className="bg-white rounded-lg p-4 border border-slate-200">
                  <p className="text-xs font-semibold text-slate-500 uppercase mb-1">File Location</p>
                  <code className="text-sm font-mono text-slate-600">app/projects/[projectId]/todos/[todoId]/page.tsx</code>
                </div>
              </div>
            </div>

            {/* Info Box */}
            <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200">
              <h4 className="font-bold text-blue-900 mb-3">📚 How This Works</h4>
              <ul className="space-y-2 text-blue-800 text-sm">
                <li className="flex gap-2">
                  <span>✓</span>
                  <span><strong>Dynamic Segments:</strong> Folders with [brackets] capture URL parameters</span>
                </li>
                <li className="flex gap-2">
                  <span>✓</span>
                  <span><strong>Nested Structure:</strong> Multiple levels of dynamic segments work together</span>
                </li>
                <li className="flex gap-2">
                  <span>✓</span>
                  <span><strong>Type-Safe:</strong> Parameters are available via the params prop</span>
                </li>
                <li className="flex gap-2">
                  <span>✓</span>
                  <span><strong>Scalable:</strong> Works with any depth of nesting</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Try Other Routes */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
            <h3 className="text-lg font-bold text-slate-900 mb-4">Try Other Combinations</h3>
            <div className="space-y-3">
              <Link
                href="/projects/beta/todos/1"
                className="flex items-center p-4 bg-slate-50 hover:bg-slate-100 rounded-lg border border-slate-200 transition-colors group"
              >
                <span className="text-2xl mr-3">🔗</span>
                <div>
                  <p className="font-semibold text-slate-900 group-hover:text-blue-600">/projects/beta/todos/1</p>
                  <p className="text-sm text-slate-600">projectId: beta, todoId: 1</p>
                </div>
              </Link>
              <Link
                href="/projects/gamma/todos/99"
                className="flex items-center p-4 bg-slate-50 hover:bg-slate-100 rounded-lg border border-slate-200 transition-colors group"
              >
                <span className="text-2xl mr-3">🔗</span>
                <div>
                  <p className="font-semibold text-slate-900 group-hover:text-blue-600">/projects/gamma/todos/99</p>
                  <p className="text-sm text-slate-600">projectId: gamma, todoId: 99</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

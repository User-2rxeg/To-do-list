import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Link
            href="/"
            className="inline-flex items-center px-4 py-2 rounded-lg text-blue-600 hover:bg-blue-50 transition-colors font-medium mb-8 group"
          >
            <span className="group-hover:-translate-x-1 transition-transform">←</span>
            <span className="ml-2">Back to Home</span>
          </Link>

          {/* Header */}
          <div className="mb-12">
            <div className="inline-block bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              About This Project
            </div>
            <h1 className="text-5xl font-bold text-slate-900 mb-4">Next.js Routing Practice</h1>
            <p className="text-xl text-slate-600">
              A comprehensive demonstration of modern Next.js App Router features and patterns
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Project Info */}
            <div className="md:col-span-2 space-y-8">
              {/* Overview Card */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Project Overview</h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  This project is a practice assignment from German International University, Faculty of Informatics and Computer Science.
                  It demonstrates all key routing concepts in Next.js 15+ with the App Router.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  The application is built with modern web technologies including React 19, Next.js 16, TypeScript, and Tailwind CSS.
                  It showcases professional UI/UX patterns and best practices for frontend development.
                </p>
              </div>

              {/* Features Card */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Routing Features Demonstrated</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { icon: '📄', title: 'Basic Routes', desc: 'Simple page routing at root and nested levels' },
                    { icon: '🔗', title: 'Nested Routes', desc: 'Organized routes using folder structure' },
                    { icon: '⚙️', title: 'Dynamic Routes', desc: 'Route segments with [brackets] parameters' },
                    { icon: '🔀', title: 'Nested Dynamic Routes', desc: 'Multiple dynamic parameters in one route' },
                    { icon: '📦', title: 'Route Groups', desc: 'Organization without affecting URL structure' },
                    { icon: '🎯', title: 'Parallel Routes', desc: 'Multiple components rendered in the same layout' },
                    { icon: '✂️', title: 'Intercepting Routes', desc: 'Handling routes differently based on context' },
                    { icon: '🚀', title: 'Server Components', desc: 'Async data fetching with Server Components' },
                  ].map((feature) => (
                    <div key={feature.title} className="p-4 bg-gradient-to-br from-slate-50 to-slate-100 rounded-lg border border-slate-200">
                      <div className="text-3xl mb-2">{feature.icon}</div>
                      <h3 className="font-semibold text-slate-900 mb-1">{feature.title}</h3>
                      <p className="text-sm text-slate-600">{feature.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Stack */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Technical Stack</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {[
                    { name: 'Next.js', version: '16.0.1' },
                    { name: 'React', version: '19.2.0' },
                    { name: 'TypeScript', version: '5.x' },
                    { name: 'Tailwind CSS', version: '4.x' },
                    { name: 'Node.js', version: '18+' },
                    { name: 'NestJS Backend', version: '11.x' },
                  ].map((tech) => (
                    <div key={tech.name} className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
                      <p className="font-semibold text-slate-900">{tech.name}</p>
                      <p className="text-sm text-slate-600">{tech.version}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Info Box */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 border border-blue-200">
                <h3 className="font-bold text-blue-900 mb-3">ℹ️ Route Groups</h3>
                <p className="text-blue-800 text-sm leading-relaxed">
                  The (marketing) folder is a route group. The parentheses don't appear in the URL, so /about is accessible at <code className="bg-white px-1 rounded">/about</code> not <code className="bg-white px-1 rounded">/marketing/about</code>.
                </p>
              </div>

              {/* University Info */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
                <h3 className="font-bold text-slate-900 mb-3">🎓 Institution</h3>
                <p className="text-slate-600 text-sm mb-3">
                  <strong>German International University</strong>
                </p>
                <p className="text-slate-600 text-sm">
                  Faculty of Informatics and Computer Science
                </p>
                <p className="text-slate-600 text-sm mt-2">
                  <strong>Course:</strong> Software Project I
                </p>
                <p className="text-slate-600 text-sm">
                  <strong>Semester:</strong> Winter 2025
                </p>
              </div>

              {/* Instructors */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
                <h3 className="font-bold text-slate-900 mb-3">👥 Instructors</h3>
                <ul className="space-y-1 text-slate-600 text-sm">
                  <li>• Dr. Nada Sharaf</li>
                  <li>• Eng. Donia Ali</li>
                  <li>• Eng. Amany Hussein</li>
                  <li>• Eng. Rahma Ameen</li>
                  <li>• Eng. Mohamed Ashraf</li>
                  <li>• Eng. Hassan Osama</li>
                </ul>
              </div>

              {/* Performance */}
              <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl p-6 border border-emerald-200">
                <h3 className="font-bold text-emerald-900 mb-3">⚡ Performance</h3>
                <ul className="space-y-2 text-emerald-800 text-sm">
                  <li className="flex items-center gap-2">
                    <span>✓</span> Static pages prerendered
                  </li>
                  <li className="flex items-center gap-2">
                    <span>✓</span> Dynamic routes cached optimally
                  </li>
                  <li className="flex items-center gap-2">
                    <span>✓</span> Fresh data from backend
                  </li>
                  <li className="flex items-center gap-2">
                    <span>✓</span> Responsive design
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Project Structure */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Project Structure</h2>
            <div className="bg-slate-50 rounded-lg p-6 overflow-x-auto border border-slate-200">
              <pre className="text-xs font-mono text-slate-700 leading-relaxed"><code>{`app/
├── layout.tsx                    # Root layout with navigation
├── page.tsx                       # Home page (/)
├── globals.css                    # Global styles
│
├── (dashboard)/                   # Route group for dashboard
│   ├── layout.tsx                # Dashboard layout with parallel slots
│   └── todos/
│       ├── page.tsx              # Todos list (/todos)
│       └── @modal/               # Parallel route slot
│           ├── default.tsx       # Default modal content
│           └── (..)todos/
│               └── [id]/
│                   └── page.tsx  # Intercepting route
│
├── todos/
│   └── [id]/
│       └── page.tsx              # Todo detail (/todos/[id])
│
├── projects/
│   └── [projectId]/
│       └── todos/
│           └── [todoId]/
│               └── page.tsx      # Nested dynamic route
│
└── (marketing)/                   # Route group for marketing
    └── about/
        └── page.tsx              # About page (/about)`}</code></pre>
            </div>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link
              href="/todos"
              className="group relative bg-white rounded-2xl p-6 shadow-sm border border-slate-200 hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10 flex items-center gap-4">
                <span className="text-3xl">📝</span>
                <div>
                  <h3 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors">View Todos</h3>
                  <p className="text-sm text-slate-600">See the app in action</p>
                </div>
              </div>
            </Link>

            <Link
              href="/"
              className="group relative bg-white rounded-2xl p-6 shadow-sm border border-slate-200 hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10 flex items-center gap-4">
                <span className="text-3xl">🏠</span>
                <div>
                  <h3 className="font-bold text-slate-900 group-hover:text-purple-600 transition-colors">Back to Home</h3>
                  <p className="text-sm text-slate-600">Return to main page</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

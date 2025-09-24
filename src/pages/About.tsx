import SectionHeading from "@components/SectionHeading.tsx";

const About = () => {
  return (
    <>
      <SectionHeading pageName="About" />
      <div className="max-w-4xl mx-auto p-6 space-y-8">
        <section className="bg-white rounded-lg p-6 border border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Widget Dashboard
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            A full-stack dashboard application built as part of the Technical
            Assessment. The application demonstrates modern web development
            practices with a Node.js backend and React frontend, featuring a
            grid-based widget system that supports three widget types: line
            charts, bar charts, and editable text widgets.
          </p>
          <div className="bg-blue-50 rounded-lg p-4 mb-4">
            <h3 className="text-lg font-medium text-blue-900 mb-2">
              Key Features
            </h3>
            <ul className="space-y-1 text-blue-800 text-sm">
              <li>
                • Grid-based dashboard with 3 widgets per row (unlimited rows)
              </li>
              <li>• Three widget types: Line Chart, Bar Chart, and Text</li>
              <li>• Randomized data for charts, editable text widget</li>
              <li>• Persistent widget data and positions after page refresh</li>
              <li>• Full CRUD operations with proper error handling</li>
              <li>• Loading and error states for each widget</li>
            </ul>
          </div>
          <p className="text-gray-700 leading-relaxed">
            The application follows modern TypeScript development practices,
            implements proper state management, and provides a responsive user
            interface with comprehensive error handling and data persistence.
          </p>
        </section>

        <section className="bg-white rounded-lg p-6 border border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Frontend Architecture
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Core Technologies
              </h3>
              <ul className="space-y-1 text-gray-700">
                <li>
                  <strong>React 19.1.1:</strong> Modern UI framework with latest
                  features
                </li>
                <li>
                  <strong>TypeScript 5.8.3:</strong> Type-safe development
                </li>
                <li>
                  <strong>Vite 7.1.2:</strong> Fast build tool and development
                  server
                </li>
                <li>
                  <strong>React Router DOM 7.9.1:</strong> Client-side routing
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                UI & Styling
              </h3>
              <ul className="space-y-1 text-gray-700">
                <li>
                  <strong>Tailwind CSS 4.1.13:</strong> Utility-first CSS
                  framework
                </li>
                <li>
                  <strong>Headless UI 2.2.8:</strong> Accessible UI components
                </li>
                <li>
                  <strong>Heroicons 2.2.0:</strong> Beautiful SVG icons
                </li>
                <li>
                  <strong>Recharts 3.2.1:</strong> Data visualization charts
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                State Management
              </h3>
              <ul className="space-y-1 text-gray-700">
                <li>
                  <strong>TanStack React Query 5.90.2:</strong> Server state
                  management
                </li>
                <li>
                  <strong>React Hook Form 7.63.0:</strong> Form state management
                </li>
                <li>
                  <strong>Axios 1.12.2:</strong> HTTP client for API calls
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Development Tools
              </h3>
              <ul className="space-y-1 text-gray-700">
                <li>
                  <strong>ESLint 9.33.0:</strong> Code linting and quality
                </li>
                <li>
                  <strong>Prettier 3.6.2:</strong> Code formatting
                </li>
                <li>
                  <strong>TypeScript ESLint:</strong> TypeScript-specific
                  linting
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg p-6 border border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Backend Architecture
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Core Technologies
              </h3>
              <ul className="space-y-1 text-gray-700">
                <li>
                  <strong>Fastify 5.6.0:</strong> High-performance web framework
                </li>
                <li>
                  <strong>TypeScript 5.9.2:</strong> Type-safe backend
                  development
                </li>
                <li>
                  <strong>Node.js 23:</strong> Runtime environment
                </li>
                <li>
                  <strong>TSX 4.20.5:</strong> TypeScript execution engine
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                API & Validation
              </h3>
              <ul className="space-y-1 text-gray-700">
                <li>
                  <strong>@sinclair/typebox 0.34.41:</strong> JSON schema
                  validation
                </li>
                <li>
                  <strong>@fastify/cors 11.1.0:</strong> Cross-origin resource
                  sharing
                </li>
                <li>
                  <strong>Fastify Plugin 5.0.1:</strong> Plugin architecture
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Data Storage & Features
              </h3>
              <ul className="space-y-1 text-gray-700">
                <li>SQLite/JSON file storage for widget persistence</li>
                <li>RESTful API endpoints for widget management</li>
                <li>Input validation with proper error codes</li>
                <li>Widget position and data restoration</li>
                <li>CORS support for frontend integration</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Server Configuration
              </h3>
              <ul className="space-y-1 text-gray-700">
                <li>
                  <strong>Port:</strong> 8080
                </li>
                <li>
                  <strong>API Base:</strong> /widgets
                </li>
                <li>
                  <strong>CORS:</strong> Enabled for all origins
                </li>
                <li>
                  <strong>Methods:</strong> GET, POST, PUT, DELETE, OPTIONS
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;

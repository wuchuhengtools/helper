import React from 'react';
import { ResizableWrapper, type ResizableWrapperProps } from '@wuchuheng/helper';

/**
 * Example 1: Basic Usage
 * Simple resizable container with default settings
 */
export function BasicExample() {
  return (
    <ResizableWrapper>
      <div className="p-4 bg-gray-100">
        <h3 className="text-lg font-semibold mb-2">Basic Resizable Container</h3>
        <p>This container can be resized by dragging the right edge.</p>
        <p>Default width constraints: 200px - 500px</p>
      </div>
    </ResizableWrapper>
  );
}

/**
 * Example 2: Custom Configuration
 * Resizable container with custom width constraints and styling
 */
export function CustomConfigExample() {
  return (
    <ResizableWrapper
      minWidth={150}
      maxWidth={800}
      initialWidth={350}
      className="border-2 border-blue-300 rounded-lg shadow-lg"
    >
      <div className="p-6 bg-white">
        <h3 className="text-xl font-bold text-blue-800 mb-3">Custom Resizable Panel</h3>
        <p className="text-gray-600 mb-4">
          This panel has custom width constraints (150px - 800px) and starts at 350px wide.
        </p>
        <div className="space-y-2">
          <div className="bg-blue-50 p-3 rounded">
            <strong>Min Width:</strong> 150px
          </div>
          <div className="bg-blue-50 p-3 rounded">
            <strong>Max Width:</strong> 800px
          </div>
          <div className="bg-blue-50 p-3 rounded">
            <strong>Initial Width:</strong> 350px
          </div>
        </div>
      </div>
    </ResizableWrapper>
  );
}

/**
 * Example 3: Sidebar Layout
 * Practical example showing a sidebar that can be resized
 */
export function SidebarExample() {
  return (
    <div className="flex h-96 border border-gray-300 rounded-lg overflow-hidden">
      <ResizableWrapper
        minWidth={200}
        maxWidth={500}
        initialWidth={280}
        className="bg-gray-800 text-white"
      >
        <div className="p-4 h-full overflow-y-auto">
          <h3 className="text-lg font-semibold mb-4">Navigation</h3>
          <nav className="space-y-2">
            <a href="#" className="block py-2 px-3 rounded hover:bg-gray-700 transition-colors">
              🏠 Dashboard
            </a>
            <a href="#" className="block py-2 px-3 rounded hover:bg-gray-700 transition-colors">
              📊 Analytics
            </a>
            <a href="#" className="block py-2 px-3 rounded hover:bg-gray-700 transition-colors">
              👥 Users
            </a>
            <a href="#" className="block py-2 px-3 rounded hover:bg-gray-700 transition-colors">
              ⚙️ Settings
            </a>
          </nav>
          
          <div className="mt-8">
            <h4 className="font-medium mb-2">Quick Stats</h4>
            <div className="space-y-2 text-sm">
              <div className="bg-gray-700 p-2 rounded">Users: 1,234</div>
              <div className="bg-gray-700 p-2 rounded">Orders: 567</div>
              <div className="bg-gray-700 p-2 rounded">Revenue: $12,345</div>
            </div>
          </div>
        </div>
      </ResizableWrapper>
      
      <main className="flex-1 p-6 bg-white">
        <h2 className="text-2xl font-bold mb-4">Main Content Area</h2>
        <p className="text-gray-600 mb-4">
          This is the main content area that automatically adjusts its width as the sidebar is resized.
        </p>
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Dynamic Content</h3>
          <p>
            Try resizing the sidebar by dragging its right edge. This content area will automatically 
            adjust to fill the remaining space.
          </p>
        </div>
      </main>
    </div>
  );
}

/**
 * Example 4: Code Editor Layout
 * Shows how to create a code editor-like interface with resizable panels
 */
export function CodeEditorExample() {
  return (
    <div className="h-96 bg-gray-900 text-white font-mono text-sm rounded-lg overflow-hidden">
      <div className="flex h-full">
        {/* File Explorer */}
        <ResizableWrapper
          minWidth={180}
          maxWidth={400}
          initialWidth={250}
          className="bg-gray-800 border-r border-gray-700"
        >
          <div className="p-3 h-full overflow-y-auto">
            <h3 className="text-xs uppercase tracking-wide text-gray-400 mb-3">Explorer</h3>
            <div className="space-y-1">
              <div className="flex items-center space-x-2 py-1 hover:bg-gray-700 rounded cursor-pointer">
                <span>📁</span>
                <span>src/</span>
              </div>
              <div className="flex items-center space-x-2 py-1 pl-4 hover:bg-gray-700 rounded cursor-pointer">
                <span>📄</span>
                <span>App.tsx</span>
              </div>
              <div className="flex items-center space-x-2 py-1 pl-4 hover:bg-gray-700 rounded cursor-pointer bg-gray-700">
                <span>📄</span>
                <span>index.ts</span>
              </div>
              <div className="flex items-center space-x-2 py-1 pl-4 hover:bg-gray-700 rounded cursor-pointer">
                <span>📄</span>
                <span>utils.ts</span>
              </div>
              <div className="flex items-center space-x-2 py-1 hover:bg-gray-700 rounded cursor-pointer">
                <span>📁</span>
                <span>components/</span>
              </div>
            </div>
          </div>
        </ResizableWrapper>
        
        {/* Code Editor */}
        <div className="flex-1 flex flex-col">
          <div className="bg-gray-800 px-4 py-2 border-b border-gray-700">
            <span className="text-gray-300">index.ts</span>
          </div>
          <div className="flex-1 p-4 bg-gray-900 overflow-auto">
            <pre className="text-green-400">
{`import React from 'react';
import { ResizableWrapper } from '@wuchuheng/helper';

export function App() {
  return (
    <ResizableWrapper
      minWidth={200}
      maxWidth={600}
      initialWidth={350}
    >
      <div className="p-4">
        <h1>Hello World!</h1>
      </div>
    </ResizableWrapper>
  );
}`}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Example 5: Settings Panel
 * Shows a practical settings panel implementation
 */
export function SettingsPanelExample() {
  return (
    <div className="flex h-96 bg-gray-100 rounded-lg overflow-hidden">
      <main className="flex-1 p-6">
        <h2 className="text-2xl font-bold mb-4">Application Settings</h2>
        <p className="text-gray-600">
          Configure your application preferences using the settings panel on the right.
        </p>
      </main>
      
      <ResizableWrapper
        minWidth={250}
        maxWidth={450}
        initialWidth={320}
        className="bg-white border-l border-gray-200"
      >
        <div className="p-6 h-full overflow-y-auto">
          <h3 className="text-lg font-semibold mb-4">Settings</h3>
          
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Theme
              </label>
              <select className="w-full p-2 border border-gray-300 rounded-md">
                <option>Light</option>
                <option>Dark</option>
                <option>Auto</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Language
              </label>
              <select className="w-full p-2 border border-gray-300 rounded-md">
                <option>English</option>
                <option>Spanish</option>
                <option>French</option>
                <option>German</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Notifications
              </label>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" defaultChecked />
                  Email notifications
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Push notifications
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" defaultChecked />
                  SMS notifications
                </label>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Auto-save interval (minutes)
              </label>
              <input 
                type="number" 
                className="w-full p-2 border border-gray-300 rounded-md" 
                defaultValue={5}
                min={1}
                max={60}
              />
            </div>
            
            <div className="pt-4 border-t border-gray-200">
              <button 
                type="submit" 
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
              >
                Save Settings
              </button>
            </div>
          </form>
        </div>
      </ResizableWrapper>
    </div>
  );
}

/**
 * Example 6: Multi-level Resizable Layout
 * Complex example with multiple resizable panels
 */
export function MultiLevelExample() {
  return (
    <div className="h-96 border border-gray-300 rounded-lg overflow-hidden">
      <div className="flex h-full">
        {/* Left Sidebar */}
        <ResizableWrapper
          minWidth={150}
          maxWidth={300}
          initialWidth={200}
          className="bg-blue-50 border-r border-gray-300"
        >
          <div className="p-4">
            <h3 className="font-semibold mb-3">Left Panel</h3>
            <p className="text-sm text-gray-600">
              This is the left sidebar with a resize handle on the right.
            </p>
          </div>
        </ResizableWrapper>
        
        {/* Main Content with Right Sidebar */}
        <div className="flex-1 flex">
          <main className="flex-1 p-6 bg-white">
            <h2 className="text-xl font-bold mb-3">Main Content</h2>
            <p className="text-gray-600">
              This is the main content area that adapts to both sidebars being resized.
            </p>
          </main>
          
          {/* Right Sidebar */}
          <ResizableWrapper
            minWidth={180}
            maxWidth={350}
            initialWidth={250}
            className="bg-green-50 border-l border-gray-300"
          >
            <div className="p-4">
              <h3 className="font-semibold mb-3">Right Panel</h3>
              <p className="text-sm text-gray-600">
                This is the right sidebar with a resize handle on the left.
              </p>
            </div>
          </ResizableWrapper>
        </div>
      </div>
    </div>
  );
}

/**
 * Main demo component that showcases all examples
 */
export function ResizableWrapperExamples() {
  return (
    <div className="max-w-7xl mx-auto p-6 space-y-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">ResizableWrapper Examples</h1>
        <p className="text-gray-600">
          Interactive examples showing different ways to use the ResizableWrapper component
        </p>
      </div>

      <section>
        <h2 className="text-2xl font-semibold mb-4">1. Basic Usage</h2>
        <BasicExample />
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">2. Custom Configuration</h2>
        <CustomConfigExample />
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">3. Sidebar Layout</h2>
        <SidebarExample />
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">4. Code Editor Interface</h2>
        <CodeEditorExample />
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">5. Settings Panel</h2>
        <SettingsPanelExample />
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">6. Multi-level Layout</h2>
        <MultiLevelExample />
      </section>
    </div>
  );
}

export default ResizableWrapperExamples;

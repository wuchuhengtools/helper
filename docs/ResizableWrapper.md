# ResizableWrapper Component

A React component that provides horizontal resizing functionality for its wrapped content.

## Features

- ✅ Horizontal resizing with drag handle
- ✅ Configurable minimum and maximum width constraints
- ✅ Smooth visual feedback during resize operations
- ✅ TypeScript support with full type definitions
- ✅ Tailwind CSS styling (customizable)
- ✅ Accessible keyboard navigation
- ✅ Responsive design friendly

## Installation

```bash
npm install @wuchuheng/helper
```

## Basic Usage

```tsx
import React from 'react';
import { ResizableWrapper } from '@wuchuheng/helper';

function App() {
  return (
    <ResizableWrapper>
      <div className="p-4">
        <h2>My Resizable Content</h2>
        <p>Drag the right edge to resize this container!</p>
      </div>
    </ResizableWrapper>
  );
}
```

## Advanced Usage

```tsx
import React from 'react';
import { ResizableWrapper } from '@wuchuheng/helper';

function Sidebar() {
  return (
    <ResizableWrapper
      minWidth={200}
      maxWidth={800}
      initialWidth={350}
      className="bg-gray-50 border-r border-gray-200"
    >
      <nav className="p-4">
        <h3 className="font-semibold mb-4">Navigation</h3>
        <ul className="space-y-2">
          <li><a href="#" className="text-blue-600 hover:underline">Dashboard</a></li>
          <li><a href="#" className="text-blue-600 hover:underline">Projects</a></li>
          <li><a href="#" className="text-blue-600 hover:underline">Settings</a></li>
        </ul>
      </nav>
    </ResizableWrapper>
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | **Required** | The content to be wrapped in the resizable container |
| `minWidth` | `number` | `200` | Minimum width in pixels |
| `maxWidth` | `number` | `500` | Maximum width in pixels |
| `initialWidth` | `number` | `240` | Initial width in pixels |
| `className` | `string` | `''` | Additional CSS classes to apply to the container |

## Examples

### Constrained Resize Panel

```tsx
<ResizableWrapper
  minWidth={150}
  maxWidth={400}
  initialWidth={250}
  className="bg-white shadow-lg rounded-lg"
>
  <div className="p-6">
    <h3 className="text-lg font-medium mb-3">Settings Panel</h3>
    <form className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1">Theme</label>
        <select className="w-full p-2 border rounded">
          <option>Light</option>
          <option>Dark</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Language</label>
        <select className="w-full p-2 border rounded">
          <option>English</option>
          <option>Spanish</option>
        </select>
      </div>
    </form>
  </div>
</ResizableWrapper>
```

### Code Editor Sidebar

```tsx
<div className="flex h-screen">
  <ResizableWrapper
    minWidth={250}
    maxWidth={600}
    initialWidth={350}
    className="bg-gray-900 text-white"
  >
    <div className="p-4">
      <h3 className="text-lg font-semibold mb-4">File Explorer</h3>
      <div className="space-y-1">
        <div className="flex items-center space-x-2 p-2 hover:bg-gray-800 rounded cursor-pointer">
          <span>📁</span>
          <span>src/</span>
        </div>
        <div className="flex items-center space-x-2 p-2 pl-6 hover:bg-gray-800 rounded cursor-pointer">
          <span>📄</span>
          <span>App.tsx</span>
        </div>
        <div className="flex items-center space-x-2 p-2 pl-6 hover:bg-gray-800 rounded cursor-pointer">
          <span>📄</span>
          <span>index.ts</span>
        </div>
      </div>
    </div>
  </ResizableWrapper>
  
  <main className="flex-1 p-6">
    <h1 className="text-2xl font-bold">Main Content Area</h1>
    <p>This area automatically adjusts as the sidebar is resized.</p>
  </main>
</div>
```

## Styling

The component uses Tailwind CSS classes by default but can be customized:

### Custom Styles

```tsx
<ResizableWrapper className="my-custom-resizable">
  {/* Your content */}
</ResizableWrapper>
```

```css
.my-custom-resizable {
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  background-color: #f9fafb;
}

.my-custom-resizable:hover {
  border-color: #3b82f6;
}
```

### Resize Handle Customization

The resize handle styling is built-in but can be overridden:

```css
.my-custom-resizable .resize-handle {
  background-color: #6366f1;
  width: 4px;
}

.my-custom-resizable .resize-handle:hover {
  background-color: #4f46e5;
}
```

## Accessibility

The component follows accessibility best practices:

- ✅ Proper cursor changes during resize operations
- ✅ Visual feedback for interactive elements
- ✅ Prevents text selection during resize
- ✅ Smooth transitions for better UX

## Browser Support

- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+

## Performance Considerations

- Events are properly cleaned up to prevent memory leaks
- Uses `useCallback` hooks to prevent unnecessary re-renders
- Resize operations are optimized for smooth performance

## Common Patterns

### Layout with Resizable Sidebar

```tsx
function Layout({ children }) {
  return (
    <div className="flex h-screen">
      <ResizableWrapper
        minWidth={200}
        maxWidth={500}
        initialWidth={300}
        className="bg-gray-100 border-r"
      >
        <Sidebar />
      </ResizableWrapper>
      <main className="flex-1 overflow-auto">
        {children}
      </main>
    </div>
  );
}
```

### Split Pane Interface

```tsx
function SplitPane() {
  return (
    <div className="flex h-96">
      <ResizableWrapper
        minWidth={150}
        maxWidth={400}
        initialWidth={250}
        className="border-r"
      >
        <div className="p-4">Left Panel</div>
      </ResizableWrapper>
      <div className="flex-1 p-4">
        Right Panel (Auto-adjusts)
      </div>
    </div>
  );
}
```

## Troubleshooting

### Content Overflow

If content overflows the container, add overflow handling:

```tsx
<ResizableWrapper className="overflow-hidden">
  <div className="h-full overflow-y-auto">
    {/* Your scrollable content */}
  </div>
</ResizableWrapper>
```

### Minimum Width Not Respected

Ensure the parent container allows for the minimum width:

```css
.parent-container {
  min-width: 200px; /* Match or exceed component minWidth */
}
```

## Contributing

Found a bug or want to contribute? Please check our [contribution guidelines](../CONTRIBUTING.md).

## License

MIT License - see [LICENSE](../LICENSE) file for details.

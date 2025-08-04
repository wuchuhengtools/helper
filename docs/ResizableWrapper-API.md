# ResizableWrapper API Documentation

## Overview

The `ResizableWrapper` component provides a horizontal resizing interface for React applications. It wraps content in a container that can be resized by dragging a handle on the right edge.

## Import

```tsx
import { ResizableWrapper, type ResizableWrapperProps } from '@wuchuheng/helper';
```

## Component Signature

```tsx
export const ResizableWrapper: React.FC<ResizableWrapperProps>
```

## Props Interface

```tsx
interface ResizableWrapperProps {
  children: ReactNode;
  minWidth?: number;
  maxWidth?: number;
  initialWidth?: number;
  className?: string;
}
```

### Props Details

#### `children` (required)
- **Type**: `ReactNode`
- **Description**: The content to be wrapped in the resizable container
- **Example**: 
  ```tsx
  <ResizableWrapper>
    <div>Your content here</div>
  </ResizableWrapper>
  ```

#### `minWidth` (optional)
- **Type**: `number`
- **Default**: `200`
- **Description**: Minimum width constraint in pixels
- **Example**: 
  ```tsx
  <ResizableWrapper minWidth={150}>
    {/* Content */}
  </ResizableWrapper>
  ```

#### `maxWidth` (optional)
- **Type**: `number`
- **Default**: `500`
- **Description**: Maximum width constraint in pixels
- **Example**: 
  ```tsx
  <ResizableWrapper maxWidth={800}>
    {/* Content */}
  </ResizableWrapper>
  ```

#### `initialWidth` (optional)
- **Type**: `number`
- **Default**: `240`
- **Description**: Starting width in pixels when component mounts
- **Example**: 
  ```tsx
  <ResizableWrapper initialWidth={350}>
    {/* Content */}
  </ResizableWrapper>
  ```

#### `className` (optional)
- **Type**: `string`
- **Default**: `''`
- **Description**: Additional CSS classes to apply to the container
- **Example**: 
  ```tsx
  <ResizableWrapper className="border border-gray-300 rounded-lg">
    {/* Content */}
  </ResizableWrapper>
  ```

## Behavior

### Resize Interaction
- **Trigger**: Mouse down on the right edge resize handle
- **Visual Feedback**: 
  - Handle shows on hover with subtle background color
  - During resize, handle becomes more prominent
  - Smooth color transitions for better UX
- **Constraints**: Width is always constrained between `minWidth` and `maxWidth`

### Event Handling
- **Mouse Events**: Handled globally during resize to ensure smooth operation
- **Cleanup**: All event listeners are properly removed when resize ends
- **Performance**: Uses `useCallback` hooks to prevent unnecessary re-renders

### State Management
- **Internal State**: 
  - `isResizing`: Boolean tracking resize state
  - `width`: Current width value
  - `startX`: Mouse position when resize started
  - `startWidth`: Width when resize started

## Styling

### Default Styles
The component uses Tailwind CSS classes for default styling:

```css
.container {
  position: relative;
  width: {current-width}px;
}

.resize-handle {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 4px;
  cursor: col-resize;
  transition: colors 150ms;
}

.resize-handle:hover {
  background-color: rgb(59 130 246 / 0.5); /* blue-500 with 50% opacity */
}

.resize-handle.active {
  background-color: rgb(59 130 246 / 0.7); /* blue-500 with 70% opacity */
}
```

### Custom Styling
You can override styles using the `className` prop:

```tsx
<ResizableWrapper className="my-custom-resizable">
  {/* Content */}
</ResizableWrapper>
```

```css
.my-custom-resizable {
  background: #f9fafb;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
}

.my-custom-resizable .resize-handle {
  background-color: #6366f1;
  width: 6px;
}
```

## Usage Patterns

### Basic Usage
```tsx
function SimpleExample() {
  return (
    <ResizableWrapper>
      <div className="p-4">
        <h2>Resizable Content</h2>
        <p>Drag the right edge to resize!</p>
      </div>
    </ResizableWrapper>
  );
}
```

### Configured Usage
```tsx
function ConfiguredExample() {
  return (
    <ResizableWrapper
      minWidth={200}
      maxWidth={600}
      initialWidth={350}
      className="border border-gray-300 bg-white rounded-lg"
    >
      <div className="p-6">
        <h2>Custom Resizable Panel</h2>
        <p>This panel has custom constraints and styling.</p>
      </div>
    </ResizableWrapper>
  );
}
```

### Layout Integration
```tsx
function SidebarLayout() {
  return (
    <div className="flex h-screen">
      <ResizableWrapper
        minWidth={250}
        maxWidth={500}
        initialWidth={320}
        className="bg-gray-100 border-r"
      >
        <Sidebar />
      </ResizableWrapper>
      <main className="flex-1 p-6">
        <MainContent />
      </main>
    </div>
  );
}
```

## Performance Considerations

### Optimizations
- **Event Handlers**: Memoized with `useCallback` to prevent re-renders
- **State Updates**: Batched during resize operations
- **DOM Manipulation**: Minimal - only width changes are applied
- **Memory Management**: Event listeners are properly cleaned up

### Best Practices
- Use reasonable `minWidth` and `maxWidth` values
- Avoid excessive re-renders in child components
- Consider using `React.memo` for complex child components
- Test with various content sizes and types

## Browser Support

| Browser | Version | Support |
|---------|---------|---------|
| Chrome | 60+ | ✅ Full |
| Firefox | 55+ | ✅ Full |
| Safari | 12+ | ✅ Full |
| Edge | 79+ | ✅ Full |

## Accessibility

### Features
- **Visual Feedback**: Clear hover and active states
- **Cursor Changes**: Appropriate cursor changes for resize operations
- **Smooth Transitions**: Gentle color transitions for better UX

### Recommendations
- Ensure sufficient color contrast for the resize handle
- Test with keyboard navigation if extended functionality is needed
- Consider adding ARIA labels if building complex interfaces

## Common Issues & Solutions

### Issue: Content Overflow
**Problem**: Content overflows the resizable container

**Solution**: Add overflow handling to the content wrapper
```tsx
<ResizableWrapper className="overflow-hidden">
  <div className="h-full overflow-y-auto p-4">
    {/* Scrollable content */}
  </div>
</ResizableWrapper>
```

### Issue: Minimum Width Not Respected
**Problem**: Parent container constrains the minimum width

**Solution**: Ensure parent allows for minimum width
```css
.parent-container {
  min-width: 200px; /* Match component minWidth */
}
```

### Issue: Resize Handle Not Visible
**Problem**: Resize handle doesn't appear on hover

**Solution**: Check for conflicting CSS or z-index issues
```css
.resizable-wrapper {
  position: relative;
  z-index: 1;
}
```

### Issue: Performance with Large Content
**Problem**: Resize operations feel sluggish with complex content

**Solution**: Optimize child components and use React.memo
```tsx
const OptimizedContent = React.memo(({ data }) => {
  // Heavy rendering logic
});

<ResizableWrapper>
  <OptimizedContent data={data} />
</ResizableWrapper>
```

## Migration Guide

### From Previous Versions
If migrating from a more feature-rich version, note that this implementation focuses on simplicity:

**Removed Features**:
- `onResize` callbacks
- `disabled` prop
- `ref` forwarding with imperative API
- Custom handle styling props

**Migration Steps**:
1. Remove callback props from existing implementations
2. Replace ref-based width control with state management
3. Use `className` prop for custom styling instead of specific style props

## TypeScript Support

### Type Definitions
```tsx
import { type ResizableWrapperProps } from '@wuchuheng/helper';

// Props are fully typed
const props: ResizableWrapperProps = {
  children: <div>Content</div>,
  minWidth: 200,
  maxWidth: 500,
  initialWidth: 300,
  className: 'custom-class'
};
```

### Generic Usage
```tsx
// Component with typed props
interface MyComponentProps {
  title: string;
}

const MyComponent: React.FC<MyComponentProps> = ({ title }) => (
  <ResizableWrapper minWidth={250}>
    <div className="p-4">
      <h2>{title}</h2>
    </div>
  </ResizableWrapper>
);
```

## Related Components

This component pairs well with:
- Layout containers (flexbox/grid)
- Navigation components
- Panel/card components
- Content management interfaces

For more complex resizing needs, consider implementing:
- Vertical resizing
- Corner-based resizing
- Programmatic resize controls
- Resize event callbacks

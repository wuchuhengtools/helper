<h1 align="center"> helper助手库 </h1>

## Installing

```shell
$ npm i @wuchuhengtools/helper
```

For React components, you'll also need React as a peer dependency:
```shell
$ npm i react react-dom
```

## Usage

``` typescript
import {fileToBase64, obj2Query, query2Obj, getHash} from "@wuchuhengtools/helper"

fileToBase64(file).then(bash64 => console.log(bash64)) // image:sdafasfasd....
obj2Query({foo: 1, bar: 2}) // return ?foo=1&bar=2
query2Obj('foo=1&bar=2') // return {bar: 2, foo: 1}
getHash('1234')  // sdfkasjfasdkskskfsadf ...
getHash('1234')  // sdfkasjfasdkskskfsadf ...
copyStringToClipboard(str: string) // coped string

// debounce
const debounceHandler = debounce((data: {hello: string}) => {
    // todo something ...
}, 1000)
debounceHandler({hello: 'Are you OK?'})

// throttling 
const throttlingHandler = throttling(() => {
    // todo something ...
}, 1000)
throttlingHandler()

// React Components
import { ResizableWrapper, ContextMenu, VisibleAreaReporter } from "@wuchuhengtools/helper"

// Basic usage
<ResizableWrapper>
  <div>Your resizable content here</div>
</ResizableWrapper>

// Advanced usage with configuration
<ResizableWrapper 
  minWidth={150} 
  maxWidth={800} 
  initialWidth={300}
  className="my-custom-class"
>
  <div>Your resizable content here</div>
</ResizableWrapper>

// Context Menu usage
<ContextMenu
  itemId={item.id}
  actions={[
    { label: 'Edit', onClick: (id) => editItem(id) },
    { label: 'Delete', onClick: (id) => deleteItem(id) },
    { label: 'Copy', onClick: (id) => copyItem(id) }
  ]}
>
  <div>Right-click me for context menu</div>
</ContextMenu>

// Visible Area Reporter usage
<VisibleAreaReporter
  onChange={(area) => console.log('Visible area:', area)}
>
  <div>This div's visible area will be tracked</div>
</VisibleAreaReporter>
```

## React Components

### ResizableWrapper

A React component that makes its children horizontally resizable with a drag handle on the right edge.

**Props:**
- `children` (ReactNode): The content to make resizable
- `minWidth?` (number): Minimum width in pixels (default: 200)
- `maxWidth?` (number): Maximum width in pixels (default: 500)  
- `initialWidth?` (number): Initial width in pixels (default: 240)
- `className?` (string): Additional CSS classes to apply to the container
- `style?` (React.CSSProperties): Inline styles for the container

**Features:**
- 🖱️ Mouse drag resizing from the right edge
- 📏 Respects min/max width constraints
- 🎨 Visual feedback during resize with smooth transitions
- 🎯 Framework-agnostic styling with inline styles
- ⚡ Optimized performance with React hooks
- 📱 TypeScript support with full type definitions

**Example:**
```tsx
<ResizableWrapper
  minWidth={200}
  maxWidth={600}
  initialWidth={350}
  style={{
    border: '1px solid #ccc',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9'
  }}
>
  <div style={{ padding: '16px' }}>
    <h2>Resizable Sidebar</h2>
    <p>Drag the right edge to resize!</p>
  </div>
</ResizableWrapper>
```

### ContextMenu

A reusable React context menu component that displays a custom menu on right-click. Perfect for adding contextual actions to any element.

**Props:**
- `children` (ReactNode): The React node(s) to wrap with context menu functionality
- `actions` (ContextMenuAction[]): Array of actions to display in the context menu
- `itemId` (number): Unique identifier for the item associated with this context menu
- `onContextMenu?` (function): Optional callback invoked when the context menu is triggered

**ContextMenuAction Type:**
- `label` (string): Display text for the menu item
- `onClick` (function): Callback function that receives the itemId when clicked
- `className?` (string): Optional CSS class for custom styling

**Features:**
- 🖱️ Right-click activation with precise positioning
- 🎯 Click-outside detection for automatic menu closing
- 🎨 Clean, accessible styling with hover effects
- 📱 TypeScript support with full type definitions
- ⚡ Optimized performance with proper event handling
- 🔧 Customizable actions with callback support

**Example:**
```tsx
<ContextMenu
  itemId={user.id}
  actions={[
    { 
      label: 'Edit Profile', 
      onClick: (id) => navigate(`/profile/edit/${id}`) 
    },
    { 
      label: 'View Details', 
      onClick: (id) => openUserModal(id) 
    },
    { 
      label: 'Delete User', 
      onClick: (id) => confirmDelete(id),
      className: 'text-red-600' 
    }
  ]}
  onContextMenu={(e, id) => console.log('Context menu opened for user', id)}
>
  <div className="user-card">
    <h3>{user.name}</h3>
    <p>{user.email}</p>
  </div>
</ContextMenu>
```

### VisibleAreaReporter

A React component that monitors and reports the visible area of its content using ResizeObserver for optimal performance.

**Props:**
- `children?` (ReactNode): Optional content to be rendered inside the reporter
- `onChange?` (function): Optional callback invoked when the visible area changes

**VisibleAreaInput Type:**
- `x` (number): The x-coordinate of the visible area's top-left corner
- `y` (number): The y-coordinate of the visible area's top-left corner  
- `width` (number): The width of the visible area
- `height` (number): The height of the visible area

**Features:**
- 📐 Accurate area calculation using getBoundingClientRect
- 🔄 Real-time monitoring with ResizeObserver API
- ⚡ Optimized performance with minimal re-renders
- 📱 TypeScript support with full type definitions
- 🎯 Framework-agnostic with clean API design
- 🛡️ Robust error handling and retry logic

**Example:**
```tsx
<VisibleAreaReporter
  onChange={(area) => {
    console.log(`Area: ${area.width}x${area.height} at (${area.x}, ${area.y})`);
    // Update layout or trigger animations based on visible area
    updateLayout(area);
  }}
>
  <div style={{ padding: '20px', background: '#f0f0f0' }}>
    <h2>Monitored Content</h2>
    <p>This content's visible area is being tracked in real-time.</p>
    <div style={{ height: '200px', background: '#ddd' }}>
      Resize the window or scroll to see area changes!
    </div>
  </div>
</VisibleAreaReporter>
```
## Contributing

You can contribute in one of three ways:

1. File bug reports using the [issue tracker](https://github.com/wuchuhengtools/helper/issues).
2. Answer questions or fix bugs on the [issue tracker](https://github.com/wuchuhengtools/helper/issues).
3. Contribute new features or update the wiki.

_The code contribution process is not very formal. You just need to make sure that you follow the PSR-0, PSR-1, and PSR-2 coding guidelines. Any new code contributions must be accompanied by unit tests where applicable._

## License

MIT

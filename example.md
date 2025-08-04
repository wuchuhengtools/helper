# Usage Examples

## Installation

```bash
npm install @wuchuhengtools/helper

# For React components, also install React (peer dependency)
npm install react react-dom
```

The library supports both CommonJS and ESM:

```javascript
// CommonJS
const { fileToBase64, ResizableWrapper } = require('@wuchuhengtools/helper');

// ESM
import { fileToBase64, ResizableWrapper } from '@wuchuhengtools/helper';

// TypeScript with full type support
import { 
  ResizableWrapper, 
  type ResizableWrapperProps, 
  type ResizableWrapperHandle,
  type ResizeData 
} from '@wuchuhengtools/helper';
```

## React Component Usage

### Basic Usage

```tsx
import React from 'react';
import { ResizableWrapper } from '@wuchuheng/helper';

function App() {
  return (
    <div className="app">
      <ResizableWrapper>
        <div style={{ padding: '20px', background: '#f0f0f0' }}>
          <h3>Resizable Content</h3>
          <p>This content can be resized by dragging the right edge.</p>
        </div>
      </ResizableWrapper>
    </div>
  );
}

export default App;
```

### Advanced Usage with All Features

```tsx
import React, { useRef, useState } from 'react';
import { ResizableWrapper, type ResizableWrapperHandle } from '@wuchuheng/helper';

function MyComponent() {
  const resizableRef = useRef<ResizableWrapperHandle>(null);
  const [currentWidth, setCurrentWidth] = useState(300);

  const handleResizeStart = (data) => {
    console.log('Resize started:', data);
  };

  const handleResize = (data) => {
    console.log('Resizing to:', data.width);
    setCurrentWidth(data.width);
  };

  const handleResizeEnd = (data) => {
    console.log('Resize ended:', data);
  };

  const setWidthProgrammatically = () => {
    resizableRef.current?.setWidth(400);
  };

  const getCurrentWidth = () => {
    const width = resizableRef.current?.getWidth();
    alert(`Current width: ${width}px`);
  };

  return (
    <div>
      <ResizableWrapper
        ref={resizableRef}
        minWidth={150}
        maxWidth={800}
        initialWidth={300}
        className="my-resizable-container"
        onResizeStart={handleResizeStart}
        onResize={handleResize}
        onResizeEnd={handleResizeEnd}
        handleStyle={{ 
          backgroundColor: '#007bff',
          width: '6px',
          borderRadius: '3px'
        }}
        handleClassName="custom-resize-handle"
      >
        <div className="content">
          <h2>Advanced Resizable Panel</h2>
          <p>Current width: {currentWidth}px</p>
          <ul>
            <li>Min width: 150px</li>
            <li>Max width: 800px</li>
            <li>Use mouse or keyboard arrows to resize</li>
          </ul>
          <div style={{ marginTop: '20px' }}>
            <button onClick={setWidthProgrammatically}>
              Set Width to 400px
            </button>
            <button onClick={getCurrentWidth} style={{ marginLeft: '10px' }}>
              Get Current Width
            </button>
          </div>
        </div>
      </ResizableWrapper>
    </div>
  );
}
```

### Accessibility Example

```tsx
import React from 'react';
import { ResizableWrapper } from '@wuchuheng/helper';

function AccessibleResizablePanel() {
  return (
    <ResizableWrapper
      minWidth={200}
      maxWidth={600}
      initialWidth={350}
      className="accessible-panel"
      handleClassName="resize-handle"
      // The component automatically includes:
      // - role="region" and aria-label="Resizable container" on main container
      // - role="separator" and aria-orientation="vertical" on resize handle
      // - tabIndex={0} for keyboard focus
      // - Keyboard support with Left/Right arrow keys
    >
      <div role="main" aria-labelledby="panel-title">
        <h3 id="panel-title">Accessible Content Panel</h3>
        <p>This panel can be resized using:</p>
        <ul>
          <li>Mouse: Drag the right edge</li>
          <li>Keyboard: Focus the handle and use Left/Right arrows</li>
          <li>Screen readers: Announces as "Resizable container" and "Resize handle"</li>
        </ul>
      </div>
    </ResizableWrapper>
  );
}
```

### Styling

The component uses Tailwind CSS classes by default, but you can override them:

```css
/* Custom styles for the resize handle */
.my-resizable-container .resize-handle {
  background-color: #007bff;
  width: 3px;
}

.my-resizable-container .resize-handle:hover {
  background-color: #0056b3;
}
```

## Utility Functions

```typescript
import { 
  fileToBase64, 
  obj2Query, 
  query2Obj, 
  getHash, 
  copyStringToClipboard,
  debounce,
  throttling 
} from '@wuchuheng/helper';

// File conversion
const handleFileUpload = async (file: File) => {
  const base64 = await fileToBase64(file);
  console.log(base64);
};

// URL query manipulation
const params = { name: 'John', age: 25 };
const queryString = obj2Query(params); // "?name=John&age=25"
const parsedParams = query2Obj('name=John&age=25'); // { name: 'John', age: '25' }

// Hashing
const hash = getHash('password123'); // SHA-256 hash

// Clipboard
copyStringToClipboard('Hello, world!');

// Performance optimization
const debouncedSearch = debounce((query: string) => {
  // Search logic here
}, 300);

const throttledScroll = throttling(() => {
  // Scroll handling logic
}, 100);
```

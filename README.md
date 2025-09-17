<h1 align="center"> helper助手库 </h1>

<p align="center">A comprehensive# @wuchuheng/helper

A modern collection of React components and utilities designed to simplify common UI patterns and interactions.

## 🚀 Quick Start

```bash
npm install @wuchuheng/helper
```

```tsx
import { ResizableWrapper } from '@wuchuheng/helper';

function App() {
  return (
    <ResizableWrapper
      minWidth={200}
      maxWidth={600}
      initialWidth={300}
      borderWidth="4px"
    >
      <div style={{ padding: '20px' }}>
        <h2>Resizable Content</h2>
        <p>Drag the right edge to resize!</p>
      </div>
    </ResizableWrapper>
  );
}
```

## 📚 Documentation

**👉 [Interactive Documentation (Storybook)](https://your-storybook-url.com)** - *Recommended*

For the best experience with live examples, interactive controls, and comprehensive API documentation:

```bash
npm run docs
```

This launches Storybook at `http://localhost:6006` with:
- 🎮 **Live Interactive Examples** - Test components in real-time
- 🔧 **Dynamic Controls** - Adjust props without coding  
- 📖 **Auto-generated API Docs** - From TypeScript interfaces
- 📱 **Responsive Testing** - Multiple viewport sizes
- 🎨 **Design System** - Complete styling examples

## 📦 Components

### ResizableWrapper
A flexible container that allows horizontal resizing via drag interaction. Perfect for sidebars, panels, and adjustable layouts.

**Features:**
- 🖱️ Drag-to-resize functionality
- 📏 Customizable constraints (min/max width)
- 🎨 Visual feedback and hover states
- 🔧 TypeScript support with full type safety
- ⚡ Performance optimized event handling

## 🛠️ Development

```bash
# Install dependencies
npm install

# Start development with documentation
npm run docs

# Run tests
npm test

# Build library
npm run build

# Build documentation for deployment
npm run docs:build
```

## 📋 API Reference

### ResizableWrapper Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | **Required** | Content to be wrapped |
| `minWidth` | `number` | `200` | Minimum width in pixels |
| `maxWidth` | `number` | `500` | Maximum width in pixels |
| `initialWidth` | `number` | `240` | Initial width in pixels |
| `borderWidth` | `string` | **Required** | Resize handle width |
| `borderColor` | `string` | `"#ccc"` | Handle color |
| `activeBorderColor` | `string` | `"#3b82f6"` | Active handle color |
| `className` | `string` | `""` | Additional CSS classes |
| `style` | `CSSProperties` | `{}` | Inline styles |

## 🌐 Browser Support

- Chrome 60+
- Firefox 55+  
- Safari 12+
- Edge 79+

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

## 🔗 Links

- [NPM Package](https://www.npmjs.com/package/@wuchuheng/helper)
- [GitHub Repository](https://github.com/wuchuhengtools/helper)
- [Interactive Documentation](https://your-storybook-url.com) *(Deploy Storybook for public link)*

---

Built with ❤️ using React, TypeScript, and Storybook.y library for JavaScript/TypeScript and React applications</p>

## 📚 Table of Contents

- [🚀 Installation](#-installation)
- [⚡ Quick Start](#-quick-start)
- [📖 API Reference](#-api-reference)
  - [📁 File & Data Operations](#-file--data-operations)
    - [fileToBase64](#filetobase64)
    - [copyStringToClipboard](#copystringtoclipboard)
  - [🔗 URL & Query Operations](#-url--query-operations)
    - [obj2Query](#obj2query)
    - [query2Obj](#query2obj)
  - [⚡ Performance & Control Flow](#-performance--control-flow)
    - [debounce](#debounce)
    - [throttling](#throttling)
    - [sleep](#sleep)
  - [🌐 DOM Utilities](#-dom-utilities)
    - [waitElementPromise](#waitelementpromise)
- [⚛️ React Components](#️-react-components)
  - [ResizableWrapper](#resizablewrapper)
  - [ContextMenu](#contextmenu)
  - [VisibleAreaReporter](#visibleareareporter)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)

## 🚀 Installation

```shell
$ npm i @wuchuheng/helper
```

For React components, you'll also need React as a peer dependency:
```shell
$ npm i react react-dom
```

## ⚡ Quick Start

```typescript
// Import utilities by category
import { 
  fileToBase64, copyStringToClipboard,           // File & Data
  obj2Query, query2Obj,                          // URL & Query
  debounce, throttling, sleep,                   // Performance
  waitElementPromise                             // DOM
} from "@wuchuheng/helper";

// Import React components
import { ResizableWrapper, ContextMenu, VisibleAreaReporter } from "@wuchuheng/helper";

// File operations
const base64 = await fileToBase64(file);
copyStringToClipboard("Hello World!");

// URL operations  
const query = obj2Query({page: 1, limit: 10});  // "?page=1&limit=10"
const params = query2Obj(window.location.search);

// Performance control
const debouncedSearch = debounce(searchFunction, 500);
const throttledScroll = throttling(scrollHandler, 100);
await sleep(1000);

// DOM utilities
const element = await waitElementPromise<HTMLElement>('#my-element');

// React components
<ResizableWrapper borderWidth="4px">
  <ContextMenu itemId={1} actions={[{label: "Edit", onClick: handleEdit}]}>
    <VisibleAreaReporter onChange={handleAreaChange}>
      <div>Your content</div>
    </VisibleAreaReporter>
  </ContextMenu>
</ResizableWrapper>
```

## 📖 API Reference

### 📁 File & Data Operations

#### fileToBase64
Convert a File object to base64 data URL.

```typescript
fileToBase64(file: File): Promise<string>
```

**Example:**
```typescript
const base64 = await fileToBase64(file);
console.log(base64); // "data:image/png;base64,iVBORw0KGgo..."
```

#### copyStringToClipboard
Copy text to system clipboard.

```typescript
copyStringToClipboard(str: string): void
```

**Example:**
```typescript
copyStringToClipboard("Hello, World!");
```

### 🔗 URL & Query Operations

#### obj2Query
Convert object to URL query string.

```typescript
obj2Query(obj: Record<string, number | string>): string
```

**Example:**
```typescript
obj2Query({page: 1, search: "hello"}); // "?page=1&search=hello"
```

#### query2Obj
Parse URL query string to object.

```typescript
query2Obj(query: string): Record<string, string>
```

**Example:**
```typescript
query2Obj("?page=1&search=hello"); // {page: "1", search: "hello"}
```

### ⚡ Performance & Control Flow

#### debounce
Delay function execution until after wait time.

```typescript
debounce<T>(callback: (params: T) => void, wait: number): (params: T) => void
```

**Example:**
```typescript
const debouncedSearch = debounce((query: string) => search(query), 500);
```

#### throttling
Limit function call rate.

```typescript
throttling(callback: Function, wait: number): Function
```

**Example:**
```typescript
const throttledScroll = throttling(() => updateUI(), 100);
```

#### sleep
Create async delay.

```typescript
sleep(ms: number): Promise<void>
```

**Example:**
```typescript
await sleep(1000); // Wait 1 second
```

### 🌐 DOM Utilities

#### waitElementPromise
Wait for DOM element to appear.

```typescript
waitElementPromise<T>(selector: string, timeout?: number): Promise<T>
```

**Example:**
```typescript
const button = await waitElementPromise<HTMLButtonElement>('#my-button');
const modal = await waitElementPromise('.modal', 5000); // 5s timeout
```

## ⚛️ React Components

#### copyStringToClipboard

Copy a string to the system clipboard.

**Type Signature:**
```typescript
copyStringToClipboard(str: string): void
```

**Parameters:**
- `str` (string): The string to copy to clipboard

**Example:**
```typescript
import { copyStringToClipboard } from "@wuchuheng/helper";

// Copy text to clipboard
copyStringToClipboard("Hello, World!");

// Copy dynamic content
const shareUrl = `${window.location.origin}/share/${itemId}`;
copyStringToClipboard(shareUrl);

// Copy formatted data
const userData = JSON.stringify({ name: "John", age: 30 }, null, 2);
copyStringToClipboard(userData);
```

### URL & Query Operations

Functions for working with URL query strings and object conversions.

#### obj2Query

Convert an object to a URL query string.

**Type Signature:**
```typescript
obj2Query(obj: Record<string, number | string>): string
```

**Parameters:**
- `obj` (Record<string, number | string>): Object to convert to query string

**Returns:**
- `string`: Query string with leading "?" or empty string if no valid parameters

**Example:**
```typescript
import { obj2Query } from "@wuchuheng/helper";

// Basic usage
const params = { page: 1, limit: 10, search: "hello" };
const queryString = obj2Query(params);
console.log(queryString); // "?page=1&limit=10&search=hello"

// With empty values (filtered out)
const paramsWithEmpty = { name: "John", age: 25, city: "" };
console.log(obj2Query(paramsWithEmpty)); // "?name=John&age=25"

// Build complete URL
const baseUrl = "https://api.example.com/users";
const filters = { status: "active", role: "admin" };
const fullUrl = baseUrl + obj2Query(filters);
console.log(fullUrl); // "https://api.example.com/users?status=active&role=admin"
```

#### query2Obj

Convert a URL query string to an object.

**Type Signature:**
```typescript
query2Obj(query: string): Record<string, string>
```

**Parameters:**
- `query` (string): Query string to parse (with or without leading "?")

**Returns:**
- `Record<string, string>`: Object with query parameters

**Example:**
```typescript
import { query2Obj } from "@wuchuheng/helper";

// Parse current URL query
const currentQuery = window.location.search;
const params = query2Obj(currentQuery);
console.log(params); // { page: "1", search: "hello" }

// Parse custom query string
const queryString = "?name=John&age=25&city=New York";
const parsed = query2Obj(queryString);
console.log(parsed); // { name: "John", age: "25", city: "New York" }

// Handle URL decoding
const encodedQuery = "?message=Hello%20World&type=info";
const decoded = query2Obj(encodedQuery);
console.log(decoded); // { message: "Hello World", type: "info" }

// Chain with obj2Query for round-trip
const original = { filter: "active", sort: "name" };
const queryStr = obj2Query(original);
const restored = query2Obj(queryStr);
console.log(restored); // { filter: "active", sort: "name" }
```

### Cryptography & Security

Functions for generating hashes and security-related operations.

#### getHash

Generate cryptographic hash of a string (currently not implemented).

**Type Signature:**
```typescript
getHash(str: string, algo?: "SHA-256" | "md5"): Promise<string>
```

**Parameters:**
- `str` (string): String to hash
- `algo` ("SHA-256" | "md5", optional): Hash algorithm (default: "SHA-256")

**Returns:**
- `Promise<string>`: Hash string

**Note:** This function is currently not implemented and will throw an error.

### Performance & Control Flow

Functions for controlling execution timing and performance optimization.

#### debounce

Delay function execution until after a specified wait time has passed since the last invocation.

**Type Signature:**
```typescript
debounce<T>(callback: (params: T) => void, wait: number): (params: T) => void
```

**Parameters:**
- `callback` (function): Function to debounce
- `wait` (number): Delay in milliseconds

**Returns:**
- `function`: Debounced function

**Example:**
```typescript
import { debounce } from "@wuchuheng/helper";

// Search input debouncing
const searchHandler = debounce((query: string) => {
  console.log('Searching for:', query);
  // Perform API call
  fetchSearchResults(query);
}, 500);

// Usage in event handlers
const searchInput = document.querySelector('#search') as HTMLInputElement;
searchInput.addEventListener('input', (e) => {
  searchHandler(e.target.value);
});

// Resize event debouncing
const handleResize = debounce((data: { width: number, height: number }) => {
  console.log('Window resized to:', data);
  updateLayout(data);
}, 250);

window.addEventListener('resize', () => {
  handleResize({ 
    width: window.innerWidth, 
    height: window.innerHeight 
  });
});
```

#### throttling

Limit the rate at which a function can be called.

**Type Signature:**
```typescript
throttling<T>(callback: Function, wait: number): Function
```

**Parameters:**
- `callback` (function): Function to throttle
- `wait` (number): Minimum interval between calls in milliseconds

**Returns:**
- `function`: Throttled function

**Example:**
```typescript
import { throttling } from "@wuchuheng/helper";

// Scroll event throttling
const handleScroll = throttling(() => {
  console.log('Scroll position:', window.scrollY);
  updateScrollIndicator();
}, 100);

window.addEventListener('scroll', handleScroll);

// Button click throttling
const saveButton = document.querySelector('#save') as HTMLButtonElement;
const throttledSave = throttling(() => {
  console.log('Saving data...');
  saveData();
}, 2000);

saveButton.addEventListener('click', throttledSave);

// Mouse move throttling
const handleMouseMove = throttling((e: MouseEvent) => {
  updateCursor(e.clientX, e.clientY);
}, 16); // ~60fps

document.addEventListener('mousemove', handleMouseMove);
```

#### sleep

Create a delay in asynchronous code execution.

**Type Signature:**
```typescript
sleep(ms: number): Promise<void>
```

**Parameters:**
- `ms` (number): Duration in milliseconds to sleep

**Returns:**
- `Promise<void>`: Promise that resolves after the specified duration

**Example:**
```typescript
import { sleep } from "@wuchuheng/helper";

// Basic usage
async function delayedOperation() {
  console.log("Starting...");
  await sleep(2000);
  console.log("2 seconds later");
}

// In sequential operations
async function processItems(items: any[]) {
  for (const item of items) {
    await processItem(item);
    await sleep(100); // Small delay between items
  }
}

// Rate limiting API calls
async function batchApiCalls(urls: string[]) {
  const results = [];
  for (const url of urls) {
    const response = await fetch(url);
    results.push(await response.json());
    await sleep(1000); // 1 second between requests
  }
  return results;
}

// Animation timing
async function animateElements() {
  const elements = document.querySelectorAll('.animate');
  for (const el of elements) {
    el.classList.add('fade-in');
    await sleep(200); // Stagger animations
  }
}

// Retry with delay
async function retryOperation(operation: () => Promise<any>, maxRetries = 3) {
  for (let i = 0; i < maxRetries; i++) {
    try {
      return await operation();
    } catch (error) {
      if (i === maxRetries - 1) throw error;
      await sleep(1000 * Math.pow(2, i)); // Exponential backoff
    }
  }
}
```

### DOM Utilities

Functions for DOM manipulation and element detection.

#### waitElementPromise

Wait for a DOM element to appear and return a promise that resolves with the element.

**Type Signature:**
```typescript
waitElementPromise<T>(selector: string, timeout?: number): Promise<T>
```

**Parameters:**
- `selector` (string): CSS selector for the element to wait for
- `timeout?` (number): Maximum wait time in milliseconds (default: 30000ms)

**Returns:**
- `Promise<T>`: Promise that resolves with the found element or rejects if timeout is reached

**Features:**
- 🔍 Uses both MutationObserver and polling for reliable element detection
- ⏱️ Configurable timeout with automatic cleanup
- 🎯 Generic type support for proper TypeScript typing
- 🛡️ Robust error handling with retry mechanism
- 📊 Console warnings for debugging failed attempts

**Example:**
```typescript
import { waitElementPromise } from "@wuchuheng/helper";

// Basic usage - wait for element with default 30s timeout
try {
  const button = await waitElementPromise<HTMLButtonElement>('#my-button');
  button.click();
} catch (error) {
  console.error('Button not found:', error);
}

// With custom timeout (5 seconds)
waitElementPromise<HTMLElement>('.dynamic-content', 5000)
  .then(element => {
    console.log('Element found:', element);
    element.style.backgroundColor = 'yellow';
  })
  .catch(error => {
    console.error('Element not found within 5 seconds:', error);
  });

// Waiting for multiple elements
async function waitForElements() {
  try {
    const [header, footer] = await Promise.all([
      waitElementPromise<HTMLElement>('header'),
      waitElementPromise<HTMLElement>('footer')
    ]);
    
    console.log('Both header and footer are ready');
    // Initialize layout or perform operations
  } catch (error) {
    console.error('Some elements were not found:', error);
  }
}

// In dynamic applications (SPAs, lazy loading)
async function handleDynamicContent() {
  // Wait for dynamically loaded content
  const modal = await waitElementPromise<HTMLDivElement>('.modal-content', 10000);
  
  // Wait for form fields within the modal
  const form = await waitElementPromise<HTMLFormElement>('.modal-content form');
  
  // Now safe to interact with the elements
  form.addEventListener('submit', handleSubmit);
}
```

**Use Cases:**
- 🔄 **Single Page Applications (SPAs)**: Wait for dynamically rendered components
- 📦 **Lazy Loading**: Wait for content that loads asynchronously
- 🧪 **Testing**: Ensure elements exist before assertions
- 🎨 **Dynamic UI**: Wait for elements created by user interactions
- 📱 **Third-party Integrations**: Wait for external scripts to create elements

**Error Handling:**
The function will throw an error if the element is not found within the timeout period. The error message includes the selector and retry count for debugging purposes.

## ⚛️ React Components

### ResizableWrapper
Horizontally resizable container with drag handle.

**Key Props:**
- `borderWidth` (string): **Required** - Width of resize handle
- `minWidth?` (number): Minimum width (default: 200px)
- `maxWidth?` (number): Maximum width (default: 500px)
- `initialWidth?` (number): Initial width (default: 240px)
- `borderColor?` (string): Handle color (default: "#ccc")
- `activeBorderColor?` (string): Active handle color (default: "#3b82f6")

```tsx
<ResizableWrapper 
  borderWidth="4px"
  minWidth={200}
  maxWidth={600}
  borderColor="#ddd"
  activeBorderColor="#007acc"
>
  <div>Resizable content</div>
</ResizableWrapper>
```

### ContextMenu
Right-click context menu for any element.

**Props:**
- `itemId` (number): Unique identifier
- `actions` (ContextMenuAction[]): Menu actions
- `onContextMenu?` (function): Optional callback

```tsx
<ContextMenu
  itemId={user.id}
  actions={[
    { label: 'Edit', onClick: (id) => editUser(id) },
    { label: 'Delete', onClick: (id) => deleteUser(id) }
  ]}
>
  <div className="user-card">{user.name}</div>
</ContextMenu>
```

### VisibleAreaReporter
Monitor and report element's visible area.

**Props:**
- `children?` (ReactNode): Optional content
- `onChange?` (function): Area change callback

```tsx
<VisibleAreaReporter
  onChange={(area) => {
    console.log(`Size: ${area.width}x${area.height}`);
  }}
>
  <div>Monitored content</div>
</VisibleAreaReporter>
```

## 🤝 Contributing

Contributions are welcome! Please feel free to:

- 🐛 [Report bugs](https://github.com/wuchuhengtools/helper/issues)
- 💡 [Request features](https://github.com/wuchuhengtools/helper/issues)
- 🔧 Submit pull requests
- 📖 Improve documentation

## 📄 License

MIT © [wuchuhengtools](https://github.com/wuchuhengtools)

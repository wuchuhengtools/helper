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
import { ResizableWrapper } from "@wuchuhengtools/helper"

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
## Contributing

You can contribute in one of three ways:

1. File bug reports using the [issue tracker](https://github.com/wuchuhengtools/helper/issues).
2. Answer questions or fix bugs on the [issue tracker](https://github.com/wuchuhengtools/helper/issues).
3. Contribute new features or update the wiki.

_The code contribution process is not very formal. You just need to make sure that you follow the PSR-0, PSR-1, and PSR-2 coding guidelines. Any new code contributions must be accompanied by unit tests where applicable._

## License

MIT

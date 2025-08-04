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

// Advanced usage with all features
const resizableRef = useRef(null);

<ResizableWrapper 
  ref={resizableRef}
  minWidth={150} 
  maxWidth={800} 
  initialWidth={300}
  className="my-custom-class"
  disabled={false}
  onResizeStart={(data) => console.log('Resize started:', data)}
  onResize={(data) => console.log('Resizing:', data.width)}
  onResizeEnd={(data) => console.log('Resize ended:', data)}
  handleStyle={{ backgroundColor: '#007bff' }}
  handleClassName="custom-handle"
>
  <div>Your resizable content here</div>
</ResizableWrapper>

// Programmatic control via ref
resizableRef.current?.setWidth(400);
const currentWidth = resizableRef.current?.getWidth();
```

## React Components

### ResizableWrapper

A highly customizable React component that makes its children resizable with a drag handle.

**Props:**
- `children` (ReactNode): The content to make resizable
- `minWidth?` (number): Minimum width in pixels (default: 200)
- `maxWidth?` (number): Maximum width in pixels (default: 500)  
- `initialWidth?` (number): Initial width in pixels (default: 240)
- `className?` (string): Additional CSS classes to apply
- `style?` (React.CSSProperties): Inline styles for the container
- `disabled?` (boolean): Whether resizing is disabled (default: false)
- `onResizeStart?` (function): Callback fired when resize starts
- `onResize?` (function): Callback fired during resize
- `onResizeEnd?` (function): Callback fired when resize ends
- `handleStyle?` (React.CSSProperties): Inline styles for the resize handle
- `handleClassName?` (string): CSS classes for the resize handle

**Ref Methods (via forwardRef):**
- `getWidth()`: Returns current width
- `setWidth(width)`: Sets width programmatically  
- `getElement()`: Returns the container DOM element

**Features:**
- 🖱️ Mouse drag resizing from the right edge
- ⌨️ Keyboard resizing with arrow keys (Left/Right)
- 📏 Respects min/max width constraints
- 🎨 Visual feedback during resize with hover effects
- 🔧 Programmatic control via ref
- ♿ Full accessibility support with ARIA attributes
- 🎯 Event callbacks for resize lifecycle
- 🎨 Customizable styling for container and handle
- 🚫 Disabled state support
- ⚡ Optimized performance with React hooks
- 📱 TypeScript support with full type definitions

**Accessibility:**
- ARIA roles and labels for screen readers
- Keyboard navigation support
- Focusable resize handle
- Semantic HTML structure

```
## Contributing

You can contribute in one of three ways:

1. File bug reports using the [issue tracker](https://github.com/wuchuhengtools/helper/issues).
2. Answer questions or fix bugs on the [issue tracker](https://github.com/wuchuhengtools/helper/issues).
3. Contribute new features or update the wiki.

_The code contribution process is not very formal. You just need to make sure that you follow the PSR-0, PSR-1, and PSR-2 coding guidelines. Any new code contributions must be accompanied by unit tests where applicable._

## License

MIT

import { ReactNode } from 'react';

/**
 * Props interface for the ResizableWrapper component
 */
export interface ResizableWrapperProps {
  /** Content to be wrapped in the resizable container */
  children: ReactNode;
  /** Minimum width in pixels (default: 200) */
  minWidth?: number;
  /** Maximum width in pixels (default: 500) */
  maxWidth?: number;
  /** Initial width in pixels (default: 240) */
  initialWidth?: number;
  /** Additional CSS classes to apply to the container */
  className?: string;
}

/**
 * A resizable wrapper component that allows horizontal resizing of its content.
 * 
 * The component provides a draggable handle on the right edge that users can drag
 * to resize the container horizontally. The resize operation is constrained by
 * the specified minimum and maximum width values.
 * 
 * @example
 * ```tsx
 * import { ResizableWrapper } from '@wuchuheng/helper';
 * 
 * function MyComponent() {
 *   return (
 *     <ResizableWrapper
 *       minWidth={150}
 *       maxWidth={600}
 *       initialWidth={300}
 *       className="border border-gray-300"
 *     >
 *       <div className="p-4">
 *         <h2>Resizable Content</h2>
 *         <p>This content can be resized by dragging the right edge.</p>
 *       </div>
 *     </ResizableWrapper>
 *   );
 * }
 * ```
 * 
 * @param props - The component props
 * @returns A resizable container with the provided content
 * 
 * @since 1.0.0
 */
export declare const ResizableWrapper: React.FC<ResizableWrapperProps>;

import React, { useState, useCallback, useEffect, ReactNode } from "react";

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

  borderWidth: string;

  className?: string;
  /** Inline styles for the container */
  style?: React.CSSProperties;

  borderColor?: string;
  activeBorderColor?: string;
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
 *       style={{
 *         border: '1px solid #ccc',
 *         borderRadius: '8px',
 *         backgroundColor: '#f9f9f9'
 *       }}
 *     >
 *       <div style={{ padding: '16px' }}>
 *         <h2>Resizable Content</h2>
 *         <p>This content can be resized by dragging the right edge.</p>
 *       </div>
 *     </ResizableWrapper>
 *   );
 * }
 * ```
 *
 * @example
 * ```tsx
 * // Basic usage with default settings
 * <ResizableWrapper>
 *   <MyContent />
 * </ResizableWrapper>
 * ```
 *
 * @param props - The component props
 * @param props.children - The content to be wrapped
 * @param props.minWidth - Minimum width constraint (default: 200px)
 * @param props.maxWidth - Maximum width constraint (default: 500px)
 * @param props.initialWidth - Starting width (default: 240px)
 * @param props.className - Additional CSS classes for styling
 * @param props.style - Inline styles for the container
 *
 * @returns A resizable container with the provided content
 *
 * @remarks
 * - The component uses inline styles for framework-agnostic styling
 * - Mouse events are handled globally during resize operations
 * - The resize handle appears on hover and becomes more prominent during resize
 * - The component prevents text selection and changes cursor during resize
 *
 * @since 1.0.0
 */
export const ResizableWrapper: React.FC<ResizableWrapperProps> = ({
  children,
  minWidth = 200,
  maxWidth = 500,
  initialWidth = 240,
  className = "",
  style = {},
  borderColor = "#ccc",
  activeBorderColor = "#3b82f6",
  borderWidth = "4px",
}) => {
  const [isResizing, setIsResizing] = useState(false);
  const [width, setWidth] = useState(initialWidth);
  const [startX, setStartX] = useState(0);
  const [startWidth, setStartWidth] = useState(initialWidth);

  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      setIsResizing(true);
      setStartX(e.clientX);
      setStartWidth(width);
    },
    [width]
  );

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isResizing) return;

      const deltaX = e.clientX - startX;
      const newWidth = Math.max(
        minWidth,
        Math.min(maxWidth, startWidth + deltaX)
      );

      setWidth(newWidth);
    },
    [isResizing, startX, startWidth, minWidth, maxWidth]
  );

  const handleMouseUp = useCallback(() => {
    setIsResizing(false);
  }, []);

  useEffect(() => {
    if (isResizing) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
      document.body.style.cursor = "col-resize";
      document.body.style.userSelect = "none";

      return () => {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
        document.body.style.cursor = "";
        document.body.style.userSelect = "";
      };
    }
  }, [isResizing, handleMouseMove, handleMouseUp]);

  return (
    <div
      className={className}
      style={{
        position: "relative",
        width: `${width}px`,
        ...style, // Merge custom styles
      }}
    >
      {/* Wrapped content */}
      {children}

      {/* Resize handle overlay */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          right: 0,
          top: 0,
          width: borderWidth,
          cursor: "col-resize",
          backgroundColor: isResizing ? activeBorderColor : borderColor,
          transition: "background-color 150ms ease-in-out",
          zIndex: 10,
        }}
        onMouseDown={handleMouseDown}
        onMouseEnter={(e) => {
          if (!isResizing) {
            e.currentTarget.style.backgroundColor = activeBorderColor;
          }
        }}
        onMouseLeave={(e) => {
          if (!isResizing) {
            e.currentTarget.style.backgroundColor = borderColor;
          }
        }}
      >
        {/* Visual indicator */}
        <div
          style={{
            height: "100%",
            width: "100%",
            backgroundColor: isResizing ? activeBorderColor : borderColor,
            transition: "background-color 150ms ease-in-out",
          }}
        />
      </div>
    </div>
  );
};

import React, { useState, useCallback, useEffect, ReactNode } from "react";

/**
 * Props interface for the ResizableWrapper component
 */
export interface ResizableWrapperProps {
  /** Content to be wrapped in the resizable container */
  children: ReactNode;
  /** Minimum size in pixels (width for left/right, height for top/bottom) (default: 200) */
  minSize?: number;
  /** Maximum size in pixels (width for left/right, height for top/bottom) (default: 500) */
  maxSize?: number;
  /** Initial size in pixels (width for left/right, height for top/bottom) (default: 240) */
  initialSize?: number;
  /** Fixed dimension - width for top/bottom resize, height for left/right resize */
  fixedSize?: number;
  /** Width of the resize handle border */
  borderWidth?: string;
  /** Side from which the resize handle appears (default: right) */
  resizeSide?: "top" | "right" | "bottom" | "left";
  /** Additional CSS classes to apply to the container */
  className?: string;
  /** Inline styles for the container */
  style?: React.CSSProperties;
  /** Color of the resize handle in normal state */
  borderColor?: string;
  /** Color of the resize handle when active/hovered */
  activeBorderColor?: string;
}

/**
 * A resizable wrapper component that allows horizontal and vertical resizing of its content.
 *
 * The component provides a draggable handle on any edge that users can drag
 * to resize the container. The resize operation is constrained by the specified
 * minimum and maximum width/height values.
 *
 * @example
 * ```tsx
 * import { ResizableWrapper } from '@wuchuheng/helper';
 *
 * function MyComponent() {
 *   return (
 *     <ResizableWrapper
 *       minSize={150}
 *       maxSize={600}
 *       initialSize={300}
 *       resizeSide="right"
 *       style={{
 *         border: '1px solid #ccc',
 *         borderRadius: '8px',
 *         backgroundColor: '#f9f9f9'
 *       }}
 *     >
 *       <div style={{ padding: '16px' }}>
 *         <h2>Resizable Content</h2>
 *         <p>This content can be resized by dragging the edge.</p>
 *       </div>
 *     </ResizableWrapper>
 *   );
 * }
 * ```
 *
 * @example
 * ```tsx
 * // Vertical resizing example
 * <ResizableWrapper
 *   resizeSide="bottom"
 *   minSize={150}
 *   maxSize={400}
 *   initialSize={250}
 *   fixedSize={300} // Fixed width when resizing height
 * >
 *   <MyContent />
 * </ResizableWrapper>
 * ```
 *
 * @param props - The component props
 * @param props.children - The content to be wrapped
 * @param props.minSize - Minimum size constraint (default: 200px)
 * @param props.maxSize - Maximum size constraint (default: 500px)
 * @param props.initialSize - Starting size (default: 240px)
 * @param props.fixedSize - Fixed dimension for the non-resizing axis
 * @param props.className - Additional CSS classes for styling
 * @param props.style - Inline styles for the container
 * @param props.resizeSide - Side from which the resize handle appears (default: right)
 * @param props.borderWidth - Width of the resize handle border (default: 4px)
 * @param props.borderColor - Color of the resize handle (default: #ccc)
 * @param props.activeBorderColor - Color when active/hovered (default: #3b82f6)
 *
 * @returns A resizable container with the provided content
 *
 * @remarks
 * - The component uses inline styles for framework-agnostic styling
 * - Mouse events are handled globally during resize operations
 * - The resize handle appears on hover and becomes more prominent during resize
 * - The component prevents text selection and changes cursor during resize
 * - The resize handle can appear on any side: top, right, bottom, or left
 * - Horizontal resizing (left/right) adjusts width, vertical resizing (top/bottom) adjusts height
 *
 * @since 1.0.0
 */
export const ResizableWrapper: React.FC<ResizableWrapperProps> = ({
  children,
  minSize = 200,
  maxSize = 500,
  initialSize = 240,
  fixedSize,
  className = "",
  style = {},
  borderColor = "#ccc",
  activeBorderColor = "#3b82f6",
  borderWidth = "4px",
  resizeSide = "right",
}) => {
  // 1. Input handling - State management for resizing
  const [isResizing, setIsResizing] = useState(false);
  const [size, setSize] = useState(initialSize);
  const [startX, setStartX] = useState(0);
  const [startY, setStartY] = useState(0);
  const [startSize, setStartSize] = useState(initialSize);

  const isHorizontalResize = resizeSide === "left" || resizeSide === "right";
  const isVerticalResize = resizeSide === "top" || resizeSide === "bottom";

  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      // 1.1 Prevent default behavior and start resize
      e.preventDefault();
      setIsResizing(true);
      setStartX(e.clientX);
      setStartY(e.clientY);
      setStartSize(size);
    },
    [size]
  );

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isResizing) return;

      // 2. Core processing - Calculate new size based on resize side
      let delta: number;
      let newSize: number;

      if (isHorizontalResize) {
        delta = e.clientX - startX;
        if (resizeSide === "right") {
          newSize = startSize + delta;
        } else {
          // left
          newSize = startSize - delta;
        }
      } else {
        // isVerticalResize
        delta = e.clientY - startY;
        if (resizeSide === "bottom") {
          newSize = startSize + delta;
        } else {
          // top
          newSize = startSize - delta;
        }
      }

      newSize = Math.max(minSize, Math.min(maxSize, newSize));
      setSize(newSize);
    },
    [
      isResizing,
      startX,
      startY,
      startSize,
      minSize,
      maxSize,
      resizeSide,
      isHorizontalResize,
    ]
  );

  const handleMouseUp = useCallback(() => {
    // 2.1 End resize operation
    setIsResizing(false);
  }, []);

  useEffect(() => {
    if (isResizing) {
      // 2.2 Add global mouse event listeners during resize
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
      document.body.style.cursor = isVerticalResize
        ? "row-resize"
        : "col-resize";
      document.body.style.userSelect = "none";

      return () => {
        // 2.3 Cleanup event listeners and body styles
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
        document.body.style.cursor = "";
        document.body.style.userSelect = "";
      };
    }
  }, [isResizing, handleMouseMove, handleMouseUp, isVerticalResize]);

  // 3. Output handling - Render component with proper dimensions
  const containerStyle: React.CSSProperties = {
    position: "relative",
    ...style, // Merge custom styles
  };

  // Set the dynamic dimension (the one being resized)
  if (isHorizontalResize) {
    containerStyle.width = `${size}px`;
    if (fixedSize) {
      containerStyle.height = `${fixedSize}px`;
    }
  } else {
    containerStyle.height = `${size}px`;
    if (fixedSize) {
      containerStyle.width = `${fixedSize}px`;
    }
  }

  return (
    <div className={className} style={containerStyle}>
      {/* Wrapped content */}
      {children}

      {/* Resize handle overlay */}
      <div
        style={{
          position: "absolute",
          ...(resizeSide === "top"
            ? { top: 0, left: 0, right: 0, height: borderWidth }
            : resizeSide === "bottom"
            ? { bottom: 0, left: 0, right: 0, height: borderWidth }
            : resizeSide === "left"
            ? { left: 0, top: 0, bottom: 0, width: borderWidth }
            : { right: 0, top: 0, bottom: 0, width: borderWidth }), // default to right
          cursor: isVerticalResize ? "row-resize" : "col-resize",
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
            height: isVerticalResize ? borderWidth : "100%",
            width: isVerticalResize ? "100%" : borderWidth,
            backgroundColor: isResizing ? activeBorderColor : borderColor,
            transition: "background-color 150ms ease-in-out",
          }}
        />
      </div>
    </div>
  );
};

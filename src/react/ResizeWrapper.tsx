import React, { useState, useCallback, useEffect, ReactNode, forwardRef, useImperativeHandle, useRef } from 'react';

// Enhanced TypeScript interfaces based on React best practices

/**
 * Data object passed to resize event callbacks containing resize information
 * @interface ResizeData
 */
interface ResizeData {
  /** Current width of the resizable container in pixels */
  width: number;
  /** Change in X position since resize started */
  deltaX: number;
  /** Width when resize operation started */
  startWidth: number;
}

/**
 * Props interface for the ResizableWrapper component
 * @interface ResizableWrapperProps
 */
interface ResizableWrapperProps {
  /** Content to be rendered inside the resizable container */
  children: ReactNode;
  /** Minimum allowed width in pixels @default 200 */
  minWidth?: number;
  /** Maximum allowed width in pixels @default 500 */
  maxWidth?: number;
  /** Initial width in pixels @default 240 */
  initialWidth?: number;
  /** Additional CSS class names to apply to the container @default '' */
  className?: string;
  /** Inline styles to apply to the container */
  style?: React.CSSProperties;
  /** Whether resizing is disabled @default false */
  disabled?: boolean;
  /** Callback fired when resize operation starts */
  onResizeStart?: (data: ResizeData) => void;
  /** Callback fired during resize operation */
  onResize?: (data: ResizeData) => void;
  /** Callback fired when resize operation ends */
  onResizeEnd?: (data: ResizeData) => void;
  /** Inline styles to apply to the resize handle */
  handleStyle?: React.CSSProperties;
  /** CSS class names to apply to the resize handle @default '' */
  handleClassName?: string;
}

/**
 * Imperative handle interface exposed via ref for programmatic control
 * @interface ResizableWrapperHandle
 */
interface ResizableWrapperHandle {
  /** Get the current width of the container */
  getWidth: () => number;
  /** Set the width of the container programmatically */
  setWidth: (width: number) => void;
  /** Get reference to the container DOM element */
  getElement: () => HTMLDivElement | null;
}

/**
 * A resizable container component that allows users to adjust width by dragging a handle
 * 
 * @component
 * @example
 * ```tsx
 * // Basic usage
 * <ResizableWrapper>
 *   <div>Resizable content</div>
 * </ResizableWrapper>
 * 
 * // Advanced usage with callbacks and ref
 * const ref = useRef<ResizableWrapperHandle>(null);
 * 
 * <ResizableWrapper
 *   ref={ref}
 *   minWidth={150}
 *   maxWidth={800}
 *   initialWidth={300}
 *   onResize={(data) => console.log('New width:', data.width)}
 *   onResizeEnd={(data) => console.log('Resize completed:', data)}
 * >
 *   <div>Content that can be resized</div>
 * </ResizableWrapper>
 * ```
 * 
 * @param {ResizableWrapperProps} props - Component props
 * @param {React.Ref<ResizableWrapperHandle>} ref - Forward ref for imperative API access
 * @returns {JSX.Element} Resizable container with drag handle
 * 
 * @features
 * - Mouse and keyboard resizing support
 * - Configurable min/max width constraints
 * - Accessibility features with ARIA attributes
 * - Callback events for resize lifecycle
 * - Imperative API via ref for programmatic control
 * - Customizable styling for container and handle
 * - Disabled state support
 * 
 * @accessibility
 * - Supports keyboard navigation with arrow keys
 * - ARIA roles and labels for screen readers
 * - Focusable resize handle with tabIndex
 * - Proper semantic markup
 * 
 * @performance
 * - Optimized with useCallback for event handlers
 * - Memoized imperative handle with useImperativeHandle
 * - Efficient event listener management
 * 
 * @since 1.0.13
 * @author wuchuheng<wuchuheng@163.com>
 */

export const ResizableWrapper = forwardRef<ResizableWrapperHandle, ResizableWrapperProps>(
  function ResizableWrapper(
    {
      children,
      minWidth = 200,
      maxWidth = 500,
      initialWidth = 240,
      className = '',
      style,
      disabled = false,
      onResizeStart,
      onResize,
      onResizeEnd,
      handleStyle,
      handleClassName = '',
    },
    ref
  ) {
    const [isResizing, setIsResizing] = useState(false);
    const [width, setWidth] = useState(initialWidth);
    const [startX, setStartX] = useState(0);
    const [startWidth, setStartWidth] = useState(initialWidth);
    
    const containerRef = useRef<HTMLDivElement>(null);

    // Expose imperative methods via ref
    useImperativeHandle(ref, () => ({
      getWidth: () => width,
      setWidth: (newWidth: number) => {
        const constrainedWidth = Math.max(minWidth, Math.min(maxWidth, newWidth));
        setWidth(constrainedWidth);
      },
      getElement: () => containerRef.current,
    }), [width, minWidth, maxWidth]);

    const handleMouseDown = useCallback(
      (e: React.MouseEvent) => {
        if (disabled) return;
        
        e.preventDefault();
        const resizeData: ResizeData = {
          width,
          deltaX: 0,
          startWidth: width,
        };
        
        setIsResizing(true);
        setStartX(e.clientX);
        setStartWidth(width);
        
        onResizeStart?.(resizeData);
      },
      [width, disabled, onResizeStart]
    );

    const handleMouseMove = useCallback(
      (e: MouseEvent) => {
        if (!isResizing || disabled) return;

        const deltaX = e.clientX - startX;
        const newWidth = Math.max(minWidth, Math.min(maxWidth, startWidth + deltaX));
        
        const resizeData: ResizeData = {
          width: newWidth,
          deltaX,
          startWidth,
        };

        setWidth(newWidth);
        onResize?.(resizeData);
      },
      [isResizing, startX, startWidth, minWidth, maxWidth, disabled, onResize]
    );

    const handleMouseUp = useCallback(() => {
      if (isResizing) {
        const resizeData: ResizeData = {
          width,
          deltaX: width - startWidth,
          startWidth,
        };
        
        setIsResizing(false);
        onResizeEnd?.(resizeData);
      }
    }, [isResizing, width, startWidth, onResizeEnd]);

    useEffect(() => {
      if (isResizing && !disabled) {
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
        document.body.style.cursor = 'col-resize';
        document.body.style.userSelect = 'none';

        return () => {
          document.removeEventListener('mousemove', handleMouseMove);
          document.removeEventListener('mouseup', handleMouseUp);
          document.body.style.cursor = '';
          document.body.style.userSelect = '';
        };
      }
    }, [isResizing, handleMouseMove, handleMouseUp, disabled]);

    // Combine default and custom styles
    const containerStyle: React.CSSProperties = {
      width: `${width}px`,
      ...style,
    };

    const defaultHandleStyle: React.CSSProperties = {
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      width: '4px',
      cursor: disabled ? 'default' : 'col-resize',
      backgroundColor: 'transparent',
      transition: 'background-color 150ms ease',
      ...handleStyle,
    };

    return (
      <div 
        ref={containerRef}
        className={`relative ${className}`} 
        style={containerStyle}
        role="region"
        aria-label="Resizable container"
      >
        {/* Wrapped content */}
        {children}

        {/* Resize handle */}
        {!disabled && (
          <div
            className={`${handleClassName}`}
            style={defaultHandleStyle}
            onMouseDown={handleMouseDown}
            role="separator"
            aria-orientation="vertical"
            aria-label="Resize handle"
            tabIndex={0}
            onKeyDown={(e) => {
              // Allow keyboard resizing with arrow keys
              if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
                e.preventDefault();
                const delta = e.key === 'ArrowRight' ? 10 : -10;
                const newWidth = Math.max(minWidth, Math.min(maxWidth, width + delta));
                if (newWidth !== width) {
                  setWidth(newWidth);
                  const resizeData: ResizeData = {
                    width: newWidth,
                    deltaX: delta,
                    startWidth: width,
                  };
                  onResize?.(resizeData);
                }
              }
            }}
          >
            {/* Visual indicator with hover effect */}
            <div
              style={{
                height: '100%',
                width: '100%',
                backgroundColor: isResizing ? '#3b82f6' : 'transparent',
                transition: 'background-color 150ms ease',
              }}
              onMouseEnter={(e) => {
                if (!disabled) {
                  e.currentTarget.style.backgroundColor = '#93c5fd';
                }
              }}
              onMouseLeave={(e) => {
                if (!disabled && !isResizing) {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }
              }}
            />
          </div>
        )}
      </div>
    );
  }
);

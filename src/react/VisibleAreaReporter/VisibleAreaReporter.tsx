import React, { useEffect } from 'react';

/**
 * Represents the visible area input with position and size.
 *
 * @property x - The x-coordinate of the visible area's top-left corner.
 * @property y - The y-coordinate of the visible area's top-left corner.
 * @property width - The width of the visible area.
 * @property height - The height of the visible area.
 */
export type VisibleAreaInput = {
  x: number;
  y: number;
  width: number;
  height: number;
};

/**
 * Props for the VisibleAreaReporter component.
 *
 * @property {React.ReactNode} [children] - Optional React children to be rendered inside the component.
 * @property {(area: VisibleAreaInput) => void} [onChange] - Optional callback invoked when the visible area changes, receiving the new area as a parameter.
 */
type VisibleAreaReporterProps = {
  children?: React.ReactNode;
  onChange?: (area: VisibleAreaInput) => void;
};

/**
 * A React component that reports the visible area of its content to a parent component.
 *
 * This component uses a `ResizeObserver` to monitor changes in the size of its container,
 * and calls the `onChange` callback prop with the new visible area whenever a resize occurs.
 *
 * @param props - The props for the VisibleAreaReporter component.
 * @param props.onChange - Callback function that receives the calculated visible area.
 * @param props.children - The content to be rendered inside the reporter.
 *
 * @remarks
 * The component relies on a `calculateVisibleArea` function (not shown here) to determine
 * the visible area of the referenced div. If the calculation fails, a warning is logged and
 * the callback is not invoked.
 */
export const VisibleAreaReporter: React.FC<VisibleAreaReporterProps> = props => {
  const ref = React.useRef<HTMLDivElement>(null);
  const updatePosition = (div: React.RefObject<HTMLDivElement>) => {
    const position = calculateVisibleArea(div);
    if (!position) {
      console.warn('Visible area calculation failed - will retry later');
      return;
    }
    props.onChange && props.onChange(position);
  };

  useEffect(() => {
    if (ref.current) {
      const resizeObserver = new ResizeObserver(() => updatePosition(ref));
      resizeObserver.observe(ref.current);
      return () => resizeObserver.disconnect();
    }
  }, [ref]);

  return (
    <div ref={ref} style={{ height: '100%', width: '100%' }}>
      {props.children}
    </div>
  );
};

/**
 * Calculates the visible area of a container element referenced by a React ref.
 *
 * @param containerRef - A React ref object pointing to an HTMLDivElement whose visible area is to be calculated.
 * @returns An `UploadVisibleAreaInput` object containing the x and y coordinates, width, and height of the container
 *          relative to the window, or `false` if the container ref is null.
 */
const calculateVisibleArea = (containerRef: React.RefObject<HTMLDivElement>): VisibleAreaInput | false => {
  const container = containerRef.current;
  if (!container) {
    console.warn('Container ref is null in updatePosition - will retry later');
    return false;
  }
  // Calculate the container's position relative to the window
  const rect = container.getBoundingClientRect();

  // Create position object
  const position: VisibleAreaInput = {
    x: Math.round(rect.left),
    y: Math.round(rect.top),
    width: Math.round(rect.width),
    height: Math.round(rect.height),
  };

  return position;
};
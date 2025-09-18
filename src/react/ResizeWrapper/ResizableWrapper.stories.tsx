import type { Meta, StoryObj } from "@storybook/react";
import { ResizableWrapper } from "./ResizeWrapper";
import React from "react";

/**
 * The ResizableWrapper component provides a resizable container with a draggable handle
 * that can be positioned on any side. Users can resize the container within specified constraints.
 *
 * ## Features
 * - **Multi-directional Resizing**: Drag from any side (top, right, bottom, left)
 * - **Constrained Resizing**: Respects minimum and maximum width limits
 * - **Visual Feedback**: Handle changes color on hover and during resize
 * - **Framework Agnostic**: Uses inline styles for maximum compatibility
 * - **Customizable Styling**: Full control over colors, borders, and appearance
 *
 * ## Use Cases
 * - Sidebar panels that users can resize
 * - Adjustable content areas
 * - Responsive layout components
 * - Dashboard widgets with user-controlled sizing
 * - Split-pane interfaces
 */
const meta: Meta<typeof ResizableWrapper> = {
  title: "Components/ResizableWrapper",
  component: ResizableWrapper,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: `
A flexible resizable container component that allows users to adjust width or height by dragging from any edge.

### Key Features:
- **Multi-directional Resizing**: Resize from top, right, bottom, or left edges
- **Intuitive Interaction**: Simple drag-to-resize functionality
- **Customizable Constraints**: Set minimum and maximum width/height limits
- **Visual Feedback**: Handle provides clear visual cues with hover states
- **Accessible**: Proper cursor changes and visual states for all orientations
- **TypeScript Support**: Full type safety and IntelliSense support
- **Framework Agnostic**: Uses inline styles for maximum compatibility

### Browser Support:
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

### Resize Sides:
- **Right** (default): Horizontal resizing from the right edge
- **Left**: Horizontal resizing from the left edge  
- **Top**: Vertical resizing from the top edge
- **Bottom**: Vertical resizing from the bottom edge
        `,
      },
    },
  },
  argTypes: {
    children: {
      description: "Content to be wrapped in the resizable container",
      control: false,
    },
    minSize: {
      description:
        "Minimum size in pixels (width for left/right, height for top/bottom)",
      control: { type: "number", min: 50, max: 1000, step: 10 },
    },
    maxSize: {
      description:
        "Maximum size in pixels (width for left/right, height for top/bottom)",
      control: { type: "number", min: 100, max: 2000, step: 10 },
    },
    initialSize: {
      description:
        "Initial size in pixels (width for left/right, height for top/bottom)",
      control: { type: "number", min: 50, max: 1000, step: 10 },
    },
    fixedSize: {
      description: "Fixed dimension for the non-resizing axis (optional)",
      control: { type: "number", min: 50, max: 1000, step: 10 },
    },
    borderWidth: {
      description: "Width of the resize handle",
      control: { type: "select" },
      options: ["2px", "4px", "6px", "8px"],
    },
    borderColor: {
      description: "Color of the resize handle in normal state",
      control: { type: "color" },
    },
    activeBorderColor: {
      description: "Color of the resize handle when active/hovered",
      control: { type: "color" },
    },
    resizeSide: {
      description: "Side from which the resize handle appears",
      control: { type: "select" },
      options: ["top", "right", "bottom", "left"],
    },
    className: {
      description: "Additional CSS classes",
      control: { type: "text" },
    },
    style: {
      description: "Inline styles for the container",
      control: false,
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ResizableWrapper>;

// Sample content component for consistent demos
const SampleContent: React.FC<{ title?: string; content?: string }> = ({
  title = "Resizable Content",
  content = "This content can be resized by dragging the right edge. Try it out!",
}) => (
  <div
    style={{
      padding: "20px",
      backgroundColor: "#f8f9fa",
      borderRadius: "8px",
      height: "200px",
      overflow: "auto",
    }}
  >
    <h3
      style={{
        margin: "0 0 12px 0",
        color: "#2c3e50",
        fontSize: "18px",
      }}
    >
      {title}
    </h3>
    <p
      style={{
        margin: "0 0 12px 0",
        color: "#5a6c7d",
        lineHeight: "1.5",
      }}
    >
      {content}
    </p>
    <div
      style={{
        padding: "12px",
        backgroundColor: "#e9ecef",
        borderRadius: "4px",
        fontSize: "14px",
        color: "#6c757d",
      }}
    >
      💡 <strong>Tip:</strong> Hover over the resize edge to see the handle,
      then drag to resize!
    </div>
  </div>
);

/**
 * The default ResizableWrapper with standard settings.
 * This is the most common use case with default constraints.
 */
export const Default: Story = {
  args: {
    minSize: 200,
    maxSize: 500,
    initialSize: 300,
    borderWidth: "4px",
    borderColor: "#ccc",
    activeBorderColor: "#3b82f6",
    resizeSide: "right" as const,
  },
  render: (args) => (
    <ResizableWrapper {...args}>
      <SampleContent />
    </ResizableWrapper>
  ),
};

/**
 * A narrow sidebar configuration with smaller constraints.
 * Perfect for navigation panels or tool palettes.
 */
export const Sidebar: Story = {
  args: {
    minSize: 150,
    maxSize: 400,
    initialSize: 200,
    borderWidth: "3px",
    borderColor: "#dee2e6",
    activeBorderColor: "#28a745",
    resizeSide: "right" as const,
  },
  render: (args) => (
    <ResizableWrapper {...args}>
      <SampleContent
        title="Navigation Panel"
        content="This could be a sidebar with navigation items, filters, or tools. Users can adjust the width to their preference."
      />
    </ResizableWrapper>
  ),
};

/**
 * A wide dashboard widget that can be resized within a larger range.
 * Suitable for content areas that need more flexibility.
 */
export const Dashboard: Story = {
  args: {
    minSize: 300,
    maxSize: 800,
    initialSize: 500,
    borderWidth: "5px",
    borderColor: "#6c757d",
    activeBorderColor: "#dc3545",
    resizeSide: "right" as const,
  },
  render: (args) => (
    <ResizableWrapper {...args}>
      <SampleContent
        title="Dashboard Widget"
        content="This represents a dashboard component that users can resize to fit their workflow. Great for data visualization or content panels."
      />
    </ResizableWrapper>
  ),
};

/**
 * Custom styled wrapper with custom colors and borders.
 * Shows how to integrate with your design system.
 */
export const CustomStyled: Story = {
  args: {
    minSize: 250,
    maxSize: 600,
    initialSize: 350,
    borderWidth: "6px",
    borderColor: "#e7c3ff",
    activeBorderColor: "#9c27b0",
    resizeSide: "right" as const,
    style: {
      border: "2px solid #e7c3ff",
      borderRadius: "12px",
      backgroundColor: "#fafafa",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    },
  },
  render: (args) => (
    <ResizableWrapper {...args}>
      <SampleContent
        title="Custom Styled Panel"
        content="This example shows how you can customize the appearance with your own styles, colors, and borders to match your design system."
      />
    </ResizableWrapper>
  ),
};

/**
 * Multiple resizable components side by side.
 * Demonstrates how multiple instances work together.
 */
export const MultipleComponents: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
      <ResizableWrapper
        minSize={150}
        maxSize={300}
        initialSize={200}
        borderWidth="4px"
        borderColor="#17a2b8"
        activeBorderColor="#138496"
      >
        <SampleContent
          title="Panel A"
          content="First resizable panel. Each component maintains its own state independently."
        />
      </ResizableWrapper>

      <ResizableWrapper
        minSize={200}
        maxSize={400}
        initialSize={250}
        borderWidth="4px"
        borderColor="#ffc107"
        activeBorderColor="#e0a800"
      >
        <SampleContent
          title="Panel B"
          content="Second resizable panel. Notice how each has its own resize handle and constraints."
        />
      </ResizableWrapper>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Multiple ResizableWrapper components can be used together, each maintaining independent state and constraints.",
      },
    },
  },
};

/**
 * Example with rich content including forms and interactive elements.
 * Shows real-world usage with complex content.
 */
export const WithRichContent: Story = {
  args: {
    minSize: 300,
    maxSize: 600,
    initialSize: 400,
    borderWidth: "4px",
    borderColor: "#6f42c1",
    activeBorderColor: "#5a2d91",
    resizeSide: "right" as const,
  },
  render: (args) => (
    <ResizableWrapper {...args}>
      <div style={{ padding: "20px" }}>
        <h3 style={{ marginTop: 0, color: "#2c3e50" }}>User Profile Form</h3>
        <form style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <label
            style={{ display: "flex", flexDirection: "column", gap: "4px" }}
          >
            <span style={{ fontWeight: "bold", color: "#495057" }}>Name:</span>
            <input
              type="text"
              placeholder="Enter your name"
              style={{
                padding: "8px 12px",
                border: "1px solid #ced4da",
                borderRadius: "4px",
                fontSize: "14px",
              }}
            />
          </label>
          <label
            style={{ display: "flex", flexDirection: "column", gap: "4px" }}
          >
            <span style={{ fontWeight: "bold", color: "#495057" }}>Email:</span>
            <input
              type="email"
              placeholder="Enter your email"
              style={{
                padding: "8px 12px",
                border: "1px solid #ced4da",
                borderRadius: "4px",
                fontSize: "14px",
              }}
            />
          </label>
          <label
            style={{ display: "flex", flexDirection: "column", gap: "4px" }}
          >
            <span style={{ fontWeight: "bold", color: "#495057" }}>Bio:</span>
            <textarea
              placeholder="Tell us about yourself"
              rows={3}
              style={{
                padding: "8px 12px",
                border: "1px solid #ced4da",
                borderRadius: "4px",
                fontSize: "14px",
                resize: "vertical",
              }}
            />
          </label>
          <button
            type="submit"
            style={{
              padding: "10px 16px",
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              fontSize: "14px",
              fontWeight: "bold",
            }}
          >
            Save Profile
          </button>
        </form>
      </div>
    </ResizableWrapper>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "The ResizableWrapper works seamlessly with complex content including forms, inputs, and interactive elements.",
      },
    },
  },
};

/**
 * Example showing resize handle on different sides.
 * Demonstrates how the resize handle can appear on any side.
 */
export const DifferentSides: Story = {
  args: {
    minSize: 200,
    maxSize: 500,
    initialSize: 300,
    borderWidth: "4px",
    borderColor: "#6f42c1",
    activeBorderColor: "#5a2d91",
    resizeSide: "right" as const,
  },
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <ResizableWrapper {...args} resizeSide="left">
        <SampleContent
          title="Left Side Handle"
          content="Resize handle on the left side. Drag from the left edge to resize."
        />
      </ResizableWrapper>

      <ResizableWrapper {...args} resizeSide="top">
        <SampleContent
          title="Top Side Handle"
          content="Resize handle on the top side. Drag from the top edge to resize."
        />
      </ResizableWrapper>

      <ResizableWrapper {...args} resizeSide="bottom">
        <SampleContent
          title="Bottom Side Handle"
          content="Resize handle on the bottom side. Drag from the bottom edge to resize."
        />
      </ResizableWrapper>

      <ResizableWrapper {...args} resizeSide="right">
        <SampleContent
          title="Right Side Handle"
          content="Resize handle on the right side (default). Drag from the right edge to resize."
        />
      </ResizableWrapper>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Shows the ResizableWrapper with resize handles on all four sides.",
      },
    },
  },
};

/**
 * Demonstrates vertical resizing capabilities with top and bottom handles.
 * Shows how the component adapts for height-based resizing.
 */
export const VerticalResizing: Story = {
  args: {
    minSize: 150,
    maxSize: 400,
    initialSize: 250,
    fixedSize: 400, // Fixed width when resizing height
    borderWidth: "4px",
    borderColor: "#fd7e14",
    activeBorderColor: "#e55100",
    resizeSide: "bottom" as const,
  },
  render: (args) => (
    <div style={{ display: "flex", gap: "20px" }}>
      <ResizableWrapper {...args} resizeSide="top">
        <SampleContent
          title="Top Handle"
          content="This container can be resized by dragging the top edge. Perfect for panels that need to grow upward."
        />
      </ResizableWrapper>

      <ResizableWrapper {...args} resizeSide="bottom">
        <SampleContent
          title="Bottom Handle"
          content="This container can be resized by dragging the bottom edge. Ideal for expandable content areas."
        />
      </ResizableWrapper>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Showcases vertical resizing with top and bottom handles, useful for height-adjustable panels.",
      },
    },
  },
};

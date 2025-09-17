import type { Meta, StoryObj } from '@storybook/react';
import { ResizableWrapper } from './ResizeWrapper';
import React from 'react';

/**
 * The ResizableWrapper component provides a resizable container with a draggable handle
 * on the right edge. Users can resize the container horizontally within specified constraints.
 *
 * ## Features
 * - **Horizontal Resizing**: Drag the right edge to resize
 * - **Constrained Resizing**: Respects minimum and maximum width limits
 * - **Visual Feedback**: Handle changes color on hover and during resize
 * - **Framework Agnostic**: Uses inline styles for maximum compatibility
 *
 * ## Use Cases
 * - Sidebar panels that users can resize
 * - Adjustable content areas
 * - Responsive layout components
 * - Dashboard widgets with user-controlled sizing
 */
const meta: Meta<typeof ResizableWrapper> = {
  title: 'Components/ResizableWrapper',
  component: ResizableWrapper,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
A flexible resizable container component that allows users to adjust width by dragging the right edge.

### Key Features:
- **Intuitive Interaction**: Simple drag-to-resize functionality
- **Customizable Constraints**: Set minimum and maximum width limits
- **Visual Feedback**: Handle provides clear visual cues
- **Accessible**: Proper cursor changes and visual states
- **TypeScript Support**: Full type safety and IntelliSense support

### Browser Support:
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+
        `,
      },
    },
  },
  argTypes: {
    children: {
      description: 'Content to be wrapped in the resizable container',
      control: false,
    },
    minWidth: {
      description: 'Minimum width in pixels',
      control: { type: 'number', min: 50, max: 1000, step: 10 },
    },
    maxWidth: {
      description: 'Maximum width in pixels',
      control: { type: 'number', min: 100, max: 2000, step: 10 },
    },
    initialWidth: {
      description: 'Initial width in pixels',
      control: { type: 'number', min: 50, max: 1000, step: 10 },
    },
    borderWidth: {
      description: 'Width of the resize handle',
      control: { type: 'select' },
      options: ['2px', '4px', '6px', '8px'],
    },
    borderColor: {
      description: 'Color of the resize handle in normal state',
      control: { type: 'color' },
    },
    activeBorderColor: {
      description: 'Color of the resize handle when active/hovered',
      control: { type: 'color' },
    },
    className: {
      description: 'Additional CSS classes',
      control: { type: 'text' },
    },
    style: {
      description: 'Inline styles for the container',
      control: false,
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ResizableWrapper>;

// Sample content component for consistent demos
const SampleContent: React.FC<{ title?: string; content?: string }> = ({ 
  title = "Resizable Content", 
  content = "This content can be resized by dragging the right edge. Try it out!" 
}) => (
  <div style={{ 
    padding: '20px',
    backgroundColor: '#f8f9fa',
    borderRadius: '8px',
    height: '200px',
    overflow: 'auto'
  }}>
    <h3 style={{ 
      margin: '0 0 12px 0',
      color: '#2c3e50',
      fontSize: '18px'
    }}>
      {title}
    </h3>
    <p style={{ 
      margin: '0 0 12px 0',
      color: '#5a6c7d',
      lineHeight: '1.5'
    }}>
      {content}
    </p>
    <div style={{
      padding: '12px',
      backgroundColor: '#e9ecef',
      borderRadius: '4px',
      fontSize: '14px',
      color: '#6c757d'
    }}>
      💡 <strong>Tip:</strong> Hover over the right edge to see the resize handle, then drag to resize!
    </div>
  </div>
);

/**
 * The default ResizableWrapper with standard settings.
 * This is the most common use case with default constraints.
 */
export const Default: Story = {
  args: {
    minWidth: 200,
    maxWidth: 500,
    initialWidth: 300,
    borderWidth: '4px',
    borderColor: '#ccc',
    activeBorderColor: '#3b82f6',
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
    minWidth: 150,
    maxWidth: 400,
    initialWidth: 200,
    borderWidth: '3px',
    borderColor: '#dee2e6',
    activeBorderColor: '#28a745',
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
    minWidth: 300,
    maxWidth: 800,
    initialWidth: 500,
    borderWidth: '5px',
    borderColor: '#6c757d',
    activeBorderColor: '#dc3545',
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
    minWidth: 250,
    maxWidth: 600,
    initialWidth: 350,
    borderWidth: '6px',
    borderColor: '#e7c3ff',
    activeBorderColor: '#9c27b0',
    style: {
      border: '2px solid #e7c3ff',
      borderRadius: '12px',
      backgroundColor: '#fafafa',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
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
    <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
      <ResizableWrapper
        minWidth={150}
        maxWidth={300}
        initialWidth={200}
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
        minWidth={200}
        maxWidth={400}
        initialWidth={250}
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
        story: 'Multiple ResizableWrapper components can be used together, each maintaining independent state and constraints.',
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
    minWidth: 300,
    maxWidth: 600,
    initialWidth: 400,
    borderWidth: '4px',
    borderColor: '#6f42c1',
    activeBorderColor: '#5a2d91',
  },
  render: (args) => (
    <ResizableWrapper {...args}>
      <div style={{ padding: '20px' }}>
        <h3 style={{ marginTop: 0, color: '#2c3e50' }}>User Profile Form</h3>
        <form style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <label style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <span style={{ fontWeight: 'bold', color: '#495057' }}>Name:</span>
            <input 
              type="text" 
              placeholder="Enter your name"
              style={{ 
                padding: '8px 12px', 
                border: '1px solid #ced4da', 
                borderRadius: '4px',
                fontSize: '14px'
              }}
            />
          </label>
          <label style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <span style={{ fontWeight: 'bold', color: '#495057' }}>Email:</span>
            <input 
              type="email" 
              placeholder="Enter your email"
              style={{ 
                padding: '8px 12px', 
                border: '1px solid #ced4da', 
                borderRadius: '4px',
                fontSize: '14px'
              }}
            />
          </label>
          <label style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <span style={{ fontWeight: 'bold', color: '#495057' }}>Bio:</span>
            <textarea 
              placeholder="Tell us about yourself"
              rows={3}
              style={{ 
                padding: '8px 12px', 
                border: '1px solid #ced4da', 
                borderRadius: '4px',
                fontSize: '14px',
                resize: 'vertical'
              }}
            />
          </label>
          <button 
            type="submit"
            style={{
              padding: '10px 16px',
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: 'bold'
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
        story: 'The ResizableWrapper works seamlessly with complex content including forms, inputs, and interactive elements.',
      },
    },
  },
};

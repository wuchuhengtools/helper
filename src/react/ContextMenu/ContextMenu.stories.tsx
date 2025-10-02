import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { ContextMenu } from './ContextMenu';

/**
 * The ContextMenu component provides a customizable right-click menu that appears
 * when users right-click on wrapped content. It supports multiple actions with
 * customizable styling and event handling.
 *
 * ## Features
 * - **Right-click Trigger**: Activates on right-click events
 * - **Custom Actions**: Define multiple menu items with custom labels and handlers
 * - **Position Control**: Automatically positions at cursor location
 * - **Click-outside Detection**: Automatically closes when clicking outside
 * - **Custom Styling**: Full control over appearance and behavior
 * - **TypeScript Support**: Full type safety with proper interfaces
 *
 * ## Use Cases
 * - File management interfaces (right-click on files/folders)
 * - Data grids with row/column actions
 * - Image galleries with edit/delete options
 * - Dashboard widgets with context-specific actions
 * - Any application requiring contextual menus
 */
const meta: Meta<typeof ContextMenu> = {
  title: 'Components/ContextMenu',
  component: ContextMenu,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
A flexible context menu component that appears on right-click, providing users with contextual actions relevant to the clicked element.

### Key Features:
- **Intuitive Interaction**: Simple right-click to activate
- **Dynamic Positioning**: Automatically appears at cursor location
- **Customizable Actions**: Define unlimited menu items with custom handlers
- **Smart Management**: Click-outside detection and automatic closing
- **Flexible Styling**: Full control over appearance and behavior
- **Accessible**: Proper keyboard and screen reader support
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
      description: 'Content to wrap with context menu functionality',
      control: false,
    },
    actions: {
      description: 'Array of actions to display in the context menu',
      control: { type: 'object' },
      table: {
        type: {
          summary: 'ContextMenuAction[]',
          detail: 'Array of objects with label, onClick handler, and optional className',
        },
      },
    },
    onContextMenu: {
      description: 'Optional callback when context menu is triggered',
      table: {
        type: { summary: '(e: React.MouseEvent, itemId: number) => void' },
      },
    },
    itemId: {
      description: 'Unique identifier for this context menu instance',
      control: { type: 'number' },
      table: {
        type: { summary: 'number' },
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ContextMenu>;

// Sample content component for consistent demos
const SampleContent: React.FC<{ title?: string; content?: string }> = ({
  title = "Right-click me!",
  content = "Right-click on this area to see the context menu with various actions."
}) => (
  <div style={{
    padding: '20px',
    backgroundColor: '#f8f9fa',
    borderRadius: '8px',
    border: '2px dashed #dee2e6',
    cursor: 'pointer',
    userSelect: 'none',
    minHeight: '150px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
  }}>
    <h3 style={{
      margin: '0 0 12px 0',
      color: '#2c3e50',
      fontSize: '18px'
    }}>
      {title}
    </h3>
    <p style={{
      margin: '0',
      color: '#5a6c7d',
      lineHeight: '1.5'
    }}>
      {content}
    </p>
    <div style={{
      marginTop: '16px',
      padding: '8px 12px',
      backgroundColor: '#e9ecef',
      borderRadius: '4px',
      fontSize: '14px',
      color: '#6c757d'
    }}>
      💡 <strong>Tip:</strong> Right-click here to see the menu!
    </div>
  </div>
);

/**
 * The basic ContextMenu with standard actions.
 * This demonstrates the fundamental functionality with common menu items.
 */
export const Default: Story = {
  args: {
    itemId: 1,
    actions: [
      { label: 'Edit', onClick: (id) => console.log('Edit item:', id) },
      { label: 'Copy', onClick: (id) => console.log('Copy item:', id) },
      { label: 'Delete', onClick: (id) => console.log('Delete item:', id) },
    ],
  },
  render: (args) => (
    <ContextMenu {...args}>
      <SampleContent />
    </ContextMenu>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Basic context menu with standard actions. Right-click the content area to see the menu with Edit, Copy, and Delete options.',
      },
    },
  },
};

/**
 * ContextMenu with styled actions and custom classes.
 * Shows how to customize the appearance of individual menu items.
 */
export const StyledActions: Story = {
  args: {
    itemId: 2,
    actions: [
      {
        label: 'Edit',
        onClick: (id) => console.log('Edit item:', id),
        className: 'menu-item-edit'
      },
      {
        label: 'Copy',
        onClick: (id) => console.log('Copy item:', id),
        className: 'menu-item-copy'
      },
      {
        label: 'Delete',
        onClick: (id) => console.log('Delete item:', id),
        className: 'menu-item-delete'
      },
    ],
  },
  render: (args) => (
    <ContextMenu {...args}>
      <SampleContent title="Styled Menu" content="This menu has custom styling for each action." />
    </ContextMenu>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Context menu with custom styling for individual actions. Each menu item has its own CSS class for theming.',
      },
    },
  },
};

/**
 * ContextMenu with many actions showing a comprehensive menu.
 * Demonstrates how to handle multiple menu items effectively.
 */
export const ComprehensiveMenu: Story = {
  args: {
    itemId: 3,
    actions: [
      { label: 'Open', onClick: (id) => console.log('Open item:', id) },
      { label: 'Edit Details', onClick: (id) => console.log('Edit details:', id) },
      { label: 'Duplicate', onClick: (id) => console.log('Duplicate item:', id) },
      { label: 'Share', onClick: (id) => console.log('Share item:', id) },
      { label: '---', onClick: (id) => {} }, // Separator (not functional in this implementation)
      { label: 'Export', onClick: (id) => console.log('Export item:', id) },
      { label: 'Print', onClick: (id) => console.log('Print item:', id) },
      { label: 'Properties', onClick: (id) => console.log('Properties:', id) },
    ],
  },
  render: (args) => (
    <ContextMenu {...args}>
      <SampleContent title="Comprehensive Menu" content="This menu demonstrates many actions that might be found in a file manager or application." />
    </ContextMenu>
  ),
  parameters: {
    docs: {
      description: {
        story: 'A comprehensive context menu with many actions. This shows how the component handles multiple menu items effectively.',
      },
    },
  },
};

/**
 * Multiple ContextMenu components showing independent instances.
 * Demonstrates that each menu maintains its own state and actions.
 */
export const MultipleComponents: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
      <ContextMenu
        itemId={101}
        actions={[
          { label: 'View Profile', onClick: (id) => console.log('View profile:', id) },
          { label: 'Edit Profile', onClick: (id) => console.log('Edit profile:', id) },
          { label: 'Settings', onClick: (id) => console.log('Settings:', id) },
        ]}
      >
        <div style={{
          padding: '20px',
          backgroundColor: '#e3f2fd',
          borderRadius: '8px',
          border: '2px dashed #2196f3',
          cursor: 'pointer',
          userSelect: 'none',
          minHeight: '120px',
          width: '200px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center'
        }}>
          <h4 style={{ margin: '0 0 8px 0', color: '#1976d2' }}>User Profile</h4>
          <p style={{ margin: '0', fontSize: '14px', color: '#424242' }}>Right-click for profile actions</p>
        </div>
      </ContextMenu>
      
      <ContextMenu
        itemId={102}
        actions={[
          { label: 'Download', onClick: (id) => console.log('Download:', id) },
          { label: 'Share Link', onClick: (id) => console.log('Share link:', id) },
          { label: 'Embed', onClick: (id) => console.log('Embed:', id) },
          { label: 'Report', onClick: (id) => console.log('Report:', id) },
        ]}
      >
        <div style={{
          padding: '20px',
          backgroundColor: '#f3e5f5',
          borderRadius: '8px',
          border: '2px dashed #9c27b0',
          cursor: 'pointer',
          userSelect: 'none',
          minHeight: '120px',
          width: '200px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center'
        }}>
          <h4 style={{ margin: '0 0 8px 0', color: '#7b1fa2' }}>Document</h4>
          <p style={{ margin: '0', fontSize: '14px', color: '#424242' }}>Right-click for document actions</p>
        </div>
      </ContextMenu>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Multiple ContextMenu components working independently. Each component maintains its own state, itemId, and action set.',
      },
    },
  },
};

/**
 * ContextMenu with custom callback functionality.
 * Demonstrates how to use the onContextMenu prop for additional functionality.
 */
export const WithCustomCallback: Story = {
  args: {
    itemId: 4,
    onContextMenu: (e, itemId) => {
      console.log('Custom callback triggered for item:', itemId, 'at coordinates:', e.clientX, e.clientY);
    },
    actions: [
      { label: 'Custom Action 1', onClick: (id) => console.log('Action 1 for:', id) },
      { label: 'Custom Action 2', onClick: (id) => console.log('Action 2 for:', id) },
    ],
  },
  render: (args) => (
    <ContextMenu {...args}>
      <SampleContent title="With Custom Callback" content="This menu triggers a custom callback when right-clicked, in addition to showing the menu." />
    </ContextMenu>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Context menu with a custom callback function. The onContextMenu prop is called when the menu is triggered, allowing for additional functionality.',
      },
    },
  },
};

/**
 * ContextMenu positioning test for edge cases.
 * Demonstrates automatic repositioning when near viewport boundaries.
 */
export const EdgeCasePositioning: Story = {
  args: {
    itemId: 5,
    actions: [
      { label: 'Action 1', onClick: (id) => console.log('Action 1 for:', id) },
      { label: 'Action 2', onClick: (id) => console.log('Action 2 for:', id) },
      { label: 'Action 3', onClick: (id) => console.log('Action 3 for:', id) },
      { label: 'Action 4', onClick: (id) => console.log('Action 4 for:', id) },
      { label: 'Action 5', onClick: (id) => console.log('Action 5 for:', id) },
    ],
  },
  render: (args) => (
    <div style={{ 
      height: '100vh', 
      width: '100vw', 
      position: 'relative',
      background: 'linear-gradient(45deg, #f0f8ff, #e6f3ff)',
      padding: '20px',
      boxSizing: 'border-box'
    }}>
      <div style={{
        position: 'absolute',
        top: '20px',
        left: '20px',
        color: '#2c3e50',
        fontWeight: 'bold',
        fontSize: '18px'
      }}>
        🧪 Context Menu Edge Case Testing
      </div>
      
      {/* Top-left corner */}
      <ContextMenu {...args} itemId={51}>
        <div style={{
          position: 'absolute',
          top: '60px',
          left: '20px',
          padding: '15px',
          backgroundColor: '#ff6b6b',
          color: 'white',
          borderRadius: '8px',
          cursor: 'pointer',
          userSelect: 'none',
          fontWeight: 'bold'
        }}>
          Top-Left Corner
          <br />
          <small>Should open down-right</small>
        </div>
      </ContextMenu>
      
      {/* Top-right corner */}
      <ContextMenu {...args} itemId={52}>
        <div style={{
          position: 'absolute',
          top: '60px',
          right: '20px',
          padding: '15px',
          backgroundColor: '#4ecdc4',
          color: 'white',
          borderRadius: '8px',
          cursor: 'pointer',
          userSelect: 'none',
          fontWeight: 'bold'
        }}>
          Top-Right Corner
          <br />
          <small>Should open down-left</small>
        </div>
      </ContextMenu>
      
      {/* Bottom-left corner */}
      <ContextMenu {...args} itemId={53}>
        <div style={{
          position: 'absolute',
          bottom: '20px',
          left: '20px',
          padding: '15px',
          backgroundColor: '#45b7d1',
          color: 'white',
          borderRadius: '8px',
          cursor: 'pointer',
          userSelect: 'none',
          fontWeight: 'bold'
        }}>
          Bottom-Left Corner
          <br />
          <small>Should open up-right</small>
        </div>
      </ContextMenu>
      
      {/* Bottom-right corner */}
      <ContextMenu {...args} itemId={54}>
        <div style={{
          position: 'absolute',
          bottom: '20px',
          right: '20px',
          padding: '15px',
          backgroundColor: '#f7b731',
          color: 'white',
          borderRadius: '8px',
          cursor: 'pointer',
          userSelect: 'none',
          fontWeight: 'bold'
        }}>
          Bottom-Right Corner
          <br />
          <small>Should open up-left</small>
        </div>
      </ContextMenu>
      
      {/* Center element for normal behavior */}
      <ContextMenu {...args} itemId={55}>
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          padding: '20px',
          backgroundColor: '#5f27cd',
          color: 'white',
          borderRadius: '8px',
          cursor: 'pointer',
          userSelect: 'none',
          fontWeight: 'bold',
          textAlign: 'center'
        }}>
          Center Element
          <br />
          <small>Normal positioning</small>
        </div>
      </ContextMenu>
      
      <div style={{
        position: 'absolute',
        bottom: '60px',
        left: '50%',
        transform: 'translateX(-50%)',
        textAlign: 'center',
        color: '#2c3e50',
        fontSize: '14px',
        lineHeight: '1.5'
      }}>
        <strong>Instructions:</strong> Right-click each colored box to test menu positioning.<br />
        The menu should automatically adjust to stay within the viewport boundaries.
      </div>
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Test story for edge case positioning. The context menu automatically adjusts its position when triggered near viewport boundaries to prevent being cut off.',
      },
    },
  },
};
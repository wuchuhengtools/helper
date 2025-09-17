import type { Meta, StoryObj } from '@storybook/react';
import React, { useState, useEffect } from 'react';

import { VisibleAreaReporter, type VisibleAreaInput } from './VisibleAreaReporter';

/**
 * The VisibleAreaReporter component provides real-time monitoring of an element's visible area.
 * It uses ResizeObserver API to track position and size changes, making it perfect for
 * applications that need to know exactly where and how much content is visible.
 *
 * ## Features
 * - **Real-time Tracking**: Monitors position and size changes using ResizeObserver
 * - **Precise Coordinates**: Provides exact x, y coordinates relative to viewport
 * - **Dimension Monitoring**: Tracks width and height changes
 * - **Flexible Content**: Can wrap any React component or content
 * - **TypeScript Support**: Full type safety with VisibleAreaInput interface
 * - **Error Handling**: Graceful handling of calculation failures
 *
 * ## Use Cases
 * - Dashboard analytics and heatmaps
 * - Image cropping and selection tools
 * - Lazy loading with precise viewport detection
 * - Interactive overlays and tooltips
 * - Performance monitoring and optimization
 * - Accessibility improvements based on visibility
 */
const meta: Meta<typeof VisibleAreaReporter> = {
  title: 'Components/VisibleAreaReporter',
  component: VisibleAreaReporter,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
A powerful React component that monitors and reports the visible area of its content in real-time.

### Key Features:
- **Real-time Monitoring**: Uses ResizeObserver API for precise tracking
- **Position Accuracy**: Provides exact x, y coordinates relative to viewport
- **Dimension Tracking**: Monitors width and height changes
- **Flexible Integration**: Works with any React content or components
- **Performance Optimized**: Efficient observation with automatic cleanup
- **Error Resilient**: Graceful handling of edge cases and failures
- **TypeScript Support**: Full type safety with proper interfaces

### Browser Support:
- Chrome 64+ (with ResizeObserver support)
- Firefox 69+
- Safari 13.1+
- Edge 79+

### Dependencies:
- React 16.8+ (for hooks support)
- ResizeObserver API (polyfill may be needed for older browsers)
        `,
      },
    },
  },
  argTypes: {
    children: {
      description: 'Content to be wrapped and monitored for visibility',
      control: false,
    },
    onChange: {
      description: 'Callback invoked when visible area changes',
      table: {
        type: { summary: '(area: VisibleAreaInput) => void' },
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof VisibleAreaReporter>;

// Area display component for visual feedback
const AreaDisplay: React.FC<{ area: VisibleAreaInput | null; title?: string }> = ({ 
  area, 
  title = "Visible Area Information" 
}) => (
  <div style={{
    padding: '16px',
    backgroundColor: '#f8f9fa',
    borderRadius: '8px',
    border: '1px solid #dee2e6',
    fontSize: '14px',
    fontFamily: 'monospace',
    marginTop: '12px'
  }}>
    <h4 style={{ margin: '0 0 8px 0', color: '#495057' }}>{title}</h4>
    {area ? (
      <div>
        <div>Position: ({area.x}, {area.y})</div>
        <div>Size: {area.width} × {area.height}</div>
        <div>Area: {area.width * area.height}px²</div>
      </div>
    ) : (
      <div style={{ color: '#6c757d' }}>Calculating area...</div>
    )}
  </div>
);

/**
 * Basic usage of VisibleAreaReporter with simple content.
 * Demonstrates fundamental functionality with position tracking.
 */
export const Basic: Story = {
  args: {
    onChange: (area) => console.log('Visible area changed:', area),
  },
  render: (args) => (
    <div style={{ width: '100%', height: '300px', border: '2px solid #007bff', borderRadius: '8px' }}>
      <VisibleAreaReporter {...args}>
        <div style={{
          padding: '20px',
          backgroundColor: '#e3f2fd',
          borderRadius: '6px',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center'
        }}>
          <h3 style={{ margin: '0 0 16px 0', color: '#1976d2' }}>Tracked Content</h3>
          <p style={{ margin: '0', color: '#424242', lineHeight: '1.5' }}>
            This content is being monitored for visible area changes.
          </p>
          <div style={{
            marginTop: '20px',
            padding: '12px',
            backgroundColor: '#bbdefb',
            borderRadius: '4px',
            fontSize: '14px'
          }}>
            Resize the browser window to see real-time updates!
          </div>
        </div>
      </VisibleAreaReporter>
      <AreaDisplay area={null} />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Basic usage of VisibleAreaReporter with simple content. The component monitors the visible area and logs changes to the console.',
      },
    },
  },
};

/**
 * VisibleAreaReporter with live area display.
 * Shows how to display the tracked area information in real-time.
 */
export const WithLiveDisplay: Story = {
  args: {},
  render: () => {
    const [area, setArea] = useState<VisibleAreaInput | null>(null);

    return (
      <div style={{ width: '100%', height: '400px', border: '2px solid #28a745', borderRadius: '8px' }}>
        <VisibleAreaReporter onChange={setArea}>
          <div style={{
            padding: '24px',
            backgroundColor: '#d4edda',
            borderRadius: '8px',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center'
          }}>
            <h3 style={{ margin: '0 0 20px 0', color: '#155724' }}>Live Area Tracking</h3>
            <p style={{ margin: '0 0 16px 0', color: '#155724', lineHeight: '1.5' }}>
              This content tracks its visible area in real-time.
            </p>
            <div style={{
              padding: '16px',
              backgroundColor: '#c3e6cb',
              borderRadius: '6px',
              fontSize: '14px',
              maxWidth: '300px'
            }}>
              Try resizing this container or the browser window to see the area information update below!
            </div>
          </div>
        </VisibleAreaReporter>
        <AreaDisplay area={area} title="Live Area Data" />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'VisibleAreaReporter with live area display. This example shows how to capture and display the tracked area information in real-time using React state.',
      },
    },
  },
};

/**
 * Multiple VisibleAreaReporter instances working independently.
 * Demonstrates how multiple components can track different areas simultaneously.
 */
export const MultipleReporters: Story = {
  args: {},
  render: () => {
    const [area1, setArea1] = useState<VisibleAreaInput | null>(null);
    const [area2, setArea2] = useState<VisibleAreaInput | null>(null);

    return (
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        <div style={{ width: '300px', height: '250px', border: '2px solid #ffc107', borderRadius: '8px' }}>
          <VisibleAreaReporter onChange={setArea1}>
            <div style={{
              padding: '16px',
              backgroundColor: '#fff3cd',
              borderRadius: '6px',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center'
            }}>
              <h4 style={{ margin: '0 0 12px 0', color: '#856404' }}>Panel A</h4>
              <p style={{ margin: '0', fontSize: '14px', color: '#856404' }}>
                First tracked area
              </p>
            </div>
          </VisibleAreaReporter>
          <AreaDisplay area={area1} title="Panel A Area" />
        </div>

        <div style={{ width: '300px', height: '250px', border: '2px solid #dc3545', borderRadius: '8px' }}>
          <VisibleAreaReporter onChange={setArea2}>
            <div style={{
              padding: '16px',
              backgroundColor: '#f8d7da',
              borderRadius: '6px',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center'
            }}>
              <h4 style={{ margin: '0 0 12px 0', color: '#721c24' }}>Panel B</h4>
              <p style={{ margin: '0', fontSize: '14px', color: '#721c24' }}>
                Second tracked area
              </p>
            </div>
          </VisibleAreaReporter>
          <AreaDisplay area={area2} title="Panel B Area" />
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Multiple VisibleAreaReporter instances working independently. Each component tracks its own area and maintains separate state, demonstrating how the component can be used multiple times in the same application.',
      },
    },
  },
};

/**
 * VisibleAreaReporter with complex content and interactive elements.
 * Shows real-world usage with forms, buttons, and dynamic content.
 */
export const WithComplexContent: Story = {
  args: {},
  render: () => {
    const [area, setArea] = useState<VisibleAreaInput | null>(null);
    const [count, setCount] = useState(0);

    return (
      <div style={{ width: '100%', height: '500px', border: '2px solid #6f42c1', borderRadius: '8px' }}>
        <VisibleAreaReporter onChange={setArea}>
          <div style={{
            padding: '24px',
            backgroundColor: '#f3e5f5',
            borderRadius: '8px',
            height: '100%',
            overflow: 'auto'
          }}>
            <h3 style={{ margin: '0 0 20px 0', color: '#4a148c' }}>Interactive Dashboard</h3>
            
            <div style={{ marginBottom: '20px' }}>
              <button 
                onClick={() => setCount(count + 1)}
                style={{
                  padding: '10px 16px',
                  backgroundColor: '#6f42c1',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontSize: '14px'
                }}
              >
                Click me! ({count})
              </button>
            </div>

            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
              gap: '16px',
              marginBottom: '20px'
            }}>
              {[1, 2, 3, 4].map((item) => (
                <div 
                  key={item}
                  style={{
                    padding: '16px',
                    backgroundColor: '#e1bee7',
                    borderRadius: '6px',
                    textAlign: 'center'
                  }}
                >
                  <h4 style={{ margin: '0 0 8px 0', color: '#4a148c' }}>Item {item}</h4>
                  <p style={{ margin: 0, fontSize: '14px', color: '#6a1b9a' }}>
                    Dynamic content area
                  </p>
                </div>
              ))}
            </div>

            <div style={{
              padding: '16px',
              backgroundColor: '#ce93d8',
              borderRadius: '6px',
              fontSize: '14px'
            }}>
              <strong>Tip:</strong> This complex content demonstrates how VisibleAreaReporter works with 
              interactive elements, dynamic content, and various layout patterns.
            </div>
          </div>
        </VisibleAreaReporter>
        <AreaDisplay area={area} title="Dashboard Area" />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'VisibleAreaReporter with complex content and interactive elements. This example demonstrates real-world usage with forms, buttons, dynamic content, and various layout patterns.',
      },
    },
  },
};

/**
 * Integration example with scrollable content.
 * Shows how to track visible area of content that can be scrolled.
 */
export const WithScrollableContent: Story = {
  args: {},
  render: () => {
    const [area, setArea] = useState<VisibleAreaInput | null>(null);

    return (
      <div style={{ width: '100%', height: '400px', border: '2px solid #17a2b8', borderRadius: '8px' }}>
        <VisibleAreaReporter onChange={setArea}>
          <div style={{
            padding: '20px',
            backgroundColor: '#d1ecf1',
            borderRadius: '6px',
            height: '100%',
            overflow: 'auto',
            maxHeight: '100%'
          }}>
            <h3 style={{ margin: '0 0 16px 0', color: '#0c5460' }}>Scrollable Content Area</h3>
            
            <div style={{ marginBottom: '20px' }}>
              <p style={{ margin: '0 0 12px 0', lineHeight: '1.5' }}>
                This content area can be scrolled. The VisibleAreaReporter will track the 
                visible portion of this container as you scroll.
              </p>
            </div>

            {/* Long content to enable scrolling */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {Array.from({ length: 20 }, (_, i) => (
                <div 
                  key={i}
                  style={{
                    padding: '16px',
                    backgroundColor: '#bee5eb',
                    borderRadius: '6px',
                    borderLeft: '4px solid #17a2b8'
                  }}
                >
                  <h4 style={{ margin: '0 0 8px 0', color: '#0c5460' }}>Content Item {i + 1}</h4>
                  <p style={{ margin: 0, fontSize: '14px', color: '#0c5460' }}>
                    This is scrollable content item {i + 1}. Try scrolling up and down to see 
                    how the visible area tracking works with scrollable content.
                  </p>
                </div>
              ))}
            </div>

            <div style={{
              marginTop: '20px',
              padding: '12px',
              backgroundColor: '#bee5eb',
              borderRadius: '4px',
              fontSize: '14px',
              textAlign: 'center'
            }}>
              💡 Scroll to see the visible area change in real-time!
            </div>
          </div>
        </VisibleAreaReporter>
        <AreaDisplay area={area} title="Scrollable Area" />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Integration example with scrollable content. This demonstrates how VisibleAreaReporter works with scrollable content and tracks the visible portion as users scroll.',
      },
    },
  },
};
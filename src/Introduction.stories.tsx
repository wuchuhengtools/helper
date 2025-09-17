import type { Meta } from '@storybook/react';
import React from 'react';

const meta: Meta = {
  title: 'Introduction',
  parameters: {
    docs: {
      page: () => (
        <div style={{ padding: '2rem', maxWidth: '800px' }}>
          <h1 style={{ color: '#2c3e50', marginBottom: '1rem' }}>
            Welcome to @wuchuheng/helper
          </h1>
          
          <p style={{ fontSize: '1.1rem', color: '#666', marginBottom: '2rem' }}>
            A modern collection of React components and utilities designed to simplify 
            common UI patterns and interactions.
          </p>

          <div style={{ 
            backgroundColor: '#f8f9fa', 
            border: '1px solid #e9ecef',
            borderRadius: '8px',
            padding: '1.5rem',
            marginBottom: '2rem'
          }}>
            <h2 style={{ marginTop: 0, color: '#495057' }}>🚀 Quick Start</h2>
            <pre style={{ 
              backgroundColor: '#343a40',
              color: '#f8f9fa',
              padding: '1rem',
              borderRadius: '4px',
              fontSize: '0.9rem',
              overflow: 'auto'
            }}>
{`npm install @wuchuheng/helper

import { ResizableWrapper } from '@wuchuheng/helper';

function App() {
  return (
    <ResizableWrapper
      minWidth={200}
      maxWidth={600}
      initialWidth={300}
    >
      <div>Your resizable content here!</div>
    </ResizableWrapper>
  );
}`}
            </pre>
          </div>

          <h2 style={{ color: '#2c3e50' }}>📦 Components</h2>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '1rem',
            marginBottom: '2rem'
          }}>
            <div style={{ 
              border: '1px solid #e9ecef',
              borderRadius: '8px',
              padding: '1rem',
              backgroundColor: '#fff'
            }}>
              <h3 style={{ marginTop: 0, color: '#007bff' }}>ResizableWrapper</h3>
              <p style={{ color: '#666', fontSize: '0.9rem' }}>
                A flexible container that allows horizontal resizing via drag interaction.
                Perfect for sidebars, panels, and adjustable layouts.
              </p>
              <ul style={{ color: '#666', fontSize: '0.85rem', paddingLeft: '1rem' }}>
                <li>Drag-to-resize functionality</li>
                <li>Customizable constraints</li>
                <li>Visual feedback</li>
                <li>TypeScript support</li>
              </ul>
            </div>
          </div>

          <h2 style={{ color: '#2c3e50' }}>✨ Key Features</h2>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1rem',
            marginBottom: '2rem'
          }}>
            {[
              { icon: '🎯', title: 'TypeScript Ready', desc: 'Full type safety and IntelliSense support' },
              { icon: '🎨', title: 'Customizable', desc: 'Extensive styling and behavior options' },
              { icon: '⚡', title: 'Performant', desc: 'Optimized event handling and rendering' },
              { icon: '📱', title: 'Framework Agnostic', desc: 'Uses inline styles for compatibility' },
            ].map(feature => (
              <div key={feature.title} style={{ 
                padding: '1rem',
                borderLeft: '4px solid #007bff',
                backgroundColor: '#f8f9fa',
                borderRadius: '0 4px 4px 0'
              }}>
                <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{feature.icon}</div>
                <h4 style={{ margin: '0 0 0.5rem 0', color: '#2c3e50' }}>{feature.title}</h4>
                <p style={{ margin: 0, color: '#666', fontSize: '0.85rem' }}>{feature.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ 
            backgroundColor: '#d4edda',
            border: '1px solid #c3e6cb',
            borderRadius: '8px',
            padding: '1rem',
            marginBottom: '2rem'
          }}>
            <h3 style={{ marginTop: 0, color: '#155724' }}>
              💡 Interactive Documentation
            </h3>
            <p style={{ margin: 0, color: '#155724' }}>
              This Storybook provides interactive examples where you can test components 
              with different props and see real-time results. Use the Controls panel to 
              experiment with different configurations!
            </p>
          </div>

          <h2 style={{ color: '#2c3e50' }}>📚 Navigation</h2>
          <p style={{ color: '#666' }}>
            Use the sidebar to explore different components and their variations:
          </p>
          <ul style={{ color: '#666' }}>
            <li><strong>Components/ResizableWrapper</strong> - Interactive examples and documentation</li>
            <li><strong>Controls Panel</strong> - Adjust props dynamically (bottom panel)</li>
            <li><strong>Docs Tab</strong> - Comprehensive API documentation</li>
          </ul>

          <div style={{ 
            marginTop: '3rem',
            padding: '1rem',
            backgroundColor: '#f8f9fa',
            borderRadius: '8px',
            textAlign: 'center'
          }}>
            <p style={{ margin: 0, color: '#666', fontSize: '0.9rem' }}>
              Built with ❤️ using React, TypeScript, and Storybook
            </p>
          </div>
        </div>
      ),
    },
  },
};

export default meta;

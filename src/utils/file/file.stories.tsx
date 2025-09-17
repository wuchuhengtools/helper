import React from 'react';
import { fileToBase64 } from './index';
import { TypescriptCodeBlock } from '../../../.storybook/CodeBlock';

export default {
  title: 'Utils/File',
  component: null,
};

export const BasicUsage = () => {
  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      try {
        const base64 = await fileToBase64(file);
        console.log('Base64 result:', base64);
        alert('File converted to base64! Check console for result.');
      } catch (error) {
        console.error('Error converting file:', error);
        alert('Error converting file. Check console for details.');
      }
    }
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h3>File to Base64 Converter</h3>
      <input 
        type="file" 
        onChange={handleFileChange}
        style={{ margin: '10px 0' }}
      />
      <p>Select a file to convert to base64</p>
      <p>Result will appear in the browser console</p>
    </div>
  );
};

export const TextFileExample = () => {
  const createTextFile = async () => {
    const file = new File(['Hello, World!'], 'hello.txt', { type: 'text/plain' });
    try {
      const base64 = await fileToBase64(file);
      console.log('Text file base64:', base64);
      alert('Text file converted! Check console for base64 result.');
    } catch (error) {
      console.error('Error converting text file:', error);
    }
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h3>Text File Example</h3>
      <button 
        onClick={createTextFile}
        style={{ 
          padding: '10px 20px', 
          backgroundColor: '#007bff', 
          color: 'white', 
          border: 'none', 
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Convert Text File to Base64
      </button>
      <p style={{ marginTop: '10px' }}>
        This creates a sample text file and converts it to base64
      </p>
    </div>
  );
};

export const ImageFileExample = () => {
  const createImageFile = async () => {
    // Create a simple canvas with a colored rectangle
    const canvas = document.createElement('canvas');
    canvas.width = 100;
    canvas.height = 100;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.fillStyle = '#ff0000';
      ctx.fillRect(0, 0, 100, 100);
      ctx.fillStyle = '#ffffff';
      ctx.font = '20px Arial';
      ctx.fillText('IMG', 25, 55);
    }
    
    try {
      const blob = await new Promise<Blob | null>((resolve) => canvas.toBlob(resolve));
      if (blob) {
        const file = new File([blob], 'test.png', { type: 'image/png' });
        const base64 = await fileToBase64(file);
        console.log('Image file base64:', base64);
        alert('Image file converted! Check console for base64 result.');
      }
    } catch (error) {
      console.error('Error converting image file:', error);
    }
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h3>Image File Example</h3>
      <button 
        onClick={createImageFile}
        style={{ 
          padding: '10px 20px', 
          backgroundColor: '#28a745', 
          color: 'white', 
          border: 'none', 
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Convert Image File to Base64
      </button>
      <p style={{ marginTop: '10px' }}>
        This creates a sample image file and converts it to base64
      </p>
    </div>
  );
};

export const ErrorHandling = () => {
  const simulateError = async () => {
    // Create a mock file that will cause an error
    const file = new File(['test'], 'test.txt');
    
    // Mock FileReader to simulate error
    const originalFileReader = global.FileReader;
    global.FileReader = class extends FileReader {
      readAsDataURL() {
        setTimeout(() => {
          if (this.onerror) {
            this.onerror(new ProgressEvent('error') as any);
          }
        }, 100);
      }
    } as any;

    try {
      await fileToBase64(file);
    } catch (error) {
      console.error('Expected error caught:', error);
      alert('Error properly handled! Check console for details.');
    } finally {
      // Restore original FileReader
      global.FileReader = originalFileReader;
    }
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h3>Error Handling Example</h3>
      <button 
        onClick={simulateError}
        style={{ 
          padding: '10px 20px', 
          backgroundColor: '#dc3545', 
          color: 'white', 
          border: 'none', 
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Test Error Handling
      </button>
      <p style={{ marginTop: '10px' }}>
        This demonstrates how the function handles file reading errors
      </p>
    </div>
  );
};

export const UsageExample = () => {
  const codeExample = `
import { fileToBase64 } from '@wuchuheng/helper/utils/file';

// Convert a user-selected file
const fileInput = document.querySelector('input[type="file"]');
const file = fileInput.files[0];

try {
  const base64 = await fileToBase64(file);
  console.log('Base64 result:', base64);
  // Use the base64 string for display or upload
} catch (error) {
  console.error('Error converting file:', error);
}
`;

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h3>Code Example</h3>
      <TypescriptCodeBlock>

        {codeExample}
      </TypescriptCodeBlock>
        
      <p style={{ marginTop: '10px' }}>
        Basic usage pattern for fileToBase64 function
      </p>
    </div>
  );
};
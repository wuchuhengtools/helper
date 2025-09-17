import React, { useState } from 'react';
import { copyStringToClipboard } from './index';
import { TypescriptCodeBlock } from '../../../.storybook/CodeBlock';

export default {
  title: 'Utils/Clipboard',
  component: null,
};

export const BasicUsage = () => {
  const [textToCopy, setTextToCopy] = useState('Hello, World!');
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    copyStringToClipboard(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h3>Basic Clipboard Usage</h3>
      
      <div style={{ marginBottom: '15px' }}>
        <label htmlFor="textInput" style={{ display: 'block', marginBottom: '5px' }}>
          Text to copy:
        </label>
        <input
          id="textInput"
          type="text"
          value={textToCopy}
          onChange={(e) => setTextToCopy(e.target.value)}
          style={{
            width: '100%',
            padding: '8px',
            border: '1px solid #ddd',
            borderRadius: '4px'
          }}
        />
      </div>
      
      <button
        onClick={handleCopy}
        style={{
          padding: '10px 20px',
          backgroundColor: copied ? '#28a745' : '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          marginBottom: '15px'
        }}
      >
        {copied ? 'Copied!' : 'Copy to Clipboard'}
      </button>
      
      <div style={{
        padding: '10px',
        backgroundColor: copied ? '#d4edda' : '#f8f9fa',
        border: '1px solid ' + (copied ? '#c3e6cb' : '#ddd'),
        borderRadius: '4px',
        fontSize: '14px'
      }}>
        {copied ? '✓ Text copied to clipboard!' : 'Click the button to copy text to clipboard'}
      </div>
    </div>
  );
};

export const LongTextExample = () => {
  const longText = `This is a longer text example that demonstrates how the clipboard utility handles longer content. It includes multiple sentences and various types of content to ensure it works properly with different text lengths and formats.

The function should be able to copy any string content to the clipboard, regardless of length or content type. This includes special characters, numbers, and unicode characters.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`;

  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    copyStringToClipboard(longText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h3>Long Text Example</h3>
      
      <div style={{ marginBottom: '15px', maxHeight: '150px', overflow: 'auto' }}>
        <p style={{ margin: 0, whiteSpace: 'pre-wrap', fontSize: '14px' }}>
          {longText}
        </p>
      </div>
      
      <button
        onClick={handleCopy}
        style={{
          padding: '10px 20px',
          backgroundColor: copied ? '#28a745' : '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          marginBottom: '15px'
        }}
      >
        {copied ? 'Copied!' : 'Copy Long Text'}
      </button>
      
      <div style={{ 
        padding: '10px', 
        backgroundColor: copied ? '#d4edda' : '#f8f9fa',
        border: '1px solid ' + (copied ? '#c3e6cb' : '#ddd'),
        borderRadius: '4px',
        fontSize: '14px'
      }}>
        {copied ? '✓ Long text copied to clipboard!' : 'This demonstrates copying longer text content'}
      </div>
    </div>
  );
};

export const SpecialCharacters = () => {
  const testCases = [
    { name: 'Email', text: 'user@example.com' },
    { name: 'URL', text: 'https://example.com/path?query=value#fragment' },
    { name: 'JSON', text: '{"name": "John", "age": 30, "city": "New York"}' },
    { name: 'Special Chars', text: 'Hello, World! @#$%^&*()_+-=[]{}|;:,.<>?' },
    { name: 'Unicode', text: 'こんにちは 🌍 Hello 世界! 🎉' },
    { name: 'Numbers', text: '12345 67890 3.14159 -42' }
  ];

  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = (text: string) => {
    copyStringToClipboard(text);
    setCopiedIndex(testCases.findIndex(tc => tc.text === text));
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h3>Special Characters & Unicode</h3>
      <p style={{ marginBottom: '15px' }}>
        Test copying text with various special characters and unicode:
      </p>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr)', gap: '10px' }}>
        {testCases.map((testCase, index) => (
          <div 
            key={index}
            style={{
              padding: '15px',
              border: '1px solid #ddd',
              borderRadius: '4px',
              backgroundColor: '#f8f9fa'
            }}
          >
            <h4 style={{ margin: '0 0 10px 0', fontSize: '16px' }}>{testCase.name}</h4>
            <p 
              style={{ 
                margin: '0 0 10px 0', 
                fontSize: '14px',
                wordBreak: 'break-all',
                fontFamily: 'monospace'
              }}
            >
              {testCase.text}
            </p>
            <button
              onClick={() => handleCopy(testCase.text)}
              style={{
                padding: '8px 16px',
                backgroundColor: copiedIndex === index ? '#28a745' : '#007bff',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '14px'
              }}
            >
              {copiedIndex === index ? 'Copied!' : 'Copy'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export const PasswordExample = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [copiedPassword, setCopiedPassword] = useState(false);
  const [copiedConfirm, setCopiedConfirm] = useState(false);

  const handleCopyPassword = () => {
    if (password) {
      copyStringToClipboard(password);
      setCopiedPassword(true);
      setTimeout(() => setCopiedPassword(false), 2000);
    }
  };

  const handleCopyConfirm = () => {
    if (confirmPassword) {
      copyStringToClipboard(confirmPassword);
      setCopiedConfirm(true);
      setTimeout(() => setCopiedConfirm(false), 2000);
    }
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h3>Password Example</h3>
      <p style={{ marginBottom: '15px' }}>
        Demonstrate copying sensitive information (passwords are not actually stored, this is just for demonstration):
      </p>
      
      <div style={{ marginBottom: '15px' }}>
        <label htmlFor="password" style={{ display: 'block', marginBottom: '5px' }}>
          Password:
        </label>
        <div style={{ display: 'flex', gap: '10px' }}>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              flex: 1,
              padding: '8px',
              border: '1px solid #ddd',
              borderRadius: '4px'
            }}
          />
          <button
            onClick={handleCopyPassword}
            disabled={!password}
            style={{
              padding: '8px 16px',
              backgroundColor: copiedPassword ? '#28a745' : (password ? '#007bff' : '#6c757d'),
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: password ? 'pointer' : 'not-allowed',
              minWidth: '80px'
            }}
          >
            {copiedPassword ? 'Copied!' : 'Copy'}
          </button>
        </div>
      </div>
      
      <div style={{ marginBottom: '15px' }}>
        <label htmlFor="confirmPassword" style={{ display: 'block', marginBottom: '5px' }}>
          Confirm Password:
        </label>
        <div style={{ display: 'flex', gap: '10px' }}>
          <input
            id="confirmPassword"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            style={{
              flex: 1,
              padding: '8px',
              border: '1px solid #ddd',
              borderRadius: '4px'
            }}
          />
          <button
            onClick={handleCopyConfirm}
            disabled={!confirmPassword}
            style={{
              padding: '8px 16px',
              backgroundColor: copiedConfirm ? '#28a745' : (confirmPassword ? '#007bff' : '#6c757d'),
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: confirmPassword ? 'pointer' : 'not-allowed',
              minWidth: '80px'
            }}
          >
            {copiedConfirm ? 'Copied!' : 'Copy'}
          </button>
        </div>
      </div>
      
      <div style={{ 
        padding: '10px', 
        backgroundColor: '#fff3cd',
        border: '1px solid #ffeaa7',
        borderRadius: '4px',
        fontSize: '14px'
      }}>
        ⚠️ Note: This is a demonstration. In real applications, be careful when copying sensitive information to clipboard.
      </div>
    </div>
  );
};

export const UsageExample = () => {
  const codeExample = `
import { copyStringToClipboard } from '@wuchuheng/helper/utils/clipboard';

// Basic usage
copyStringToClipboard('Hello, World!');

// Copy user input
const userInput = document.getElementById('input').value;
copyStringToClipboard(userInput);

// Copy complex data
const data = JSON.stringify({ user: 'John', settings: { theme: 'dark' } });
copyStringToClipboard(data);

// Handle copy operation
try {
  copyStringToClipboard(text);
  console.log('Text copied successfully!');
} catch (error) {
  console.error('Failed to copy text:', error);
}
`;

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h3>Usage Example</h3>
      
      <div style={{ marginBottom: '15px' }}>
        <h4 style={{ color: '#007bff', marginBottom: '10px' }}>Code Example</h4>
        <TypescriptCodeBlock>

          {codeExample}
        </TypescriptCodeBlock>
      </div>
      
      <div style={{ 
        padding: '15px', 
        backgroundColor: '#e7f3ff',
        border: '1px solid #b3d9ff',
        borderRadius: '4px'
      }}>
        <h4 style={{ margin: '0 0 10px 0', color: '#0066cc' }}>Key Points:</h4>
        <ul style={{ margin: 0, paddingLeft: '20px' }}>
          <li>Creates a temporary textarea element</li>
          <li>Sets the text value to be copied</li>
          <li>Selects the text programmatically</li>
          <li>Uses document.execCommand('copy')</li>
          <li>Cleans up by removing the temporary element</li>
          <li>Works in all modern browsers</li>
        </ul>
      </div>
    </div>
  );
};
import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { TypescriptCodeBlock } from "../../../.storybook/CodeBlock";
import { waitElementPromise, waitAllElementPromise } from "./index";

const meta: Meta = {
  title: "Utils/DOM Helper",
  parameters: {
    docs: {
      description: {
        component: "DOM utility functions for waiting for elements to appear in the DOM."
      }
    }
  }
};

export default meta;
type Story = StoryObj;

export const WaitElementPromise: Story = {
  render: () => {
    const [result, setResult] = useState<string>("");
    const [isLoading, setIsLoading] = useState(false);

    const handleWaitForElement = async () => {
      setIsLoading(true);
      setResult("");
      
      // Create a test element after a delay to demonstrate the function
      setTimeout(() => {
        const testDiv = document.createElement("div");
        testDiv.id = "test-element";
        testDiv.textContent = "I'm the test element!";
        testDiv.style.padding = "10px";
        testDiv.style.backgroundColor = "#e0f2fe";
        testDiv.style.border = "1px solid #0284c7";
        testDiv.style.borderRadius = "4px";
        document.body.appendChild(testDiv);
      }, 2000);

      try {
        const element = await waitElementPromise<HTMLDivElement>("#test-element", 5000);
        setResult(`Element found: ${element.tagName} with id="${element.id}"`);
        
        // Clean up
        setTimeout(() => {
          element.remove();
        }, 3000);
      } catch (error) {
        setResult(`Error: ${error instanceof Error ? error.message : 'Unknown error'}`);
      } finally {
        setIsLoading(false);
      }
    };

    return (
      <div style={{ padding: "20px" }}>
        <h3>waitElementPromise</h3>
        <p>Waits for a single element to appear in the DOM and returns a promise.</p>
        
        <TypescriptCodeBlock>
{`// Wait for an element to appear
const element = await waitElementPromise<HTMLDivElement>("#my-element", 5000);
console.log("Element found:", element);`}
        </TypescriptCodeBlock>

        <div style={{ marginTop: "20px" }}>
          <button 
            onClick={handleWaitForElement}
            disabled={isLoading}
            style={{
              padding: "10px 20px",
              backgroundColor: isLoading ? "#9ca3af" : "#3b82f6",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: isLoading ? "not-allowed" : "pointer"
            }}
          >
            {isLoading ? "Waiting for element..." : "Test waitElementPromise"}
          </button>
          
          {result && (
            <div style={{ 
              marginTop: "10px", 
              padding: "10px", 
              backgroundColor: result.startsWith("Error") ? "#fef2f2" : "#f0fdf4",
              border: `1px solid ${result.startsWith("Error") ? "#fca5a5" : "#86efac"}`,
              borderRadius: "4px"
            }}>
              {result}
            </div>
          )}
        </div>
      </div>
    );
  }
};

export const WaitAllElementPromise: Story = {
  render: () => {
    const [result, setResult] = useState<string>("");
    const [isLoading, setIsLoading] = useState(false);

    const handleWaitForElements = async () => {
      setIsLoading(true);
      setResult("");
      
      // Create multiple test elements after a delay
      setTimeout(() => {
        for (let i = 1; i <= 3; i++) {
          const testDiv = document.createElement("div");
          testDiv.className = "test-multiple-element";
          testDiv.textContent = `Test element ${i}`;
          testDiv.style.padding = "8px";
          testDiv.style.margin = "4px";
          testDiv.style.backgroundColor = "#fef3c7";
          testDiv.style.border = "1px solid #f59e0b";
          testDiv.style.borderRadius = "4px";
          testDiv.style.display = "inline-block";
          document.body.appendChild(testDiv);
        }
      }, 2000);

      try {
        const elements = await waitAllElementPromise<HTMLDivElement>(".test-multiple-element", 5000);
        setResult(`Found ${elements.length} elements: ${elements.map(el => el.textContent).join(", ")}`);
        
        // Clean up
        setTimeout(() => {
          elements.forEach(el => el.remove());
        }, 3000);
      } catch (error) {
        setResult(`Error: ${error instanceof Error ? error.message : 'Unknown error'}`);
      } finally {
        setIsLoading(false);
      }
    };

    return (
      <div style={{ padding: "20px" }}>
        <h3>waitAllElementPromise</h3>
        <p>Waits for multiple elements to appear in the DOM and returns a promise with an array of elements.</p>
        
        <TypescriptCodeBlock>
{`// Wait for multiple elements to appear
const elements = await waitAllElementPromise<HTMLDivElement>(".my-class", 5000);
console.log("Elements found:", elements.length);`}
        </TypescriptCodeBlock>

        <div style={{ marginTop: "20px" }}>
          <button 
            onClick={handleWaitForElements}
            disabled={isLoading}
            style={{
              padding: "10px 20px",
              backgroundColor: isLoading ? "#9ca3af" : "#10b981",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: isLoading ? "not-allowed" : "pointer"
            }}
          >
            {isLoading ? "Waiting for elements..." : "Test waitAllElementPromise"}
          </button>
          
          {result && (
            <div style={{ 
              marginTop: "10px", 
              padding: "10px", 
              backgroundColor: result.startsWith("Error") ? "#fef2f2" : "#f0fdf4",
              border: `1px solid ${result.startsWith("Error") ? "#fca5a5" : "#86efac"}`,
              borderRadius: "4px"
            }}>
              {result}
            </div>
          )}
        </div>
      </div>
    );
  }
};

export const RealWorldScenarios: Story = {
  render: () => {
    const [scenario, setScenario] = useState<string>("");
    const [isRunning, setIsRunning] = useState(false);
    const [logs, setLogs] = useState<string[]>([]);

    const addLog = (message: string) => {
      setLogs(prev => [...prev, `${new Date().toLocaleTimeString()}: ${message}`]);
    };

    const scenarios = {
      formValidation: async () => {
        addLog("Starting form validation scenario...");
        
        // Create a form dynamically
        const form = document.createElement('form');
        form.id = 'dynamic-form';
        form.innerHTML = `
          <input type="email" name="email" placeholder="Enter email" required>
          <button type="submit">Submit</button>
        `;
        form.style.cssText = 'padding: 20px; border: 1px solid #ccc; margin: 10px 0;';
        
        setTimeout(() => {
          document.body.appendChild(form);
          addLog("Form added to DOM");
        }, 1000);

        try {
          const formElement = await waitElementPromise<HTMLFormElement>('#dynamic-form', 5000);
          addLog("Form found successfully!");
          
          const emailInput = await waitElementPromise<HTMLInputElement>('input[name="email"]', 2000);
          addLog("Email input found!");
          
          emailInput.value = 'user@example.com';
          addLog("Email value set");
          
          setTimeout(() => {
            formElement.remove();
            addLog("Form removed from DOM");
          }, 3000);
          
        } catch (error) {
          addLog(`Error: ${error instanceof Error ? error.message : 'Unknown error'}`);
        }
      },

      dynamicContent: async () => {
        addLog("Starting dynamic content loading scenario...");
        
        // Simulate loading multiple content blocks
        const contentIds = ['content-1', 'content-2', 'content-3'];
        
        contentIds.forEach((id, index) => {
          setTimeout(() => {
            const div = document.createElement('div');
            div.id = id;
            div.className = 'dynamic-content';
            div.textContent = `Dynamic content ${index + 1}`;
            div.style.cssText = 'padding: 10px; margin: 5px; background: #e3f2fd; border-radius: 4px;';
            document.body.appendChild(div);
            addLog(`Added ${id} to DOM`);
          }, (index + 1) * 500);
        });

        try {
          const allContent = await waitAllElementPromise<HTMLDivElement>('.dynamic-content', 5000);
          addLog(`Found all ${allContent.length} content blocks!`);
          
          // Process each content block
          allContent.forEach((element, index) => {
            element.style.background = '#c8e6c9';
            addLog(`Processed content block ${index + 1}`);
          });
          
          setTimeout(() => {
            allContent.forEach(el => el.remove());
            addLog("All content blocks removed");
          }, 3000);
          
        } catch (error) {
          addLog(`Error: ${error instanceof Error ? error.message : 'Unknown error'}`);
        }
      },

      modalDialog: async () => {
        addLog("Starting modal dialog scenario...");
        
        // Create modal backdrop and dialog
        setTimeout(() => {
          const backdrop = document.createElement('div');
          backdrop.id = 'modal-backdrop';
          backdrop.style.cssText = `
            position: fixed; top: 0; left: 0; width: 100%; height: 100%;
            background: rgba(0,0,0,0.5); z-index: 1000; display: flex;
            align-items: center; justify-content: center;
          `;
          
          const modal = document.createElement('div');
          modal.id = 'modal-dialog';
          modal.innerHTML = `
            <h3>Modal Dialog</h3>
            <p>This is a dynamically created modal.</p>
            <button id="modal-close">Close</button>
          `;
          modal.style.cssText = `
            background: white; padding: 20px; border-radius: 8px;
            max-width: 400px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);
          `;
          
          backdrop.appendChild(modal);
          document.body.appendChild(backdrop);
          addLog("Modal created and added to DOM");
        }, 800);

        try {
          const modalDialog = await waitElementPromise<HTMLDivElement>('#modal-dialog', 3000);
          addLog("Modal dialog found!");
          
          const closeButton = await waitElementPromise<HTMLButtonElement>('#modal-close', 1000);
          addLog("Close button found!");
          
          // Auto-close after 2 seconds
          setTimeout(() => {
            const backdrop = document.getElementById('modal-backdrop');
            if (backdrop) {
              backdrop.remove();
              addLog("Modal closed automatically");
            }
          }, 2000);
          
        } catch (error) {
          addLog(`Error: ${error instanceof Error ? error.message : 'Unknown error'}`);
        }
      }
    };

    const runScenario = async (scenarioName: keyof typeof scenarios) => {
      setIsRunning(true);
      setLogs([]);
      setScenario(scenarioName);
      
      try {
        await scenarios[scenarioName]();
      } finally {
        setIsRunning(false);
      }
    };

    return (
      <div style={{ padding: "20px" }}>
        <h3>Real-World Scenarios</h3>
        <p>Interactive examples showing common use cases for DOM waiting utilities.</p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '10px', marginBottom: '20px' }}>
          <button
            onClick={() => runScenario('formValidation')}
            disabled={isRunning}
            style={{
              padding: '12px',
              backgroundColor: isRunning ? '#6c757d' : '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: isRunning ? 'not-allowed' : 'pointer'
            }}
          >
            Form Validation
          </button>
          
          <button
            onClick={() => runScenario('dynamicContent')}
            disabled={isRunning}
            style={{
              padding: '12px',
              backgroundColor: isRunning ? '#6c757d' : '#28a745',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: isRunning ? 'not-allowed' : 'pointer'
            }}
          >
            Dynamic Content
          </button>
          
          <button
            onClick={() => runScenario('modalDialog')}
            disabled={isRunning}
            style={{
              padding: '12px',
              backgroundColor: isRunning ? '#6c757d' : '#17a2b8',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: isRunning ? 'not-allowed' : 'pointer'
            }}
          >
            Modal Dialog
          </button>
        </div>
        
        <div style={{ 
          maxHeight: '300px', 
          overflow: 'auto', 
          border: '1px solid #ddd', 
          borderRadius: '4px',
          backgroundColor: '#f8f9fa'
        }}>
          {logs.length > 0 ? (
            logs.map((log, index) => (
              <div 
                key={index} 
                style={{ 
                  padding: '8px 12px', 
                  borderBottom: index < logs.length - 1 ? '1px solid #eee' : 'none',
                  fontFamily: 'monospace',
                  fontSize: '14px'
                }}
              >
                {log}
              </div>
            ))
          ) : (
            <div style={{ padding: '20px', textAlign: 'center', color: '#6c757d' }}>
              Select a scenario to see it in action...
            </div>
          )}
        </div>
      </div>
    );
  }
};

export const ErrorHandling: Story = {
  render: () => {
    const [result, setResult] = useState<string>("");
    const [isRunning, setIsRunning] = useState(false);

    const testTimeoutError = async () => {
      setIsRunning(true);
      setResult("");
      
      try {
        // Try to find a non-existent element with a short timeout
        await waitElementPromise('#non-existent-element', 2000);
        setResult("This shouldn't happen - element was found!");
      } catch (error) {
        setResult(`Timeout error caught: ${error instanceof Error ? error.message : 'Unknown error'}`);
      } finally {
        setIsRunning(false);
      }
    };

    const testRecoveryPattern = async () => {
      setIsRunning(true);
      setResult("");
      
      try {
        // First try with short timeout
        const element = await waitElementPromise('#maybe-element', 1000);
        setResult("Element found on first try!");
      } catch (error) {
        setResult("First attempt failed, trying fallback...");
        
        // Create fallback element
        setTimeout(() => {
          const fallback = document.createElement('div');
          fallback.id = 'fallback-element';
          fallback.textContent = 'Fallback element created';
          fallback.style.cssText = 'padding: 10px; background: #fff3cd; border: 1px solid #ffeaa7; border-radius: 4px; margin: 10px 0;';
          document.body.appendChild(fallback);
          
          setTimeout(() => fallback.remove(), 3000);
        }, 500);
        
        try {
          const fallbackElement = await waitElementPromise('#fallback-element', 3000);
          setResult("Successfully recovered with fallback element!");
        } catch (fallbackError) {
          setResult("Both primary and fallback attempts failed");
        }
      } finally {
        setIsRunning(false);
      }
    };

    return (
      <div style={{ padding: "20px" }}>
        <h3>Error Handling Examples</h3>
        <p>Learn how to handle timeouts and implement recovery patterns.</p>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '20px' }}>
          <button
            onClick={testTimeoutError}
            disabled={isRunning}
            style={{
              padding: '12px',
              backgroundColor: isRunning ? '#6c757d' : '#dc3545',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: isRunning ? 'not-allowed' : 'pointer'
            }}
          >
            Test Timeout Error
          </button>
          
          <button
            onClick={testRecoveryPattern}
            disabled={isRunning}
            style={{
              padding: '12px',
              backgroundColor: isRunning ? '#6c757d' : '#fd7e14',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: isRunning ? 'not-allowed' : 'pointer'
            }}
          >
            Test Recovery Pattern
          </button>
        </div>
        
        {result && (
          <div style={{ 
            padding: '15px',
            backgroundColor: result.includes('error') || result.includes('failed') ? '#f8d7da' : '#d4edda',
            border: `1px solid ${result.includes('error') || result.includes('failed') ? '#f5c6cb' : '#c3e6cb'}`,
            borderRadius: '4px',
            fontFamily: 'monospace'
          }}>
            {result}
          </div>
        )}
      </div>
    );
  }
};

export const PerformanceComparison: Story = {
  render: () => {
    const [results, setResults] = useState<{polling: number | null, mutation: number | null}>({
      polling: null,
      mutation: null
    });
    const [isRunning, setIsRunning] = useState(false);

    const runPerformanceTest = async () => {
      setIsRunning(true);
      setResults({ polling: null, mutation: null });
      
      // Test with mutation observer (our implementation)
      const mutationStart = performance.now();
      
      setTimeout(() => {
        const element = document.createElement('div');
        element.id = 'perf-test-element';
        element.textContent = 'Performance test element';
        element.style.cssText = 'padding: 10px; background: #e3f2fd; margin: 10px 0; border-radius: 4px;';
        document.body.appendChild(element);
      }, 1000);
      
      try {
        await waitElementPromise('#perf-test-element', 5000);
        const mutationEnd = performance.now();
        
        setResults(prev => ({ ...prev, mutation: mutationEnd - mutationStart }));
        
        // Clean up
        const element = document.getElementById('perf-test-element');
        if (element) element.remove();
        
      } catch (error) {
        console.error('Performance test failed:', error);
      } finally {
        setIsRunning(false);
      }
    };

    return (
      <div style={{ padding: "20px" }}>
        <h3>Performance Insights</h3>
        <p>Understanding the performance characteristics of DOM waiting utilities.</p>
        
        <button
          onClick={runPerformanceTest}
          disabled={isRunning}
          style={{
            padding: '12px 24px',
            backgroundColor: isRunning ? '#6c757d' : '#6f42c1',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: isRunning ? 'not-allowed' : 'pointer',
            marginBottom: '20px'
          }}
        >
          {isRunning ? 'Running Performance Test...' : 'Run Performance Test'}
        </button>
        
        {results.mutation !== null && (
          <div style={{ 
            padding: '15px',
            backgroundColor: '#f8f9fa',
            border: '1px solid #dee2e6',
            borderRadius: '4px',
            marginBottom: '20px'
          }}>
            <h4>Test Results:</h4>
            <p>Time to detect element: <strong>{results.mutation.toFixed(2)}ms</strong></p>
            <p style={{ fontSize: '14px', color: '#6c757d' }}>
              Our implementation uses MutationObserver for efficient DOM watching with minimal performance impact.
            </p>
          </div>
        )}
        
        <div style={{ padding: '15px', backgroundColor: '#fff3cd', border: '1px solid #ffeaa7', borderRadius: '4px' }}>
          <h4>💡 Performance Tips:</h4>
          <ul style={{ margin: 0, paddingLeft: '20px' }}>
            <li>Use specific selectors to minimize false positives</li>
            <li>Set appropriate timeouts to avoid hanging operations</li>
            <li>Consider using <code>waitAllElementPromise</code> when you need multiple elements</li>
            <li>Always handle timeout errors gracefully</li>
          </ul>
        </div>
      </div>
    );
  }
};

export const UsageExamples: Story = {
  render: () => {
    const codeExamples = {
      basic: `import { waitElementPromise, waitAllElementPromise } from '@wuchuheng/helper/utils/dom.helper';

// Wait for a single element
try {
  const button = await waitElementPromise<HTMLButtonElement>('#submit-btn');
  button.click();
} catch (error) {
  console.error('Button not found:', error);
}

// Wait for multiple elements
try {
  const items = await waitAllElementPromise<HTMLLIElement>('.list-item');
  console.log(\`Found \${items.length} list items\`);
} catch (error) {
  console.error('List items not found:', error);
}`,

      forms: `import { waitElementPromise, waitAllElementPromise } from '@wuchuheng/helper/utils/dom.helper';

// Form validation workflow
async function validateForm() {
  try {
    // Wait for form to be available
    const form = await waitElementPromise<HTMLFormElement>('#registration-form');
    
    // Wait for all required inputs
    const requiredInputs = await waitAllElementPromise<HTMLInputElement>(
      'input[required]'
    );
    
    // Validate each input
    const isValid = requiredInputs.every(input => input.value.trim() !== '');
    
    if (isValid) {
      form.submit();
    } else {
      console.log('Please fill all required fields');
    }
  } catch (error) {
    console.error('Form validation failed:', error);
  }
}`,

      spa: `import { waitElementPromise, waitAllElementPromise } from '@wuchuheng/helper/utils/dom.helper';

// Single Page Application navigation
async function navigateToPage(route: string) {
  // Trigger navigation
  history.pushState({}, '', route);
  
  try {
    // Wait for new page content to load
    const pageContent = await waitElementPromise(\`[data-page="\${route}"]\`, 5000);
    
    // Wait for all lazy-loaded components
    const lazyComponents = await waitAllElementPromise('.lazy-component', 3000);
    
    console.log(\`Page \${route} loaded with \${lazyComponents.length} components\`);
    
    // Initialize page-specific functionality
    initializePageFeatures(pageContent);
  } catch (error) {
    console.error(\`Failed to load page \${route}:, error\`);
    showErrorPage();
  }
}`,

      modal: `import { waitElementPromise } from '@wuchuheng/helper/utils/dom.helper';

// Modal dialog handling
async function openModal(modalId: string) {
  // Trigger modal open
  showModal(modalId);
  
  try {
    // Wait for modal to be rendered
    const modal = await waitElementPromise(\`#\${modalId}\`, 2000);
    
    // Wait for modal content to be ready
    const modalContent = await waitElementPromise('.modal-content', 1000);
    
    // Focus first input if available
    const firstInput = modal.querySelector<HTMLInputElement>('input, textarea, select');
    if (firstInput) {
      firstInput.focus();
    }
    
    // Setup close handlers
    const closeButton = await waitElementPromise('.modal-close');
    closeButton.addEventListener('click', () => closeModal(modalId));
    
  } catch (error) {
    console.error('Failed to open modal:', error);
  }
}`,

      testing: `import { waitElementPromise, waitAllElementPromise } from '@wuchuheng/helper/utils/dom.helper';

// Testing dynamic content
async function testDynamicContent() {
  // Trigger content load
  loadDynamicContent();
  
  try {
    // Wait for loading indicator
    const loader = await waitElementPromise('.loading-spinner', 1000);
    console.log('Loading started');
    
    // Wait for content to appear (loader should disappear)
    const content = await waitElementPromise('.dynamic-content', 10000);
    
    // Verify all expected elements are present
    const cards = await waitAllElementPromise('.content-card', 2000);
    
    // Run assertions
    expect(cards.length).toBeGreaterThan(0);
    expect(content.textContent).not.toBe('');
    
    console.log('Dynamic content test passed');
  } catch (error) {
    console.error('Dynamic content test failed:', error);
    throw error;
  }
}`,

      errorRecovery: `import { waitElementPromise } from '@wuchuheng/helper/utils/dom.helper';

// Error recovery pattern
async function robustElementWait(selector: string, maxAttempts = 3) {
  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      const element = await waitElementPromise(selector, 3000);
      return element;
    } catch (error) {
      console.warn(\`Attempt \${attempt} failed for selector \${selector}\`);
      
      if (attempt === maxAttempts) {
        // Final attempt failed - try fallback
        try {
          const fallback = await waitElementPromise('.fallback-element', 2000);
          console.log('Using fallback element');
          return fallback;
        } catch (fallbackError) {
          throw new Error(\`All attempts failed for \${selector}\`);
        }
      }
      
      // Wait before retry
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
  }
}`
    };

    return (
      <div style={{ padding: "20px" }}>
        <h3>Comprehensive Usage Examples</h3>
        
        <div style={{ marginBottom: '30px' }}>
          <h4 style={{ color: '#0066cc', marginBottom: '10px' }}>🔰 Basic Usage</h4>
          <TypescriptCodeBlock>{codeExamples.basic}</TypescriptCodeBlock>
        </div>
        
        <div style={{ marginBottom: '30px' }}>
          <h4 style={{ color: '#28a745', marginBottom: '10px' }}>📋 Form Handling</h4>
          <TypescriptCodeBlock>{codeExamples.forms}</TypescriptCodeBlock>
        </div>
        
        <div style={{ marginBottom: '30px' }}>
          <h4 style={{ color: '#17a2b8', marginBottom: '10px' }}>🌐 SPA Navigation</h4>
          <TypescriptCodeBlock>{codeExamples.spa}</TypescriptCodeBlock>
        </div>
        
        <div style={{ marginBottom: '30px' }}>
          <h4 style={{ color: '#6f42c1', marginBottom: '10px' }}>🪟 Modal Dialogs</h4>
          <TypescriptCodeBlock>{codeExamples.modal}</TypescriptCodeBlock>
        </div>
        
        <div style={{ marginBottom: '30px' }}>
          <h4 style={{ color: '#fd7e14', marginBottom: '10px' }}>🧪 Testing Scenarios</h4>
          <TypescriptCodeBlock>{codeExamples.testing}</TypescriptCodeBlock>
        </div>
        
        <div>
          <h4 style={{ color: '#dc3545', marginBottom: '10px' }}>🛡️ Error Recovery</h4>
          <TypescriptCodeBlock>{codeExamples.errorRecovery}</TypescriptCodeBlock>
        </div>
      </div>
    );
  }
};

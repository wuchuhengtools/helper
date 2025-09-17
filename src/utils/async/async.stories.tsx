import React, { useState, useEffect } from 'react';
import { sleep } from './index';
import { TypescriptCodeBlock } from '../../../.storybook/CodeBlock';

export default {
  title: 'Utils/Async',
  component: null,
};

export const BasicSleep = () => {
  const [isSleeping, setIsSleeping] = useState(false);
  const [sleepTime, setSleepTime] = useState(1000);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [endTime, setEndTime] = useState<number | null>(null);

  const handleSleep = async () => {
    setIsSleeping(true);
    setStartTime(Date.now());
    setEndTime(null);
    
    await sleep(sleepTime);
    
    setEndTime(Date.now());
    setIsSleeping(false);
  };

  const formatDuration = (start: number, end: number) => {
    return `${end - start}ms`;
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h3>Basic Sleep Example</h3>
      <p style={{ marginBottom: '15px' }}>
        Click the button to pause execution for the specified duration.
      </p>
      
      <div style={{ marginBottom: '15px' }}>
        <label htmlFor="sleepDuration" style={{ display: 'block', marginBottom: '5px' }}>
          Sleep Duration (ms):
        </label>
        <input
          id="sleepDuration"
          type="range"
          min="100"
          max="3000"
          step="100"
          value={sleepTime}
          onChange={(e) => setSleepTime(parseInt(e.target.value))}
          style={{ width: '100%' }}
        />
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px' }}>
          <span>100ms</span>
          <span style={{ fontWeight: 'bold' }}>{sleepTime}ms</span>
          <span>3000ms</span>
        </div>
      </div>
      
      <button
        onClick={handleSleep}
        disabled={isSleeping}
        style={{
          padding: '12px 24px',
          fontSize: '16px',
          backgroundColor: isSleeping ? '#6c757d' : '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: isSleeping ? 'not-allowed' : 'pointer',
          marginBottom: '20px'
        }}
      >
        {isSleeping ? 'Sleeping...' : 'Start Sleep'}
      </button>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
        <div style={{ padding: '15px', backgroundColor: '#f8f9fa', borderRadius: '4px' }}>
          <h4>Status:</h4>
          <p style={{ margin: '5px 0', fontSize: '18px', fontWeight: 'bold' }}>
            {isSleeping ? 'Sleeping' : 'Awake'}
          </p>
        </div>
        
        {startTime && endTime && (
          <div style={{ padding: '15px', backgroundColor: '#d4edda', borderRadius: '4px' }}>
            <h4>Duration:</h4>
            <p style={{ margin: '5px 0', fontSize: '18px', fontWeight: 'bold' }}>
              {formatDuration(startTime, endTime)}
            </p>
          </div>
        )}
      </div>
      
      {startTime && !endTime && (
        <div style={{ marginTop: '15px', padding: '15px', backgroundColor: '#fff3cd', borderRadius: '4px' }}>
          <h4>Sleep started at:</h4>
          <p style={{ margin: '0', fontFamily: 'monospace' }}>
            {new Date(startTime).toLocaleTimeString()}
          </p>
        </div>
      )}
    </div>
  );
};

export const SequentialSleeps = () => {
  const [logs, setLogs] = useState<string[]>([]);
  const [isRunning, setIsRunning] = useState(false);

  const runSequentialSleeps = async () => {
    setIsRunning(true);
    setLogs([]);
    
    const addLog = (message: string) => {
      setLogs(prev => [...prev, `${new Date().toLocaleTimeString()}: ${message}`]);
    };

    addLog('Starting sequential sleeps...');
    
    try {
      addLog('Starting first sleep (500ms)');
      await sleep(500);
      addLog('First sleep completed');
      
      addLog('Starting second sleep (1000ms)');
      await sleep(1000);
      addLog('Second sleep completed');
      
      addLog('Starting third sleep (1500ms)');
      await sleep(1500);
      addLog('Third sleep completed');
      
      addLog('All sleeps completed!');
    } catch (error) {
      addLog(`Error: ${error}`);
    } finally {
      setIsRunning(false);
    }
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h3>Sequential Sleeps</h3>
      <p style={{ marginBottom: '15px' }}>
        Execute multiple sleeps in sequence, waiting for each to complete before starting the next.
      </p>
      
      <button
        onClick={runSequentialSleeps}
        disabled={isRunning}
        style={{
          padding: '12px 24px',
          fontSize: '16px',
          backgroundColor: isRunning ? '#6c757d' : '#28a745',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: isRunning ? 'not-allowed' : 'pointer',
          marginBottom: '20px'
        }}
      >
        {isRunning ? 'Running...' : 'Run Sequential Sleeps'}
      </button>
      
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
            Logs will appear here...
          </div>
        )}
      </div>
    </div>
  );
};

export const ParallelSleeps = () => {
  const [sleepStatus, setSleepStatus] = useState({
    sleep1: false,
    sleep2: false,
    sleep3: false
  });
  const [isRunning, setIsRunning] = useState(false);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [endTime, setEndTime] = useState<number | null>(null);

  const runParallelSleeps = async () => {
    setIsRunning(true);
    setSleepStatus({ sleep1: false, sleep2: false, sleep3: false });
    setStartTime(Date.now());
    setEndTime(null);

    const sleep1 = sleep(500).then(() => setSleepStatus(prev => ({ ...prev, sleep1: true })));
    const sleep2 = sleep(1000).then(() => setSleepStatus(prev => ({ ...prev, sleep2: true })));
    const sleep3 = sleep(1500).then(() => setSleepStatus(prev => ({ ...prev, sleep3: true })));

    try {
      await Promise.all([sleep1, sleep2, sleep3]);
      setEndTime(Date.now());
    } finally {
      setIsRunning(false);
    }
  };

  const allComplete = sleepStatus.sleep1 && sleepStatus.sleep2 && sleepStatus.sleep3;

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h3>Parallel Sleeps</h3>
      <p style={{ marginBottom: '15px' }}>
        Run multiple sleeps in parallel using Promise.all. All sleeps start at the same time.
      </p>
      
      <button
        onClick={runParallelSleeps}
        disabled={isRunning}
        style={{
          padding: '12px 24px',
          fontSize: '16px',
          backgroundColor: isRunning ? '#6c757d' : '#17a2b8',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: isRunning ? 'not-allowed' : 'pointer',
          marginBottom: '20px'
        }}
      >
        {isRunning ? 'Running...' : 'Run Parallel Sleeps'}
      </button>
      
      <div style={{ marginBottom: '20px' }}>
        <h4>Sleep Status:</h4>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
          <div style={{ 
            padding: '15px', 
            borderRadius: '4px',
            backgroundColor: sleepStatus.sleep1 ? '#d4edda' : '#f8f9fa',
            border: sleepStatus.sleep1 ? '1px solid #c3e6cb' : '1px solid #dee2e6'
          }}>
            <h5>Sleep 1</h5>
            <p style={{ margin: 0, fontWeight: 'bold' }}>
              {sleepStatus.sleep1 ? '✓ Complete (500ms)' : 'Running...'}
            </p>
          </div>
          
          <div style={{ 
            padding: '15px', 
            borderRadius: '4px',
            backgroundColor: sleepStatus.sleep2 ? '#d4edda' : '#f8f9fa',
            border: sleepStatus.sleep2 ? '1px solid #c3e6cb' : '1px solid #dee2e6'
          }}>
            <h5>Sleep 2</h5>
            <p style={{ margin: 0, fontWeight: 'bold' }}>
              {sleepStatus.sleep2 ? '✓ Complete (1000ms)' : 'Running...'}
            </p>
          </div>
          
          <div style={{ 
            padding: '15px', 
            borderRadius: '4px',
            backgroundColor: sleepStatus.sleep3 ? '#d4edda' : '#f8f9fa',
            border: sleepStatus.sleep3 ? '1px solid #c3e6cb' : '1px solid #dee2e6'
          }}>
            <h5>Sleep 3</h5>
            <p style={{ margin: 0, fontWeight: 'bold' }}>
              {sleepStatus.sleep3 ? '✓ Complete (1500ms)' : 'Running...'}
            </p>
          </div>
        </div>
      </div>
      
      {startTime && (
        <div style={{ padding: '15px', backgroundColor: allComplete ? '#d4edda' : '#fff3cd', borderRadius: '4px' }}>
          <h4>Performance:</h4>
          <p style={{ margin: 0 }}>
            {allComplete ? 
              `All sleeps completed in ${endTime! - startTime}ms (parallel execution)` :
              `Running... Started at ${new Date(startTime).toLocaleTimeString()}`
            }
          </p>
          <p style={{ margin: 0, fontSize: '14px', marginTop: '5px' }}>
            Sequential would take: 3000ms | Parallel takes: ~1500ms
          </p>
        </div>
      )}
    </div>
  );
};

export const SleepWithProgress = () => {
  const [sleepDuration, setSleepDuration] = useState(3000);
  const [isSleeping, setIsSleeping] = useState(false);
  const [progress, setProgress] = useState(0);
  const [elapsed, setElapsed] = useState(0);

  const runSleepWithProgress = async () => {
    setIsSleeping(true);
    setProgress(0);
    setElapsed(0);
    
    const startTime = Date.now();
    const interval = 50; // Update progress every 50ms
    
    const progressInterval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const newProgress = Math.min((elapsed / sleepDuration) * 100, 100);
      setProgress(newProgress);
      setElapsed(elapsed);
      
      if (newProgress >= 100) {
        clearInterval(progressInterval);
      }
    }, interval);
    
    await sleep(sleepDuration);
    clearInterval(progressInterval);
    setIsSleeping(false);
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h3>Sleep with Progress</h3>
      <p style={{ marginBottom: '15px' }}>
        Visualize the sleep progress with a real-time progress bar.
      </p>
      
      <div style={{ marginBottom: '15px' }}>
        <label htmlFor="sleepProgress" style={{ display: 'block', marginBottom: '5px' }}>
          Sleep Duration:
        </label>
        <input
          id="sleepProgress"
          type="range"
          min="1000"
          max="5000"
          step="500"
          value={sleepDuration}
          onChange={(e) => setSleepDuration(parseInt(e.target.value))}
          style={{ width: '100%' }}
        />
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px' }}>
          <span>1s</span>
          <span style={{ fontWeight: 'bold' }}>{sleepDuration / 1000}s</span>
          <span>5s</span>
        </div>
      </div>
      
      <button
        onClick={runSleepWithProgress}
        disabled={isSleeping}
        style={{
          padding: '12px 24px',
          fontSize: '16px',
          backgroundColor: isSleeping ? '#6c757d' : '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: isSleeping ? 'not-allowed' : 'pointer',
          marginBottom: '20px',
          width: '100%'
        }}
      >
        {isSleeping ? 'Sleeping...' : 'Start Sleep with Progress'}
      </button>
      
      <div style={{ marginBottom: '15px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
          <span>Progress</span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div style={{
          width: '100%',
          height: '20px',
          backgroundColor: '#e9ecef',
          borderRadius: '10px',
          overflow: 'hidden'
        }}>
          <div style={{
            width: `${progress}%`,
            height: '100%',
            backgroundColor: isSleeping ? '#007bff' : '#28a745',
            borderRadius: '10px',
            transition: 'width 0.1s ease'
          }} />
        </div>
      </div>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
        <div style={{ padding: '15px', backgroundColor: '#f8f9fa', borderRadius: '4px' }}>
          <h4>Elapsed:</h4>
          <p style={{ margin: 0, fontSize: '18px', fontWeight: 'bold' }}>
            {elapsed}ms
          </p>
        </div>
        
        <div style={{ padding: '15px', backgroundColor: '#f8f9fa', borderRadius: '4px' }}>
          <h4>Remaining:</h4>
          <p style={{ margin: 0, fontSize: '18px', fontWeight: 'bold' }}>
            {Math.max(sleepDuration - elapsed, 0)}ms
          </p>
        </div>
      </div>
    </div>
  );
};

export const UsageExample = () => {
  const codeExamples = {
    basic: `
import { sleep } from '@wuchuheng/helper/utils/async';

// Basic usage
await sleep(1000); // Wait for 1 second

// In an async function
async function delayedAction() {
  console.log('Starting...');
  await sleep(2000);
  console.log('2 seconds later');
}

// With error handling
try {
  await sleep(500);
  console.log('Sleep completed successfully');
} catch (error) {
  console.error('Sleep failed:', error);
}
    `,
    sequential: `
import { sleep } from '@wuchuheng/helper/utils/async';

// Sequential operations
async function processData() {
  console.log('Step 1');
  await sleep(1000);
  
  console.log('Step 2');
  await sleep(500);
  
  console.log('Step 3');
  await sleep(1500);
  
  console.log('All steps completed');
}
    `,
    parallel: `
import { sleep } from '@wuchuheng/helper/utils/async';

// Parallel operations
async function runInParallel() {
  const startTime = Date.now();
  
  // Start multiple sleeps in parallel
  const promises = [
    sleep(1000),
    sleep(1500),
    sleep(800)
  ];
  
  // Wait for all to complete
  await Promise.all(promises);
  
  const duration = Date.now() - startTime;
  console.log(\`All operations completed in \${duration}ms\`);
}
    `,
    animation: `
import { sleep } from '@wuchuheng/helper/utils/async';

// Animation example
async function animateElement() {
  const element = document.getElementById('my-element');
  
  // Fade in
  element.style.opacity = '0';
  for (let i = 0; i <= 100; i += 10) {
    element.style.opacity = i / 100;
    await sleep(50); // 50ms delay between updates
  }
  
  // Wait
  await sleep(1000);
  
  // Fade out
  for (let i = 100; i >= 0; i -= 10) {
    element.style.opacity = i / 100;
    await sleep(50);
  }
}
    `
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h3>Usage Examples</h3>
      
      <div style={{ marginBottom: '30px' }}>
        <h4 style={{ color: '#0066cc', marginBottom: '10px' }}>Basic Usage</h4>
          <TypescriptCodeBlock>

          {codeExamples.basic}
          </TypescriptCodeBlock>
          
      </div>
      
      <div style={{ marginBottom: '30px' }}>
        <h4 style={{ color: '#28a745', marginBottom: '10px' }}>Sequential Operations</h4>
        <TypescriptCodeBlock>

          {codeExamples.sequential}
        </TypescriptCodeBlock>
          
      </div>
      
      <div style={{ marginBottom: '30px' }}>
        <h4 style={{ color: '#17a2b8', marginBottom: '10px' }}>Parallel Operations</h4>
          <TypescriptCodeBlock>

          {codeExamples.parallel}
        </TypescriptCodeBlock>
      </div>
      
      <div>
        <h4 style={{ color: '#dc3545', marginBottom: '10px' }}>Animation Example</h4>
          <TypescriptCodeBlock>

          {codeExamples.animation}
          </TypescriptCodeBlock>
      </div>
    </div>
  );
};
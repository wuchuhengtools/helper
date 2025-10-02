import{r as o,R as e}from"./index-DQDNmYQF.js";import{T as f}from"./CodeBlock-C8-L1nso.js";const m=n=>new Promise(a=>{setTimeout(()=>{a()},n)}),j={title:"Utils/Async",component:null},y=()=>{const[n,a]=o.useState(!1),[t,i]=o.useState(1e3),[r,l]=o.useState(null),[s,p]=o.useState(null),x=async()=>{a(!0),l(Date.now()),p(null),await m(t),p(Date.now()),a(!1)},d=(u,g)=>`${g-u}ms`;return e.createElement("div",{style:{padding:"20px",border:"1px solid #ccc",borderRadius:"8px"}},e.createElement("h3",null,"Basic Sleep Example"),e.createElement("p",{style:{marginBottom:"15px"}},"Click the button to pause execution for the specified duration."),e.createElement("div",{style:{marginBottom:"15px"}},e.createElement("label",{htmlFor:"sleepDuration",style:{display:"block",marginBottom:"5px"}},"Sleep Duration (ms):"),e.createElement("input",{id:"sleepDuration",type:"range",min:"100",max:"3000",step:"100",value:t,onChange:u=>i(parseInt(u.target.value)),style:{width:"100%"}}),e.createElement("div",{style:{display:"flex",justifyContent:"space-between",fontSize:"14px"}},e.createElement("span",null,"100ms"),e.createElement("span",{style:{fontWeight:"bold"}},t,"ms"),e.createElement("span",null,"3000ms"))),e.createElement("button",{onClick:x,disabled:n,style:{padding:"12px 24px",fontSize:"16px",backgroundColor:n?"#6c757d":"#007bff",color:"white",border:"none",borderRadius:"4px",cursor:n?"not-allowed":"pointer",marginBottom:"20px"}},n?"Sleeping...":"Start Sleep"),e.createElement("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"15px"}},e.createElement("div",{style:{padding:"15px",backgroundColor:"#f8f9fa",borderRadius:"4px"}},e.createElement("h4",null,"Status:"),e.createElement("p",{style:{margin:"5px 0",fontSize:"18px",fontWeight:"bold"}},n?"Sleeping":"Awake")),r&&s&&e.createElement("div",{style:{padding:"15px",backgroundColor:"#d4edda",borderRadius:"4px"}},e.createElement("h4",null,"Duration:"),e.createElement("p",{style:{margin:"5px 0",fontSize:"18px",fontWeight:"bold"}},d(r,s)))),r&&!s&&e.createElement("div",{style:{marginTop:"15px",padding:"15px",backgroundColor:"#fff3cd",borderRadius:"4px"}},e.createElement("h4",null,"Sleep started at:"),e.createElement("p",{style:{margin:"0",fontFamily:"monospace"}},new Date(r).toLocaleTimeString())))},h=()=>{const[n,a]=o.useState([]),[t,i]=o.useState(!1),r=async()=>{i(!0),a([]);const l=s=>{a(p=>[...p,`${new Date().toLocaleTimeString()}: ${s}`])};l("Starting sequential sleeps...");try{l("Starting first sleep (500ms)"),await m(500),l("First sleep completed"),l("Starting second sleep (1000ms)"),await m(1e3),l("Second sleep completed"),l("Starting third sleep (1500ms)"),await m(1500),l("Third sleep completed"),l("All sleeps completed!")}catch(s){l(`Error: ${s}`)}finally{i(!1)}};return e.createElement("div",{style:{padding:"20px",border:"1px solid #ccc",borderRadius:"8px"}},e.createElement("h3",null,"Sequential Sleeps"),e.createElement("p",{style:{marginBottom:"15px"}},"Execute multiple sleeps in sequence, waiting for each to complete before starting the next."),e.createElement("button",{onClick:r,disabled:t,style:{padding:"12px 24px",fontSize:"16px",backgroundColor:t?"#6c757d":"#28a745",color:"white",border:"none",borderRadius:"4px",cursor:t?"not-allowed":"pointer",marginBottom:"20px"}},t?"Running...":"Run Sequential Sleeps"),e.createElement("div",{style:{maxHeight:"300px",overflow:"auto",border:"1px solid #ddd",borderRadius:"4px",backgroundColor:"#f8f9fa"}},n.length>0?n.map((l,s)=>e.createElement("div",{key:s,style:{padding:"8px 12px",borderBottom:s<n.length-1?"1px solid #eee":"none",fontFamily:"monospace",fontSize:"14px"}},l)):e.createElement("div",{style:{padding:"20px",textAlign:"center",color:"#6c757d"}},"Logs will appear here...")))},b=()=>{const[n,a]=o.useState({sleep1:!1,sleep2:!1,sleep3:!1}),[t,i]=o.useState(!1),[r,l]=o.useState(null),[s,p]=o.useState(null),x=async()=>{i(!0),a({sleep1:!1,sleep2:!1,sleep3:!1}),l(Date.now()),p(null);const u=m(500).then(()=>a(c=>({...c,sleep1:!0}))),g=m(1e3).then(()=>a(c=>({...c,sleep2:!0}))),S=m(1500).then(()=>a(c=>({...c,sleep3:!0})));try{await Promise.all([u,g,S]),p(Date.now())}finally{i(!1)}},d=n.sleep1&&n.sleep2&&n.sleep3;return e.createElement("div",{style:{padding:"20px",border:"1px solid #ccc",borderRadius:"8px"}},e.createElement("h3",null,"Parallel Sleeps"),e.createElement("p",{style:{marginBottom:"15px"}},"Run multiple sleeps in parallel using Promise.all. All sleeps start at the same time."),e.createElement("button",{onClick:x,disabled:t,style:{padding:"12px 24px",fontSize:"16px",backgroundColor:t?"#6c757d":"#17a2b8",color:"white",border:"none",borderRadius:"4px",cursor:t?"not-allowed":"pointer",marginBottom:"20px"}},t?"Running...":"Run Parallel Sleeps"),e.createElement("div",{style:{marginBottom:"20px"}},e.createElement("h4",null,"Sleep Status:"),e.createElement("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"10px"}},e.createElement("div",{style:{padding:"15px",borderRadius:"4px",backgroundColor:n.sleep1?"#d4edda":"#f8f9fa",border:n.sleep1?"1px solid #c3e6cb":"1px solid #dee2e6"}},e.createElement("h5",null,"Sleep 1"),e.createElement("p",{style:{margin:0,fontWeight:"bold"}},n.sleep1?"✓ Complete (500ms)":"Running...")),e.createElement("div",{style:{padding:"15px",borderRadius:"4px",backgroundColor:n.sleep2?"#d4edda":"#f8f9fa",border:n.sleep2?"1px solid #c3e6cb":"1px solid #dee2e6"}},e.createElement("h5",null,"Sleep 2"),e.createElement("p",{style:{margin:0,fontWeight:"bold"}},n.sleep2?"✓ Complete (1000ms)":"Running...")),e.createElement("div",{style:{padding:"15px",borderRadius:"4px",backgroundColor:n.sleep3?"#d4edda":"#f8f9fa",border:n.sleep3?"1px solid #c3e6cb":"1px solid #dee2e6"}},e.createElement("h5",null,"Sleep 3"),e.createElement("p",{style:{margin:0,fontWeight:"bold"}},n.sleep3?"✓ Complete (1500ms)":"Running...")))),r&&e.createElement("div",{style:{padding:"15px",backgroundColor:d?"#d4edda":"#fff3cd",borderRadius:"4px"}},e.createElement("h4",null,"Performance:"),e.createElement("p",{style:{margin:0}},d?`All sleeps completed in ${s-r}ms (parallel execution)`:`Running... Started at ${new Date(r).toLocaleTimeString()}`),e.createElement("p",{style:{margin:0,fontSize:"14px",marginTop:"5px"}},"Sequential would take: 3000ms | Parallel takes: ~1500ms")))},v=()=>{const[n,a]=o.useState(3e3),[t,i]=o.useState(!1),[r,l]=o.useState(0),[s,p]=o.useState(0),x=async()=>{i(!0),l(0),p(0);const d=Date.now(),g=setInterval(()=>{const S=Date.now()-d,c=Math.min(S/n*100,100);l(c),p(S),c>=100&&clearInterval(g)},50);await m(n),clearInterval(g),i(!1)};return e.createElement("div",{style:{padding:"20px",border:"1px solid #ccc",borderRadius:"8px"}},e.createElement("h3",null,"Sleep with Progress"),e.createElement("p",{style:{marginBottom:"15px"}},"Visualize the sleep progress with a real-time progress bar."),e.createElement("div",{style:{marginBottom:"15px"}},e.createElement("label",{htmlFor:"sleepProgress",style:{display:"block",marginBottom:"5px"}},"Sleep Duration:"),e.createElement("input",{id:"sleepProgress",type:"range",min:"1000",max:"5000",step:"500",value:n,onChange:d=>a(parseInt(d.target.value)),style:{width:"100%"}}),e.createElement("div",{style:{display:"flex",justifyContent:"space-between",fontSize:"14px"}},e.createElement("span",null,"1s"),e.createElement("span",{style:{fontWeight:"bold"}},n/1e3,"s"),e.createElement("span",null,"5s"))),e.createElement("button",{onClick:x,disabled:t,style:{padding:"12px 24px",fontSize:"16px",backgroundColor:t?"#6c757d":"#007bff",color:"white",border:"none",borderRadius:"4px",cursor:t?"not-allowed":"pointer",marginBottom:"20px",width:"100%"}},t?"Sleeping...":"Start Sleep with Progress"),e.createElement("div",{style:{marginBottom:"15px"}},e.createElement("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:"5px"}},e.createElement("span",null,"Progress"),e.createElement("span",null,Math.round(r),"%")),e.createElement("div",{style:{width:"100%",height:"20px",backgroundColor:"#e9ecef",borderRadius:"10px",overflow:"hidden"}},e.createElement("div",{style:{width:`${r}%`,height:"100%",backgroundColor:t?"#007bff":"#28a745",borderRadius:"10px",transition:"width 0.1s ease"}}))),e.createElement("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"15px"}},e.createElement("div",{style:{padding:"15px",backgroundColor:"#f8f9fa",borderRadius:"4px"}},e.createElement("h4",null,"Elapsed:"),e.createElement("p",{style:{margin:0,fontSize:"18px",fontWeight:"bold"}},s,"ms")),e.createElement("div",{style:{padding:"15px",backgroundColor:"#f8f9fa",borderRadius:"4px"}},e.createElement("h4",null,"Remaining:"),e.createElement("p",{style:{margin:0,fontSize:"18px",fontWeight:"bold"}},Math.max(n-s,0),"ms"))))},E=()=>{const n={basic:`
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
    `,sequential:`
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
    `,parallel:`
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
    `,animation:`
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
    `};return e.createElement("div",{style:{padding:"20px",border:"1px solid #ccc",borderRadius:"8px"}},e.createElement("h3",null,"Usage Examples"),e.createElement("div",{style:{marginBottom:"30px"}},e.createElement("h4",{style:{color:"#0066cc",marginBottom:"10px"}},"Basic Usage"),e.createElement(f,null,n.basic)),e.createElement("div",{style:{marginBottom:"30px"}},e.createElement("h4",{style:{color:"#28a745",marginBottom:"10px"}},"Sequential Operations"),e.createElement(f,null,n.sequential)),e.createElement("div",{style:{marginBottom:"30px"}},e.createElement("h4",{style:{color:"#17a2b8",marginBottom:"10px"}},"Parallel Operations"),e.createElement(f,null,n.parallel)),e.createElement("div",null,e.createElement("h4",{style:{color:"#dc3545",marginBottom:"10px"}},"Animation Example"),e.createElement(f,null,n.animation)))};var w,R,C;y.parameters={...y.parameters,docs:{...(w=y.parameters)==null?void 0:w.docs,source:{originalSource:`() => {
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
    return \`\${end - start}ms\`;
  };
  return <div style={{
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px'
  }}>
      <h3>Basic Sleep Example</h3>
      <p style={{
      marginBottom: '15px'
    }}>
        Click the button to pause execution for the specified duration.
      </p>
      
      <div style={{
      marginBottom: '15px'
    }}>
        <label htmlFor="sleepDuration" style={{
        display: 'block',
        marginBottom: '5px'
      }}>
          Sleep Duration (ms):
        </label>
        <input id="sleepDuration" type="range" min="100" max="3000" step="100" value={sleepTime} onChange={e => setSleepTime(parseInt(e.target.value))} style={{
        width: '100%'
      }} />
        <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: '14px'
      }}>
          <span>100ms</span>
          <span style={{
          fontWeight: 'bold'
        }}>{sleepTime}ms</span>
          <span>3000ms</span>
        </div>
      </div>
      
      <button onClick={handleSleep} disabled={isSleeping} style={{
      padding: '12px 24px',
      fontSize: '16px',
      backgroundColor: isSleeping ? '#6c757d' : '#007bff',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      cursor: isSleeping ? 'not-allowed' : 'pointer',
      marginBottom: '20px'
    }}>
        {isSleeping ? 'Sleeping...' : 'Start Sleep'}
      </button>
      
      <div style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '15px'
    }}>
        <div style={{
        padding: '15px',
        backgroundColor: '#f8f9fa',
        borderRadius: '4px'
      }}>
          <h4>Status:</h4>
          <p style={{
          margin: '5px 0',
          fontSize: '18px',
          fontWeight: 'bold'
        }}>
            {isSleeping ? 'Sleeping' : 'Awake'}
          </p>
        </div>
        
        {startTime && endTime && <div style={{
        padding: '15px',
        backgroundColor: '#d4edda',
        borderRadius: '4px'
      }}>
            <h4>Duration:</h4>
            <p style={{
          margin: '5px 0',
          fontSize: '18px',
          fontWeight: 'bold'
        }}>
              {formatDuration(startTime, endTime)}
            </p>
          </div>}
      </div>
      
      {startTime && !endTime && <div style={{
      marginTop: '15px',
      padding: '15px',
      backgroundColor: '#fff3cd',
      borderRadius: '4px'
    }}>
          <h4>Sleep started at:</h4>
          <p style={{
        margin: '0',
        fontFamily: 'monospace'
      }}>
            {new Date(startTime).toLocaleTimeString()}
          </p>
        </div>}
    </div>;
}`,...(C=(R=y.parameters)==null?void 0:R.docs)==null?void 0:C.source}}};var T,B,k;h.parameters={...h.parameters,docs:{...(T=h.parameters)==null?void 0:T.docs,source:{originalSource:`() => {
  const [logs, setLogs] = useState<string[]>([]);
  const [isRunning, setIsRunning] = useState(false);
  const runSequentialSleeps = async () => {
    setIsRunning(true);
    setLogs([]);
    const addLog = (message: string) => {
      setLogs(prev => [...prev, \`\${new Date().toLocaleTimeString()}: \${message}\`]);
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
      addLog(\`Error: \${error}\`);
    } finally {
      setIsRunning(false);
    }
  };
  return <div style={{
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px'
  }}>
      <h3>Sequential Sleeps</h3>
      <p style={{
      marginBottom: '15px'
    }}>
        Execute multiple sleeps in sequence, waiting for each to complete before starting the next.
      </p>
      
      <button onClick={runSequentialSleeps} disabled={isRunning} style={{
      padding: '12px 24px',
      fontSize: '16px',
      backgroundColor: isRunning ? '#6c757d' : '#28a745',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      cursor: isRunning ? 'not-allowed' : 'pointer',
      marginBottom: '20px'
    }}>
        {isRunning ? 'Running...' : 'Run Sequential Sleeps'}
      </button>
      
      <div style={{
      maxHeight: '300px',
      overflow: 'auto',
      border: '1px solid #ddd',
      borderRadius: '4px',
      backgroundColor: '#f8f9fa'
    }}>
        {logs.length > 0 ? logs.map((log, index) => <div key={index} style={{
        padding: '8px 12px',
        borderBottom: index < logs.length - 1 ? '1px solid #eee' : 'none',
        fontFamily: 'monospace',
        fontSize: '14px'
      }}>
              {log}
            </div>) : <div style={{
        padding: '20px',
        textAlign: 'center',
        color: '#6c757d'
      }}>
            Logs will appear here...
          </div>}
      </div>
    </div>;
}`,...(k=(B=h.parameters)==null?void 0:B.docs)==null?void 0:k.source}}};var P,D,I;b.parameters={...b.parameters,docs:{...(P=b.parameters)==null?void 0:P.docs,source:{originalSource:`() => {
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
    setSleepStatus({
      sleep1: false,
      sleep2: false,
      sleep3: false
    });
    setStartTime(Date.now());
    setEndTime(null);
    const sleep1 = sleep(500).then(() => setSleepStatus(prev => ({
      ...prev,
      sleep1: true
    })));
    const sleep2 = sleep(1000).then(() => setSleepStatus(prev => ({
      ...prev,
      sleep2: true
    })));
    const sleep3 = sleep(1500).then(() => setSleepStatus(prev => ({
      ...prev,
      sleep3: true
    })));
    try {
      await Promise.all([sleep1, sleep2, sleep3]);
      setEndTime(Date.now());
    } finally {
      setIsRunning(false);
    }
  };
  const allComplete = sleepStatus.sleep1 && sleepStatus.sleep2 && sleepStatus.sleep3;
  return <div style={{
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px'
  }}>
      <h3>Parallel Sleeps</h3>
      <p style={{
      marginBottom: '15px'
    }}>
        Run multiple sleeps in parallel using Promise.all. All sleeps start at the same time.
      </p>
      
      <button onClick={runParallelSleeps} disabled={isRunning} style={{
      padding: '12px 24px',
      fontSize: '16px',
      backgroundColor: isRunning ? '#6c757d' : '#17a2b8',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      cursor: isRunning ? 'not-allowed' : 'pointer',
      marginBottom: '20px'
    }}>
        {isRunning ? 'Running...' : 'Run Parallel Sleeps'}
      </button>
      
      <div style={{
      marginBottom: '20px'
    }}>
        <h4>Sleep Status:</h4>
        <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '10px'
      }}>
          <div style={{
          padding: '15px',
          borderRadius: '4px',
          backgroundColor: sleepStatus.sleep1 ? '#d4edda' : '#f8f9fa',
          border: sleepStatus.sleep1 ? '1px solid #c3e6cb' : '1px solid #dee2e6'
        }}>
            <h5>Sleep 1</h5>
            <p style={{
            margin: 0,
            fontWeight: 'bold'
          }}>
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
            <p style={{
            margin: 0,
            fontWeight: 'bold'
          }}>
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
            <p style={{
            margin: 0,
            fontWeight: 'bold'
          }}>
              {sleepStatus.sleep3 ? '✓ Complete (1500ms)' : 'Running...'}
            </p>
          </div>
        </div>
      </div>
      
      {startTime && <div style={{
      padding: '15px',
      backgroundColor: allComplete ? '#d4edda' : '#fff3cd',
      borderRadius: '4px'
    }}>
          <h4>Performance:</h4>
          <p style={{
        margin: 0
      }}>
            {allComplete ? \`All sleeps completed in \${endTime! - startTime}ms (parallel execution)\` : \`Running... Started at \${new Date(startTime).toLocaleTimeString()}\`}
          </p>
          <p style={{
        margin: 0,
        fontSize: '14px',
        marginTop: '5px'
      }}>
            Sequential would take: 3000ms | Parallel takes: ~1500ms
          </p>
        </div>}
    </div>;
}`,...(I=(D=b.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};var W,z,q;v.parameters={...v.parameters,docs:{...(W=v.parameters)==null?void 0:W.docs,source:{originalSource:`() => {
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
      const newProgress = Math.min(elapsed / sleepDuration * 100, 100);
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
  return <div style={{
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px'
  }}>
      <h3>Sleep with Progress</h3>
      <p style={{
      marginBottom: '15px'
    }}>
        Visualize the sleep progress with a real-time progress bar.
      </p>
      
      <div style={{
      marginBottom: '15px'
    }}>
        <label htmlFor="sleepProgress" style={{
        display: 'block',
        marginBottom: '5px'
      }}>
          Sleep Duration:
        </label>
        <input id="sleepProgress" type="range" min="1000" max="5000" step="500" value={sleepDuration} onChange={e => setSleepDuration(parseInt(e.target.value))} style={{
        width: '100%'
      }} />
        <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: '14px'
      }}>
          <span>1s</span>
          <span style={{
          fontWeight: 'bold'
        }}>{sleepDuration / 1000}s</span>
          <span>5s</span>
        </div>
      </div>
      
      <button onClick={runSleepWithProgress} disabled={isSleeping} style={{
      padding: '12px 24px',
      fontSize: '16px',
      backgroundColor: isSleeping ? '#6c757d' : '#007bff',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      cursor: isSleeping ? 'not-allowed' : 'pointer',
      marginBottom: '20px',
      width: '100%'
    }}>
        {isSleeping ? 'Sleeping...' : 'Start Sleep with Progress'}
      </button>
      
      <div style={{
      marginBottom: '15px'
    }}>
        <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '5px'
      }}>
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
          width: \`\${progress}%\`,
          height: '100%',
          backgroundColor: isSleeping ? '#007bff' : '#28a745',
          borderRadius: '10px',
          transition: 'width 0.1s ease'
        }} />
        </div>
      </div>
      
      <div style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '15px'
    }}>
        <div style={{
        padding: '15px',
        backgroundColor: '#f8f9fa',
        borderRadius: '4px'
      }}>
          <h4>Elapsed:</h4>
          <p style={{
          margin: 0,
          fontSize: '18px',
          fontWeight: 'bold'
        }}>
            {elapsed}ms
          </p>
        </div>
        
        <div style={{
        padding: '15px',
        backgroundColor: '#f8f9fa',
        borderRadius: '4px'
      }}>
          <h4>Remaining:</h4>
          <p style={{
          margin: 0,
          fontSize: '18px',
          fontWeight: 'bold'
        }}>
            {Math.max(sleepDuration - elapsed, 0)}ms
          </p>
        </div>
      </div>
    </div>;
}`,...(q=(z=v.parameters)==null?void 0:z.docs)==null?void 0:q.source}}};var L,A,$;E.parameters={...E.parameters,docs:{...(L=E.parameters)==null?void 0:L.docs,source:{originalSource:`() => {
  const codeExamples = {
    basic: \`
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
    \`,
    sequential: \`
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
    \`,
    parallel: \`
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
  console.log(\\\`All operations completed in \\\${duration}ms\\\`);
}
    \`,
    animation: \`
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
    \`
  };
  return <div style={{
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px'
  }}>
      <h3>Usage Examples</h3>
      
      <div style={{
      marginBottom: '30px'
    }}>
        <h4 style={{
        color: '#0066cc',
        marginBottom: '10px'
      }}>Basic Usage</h4>
          <TypescriptCodeBlock>

          {codeExamples.basic}
          </TypescriptCodeBlock>
          
      </div>
      
      <div style={{
      marginBottom: '30px'
    }}>
        <h4 style={{
        color: '#28a745',
        marginBottom: '10px'
      }}>Sequential Operations</h4>
        <TypescriptCodeBlock>

          {codeExamples.sequential}
        </TypescriptCodeBlock>
          
      </div>
      
      <div style={{
      marginBottom: '30px'
    }}>
        <h4 style={{
        color: '#17a2b8',
        marginBottom: '10px'
      }}>Parallel Operations</h4>
          <TypescriptCodeBlock>

          {codeExamples.parallel}
        </TypescriptCodeBlock>
      </div>
      
      <div>
        <h4 style={{
        color: '#dc3545',
        marginBottom: '10px'
      }}>Animation Example</h4>
          <TypescriptCodeBlock>

          {codeExamples.animation}
          </TypescriptCodeBlock>
      </div>
    </div>;
}`,...($=(A=E.parameters)==null?void 0:A.docs)==null?void 0:$.source}}};const M=["BasicSleep","SequentialSleeps","ParallelSleeps","SleepWithProgress","UsageExample"];export{y as BasicSleep,b as ParallelSleeps,h as SequentialSleeps,v as SleepWithProgress,E as UsageExample,M as __namedExportsOrder,j as default};

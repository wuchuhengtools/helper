import{r as h,R as e}from"./index-DQDNmYQF.js";import{T as d}from"./CodeBlock-C8-L1nso.js";var z=(o=>(o.red="\x1B[31m",o.green="\x1B[32m",o.bold="\x1B[1m",o.reset="\x1B[0m",o))(z||{});const b=(o,...i)=>i.map(t=>z[t]).join("")+o+"\x1B[0m",U={title:"Utils/ColorText",parameters:{docs:{description:{component:"Utility function for applying ANSI color codes to text for terminal output. Perfect for creating colorful console logs, CLI applications, and terminal-based interfaces."}}}},m=()=>{const[o,i]=h.useState(["red"]),[t,a]=h.useState("Hello, World!"),[p,y]=h.useState([]),s=["red","green","bold"],l=r=>{i(n=>n.includes(r)?n.filter(g=>g!==r):[...n,r])},c=()=>{const r=b(t,...o),n=`${new Date().toLocaleTimeString()}: ${r}`;y(g=>[n,...g.slice(0,9)]),console.log(r)},v=()=>{y([])};return e.createElement("div",{style:{padding:"20px",border:"1px solid #ccc",borderRadius:"8px"}},e.createElement("h3",null,"Interactive Color Text Generator"),e.createElement("p",{style:{marginBottom:"20px",color:"#666"}},"Configure text and colors to see how ANSI codes work. The colored output will appear in your browser's developer console."),e.createElement("div",{style:{marginBottom:"20px"}},e.createElement("label",{htmlFor:"textInput",style:{display:"block",marginBottom:"8px",fontWeight:"bold"}},"Text to colorize:"),e.createElement("input",{id:"textInput",type:"text",value:t,onChange:r=>a(r.target.value),placeholder:"Enter your text here...",style:{width:"100%",padding:"12px",fontSize:"16px",border:"1px solid #ddd",borderRadius:"4px",marginBottom:"15px"}}),e.createElement("div",{style:{marginBottom:"15px"}},e.createElement("label",{style:{display:"block",marginBottom:"8px",fontWeight:"bold"}},"Select colors/styles:"),e.createElement("div",{style:{display:"flex",gap:"10px",flexWrap:"wrap"}},s.map(r=>e.createElement("label",{key:r,style:{display:"flex",alignItems:"center",gap:"6px",cursor:"pointer",padding:"8px 12px",border:"1px solid #ddd",borderRadius:"4px",backgroundColor:o.includes(r)?"#e3f2fd":"#f8f9fa",borderColor:o.includes(r)?"#1976d2":"#ddd"}},e.createElement("input",{type:"checkbox",checked:o.includes(r),onChange:()=>l(r),style:{margin:0}}),e.createElement("span",{style:{textTransform:"capitalize",fontSize:"14px"}},r))))),e.createElement("button",{onClick:c,disabled:!t.trim()||o.length===0,style:{padding:"12px 24px",fontSize:"16px",backgroundColor:!t.trim()||o.length===0?"#6c757d":"#007bff",color:"white",border:"none",borderRadius:"4px",cursor:!t.trim()||o.length===0?"not-allowed":"pointer",marginRight:"10px"}},"Generate & Log to Console"),e.createElement("button",{onClick:v,style:{padding:"12px 24px",fontSize:"16px",backgroundColor:"#6c757d",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"}},"Clear Log")),e.createElement("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"20px",marginBottom:"20px"}},e.createElement("div",{style:{padding:"15px",backgroundColor:"#f8f9fa",borderRadius:"4px",border:"1px solid #e9ecef"}},e.createElement("h4",{style:{marginTop:0,color:"#495057"}},"Generated Code:"),e.createElement("code",{style:{display:"block",padding:"10px",backgroundColor:"#e9ecef",borderRadius:"3px",fontSize:"14px",wordBreak:"break-all",fontFamily:"monospace"}},'colorText("',t,'",'," ",o.map(r=>`"${r}"`).join(", "),")")),e.createElement("div",{style:{padding:"15px",backgroundColor:"#f8f9fa",borderRadius:"4px",border:"1px solid #e9ecef"}},e.createElement("h4",{style:{marginTop:0,color:"#495057"}},"ANSI Output:"),e.createElement("code",{style:{display:"block",padding:"10px",backgroundColor:"#1e1e1e",color:"#d4d4d4",borderRadius:"3px",fontSize:"14px",wordBreak:"break-all",fontFamily:"monospace",minHeight:"24px"}},t&&o.length>0?b(t,...o):"Configure text and colors above"))),p.length>0&&e.createElement("div",{style:{padding:"15px",backgroundColor:"#1e1e1e",color:"#d4d4d4",borderRadius:"4px",fontFamily:"monospace",fontSize:"14px",maxHeight:"300px",overflowY:"auto"}},e.createElement("h4",{style:{marginTop:0,color:"#ffffff",marginBottom:"10px"}},"Console Log History:"),p.map((r,n)=>e.createElement("div",{key:n,style:{marginBottom:"4px"}},r))),e.createElement("div",{style:{marginTop:"20px",padding:"15px",backgroundColor:"#e3f2fd",border:"1px solid #90caf9",borderRadius:"8px"}},e.createElement("h4",{style:{marginTop:0,color:"#1565c0"}},"💡 Pro Tip"),e.createElement("p",{style:{margin:0,fontSize:"14px",color:"#424242"}},"Open your browser's Developer Console (F12) to see the actual colored output. ANSI codes work in most terminal environments but may not display colors in all browser consoles.")))};m.parameters={docs:{description:{story:"Interactive demonstration of the colorText function. Experiment with different text inputs and color combinations to see how ANSI color codes are applied. Check your browser console to see the actual colored output."},source:{code:`import { colorText } from '@wuchuheng/helper/utils/colorText';

// Basic usage with single color
const redText = colorText('Error: Something went wrong', 'red');
console.log(redText); // Displays in red

// Combining multiple styles
const styledText = colorText('Success!', 'green', 'bold');
console.log(styledText); // Displays in bold green

// Just bold styling
const boldText = colorText('Important Notice', 'bold');
console.log(boldText); // Displays in bold`}}};const u=()=>{const o=[{title:"Error Messages",code:'colorText("❌ Error: File not found", "red")',colors:["red"],text:"❌ Error: File not found"},{title:"Success Messages",code:'colorText("✅ Operation completed successfully", "green")',colors:["green"],text:"✅ Operation completed successfully"},{title:"Important Notices",code:'colorText("⚠️  Important: Please read carefully", "bold")',colors:["bold"],text:"⚠️  Important: Please read carefully"},{title:"Success with Emphasis",code:'colorText("🎉 Deployment successful!", "green", "bold")',colors:["green","bold"],text:"🎉 Deployment successful!"},{title:"Critical Errors",code:'colorText("🚨 CRITICAL: System failure", "red", "bold")',colors:["red","bold"],text:"🚨 CRITICAL: System failure"}],i=(t,a)=>{const p=b(t,...a);console.log(`Example: ${p}`)};return e.createElement("div",{style:{padding:"20px",border:"1px solid #ccc",borderRadius:"8px"}},e.createElement("h3",null,"Common Use Cases"),e.createElement("p",{style:{marginBottom:"20px",color:"#666"}},'Real-world examples of how to use colorText in different scenarios. Click "Test in Console" to see the colored output.'),e.createElement("div",{style:{display:"grid",gap:"15px"}},o.map((t,a)=>e.createElement("div",{key:a,style:{border:"1px solid #e9ecef",borderRadius:"8px",padding:"20px",backgroundColor:"#f8f9fa"}},e.createElement("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:"15px"}},e.createElement("div",{style:{flex:1}},e.createElement("h4",{style:{margin:"0 0 10px 0",color:"#495057"}},t.title),e.createElement("div",{style:{backgroundColor:"#1e1e1e",color:"#d4d4d4",padding:"12px",borderRadius:"4px",fontFamily:"monospace",fontSize:"14px",marginBottom:"10px"}},"Preview: ",b(t.text,...t.colors))),e.createElement("button",{onClick:()=>i(t.text,t.colors),style:{marginLeft:"15px",padding:"8px 16px",fontSize:"12px",backgroundColor:"#007bff",color:"white",border:"none",borderRadius:"4px",cursor:"pointer",whiteSpace:"nowrap"}},"Test in Console")),e.createElement(d,null,t.code)))),e.createElement("div",{style:{marginTop:"30px",padding:"20px",backgroundColor:"#fff3cd",border:"1px solid #ffeaa7",borderRadius:"8px"}},e.createElement("h4",{style:{marginTop:0,color:"#856404"}},"🎨 Color Reference"),e.createElement("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",gap:"15px",marginTop:"15px"}},e.createElement("div",null,e.createElement("strong",{style:{color:"#dc3545"}},"Red:"),e.createElement("div",{style:{fontSize:"12px",color:"#6c757d",marginTop:"5px"}},"ANSI Code: ",e.createElement("code",null,"\\\\x1b[31m"),e.createElement("br",null),"Use for: Errors, warnings, failures")),e.createElement("div",null,e.createElement("strong",{style:{color:"#28a745"}},"Green:"),e.createElement("div",{style:{fontSize:"12px",color:"#6c757d",marginTop:"5px"}},"ANSI Code: ",e.createElement("code",null,"\\\\x1b[32m"),e.createElement("br",null),"Use for: Success, completion, positive feedback")),e.createElement("div",null,e.createElement("strong",null,"Bold:"),e.createElement("div",{style:{fontSize:"12px",color:"#6c757d",marginTop:"5px"}},"ANSI Code: ",e.createElement("code",null,"\\\\x1b[1m"),e.createElement("br",null),"Use for: Emphasis, important notices, headers")))))};u.parameters={docs:{description:{story:"Common use cases and patterns for applying colors to console output. These examples show how to create meaningful, visually distinct messages for different types of application feedback."},source:{code:`import { colorText } from '@wuchuheng/helper/utils/colorText';

// Error handling
try {
  riskyOperation();
} catch (error) {
  console.error(colorText('❌ Error: ' + error.message, 'red'));
}

// Success feedback
console.log(colorText('✅ Database connection established', 'green'));

// Important notices
console.log(colorText('⚠️  Configuration loaded', 'bold'));

// Combining styles for emphasis
console.log(colorText('🎉 All tests passed!', 'green', 'bold'));`}}};const x=()=>{const[o,i]=h.useState([]),t={info:{colors:["bold"],icon:"ℹ️",bgColor:"#e3f2fd"},warn:{colors:["red"],icon:"⚠️",bgColor:"#fff3e0"},error:{colors:["red","bold"],icon:"❌",bgColor:"#ffebee"},success:{colors:["green"],icon:"✅",bgColor:"#e8f5e8"}},a=(s,l)=>{const c=new Date().toLocaleTimeString(),v={timestamp:c,level:s,message:l};i(P=>[v,...P.slice(0,9)]);const{colors:r,icon:n}=t[s],g=b(`[${c}] ${n} ${l}`,...r);console.log(g)},p=()=>{i([]),console.clear()},y=()=>{[{level:"info",message:"Application starting..."},{level:"success",message:"Database connected successfully"},{level:"info",message:"Loading configuration files"},{level:"warn",message:"Deprecated API usage detected"},{level:"success",message:"All services initialized"},{level:"error",message:"Failed to connect to external API"},{level:"info",message:"Server listening on port 3000"}].forEach((l,c)=>{setTimeout(()=>{a(l.level,l.message)},c*500)})};return e.createElement("div",{style:{padding:"20px",border:"1px solid #ccc",borderRadius:"8px"}},e.createElement("h3",null,"Advanced Logging System"),e.createElement("p",{style:{marginBottom:"20px",color:"#666"}},"Demonstration of building a sophisticated logging system using colorText for different log levels. Check your browser console to see the colored output."),e.createElement("div",{style:{marginBottom:"20px"}},e.createElement("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(150px, 1fr))",gap:"10px",marginBottom:"15px"}},Object.entries(t).map(([s,l])=>e.createElement("button",{key:s,onClick:()=>a(s,`Sample ${s} message`),style:{padding:"10px 15px",fontSize:"14px",backgroundColor:l.bgColor,border:"1px solid rgba(0,0,0,0.1)",borderRadius:"4px",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:"8px"}},e.createElement("span",null,l.icon),e.createElement("span",{style:{textTransform:"capitalize"}},s)))),e.createElement("div",{style:{display:"flex",gap:"10px"}},e.createElement("button",{onClick:y,style:{padding:"12px 20px",fontSize:"14px",backgroundColor:"#17a2b8",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"}},"Simulate App Startup"),e.createElement("button",{onClick:p,style:{padding:"12px 20px",fontSize:"14px",backgroundColor:"#6c757d",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"}},"Clear Logs"))),o.length>0&&e.createElement("div",{style:{border:"1px solid #ddd",borderRadius:"8px",backgroundColor:"#f8f9fa",maxHeight:"400px",overflowY:"auto"}},e.createElement("div",{style:{padding:"15px",borderBottom:"1px solid #ddd",backgroundColor:"#e9ecef",fontWeight:"bold",position:"sticky",top:0}},"Application Log History"),o.map((s,l)=>{const c=t[s.level];return e.createElement("div",{key:l,style:{padding:"12px 15px",borderBottom:l<o.length-1?"1px solid #eee":"none",backgroundColor:l%2===0?"#ffffff":"#f8f9fa",display:"flex",alignItems:"center",gap:"10px"}},e.createElement("span",{style:{fontSize:"16px"}},c.icon),e.createElement("span",{style:{fontSize:"12px",color:"#6c757d",fontFamily:"monospace",minWidth:"80px"}},s.timestamp),e.createElement("span",{style:{fontSize:"12px",textTransform:"uppercase",fontWeight:"bold",minWidth:"60px",color:s.level==="error"?"#dc3545":s.level==="warn"?"#fd7e14":s.level==="success"?"#28a745":"#6c757d"}},s.level),e.createElement("span",{style:{fontSize:"14px",flex:1}},s.message))})),e.createElement("div",{style:{marginTop:"30px"}},e.createElement("h4",null,"Implementation Example"),e.createElement(d,null,`import { colorText } from '@wuchuheng/helper/utils/colorText';

class Logger {
  private log(level: string, message: string, colors: string[]) {
    const timestamp = new Date().toLocaleTimeString();
    const coloredMessage = colorText(\`[\${timestamp}] \${level}: \${message}\`, ...colors);
    console.log(coloredMessage);
  }

  info(message: string) {
    this.log('INFO', message, ['bold']);
  }

  success(message: string) {
    this.log('SUCCESS', message, ['green']);
  }

  warn(message: string) {
    this.log('WARN', message, ['red']);
  }

  error(message: string) {
    this.log('ERROR', message, ['red', 'bold']);
  }
}

// Usage
const logger = new Logger();
logger.info('Application starting...');
logger.success('Database connected');
logger.warn('Deprecated feature used');
logger.error('Connection failed');

// Or as utility functions
const logError = (msg: string) => console.error(colorText(\`❌ \${msg}\`, 'red', 'bold'));
const logSuccess = (msg: string) => console.log(colorText(\`✅ \${msg}\`, 'green'));
const logInfo = (msg: string) => console.log(colorText(\`ℹ️  \${msg}\`, 'bold'));`)),e.createElement("div",{style:{marginTop:"20px",padding:"15px",backgroundColor:"#f0f8ff",border:"1px solid #b3d9ff",borderRadius:"8px"}},e.createElement("h4",{style:{marginTop:0,color:"#0066cc"}},"💻 CLI Applications"),e.createElement("p",{style:{margin:0,fontSize:"14px",color:"#424242"}},"This utility is especially powerful in CLI applications, Node.js scripts, and terminal-based tools where colored output greatly improves user experience and readability.")))};x.parameters={docs:{description:{story:"Advanced implementation showing how to build a complete logging system using colorText. Demonstrates different log levels with appropriate colors and how to structure reusable logging utilities."},source:{code:`import { colorText } from '@wuchuheng/helper/utils/colorText';

// Create reusable logger functions
const createLogger = () => ({
  info: (msg: string) => console.log(colorText(\`ℹ️  \${msg}\`, 'bold')),
  success: (msg: string) => console.log(colorText(\`✅ \${msg}\`, 'green')),
  warn: (msg: string) => console.warn(colorText(\`⚠️  \${msg}\`, 'red')),
  error: (msg: string) => console.error(colorText(\`❌ \${msg}\`, 'red', 'bold')),
});

const logger = createLogger();

// Usage in application lifecycle
logger.info('Starting application...');
logger.success('Configuration loaded successfully');
logger.warn('Using deprecated feature');
logger.error('Critical system error occurred');`}}};const f=()=>e.createElement("div",{style:{padding:"20px"}},e.createElement("h3",null,"Usage Examples & Best Practices"),e.createElement("div",{style:{marginBottom:"30px"}},e.createElement("h4",{style:{color:"#0066cc",marginBottom:"15px"}},"Basic Usage"),e.createElement(d,null,`import { colorText } from '@wuchuheng/helper/utils/colorText';

// Single color
const errorMsg = colorText('Something went wrong!', 'red');
console.log(errorMsg);

// Multiple styles
const successMsg = colorText('Operation completed!', 'green', 'bold');
console.log(successMsg);

// All available colors
console.log(colorText('Red text', 'red'));
console.log(colorText('Green text', 'green'));
console.log(colorText('Bold text', 'bold'));`)),e.createElement("div",{style:{marginBottom:"30px"}},e.createElement("h4",{style:{color:"#28a745",marginBottom:"15px"}},"CLI Application Example"),e.createElement(d,null,`#!/usr/bin/env node
import { colorText } from '@wuchuheng/helper/utils/colorText';

// CLI tool header
console.log(colorText('🚀 Deploy Tool v1.0.0', 'bold'));
console.log('─'.repeat(30));

// Process steps
console.log(colorText('📦 Building application...', 'bold'));
// ... build logic

console.log(colorText('✅ Build completed successfully', 'green'));

console.log(colorText('🌐 Deploying to production...', 'bold'));
// ... deploy logic

try {
  // ... deployment process
  console.log(colorText('🎉 Deployment successful!', 'green', 'bold'));
} catch (error) {
  console.error(colorText(\`❌ Deployment failed: \${error.message}\`, 'red', 'bold'));
  process.exit(1);
}`)),e.createElement("div",{style:{marginBottom:"30px"}},e.createElement("h4",{style:{color:"#17a2b8",marginBottom:"15px"}},"Development Logging"),e.createElement(d,null,`import { colorText } from '@wuchuheng/helper/utils/colorText';

// Enhanced console methods
const dev = {
  log: (msg: string) => {
    if (process.env.NODE_ENV === 'development') {
      console.log(colorText(\`[DEV] \${msg}\`, 'bold'));
    }
  },
  
  success: (msg: string) => {
    console.log(colorText(\`✅ \${msg}\`, 'green'));
  },
  
  error: (msg: string, details?: any) => {
    console.error(colorText(\`❌ \${msg}\`, 'red', 'bold'));
    if (details && process.env.NODE_ENV === 'development') {
      console.error(details);
    }
  },
  
  warn: (msg: string) => {
    console.warn(colorText(\`⚠️  \${msg}\`, 'red'));
  }
};

// Usage in your application
dev.log('Starting server initialization...');
dev.success('Database connection established');
dev.warn('API rate limit approaching');
dev.error('Authentication failed', { userId: 123, timestamp: Date.now() });`)),e.createElement("div",{style:{marginBottom:"30px"}},e.createElement("h4",{style:{color:"#dc3545",marginBottom:"15px"}},"Testing & Debugging"),e.createElement(d,null,`import { colorText } from '@wuchuheng/helper/utils/colorText';

// Test suite helpers
const testHelpers = {
  suite: (name: string) => {
    console.log(colorText(\`\\n🧪 Testing: \${name}\`, 'bold'));
    console.log('─'.repeat(50));
  },
  
  pass: (testName: string) => {
    console.log(colorText(\`  ✅ \${testName}\`, 'green'));
  },
  
  fail: (testName: string, error: string) => {
    console.log(colorText(\`  ❌ \${testName}\`, 'red', 'bold'));
    console.log(colorText(\`     Error: \${error}\`, 'red'));
  },
  
  skip: (testName: string) => {
    console.log(colorText(\`  ⏭️  \${testName} (skipped)\`, 'red'));
  }
};

// Usage in tests
testHelpers.suite('User Authentication');
testHelpers.pass('should login with valid credentials');
testHelpers.fail('should reject invalid password', 'Password mismatch');
testHelpers.skip('should handle OAuth login');

// Debug tracing
const debug = (label: string, value: any) => {
  console.log(colorText(\`🔍 \${label}:\`, 'bold'), value);
};

debug('API Response', { status: 200, data: [...] });
debug('User State', { id: 1, name: 'John' });`)),e.createElement("div",{style:{marginBottom:"30px"}},e.createElement("h4",{style:{color:"#6f42c1",marginBottom:"15px"}},"Progress Indicators"),e.createElement(d,null,`import { colorText } from '@wuchuheng/helper/utils/colorText';

// Progress tracking
class ProgressTracker {
  private steps: string[] = [];
  private current = 0;

  constructor(steps: string[]) {
    this.steps = steps;
  }

  start() {
    console.log(colorText('🚀 Starting process...\\n', 'bold'));
    this.showProgress();
  }

  next(message?: string) {
    if (this.current < this.steps.length) {
      console.log(colorText(\`✅ \${this.steps[this.current]}\`, 'green'));
      if (message) {
        console.log(colorText(\`   \${message}\`, 'bold'));
      }
      this.current++;
      console.log();
      this.showProgress();
    }
  }

  error(message: string) {
    console.log(colorText(\`❌ \${this.steps[this.current]}\`, 'red', 'bold'));
    console.log(colorText(\`   Error: \${message}\\n\`, 'red'));
  }

  complete() {
    console.log(colorText('🎉 All steps completed successfully!', 'green', 'bold'));
  }

  private showProgress() {
    if (this.current < this.steps.length) {
      console.log(colorText(\`⏳ \${this.steps[this.current]}...\`, 'bold'));
    }
  }
}

// Usage
const progress = new ProgressTracker([
  'Validating configuration',
  'Connecting to database',
  'Loading user data',
  'Initializing services',
  'Starting server'
]);

progress.start();
// ... async operation
progress.next('Config validation passed');
// ... async operation  
progress.next('Database connection established');
// ... error occurred
progress.error('Connection timeout');`)),e.createElement("div",{style:{padding:"20px",backgroundColor:"#e3f2fd",border:"1px solid #90caf9",borderRadius:"8px",marginBottom:"20px"}},e.createElement("h4",{style:{marginTop:0,color:"#1565c0"}},"💡 Best Practices"),e.createElement("ul",{style:{color:"#424242",fontSize:"14px",lineHeight:1.6}},e.createElement("li",null,e.createElement("strong",null,"Consistent color usage:")," Use red for errors, green for success, bold for emphasis"),e.createElement("li",null,e.createElement("strong",null,"Combine colors thoughtfully:")," red + bold for critical errors, green + bold for major successes"),e.createElement("li",null,e.createElement("strong",null,"Environment awareness:")," Consider disabling colors in production logs or non-TTY environments"),e.createElement("li",null,e.createElement("strong",null,"Accessibility:")," Don't rely solely on colors to convey information; use icons and clear text"),e.createElement("li",null,e.createElement("strong",null,"Performance:")," Colors add minimal overhead, but consider caching frequently used styled strings"))),e.createElement("div",{style:{padding:"15px",backgroundColor:"#f3e5f5",border:"1px solid #ce93d8",borderRadius:"8px"}},e.createElement("h4",{style:{marginTop:0,color:"#7b1fa2"}},"🎯 When to Use Colors"),e.createElement("div",{style:{fontSize:"14px",color:"#424242"}},e.createElement("p",null,e.createElement("strong",null,"✅ Good for:")," CLI tools, development logging, test output, build scripts, deployment tools"),e.createElement("p",null,e.createElement("strong",null,"❌ Avoid in:")," Production application logs (use structured logging), automated parsing scenarios, environments without TTY support"))));f.parameters={docs:{description:{story:"Comprehensive examples showing real-world applications of colorText in CLI tools, logging systems, testing frameworks, and development workflows. All examples are production-ready and follow best practices."}}};var T,C,E;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:`() => {
  const [selectedColors, setSelectedColors] = useState<string[]>(["red"]);
  const [inputText, setInputText] = useState("Hello, World!");
  const [outputLog, setOutputLog] = useState<string[]>([]);
  const availableColors = ["red", "green", "bold"];
  const handleColorToggle = (color: string) => {
    setSelectedColors(prev => prev.includes(color) ? prev.filter(c => c !== color) : [...prev, color]);
  };
  const handleTestOutput = () => {
    const coloredText = colorText(inputText, ...(selectedColors as any));
    const logEntry = \`\${new Date().toLocaleTimeString()}: \${coloredText}\`;
    setOutputLog(prev => [logEntry, ...prev.slice(0, 9)]); // Keep last 10 entries

    // Also log to browser console for real demonstration
    console.log(coloredText);
  };
  const handleClearLog = () => {
    setOutputLog([]);
  };
  return <div style={{
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px"
  }}>
      <h3>Interactive Color Text Generator</h3>
      <p style={{
      marginBottom: "20px",
      color: "#666"
    }}>
        Configure text and colors to see how ANSI codes work. The colored output
        will appear in your browser's developer console.
      </p>

      <div style={{
      marginBottom: "20px"
    }}>
        <label htmlFor="textInput" style={{
        display: "block",
        marginBottom: "8px",
        fontWeight: "bold"
      }}>
          Text to colorize:
        </label>
        <input id="textInput" type="text" value={inputText} onChange={e => setInputText(e.target.value)} placeholder="Enter your text here..." style={{
        width: "100%",
        padding: "12px",
        fontSize: "16px",
        border: "1px solid #ddd",
        borderRadius: "4px",
        marginBottom: "15px"
      }} />

        <div style={{
        marginBottom: "15px"
      }}>
          <label style={{
          display: "block",
          marginBottom: "8px",
          fontWeight: "bold"
        }}>
            Select colors/styles:
          </label>
          <div style={{
          display: "flex",
          gap: "10px",
          flexWrap: "wrap"
        }}>
            {availableColors.map(color => <label key={color} style={{
            display: "flex",
            alignItems: "center",
            gap: "6px",
            cursor: "pointer",
            padding: "8px 12px",
            border: "1px solid #ddd",
            borderRadius: "4px",
            backgroundColor: selectedColors.includes(color) ? "#e3f2fd" : "#f8f9fa",
            borderColor: selectedColors.includes(color) ? "#1976d2" : "#ddd"
          }}>
                <input type="checkbox" checked={selectedColors.includes(color)} onChange={() => handleColorToggle(color)} style={{
              margin: 0
            }} />
                <span style={{
              textTransform: "capitalize",
              fontSize: "14px"
            }}>
                  {color}
                </span>
              </label>)}
          </div>
        </div>

        <button onClick={handleTestOutput} disabled={!inputText.trim() || selectedColors.length === 0} style={{
        padding: "12px 24px",
        fontSize: "16px",
        backgroundColor: !inputText.trim() || selectedColors.length === 0 ? "#6c757d" : "#007bff",
        color: "white",
        border: "none",
        borderRadius: "4px",
        cursor: !inputText.trim() || selectedColors.length === 0 ? "not-allowed" : "pointer",
        marginRight: "10px"
      }}>
          Generate & Log to Console
        </button>

        <button onClick={handleClearLog} style={{
        padding: "12px 24px",
        fontSize: "16px",
        backgroundColor: "#6c757d",
        color: "white",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer"
      }}>
          Clear Log
        </button>
      </div>

      <div style={{
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "20px",
      marginBottom: "20px"
    }}>
        <div style={{
        padding: "15px",
        backgroundColor: "#f8f9fa",
        borderRadius: "4px",
        border: "1px solid #e9ecef"
      }}>
          <h4 style={{
          marginTop: 0,
          color: "#495057"
        }}>Generated Code:</h4>
          <code style={{
          display: "block",
          padding: "10px",
          backgroundColor: "#e9ecef",
          borderRadius: "3px",
          fontSize: "14px",
          wordBreak: "break-all",
          fontFamily: "monospace"
        }}>
            colorText("{inputText}",{" "}
            {selectedColors.map(c => \`"\${c}"\`).join(", ")})
          </code>
        </div>

        <div style={{
        padding: "15px",
        backgroundColor: "#f8f9fa",
        borderRadius: "4px",
        border: "1px solid #e9ecef"
      }}>
          <h4 style={{
          marginTop: 0,
          color: "#495057"
        }}>ANSI Output:</h4>
          <code style={{
          display: "block",
          padding: "10px",
          backgroundColor: "#1e1e1e",
          color: "#d4d4d4",
          borderRadius: "3px",
          fontSize: "14px",
          wordBreak: "break-all",
          fontFamily: "monospace",
          minHeight: "24px"
        }}>
            {inputText && selectedColors.length > 0 ? colorText(inputText, ...(selectedColors as any)) : "Configure text and colors above"}
          </code>
        </div>
      </div>

      {outputLog.length > 0 && <div style={{
      padding: "15px",
      backgroundColor: "#1e1e1e",
      color: "#d4d4d4",
      borderRadius: "4px",
      fontFamily: "monospace",
      fontSize: "14px",
      maxHeight: "300px",
      overflowY: "auto"
    }}>
          <h4 style={{
        marginTop: 0,
        color: "#ffffff",
        marginBottom: "10px"
      }}>
            Console Log History:
          </h4>
          {outputLog.map((entry, index) => <div key={index} style={{
        marginBottom: "4px"
      }}>
              {entry}
            </div>)}
        </div>}

      <div style={{
      marginTop: "20px",
      padding: "15px",
      backgroundColor: "#e3f2fd",
      border: "1px solid #90caf9",
      borderRadius: "8px"
    }}>
        <h4 style={{
        marginTop: 0,
        color: "#1565c0"
      }}>💡 Pro Tip</h4>
        <p style={{
        margin: 0,
        fontSize: "14px",
        color: "#424242"
      }}>
          Open your browser's Developer Console (F12) to see the actual colored
          output. ANSI codes work in most terminal environments but may not
          display colors in all browser consoles.
        </p>
      </div>
    </div>;
}`,...(E=(C=m.parameters)==null?void 0:C.docs)==null?void 0:E.source}}};var w,S,k;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:`() => {
  const examples = [{
    title: "Error Messages",
    code: 'colorText("❌ Error: File not found", "red")',
    colors: ["red"] as const,
    text: "❌ Error: File not found"
  }, {
    title: "Success Messages",
    code: 'colorText("✅ Operation completed successfully", "green")',
    colors: ["green"] as const,
    text: "✅ Operation completed successfully"
  }, {
    title: "Important Notices",
    code: 'colorText("⚠️  Important: Please read carefully", "bold")',
    colors: ["bold"] as const,
    text: "⚠️  Important: Please read carefully"
  }, {
    title: "Success with Emphasis",
    code: 'colorText("🎉 Deployment successful!", "green", "bold")',
    colors: ["green", "bold"] as const,
    text: "🎉 Deployment successful!"
  }, {
    title: "Critical Errors",
    code: 'colorText("🚨 CRITICAL: System failure", "red", "bold")',
    colors: ["red", "bold"] as const,
    text: "🚨 CRITICAL: System failure"
  }];
  const handleLogExample = (text: string, colors: readonly string[]) => {
    const coloredText = colorText(text, ...(colors as any));
    console.log(\`Example: \${coloredText}\`);
  };
  return <div style={{
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px"
  }}>
      <h3>Common Use Cases</h3>
      <p style={{
      marginBottom: "20px",
      color: "#666"
    }}>
        Real-world examples of how to use colorText in different scenarios.
        Click "Test in Console" to see the colored output.
      </p>

      <div style={{
      display: "grid",
      gap: "15px"
    }}>
        {examples.map((example, index) => <div key={index} style={{
        border: "1px solid #e9ecef",
        borderRadius: "8px",
        padding: "20px",
        backgroundColor: "#f8f9fa"
      }}>
            <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginBottom: "15px"
        }}>
              <div style={{
            flex: 1
          }}>
                <h4 style={{
              margin: "0 0 10px 0",
              color: "#495057"
            }}>
                  {example.title}
                </h4>
                <div style={{
              backgroundColor: "#1e1e1e",
              color: "#d4d4d4",
              padding: "12px",
              borderRadius: "4px",
              fontFamily: "monospace",
              fontSize: "14px",
              marginBottom: "10px"
            }}>
                  Preview: {colorText(example.text, ...example.colors)}
                </div>
              </div>
              <button onClick={() => handleLogExample(example.text, example.colors)} style={{
            marginLeft: "15px",
            padding: "8px 16px",
            fontSize: "12px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            whiteSpace: "nowrap"
          }}>
                Test in Console
              </button>
            </div>
            <Prism>{example.code}</Prism>
          </div>)}
      </div>

      <div style={{
      marginTop: "30px",
      padding: "20px",
      backgroundColor: "#fff3cd",
      border: "1px solid #ffeaa7",
      borderRadius: "8px"
    }}>
        <h4 style={{
        marginTop: 0,
        color: "#856404"
      }}>🎨 Color Reference</h4>
        <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: "15px",
        marginTop: "15px"
      }}>
          <div>
            <strong style={{
            color: "#dc3545"
          }}>Red:</strong>
            <div style={{
            fontSize: "12px",
            color: "#6c757d",
            marginTop: "5px"
          }}>
              ANSI Code: <code>\\\\x1b[31m</code>
              <br />
              Use for: Errors, warnings, failures
            </div>
          </div>
          <div>
            <strong style={{
            color: "#28a745"
          }}>Green:</strong>
            <div style={{
            fontSize: "12px",
            color: "#6c757d",
            marginTop: "5px"
          }}>
              ANSI Code: <code>\\\\x1b[32m</code>
              <br />
              Use for: Success, completion, positive feedback
            </div>
          </div>
          <div>
            <strong>Bold:</strong>
            <div style={{
            fontSize: "12px",
            color: "#6c757d",
            marginTop: "5px"
          }}>
              ANSI Code: <code>\\\\x1b[1m</code>
              <br />
              Use for: Emphasis, important notices, headers
            </div>
          </div>
        </div>
      </div>
    </div>;
}`,...(k=(S=u.parameters)==null?void 0:S.docs)==null?void 0:k.source}}};var B,L,I;x.parameters={...x.parameters,docs:{...(B=x.parameters)==null?void 0:B.docs,source:{originalSource:`() => {
  const [logEntries, setLogEntries] = useState<Array<{
    timestamp: string;
    level: "info" | "warn" | "error" | "success";
    message: string;
  }>>([]);
  const logLevels = {
    info: {
      colors: ["bold"] as const,
      icon: "ℹ️",
      bgColor: "#e3f2fd"
    },
    warn: {
      colors: ["red"] as const,
      icon: "⚠️",
      bgColor: "#fff3e0"
    },
    error: {
      colors: ["red", "bold"] as const,
      icon: "❌",
      bgColor: "#ffebee"
    },
    success: {
      colors: ["green"] as const,
      icon: "✅",
      bgColor: "#e8f5e8"
    }
  };
  const addLogEntry = (level: keyof typeof logLevels, message: string) => {
    const timestamp = new Date().toLocaleTimeString();
    const entry = {
      timestamp,
      level,
      message
    };
    setLogEntries(prev => [entry, ...prev.slice(0, 9)]); // Keep last 10

    // Log to console with colors
    const {
      colors,
      icon
    } = logLevels[level];
    const coloredMessage = colorText(\`[\${timestamp}] \${icon} \${message}\`, ...colors);
    console.log(coloredMessage);
  };
  const clearLogs = () => {
    setLogEntries([]);
    console.clear();
  };
  const simulateAppLogs = () => {
    const scenarios = [{
      level: "info" as const,
      message: "Application starting..."
    }, {
      level: "success" as const,
      message: "Database connected successfully"
    }, {
      level: "info" as const,
      message: "Loading configuration files"
    }, {
      level: "warn" as const,
      message: "Deprecated API usage detected"
    }, {
      level: "success" as const,
      message: "All services initialized"
    }, {
      level: "error" as const,
      message: "Failed to connect to external API"
    }, {
      level: "info" as const,
      message: "Server listening on port 3000"
    }];
    scenarios.forEach((scenario, index) => {
      setTimeout(() => {
        addLogEntry(scenario.level, scenario.message);
      }, index * 500);
    });
  };
  return <div style={{
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px"
  }}>
      <h3>Advanced Logging System</h3>
      <p style={{
      marginBottom: "20px",
      color: "#666"
    }}>
        Demonstration of building a sophisticated logging system using colorText
        for different log levels. Check your browser console to see the colored
        output.
      </p>

      <div style={{
      marginBottom: "20px"
    }}>
        <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
        gap: "10px",
        marginBottom: "15px"
      }}>
          {Object.entries(logLevels).map(([level, config]) => <button key={level} onClick={() => addLogEntry(level as any, \`Sample \${level} message\`)} style={{
          padding: "10px 15px",
          fontSize: "14px",
          backgroundColor: config.bgColor,
          border: "1px solid rgba(0,0,0,0.1)",
          borderRadius: "4px",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "8px"
        }}>
              <span>{config.icon}</span>
              <span style={{
            textTransform: "capitalize"
          }}>{level}</span>
            </button>)}
        </div>

        <div style={{
        display: "flex",
        gap: "10px"
      }}>
          <button onClick={simulateAppLogs} style={{
          padding: "12px 20px",
          fontSize: "14px",
          backgroundColor: "#17a2b8",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer"
        }}>
            Simulate App Startup
          </button>
          <button onClick={clearLogs} style={{
          padding: "12px 20px",
          fontSize: "14px",
          backgroundColor: "#6c757d",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer"
        }}>
            Clear Logs
          </button>
        </div>
      </div>

      {logEntries.length > 0 && <div style={{
      border: "1px solid #ddd",
      borderRadius: "8px",
      backgroundColor: "#f8f9fa",
      maxHeight: "400px",
      overflowY: "auto"
    }}>
          <div style={{
        padding: "15px",
        borderBottom: "1px solid #ddd",
        backgroundColor: "#e9ecef",
        fontWeight: "bold",
        position: "sticky",
        top: 0
      }}>
            Application Log History
          </div>
          {logEntries.map((entry, index) => {
        const config = logLevels[entry.level];
        return <div key={index} style={{
          padding: "12px 15px",
          borderBottom: index < logEntries.length - 1 ? "1px solid #eee" : "none",
          backgroundColor: index % 2 === 0 ? "#ffffff" : "#f8f9fa",
          display: "flex",
          alignItems: "center",
          gap: "10px"
        }}>
                <span style={{
            fontSize: "16px"
          }}>{config.icon}</span>
                <span style={{
            fontSize: "12px",
            color: "#6c757d",
            fontFamily: "monospace",
            minWidth: "80px"
          }}>
                  {entry.timestamp}
                </span>
                <span style={{
            fontSize: "12px",
            textTransform: "uppercase",
            fontWeight: "bold",
            minWidth: "60px",
            color: entry.level === "error" ? "#dc3545" : entry.level === "warn" ? "#fd7e14" : entry.level === "success" ? "#28a745" : "#6c757d"
          }}>
                  {entry.level}
                </span>
                <span style={{
            fontSize: "14px",
            flex: 1
          }}>
                  {entry.message}
                </span>
              </div>;
      })}
        </div>}

      <div style={{
      marginTop: "30px"
    }}>
        <h4>Implementation Example</h4>
        <Prism>
          {\`import { colorText } from '@wuchuheng/helper/utils/colorText';

class Logger {
  private log(level: string, message: string, colors: string[]) {
    const timestamp = new Date().toLocaleTimeString();
    const coloredMessage = colorText(\\\`[\\\${timestamp}] \\\${level}: \\\${message}\\\`, ...colors);
    console.log(coloredMessage);
  }

  info(message: string) {
    this.log('INFO', message, ['bold']);
  }

  success(message: string) {
    this.log('SUCCESS', message, ['green']);
  }

  warn(message: string) {
    this.log('WARN', message, ['red']);
  }

  error(message: string) {
    this.log('ERROR', message, ['red', 'bold']);
  }
}

// Usage
const logger = new Logger();
logger.info('Application starting...');
logger.success('Database connected');
logger.warn('Deprecated feature used');
logger.error('Connection failed');

// Or as utility functions
const logError = (msg: string) => console.error(colorText(\\\`❌ \\\${msg}\\\`, 'red', 'bold'));
const logSuccess = (msg: string) => console.log(colorText(\\\`✅ \\\${msg}\\\`, 'green'));
const logInfo = (msg: string) => console.log(colorText(\\\`ℹ️  \\\${msg}\\\`, 'bold'));\`}
        </Prism>
      </div>

      <div style={{
      marginTop: "20px",
      padding: "15px",
      backgroundColor: "#f0f8ff",
      border: "1px solid #b3d9ff",
      borderRadius: "8px"
    }}>
        <h4 style={{
        marginTop: 0,
        color: "#0066cc"
      }}>💻 CLI Applications</h4>
        <p style={{
        margin: 0,
        fontSize: "14px",
        color: "#424242"
      }}>
          This utility is especially powerful in CLI applications, Node.js
          scripts, and terminal-based tools where colored output greatly
          improves user experience and readability.
        </p>
      </div>
    </div>;
}`,...(I=(L=x.parameters)==null?void 0:L.docs)==null?void 0:I.source}}};var R,A,$;f.parameters={...f.parameters,docs:{...(R=f.parameters)==null?void 0:R.docs,source:{originalSource:`() => {
  return <div style={{
    padding: "20px"
  }}>
      <h3>Usage Examples & Best Practices</h3>

      <div style={{
      marginBottom: "30px"
    }}>
        <h4 style={{
        color: "#0066cc",
        marginBottom: "15px"
      }}>Basic Usage</h4>
        <Prism>
          {\`import { colorText } from '@wuchuheng/helper/utils/colorText';

// Single color
const errorMsg = colorText('Something went wrong!', 'red');
console.log(errorMsg);

// Multiple styles
const successMsg = colorText('Operation completed!', 'green', 'bold');
console.log(successMsg);

// All available colors
console.log(colorText('Red text', 'red'));
console.log(colorText('Green text', 'green'));
console.log(colorText('Bold text', 'bold'));\`}
        </Prism>
      </div>

      <div style={{
      marginBottom: "30px"
    }}>
        <h4 style={{
        color: "#28a745",
        marginBottom: "15px"
      }}>
          CLI Application Example
        </h4>
        <Prism>
          {\`#!/usr/bin/env node
import { colorText } from '@wuchuheng/helper/utils/colorText';

// CLI tool header
console.log(colorText('🚀 Deploy Tool v1.0.0', 'bold'));
console.log('─'.repeat(30));

// Process steps
console.log(colorText('📦 Building application...', 'bold'));
// ... build logic

console.log(colorText('✅ Build completed successfully', 'green'));

console.log(colorText('🌐 Deploying to production...', 'bold'));
// ... deploy logic

try {
  // ... deployment process
  console.log(colorText('🎉 Deployment successful!', 'green', 'bold'));
} catch (error) {
  console.error(colorText(\\\`❌ Deployment failed: \\\${error.message}\\\`, 'red', 'bold'));
  process.exit(1);
}\`}
        </Prism>
      </div>

      <div style={{
      marginBottom: "30px"
    }}>
        <h4 style={{
        color: "#17a2b8",
        marginBottom: "15px"
      }}>
          Development Logging
        </h4>
        <Prism>
          {\`import { colorText } from '@wuchuheng/helper/utils/colorText';

// Enhanced console methods
const dev = {
  log: (msg: string) => {
    if (process.env.NODE_ENV === 'development') {
      console.log(colorText(\\\`[DEV] \\\${msg}\\\`, 'bold'));
    }
  },
  
  success: (msg: string) => {
    console.log(colorText(\\\`✅ \\\${msg}\\\`, 'green'));
  },
  
  error: (msg: string, details?: any) => {
    console.error(colorText(\\\`❌ \\\${msg}\\\`, 'red', 'bold'));
    if (details && process.env.NODE_ENV === 'development') {
      console.error(details);
    }
  },
  
  warn: (msg: string) => {
    console.warn(colorText(\\\`⚠️  \\\${msg}\\\`, 'red'));
  }
};

// Usage in your application
dev.log('Starting server initialization...');
dev.success('Database connection established');
dev.warn('API rate limit approaching');
dev.error('Authentication failed', { userId: 123, timestamp: Date.now() });\`}
        </Prism>
      </div>

      <div style={{
      marginBottom: "30px"
    }}>
        <h4 style={{
        color: "#dc3545",
        marginBottom: "15px"
      }}>
          Testing & Debugging
        </h4>
        <Prism>
          {\`import { colorText } from '@wuchuheng/helper/utils/colorText';

// Test suite helpers
const testHelpers = {
  suite: (name: string) => {
    console.log(colorText(\\\`\\\\n🧪 Testing: \\\${name}\\\`, 'bold'));
    console.log('─'.repeat(50));
  },
  
  pass: (testName: string) => {
    console.log(colorText(\\\`  ✅ \\\${testName}\\\`, 'green'));
  },
  
  fail: (testName: string, error: string) => {
    console.log(colorText(\\\`  ❌ \\\${testName}\\\`, 'red', 'bold'));
    console.log(colorText(\\\`     Error: \\\${error}\\\`, 'red'));
  },
  
  skip: (testName: string) => {
    console.log(colorText(\\\`  ⏭️  \\\${testName} (skipped)\\\`, 'red'));
  }
};

// Usage in tests
testHelpers.suite('User Authentication');
testHelpers.pass('should login with valid credentials');
testHelpers.fail('should reject invalid password', 'Password mismatch');
testHelpers.skip('should handle OAuth login');

// Debug tracing
const debug = (label: string, value: any) => {
  console.log(colorText(\\\`🔍 \\\${label}:\\\`, 'bold'), value);
};

debug('API Response', { status: 200, data: [...] });
debug('User State', { id: 1, name: 'John' });\`}
        </Prism>
      </div>

      <div style={{
      marginBottom: "30px"
    }}>
        <h4 style={{
        color: "#6f42c1",
        marginBottom: "15px"
      }}>
          Progress Indicators
        </h4>
        <Prism>
          {\`import { colorText } from '@wuchuheng/helper/utils/colorText';

// Progress tracking
class ProgressTracker {
  private steps: string[] = [];
  private current = 0;

  constructor(steps: string[]) {
    this.steps = steps;
  }

  start() {
    console.log(colorText('🚀 Starting process...\\\\n', 'bold'));
    this.showProgress();
  }

  next(message?: string) {
    if (this.current < this.steps.length) {
      console.log(colorText(\\\`✅ \\\${this.steps[this.current]}\\\`, 'green'));
      if (message) {
        console.log(colorText(\\\`   \\\${message}\\\`, 'bold'));
      }
      this.current++;
      console.log();
      this.showProgress();
    }
  }

  error(message: string) {
    console.log(colorText(\\\`❌ \\\${this.steps[this.current]}\\\`, 'red', 'bold'));
    console.log(colorText(\\\`   Error: \\\${message}\\\\n\\\`, 'red'));
  }

  complete() {
    console.log(colorText('🎉 All steps completed successfully!', 'green', 'bold'));
  }

  private showProgress() {
    if (this.current < this.steps.length) {
      console.log(colorText(\\\`⏳ \\\${this.steps[this.current]}...\\\`, 'bold'));
    }
  }
}

// Usage
const progress = new ProgressTracker([
  'Validating configuration',
  'Connecting to database',
  'Loading user data',
  'Initializing services',
  'Starting server'
]);

progress.start();
// ... async operation
progress.next('Config validation passed');
// ... async operation  
progress.next('Database connection established');
// ... error occurred
progress.error('Connection timeout');\`}
        </Prism>
      </div>

      <div style={{
      padding: "20px",
      backgroundColor: "#e3f2fd",
      border: "1px solid #90caf9",
      borderRadius: "8px",
      marginBottom: "20px"
    }}>
        <h4 style={{
        marginTop: 0,
        color: "#1565c0"
      }}>💡 Best Practices</h4>
        <ul style={{
        color: "#424242",
        fontSize: "14px",
        lineHeight: 1.6
      }}>
          <li>
            <strong>Consistent color usage:</strong> Use red for errors, green
            for success, bold for emphasis
          </li>
          <li>
            <strong>Combine colors thoughtfully:</strong> red + bold for
            critical errors, green + bold for major successes
          </li>
          <li>
            <strong>Environment awareness:</strong> Consider disabling colors in
            production logs or non-TTY environments
          </li>
          <li>
            <strong>Accessibility:</strong> Don't rely solely on colors to
            convey information; use icons and clear text
          </li>
          <li>
            <strong>Performance:</strong> Colors add minimal overhead, but
            consider caching frequently used styled strings
          </li>
        </ul>
      </div>

      <div style={{
      padding: "15px",
      backgroundColor: "#f3e5f5",
      border: "1px solid #ce93d8",
      borderRadius: "8px"
    }}>
        <h4 style={{
        marginTop: 0,
        color: "#7b1fa2"
      }}>
          🎯 When to Use Colors
        </h4>
        <div style={{
        fontSize: "14px",
        color: "#424242"
      }}>
          <p>
            <strong>✅ Good for:</strong> CLI tools, development logging, test
            output, build scripts, deployment tools
          </p>
          <p>
            <strong>❌ Avoid in:</strong> Production application logs (use
            structured logging), automated parsing scenarios, environments
            without TTY support
          </p>
        </div>
      </div>
    </div>;
}`,...($=(A=f.parameters)==null?void 0:A.docs)==null?void 0:$.source}}};const O=["BasicUsage","ColorExamples","AdvancedUsage","UsageExamples"];export{x as AdvancedUsage,m as BasicUsage,u as ColorExamples,f as UsageExamples,O as __namedExportsOrder,U as default};

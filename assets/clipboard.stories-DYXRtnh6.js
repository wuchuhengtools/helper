import{r as i,R as e}from"./index-DQDNmYQF.js";import{T as H,c as s}from"./CodeBlock-C8-L1nso.js";const F={title:"Utils/Clipboard",component:null},p=()=>{const[t,r]=i.useState("Hello, World!"),[o,d]=i.useState(!1),n=()=>{s(t),d(!0),setTimeout(()=>d(!1),2e3)};return e.createElement("div",{style:{padding:"20px",border:"1px solid #ccc",borderRadius:"8px"}},e.createElement("h3",null,"Basic Clipboard Usage"),e.createElement("div",{style:{marginBottom:"15px"}},e.createElement("label",{htmlFor:"textInput",style:{display:"block",marginBottom:"5px"}},"Text to copy:"),e.createElement("input",{id:"textInput",type:"text",value:t,onChange:a=>r(a.target.value),style:{width:"100%",padding:"8px",border:"1px solid #ddd",borderRadius:"4px"}})),e.createElement("button",{onClick:n,style:{padding:"10px 20px",backgroundColor:o?"#28a745":"#007bff",color:"white",border:"none",borderRadius:"4px",cursor:"pointer",marginBottom:"15px"}},o?"Copied!":"Copy to Clipboard"),e.createElement("div",{style:{padding:"10px",backgroundColor:o?"#d4edda":"#f8f9fa",border:"1px solid "+(o?"#c3e6cb":"#ddd"),borderRadius:"4px",fontSize:"14px"}},o?"✓ Text copied to clipboard!":"Click the button to copy text to clipboard"))},l=()=>{const t=`This is a longer text example that demonstrates how the clipboard utility handles longer content. It includes multiple sentences and various types of content to ensure it works properly with different text lengths and formats.

The function should be able to copy any string content to the clipboard, regardless of length or content type. This includes special characters, numbers, and unicode characters.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,[r,o]=i.useState(!1),d=()=>{s(t),o(!0),setTimeout(()=>o(!1),2e3)};return e.createElement("div",{style:{padding:"20px",border:"1px solid #ccc",borderRadius:"8px"}},e.createElement("h3",null,"Long Text Example"),e.createElement("div",{style:{marginBottom:"15px",maxHeight:"150px",overflow:"auto"}},e.createElement("p",{style:{margin:0,whiteSpace:"pre-wrap",fontSize:"14px"}},t)),e.createElement("button",{onClick:d,style:{padding:"10px 20px",backgroundColor:r?"#28a745":"#007bff",color:"white",border:"none",borderRadius:"4px",cursor:"pointer",marginBottom:"15px"}},r?"Copied!":"Copy Long Text"),e.createElement("div",{style:{padding:"10px",backgroundColor:r?"#d4edda":"#f8f9fa",border:"1px solid "+(r?"#c3e6cb":"#ddd"),borderRadius:"4px",fontSize:"14px"}},r?"✓ Long text copied to clipboard!":"This demonstrates copying longer text content"))},c=()=>{const t=[{name:"Email",text:"user@example.com"},{name:"URL",text:"https://example.com/path?query=value#fragment"},{name:"JSON",text:'{"name": "John", "age": 30, "city": "New York"}'},{name:"Special Chars",text:"Hello, World! @#$%^&*()_+-=[]{}|;:,.<>?"},{name:"Unicode",text:"こんにちは 🌍 Hello 世界! 🎉"},{name:"Numbers",text:"12345 67890 3.14159 -42"}],[r,o]=i.useState(null),d=n=>{s(n),o(t.findIndex(a=>a.text===n)),setTimeout(()=>o(null),2e3)};return e.createElement("div",{style:{padding:"20px",border:"1px solid #ccc",borderRadius:"8px"}},e.createElement("h3",null,"Special Characters & Unicode"),e.createElement("p",{style:{marginBottom:"15px"}},"Test copying text with various special characters and unicode:"),e.createElement("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(250px, 1fr)",gap:"10px"}},t.map((n,a)=>e.createElement("div",{key:a,style:{padding:"15px",border:"1px solid #ddd",borderRadius:"4px",backgroundColor:"#f8f9fa"}},e.createElement("h4",{style:{margin:"0 0 10px 0",fontSize:"16px"}},n.name),e.createElement("p",{style:{margin:"0 0 10px 0",fontSize:"14px",wordBreak:"break-all",fontFamily:"monospace"}},n.text),e.createElement("button",{onClick:()=>d(n.text),style:{padding:"8px 16px",backgroundColor:r===a?"#28a745":"#007bff",color:"white",border:"none",borderRadius:"4px",cursor:"pointer",fontSize:"14px"}},r===a?"Copied!":"Copy")))))},m=()=>{const[t,r]=i.useState(""),[o,d]=i.useState(""),[n,a]=i.useState(!1),[g,b]=i.useState(!1),z=()=>{t&&(s(t),a(!0),setTimeout(()=>a(!1),2e3))},L=()=>{o&&(s(o),b(!0),setTimeout(()=>b(!1),2e3))};return e.createElement("div",{style:{padding:"20px",border:"1px solid #ccc",borderRadius:"8px"}},e.createElement("h3",null,"Password Example"),e.createElement("p",{style:{marginBottom:"15px"}},"Demonstrate copying sensitive information (passwords are not actually stored, this is just for demonstration):"),e.createElement("div",{style:{marginBottom:"15px"}},e.createElement("label",{htmlFor:"password",style:{display:"block",marginBottom:"5px"}},"Password:"),e.createElement("div",{style:{display:"flex",gap:"10px"}},e.createElement("input",{id:"password",type:"password",value:t,onChange:u=>r(u.target.value),style:{flex:1,padding:"8px",border:"1px solid #ddd",borderRadius:"4px"}}),e.createElement("button",{onClick:z,disabled:!t,style:{padding:"8px 16px",backgroundColor:n?"#28a745":t?"#007bff":"#6c757d",color:"white",border:"none",borderRadius:"4px",cursor:t?"pointer":"not-allowed",minWidth:"80px"}},n?"Copied!":"Copy"))),e.createElement("div",{style:{marginBottom:"15px"}},e.createElement("label",{htmlFor:"confirmPassword",style:{display:"block",marginBottom:"5px"}},"Confirm Password:"),e.createElement("div",{style:{display:"flex",gap:"10px"}},e.createElement("input",{id:"confirmPassword",type:"password",value:o,onChange:u=>d(u.target.value),style:{flex:1,padding:"8px",border:"1px solid #ddd",borderRadius:"4px"}}),e.createElement("button",{onClick:L,disabled:!o,style:{padding:"8px 16px",backgroundColor:g?"#28a745":o?"#007bff":"#6c757d",color:"white",border:"none",borderRadius:"4px",cursor:o?"pointer":"not-allowed",minWidth:"80px"}},g?"Copied!":"Copy"))),e.createElement("div",{style:{padding:"10px",backgroundColor:"#fff3cd",border:"1px solid #ffeaa7",borderRadius:"4px",fontSize:"14px"}},"⚠️ Note: This is a demonstration. In real applications, be careful when copying sensitive information to clipboard."))},x=()=>e.createElement("div",{style:{padding:"20px",border:"1px solid #ccc",borderRadius:"8px"}},e.createElement("h3",null,"Usage Example"),e.createElement("div",{style:{marginBottom:"15px"}},e.createElement("h4",{style:{color:"#007bff",marginBottom:"10px"}},"Code Example"),e.createElement(H,null,`
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
`)),e.createElement("div",{style:{padding:"15px",backgroundColor:"#e7f3ff",border:"1px solid #b3d9ff",borderRadius:"4px"}},e.createElement("h4",{style:{margin:"0 0 10px 0",color:"#0066cc"}},"Key Points:"),e.createElement("ul",{style:{margin:0,paddingLeft:"20px"}},e.createElement("li",null,"Creates a temporary textarea element"),e.createElement("li",null,"Sets the text value to be copied"),e.createElement("li",null,"Selects the text programmatically"),e.createElement("li",null,"Uses document.execCommand('copy')"),e.createElement("li",null,"Cleans up by removing the temporary element"),e.createElement("li",null,"Works in all modern browsers"))));var y,f,C;p.parameters={...p.parameters,docs:{...(y=p.parameters)==null?void 0:y.docs,source:{originalSource:`() => {
  const [textToCopy, setTextToCopy] = useState('Hello, World!');
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    copyStringToClipboard(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return <div style={{
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px'
  }}>
      <h3>Basic Clipboard Usage</h3>
      
      <div style={{
      marginBottom: '15px'
    }}>
        <label htmlFor="textInput" style={{
        display: 'block',
        marginBottom: '5px'
      }}>
          Text to copy:
        </label>
        <input id="textInput" type="text" value={textToCopy} onChange={e => setTextToCopy(e.target.value)} style={{
        width: '100%',
        padding: '8px',
        border: '1px solid #ddd',
        borderRadius: '4px'
      }} />
      </div>
      
      <button onClick={handleCopy} style={{
      padding: '10px 20px',
      backgroundColor: copied ? '#28a745' : '#007bff',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      marginBottom: '15px'
    }}>
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
    </div>;
}`,...(C=(f=p.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};var h,w,v;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`() => {
  const longText = \`This is a longer text example that demonstrates how the clipboard utility handles longer content. It includes multiple sentences and various types of content to ensure it works properly with different text lengths and formats.

The function should be able to copy any string content to the clipboard, regardless of length or content type. This includes special characters, numbers, and unicode characters.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\`;
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    copyStringToClipboard(longText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return <div style={{
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px'
  }}>
      <h3>Long Text Example</h3>
      
      <div style={{
      marginBottom: '15px',
      maxHeight: '150px',
      overflow: 'auto'
    }}>
        <p style={{
        margin: 0,
        whiteSpace: 'pre-wrap',
        fontSize: '14px'
      }}>
          {longText}
        </p>
      </div>
      
      <button onClick={handleCopy} style={{
      padding: '10px 20px',
      backgroundColor: copied ? '#28a745' : '#007bff',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      marginBottom: '15px'
    }}>
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
    </div>;
}`,...(v=(w=l.parameters)==null?void 0:w.docs)==null?void 0:v.source}}};var E,T,S;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`() => {
  const testCases = [{
    name: 'Email',
    text: 'user@example.com'
  }, {
    name: 'URL',
    text: 'https://example.com/path?query=value#fragment'
  }, {
    name: 'JSON',
    text: '{"name": "John", "age": 30, "city": "New York"}'
  }, {
    name: 'Special Chars',
    text: 'Hello, World! @#$%^&*()_+-=[]{}|;:,.<>?'
  }, {
    name: 'Unicode',
    text: 'こんにちは 🌍 Hello 世界! 🎉'
  }, {
    name: 'Numbers',
    text: '12345 67890 3.14159 -42'
  }];
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const handleCopy = (text: string) => {
    copyStringToClipboard(text);
    setCopiedIndex(testCases.findIndex(tc => tc.text === text));
    setTimeout(() => setCopiedIndex(null), 2000);
  };
  return <div style={{
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px'
  }}>
      <h3>Special Characters & Unicode</h3>
      <p style={{
      marginBottom: '15px'
    }}>
        Test copying text with various special characters and unicode:
      </p>
      
      <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr)',
      gap: '10px'
    }}>
        {testCases.map((testCase, index) => <div key={index} style={{
        padding: '15px',
        border: '1px solid #ddd',
        borderRadius: '4px',
        backgroundColor: '#f8f9fa'
      }}>
            <h4 style={{
          margin: '0 0 10px 0',
          fontSize: '16px'
        }}>{testCase.name}</h4>
            <p style={{
          margin: '0 0 10px 0',
          fontSize: '14px',
          wordBreak: 'break-all',
          fontFamily: 'monospace'
        }}>
              {testCase.text}
            </p>
            <button onClick={() => handleCopy(testCase.text)} style={{
          padding: '8px 16px',
          backgroundColor: copiedIndex === index ? '#28a745' : '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '14px'
        }}>
              {copiedIndex === index ? 'Copied!' : 'Copy'}
            </button>
          </div>)}
      </div>
    </div>;
}`,...(S=(T=c.parameters)==null?void 0:T.docs)==null?void 0:S.source}}};var k,R,B;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`() => {
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
  return <div style={{
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px'
  }}>
      <h3>Password Example</h3>
      <p style={{
      marginBottom: '15px'
    }}>
        Demonstrate copying sensitive information (passwords are not actually stored, this is just for demonstration):
      </p>
      
      <div style={{
      marginBottom: '15px'
    }}>
        <label htmlFor="password" style={{
        display: 'block',
        marginBottom: '5px'
      }}>
          Password:
        </label>
        <div style={{
        display: 'flex',
        gap: '10px'
      }}>
          <input id="password" type="password" value={password} onChange={e => setPassword(e.target.value)} style={{
          flex: 1,
          padding: '8px',
          border: '1px solid #ddd',
          borderRadius: '4px'
        }} />
          <button onClick={handleCopyPassword} disabled={!password} style={{
          padding: '8px 16px',
          backgroundColor: copiedPassword ? '#28a745' : password ? '#007bff' : '#6c757d',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: password ? 'pointer' : 'not-allowed',
          minWidth: '80px'
        }}>
            {copiedPassword ? 'Copied!' : 'Copy'}
          </button>
        </div>
      </div>
      
      <div style={{
      marginBottom: '15px'
    }}>
        <label htmlFor="confirmPassword" style={{
        display: 'block',
        marginBottom: '5px'
      }}>
          Confirm Password:
        </label>
        <div style={{
        display: 'flex',
        gap: '10px'
      }}>
          <input id="confirmPassword" type="password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} style={{
          flex: 1,
          padding: '8px',
          border: '1px solid #ddd',
          borderRadius: '4px'
        }} />
          <button onClick={handleCopyConfirm} disabled={!confirmPassword} style={{
          padding: '8px 16px',
          backgroundColor: copiedConfirm ? '#28a745' : confirmPassword ? '#007bff' : '#6c757d',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: confirmPassword ? 'pointer' : 'not-allowed',
          minWidth: '80px'
        }}>
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
    </div>;
}`,...(B=(R=m.parameters)==null?void 0:R.docs)==null?void 0:B.source}}};var P,I,U;x.parameters={...x.parameters,docs:{...(P=x.parameters)==null?void 0:P.docs,source:{originalSource:`() => {
  const codeExample = \`
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
\`;
  return <div style={{
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px'
  }}>
      <h3>Usage Example</h3>
      
      <div style={{
      marginBottom: '15px'
    }}>
        <h4 style={{
        color: '#007bff',
        marginBottom: '10px'
      }}>Code Example</h4>
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
        <h4 style={{
        margin: '0 0 10px 0',
        color: '#0066cc'
      }}>Key Points:</h4>
        <ul style={{
        margin: 0,
        paddingLeft: '20px'
      }}>
          <li>Creates a temporary textarea element</li>
          <li>Sets the text value to be copied</li>
          <li>Selects the text programmatically</li>
          <li>Uses document.execCommand('copy')</li>
          <li>Cleans up by removing the temporary element</li>
          <li>Works in all modern browsers</li>
        </ul>
      </div>
    </div>;
}`,...(U=(I=x.parameters)==null?void 0:I.docs)==null?void 0:U.source}}};const N=["BasicUsage","LongTextExample","SpecialCharacters","PasswordExample","UsageExample"];export{p as BasicUsage,l as LongTextExample,m as PasswordExample,c as SpecialCharacters,x as UsageExample,N as __namedExportsOrder,F as default};

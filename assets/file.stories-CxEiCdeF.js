import{R as e}from"./index-DQDNmYQF.js";import{T as k}from"./CodeBlock-C8-L1nso.js";const p=t=>new Promise((o,r)=>{const n=new FileReader;n.readAsDataURL(t),n.onload=()=>o(n.result),n.onerror=l=>r(l)}),U={title:"Utils/File",component:null},a=()=>{const t=async o=>{var n;const r=(n=o.target.files)==null?void 0:n[0];if(r)try{const l=await p(r);console.log("Base64 result:",l),alert("File converted to base64! Check console for result.")}catch(l){console.error("Error converting file:",l),alert("Error converting file. Check console for details.")}};return e.createElement("div",{style:{padding:"20px",border:"1px solid #ccc",borderRadius:"8px"}},e.createElement("h3",null,"File to Base64 Converter"),e.createElement("input",{type:"file",onChange:t,style:{margin:"10px 0"}}),e.createElement("p",null,"Select a file to convert to base64"),e.createElement("p",null,"Result will appear in the browser console"))},s=()=>{const t=async()=>{const o=new File(["Hello, World!"],"hello.txt",{type:"text/plain"});try{const r=await p(o);console.log("Text file base64:",r),alert("Text file converted! Check console for base64 result.")}catch(r){console.error("Error converting text file:",r)}};return e.createElement("div",{style:{padding:"20px",border:"1px solid #ccc",borderRadius:"8px"}},e.createElement("h3",null,"Text File Example"),e.createElement("button",{onClick:t,style:{padding:"10px 20px",backgroundColor:"#007bff",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"}},"Convert Text File to Base64"),e.createElement("p",{style:{marginTop:"10px"}},"This creates a sample text file and converts it to base64"))},i=()=>{const t=async()=>{const o=document.createElement("canvas");o.width=100,o.height=100;const r=o.getContext("2d");r&&(r.fillStyle="#ff0000",r.fillRect(0,0,100,100),r.fillStyle="#ffffff",r.font="20px Arial",r.fillText("IMG",25,55));try{const n=await new Promise(l=>o.toBlob(l));if(n){const l=new File([n],"test.png",{type:"image/png"}),B=await p(l);console.log("Image file base64:",B),alert("Image file converted! Check console for base64 result.")}}catch(n){console.error("Error converting image file:",n)}};return e.createElement("div",{style:{padding:"20px",border:"1px solid #ccc",borderRadius:"8px"}},e.createElement("h3",null,"Image File Example"),e.createElement("button",{onClick:t,style:{padding:"10px 20px",backgroundColor:"#28a745",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"}},"Convert Image File to Base64"),e.createElement("p",{style:{marginTop:"10px"}},"This creates a sample image file and converts it to base64"))},c=()=>{const t=async()=>{const o=new File(["test"],"test.txt"),r=global.FileReader;global.FileReader=class extends FileReader{readAsDataURL(){setTimeout(()=>{this.onerror&&this.onerror(new ProgressEvent("error"))},100)}};try{await p(o)}catch(n){console.error("Expected error caught:",n),alert("Error properly handled! Check console for details.")}finally{global.FileReader=r}};return e.createElement("div",{style:{padding:"20px",border:"1px solid #ccc",borderRadius:"8px"}},e.createElement("h3",null,"Error Handling Example"),e.createElement("button",{onClick:t,style:{padding:"10px 20px",backgroundColor:"#dc3545",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"}},"Test Error Handling"),e.createElement("p",{style:{marginTop:"10px"}},"This demonstrates how the function handles file reading errors"))},d=()=>e.createElement("div",{style:{padding:"20px",border:"1px solid #ccc",borderRadius:"8px"}},e.createElement("h3",null,"Code Example"),e.createElement(k,null,`
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
`),e.createElement("p",{style:{marginTop:"10px"}},"Basic usage pattern for fileToBase64 function"));var f,u,g;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`() => {
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
  return <div style={{
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px'
  }}>
      <h3>File to Base64 Converter</h3>
      <input type="file" onChange={handleFileChange} style={{
      margin: '10px 0'
    }} />
      <p>Select a file to convert to base64</p>
      <p>Result will appear in the browser console</p>
    </div>;
}`,...(g=(u=a.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var m,x,b;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
  const createTextFile = async () => {
    const file = new File(['Hello, World!'], 'hello.txt', {
      type: 'text/plain'
    });
    try {
      const base64 = await fileToBase64(file);
      console.log('Text file base64:', base64);
      alert('Text file converted! Check console for base64 result.');
    } catch (error) {
      console.error('Error converting text file:', error);
    }
  };
  return <div style={{
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px'
  }}>
      <h3>Text File Example</h3>
      <button onClick={createTextFile} style={{
      padding: '10px 20px',
      backgroundColor: '#007bff',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer'
    }}>
        Convert Text File to Base64
      </button>
      <p style={{
      marginTop: '10px'
    }}>
        This creates a sample text file and converts it to base64
      </p>
    </div>;
}`,...(b=(x=s.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var h,y,E;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`() => {
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
      const blob = await new Promise<Blob | null>(resolve => canvas.toBlob(resolve));
      if (blob) {
        const file = new File([blob], 'test.png', {
          type: 'image/png'
        });
        const base64 = await fileToBase64(file);
        console.log('Image file base64:', base64);
        alert('Image file converted! Check console for base64 result.');
      }
    } catch (error) {
      console.error('Error converting image file:', error);
    }
  };
  return <div style={{
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px'
  }}>
      <h3>Image File Example</h3>
      <button onClick={createImageFile} style={{
      padding: '10px 20px',
      backgroundColor: '#28a745',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer'
    }}>
        Convert Image File to Base64
      </button>
      <p style={{
      marginTop: '10px'
    }}>
        This creates a sample image file and converts it to base64
      </p>
    </div>;
}`,...(E=(y=i.parameters)==null?void 0:y.docs)==null?void 0:E.source}}};var v,T,F;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`() => {
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
  return <div style={{
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px'
  }}>
      <h3>Error Handling Example</h3>
      <button onClick={simulateError} style={{
      padding: '10px 20px',
      backgroundColor: '#dc3545',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer'
    }}>
        Test Error Handling
      </button>
      <p style={{
      marginTop: '10px'
    }}>
        This demonstrates how the function handles file reading errors
      </p>
    </div>;
}`,...(F=(T=c.parameters)==null?void 0:T.docs)==null?void 0:F.source}}};var C,w,R;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`() => {
  const codeExample = \`
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
\`;
  return <div style={{
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px'
  }}>
      <h3>Code Example</h3>
      <TypescriptCodeBlock>

        {codeExample}
      </TypescriptCodeBlock>
        
      <p style={{
      marginTop: '10px'
    }}>
        Basic usage pattern for fileToBase64 function
      </p>
    </div>;
}`,...(R=(w=d.parameters)==null?void 0:w.docs)==null?void 0:R.source}}};const H=["BasicUsage","TextFileExample","ImageFileExample","ErrorHandling","UsageExample"];export{a as BasicUsage,c as ErrorHandling,i as ImageFileExample,s as TextFileExample,d as UsageExample,H as __namedExportsOrder,U as default};

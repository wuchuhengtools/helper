import{r as i,R as e}from"./index-DQDNmYQF.js";import{T as y}from"./CodeBlock-C8-L1nso.js";const g=t=>{let r="";for(const s in t)t[s]!==""&&(r+=`${s}=${t[s]}&`);return r===""?"":(r=r.substr(0,r.length-1),"?"+r)},w=t=>{const r={};if(t.startsWith("?")&&(t=t.substring(1)),t.length===0)return r;for(const s of t.split("&")){const[n,a]=s.split("=");if(!(a===void 0||a==="undefined"||a===""))try{r[n]=decodeURIComponent(a)}catch{r[n]=a}}return r},N={title:"Utils/URL",component:null},d=()=>{const[t,r]=i.useState('{"name": "John", "age": 30}'),[s,n]=i.useState(""),a=()=>{try{const o=JSON.parse(t),l=g(o);n(l)}catch{n("Invalid JSON object")}};return e.createElement("div",{style:{padding:"20px",border:"1px solid #ccc",borderRadius:"8px"}},e.createElement("h3",null,"Object to Query String"),e.createElement("div",{style:{marginBottom:"15px"}},e.createElement("label",{htmlFor:"objectInput",style:{display:"block",marginBottom:"5px"}},"JSON Object:"),e.createElement("textarea",{id:"objectInput",value:t,onChange:o=>r(o.target.value),style:{width:"100%",height:"80px",padding:"8px",border:"1px solid #ddd",borderRadius:"4px",fontFamily:"monospace"}})),e.createElement("button",{onClick:a,style:{padding:"10px 20px",backgroundColor:"#007bff",color:"white",border:"none",borderRadius:"4px",cursor:"pointer",marginBottom:"15px"}},"Convert to Query String"),e.createElement("div",null,e.createElement("label",{style:{display:"block",marginBottom:"5px"}},"Result:"),e.createElement("div",{style:{padding:"10px",backgroundColor:"#f8f9fa",border:"1px solid #ddd",borderRadius:"4px",fontFamily:"monospace",wordBreak:"break-all"}},s||"Result will appear here")))},c=()=>{const[t,r]=i.useState("?name=John&age=30&city=New%20York"),[s,n]=i.useState(""),a=()=>{try{const o=w(t);n(JSON.stringify(o,null,2))}catch{n("Invalid query string")}};return e.createElement("div",{style:{padding:"20px",border:"1px solid #ccc",borderRadius:"8px"}},e.createElement("h3",null,"Query String to Object"),e.createElement("div",{style:{marginBottom:"15px"}},e.createElement("label",{htmlFor:"queryInput",style:{display:"block",marginBottom:"5px"}},"Query String:"),e.createElement("textarea",{id:"queryInput",value:t,onChange:o=>r(o.target.value),style:{width:"100%",height:"80px",padding:"8px",border:"1px solid #ddd",borderRadius:"4px",fontFamily:"monospace"}})),e.createElement("button",{onClick:a,style:{padding:"10px 20px",backgroundColor:"#28a745",color:"white",border:"none",borderRadius:"4px",cursor:"pointer",marginBottom:"15px"}},"Convert to Object"),e.createElement("div",null,e.createElement("label",{style:{display:"block",marginBottom:"5px"}},"Result:"),e.createElement("pre",{style:{padding:"10px",backgroundColor:"#f8f9fa",border:"1px solid #ddd",borderRadius:"4px",fontFamily:"monospace",fontSize:"14px"}},s||"Result will appear here")))},u=()=>{const[t,r]=i.useState('{"search": "typescript", "page": 1, "limit": 10}'),[s,n]=i.useState(""),a=()=>{try{const o=JSON.parse(t),l=g(o),p=w(l);n(JSON.stringify(p,null,2))}catch{n("Error in conversion")}};return e.createElement("div",{style:{padding:"20px",border:"1px solid #ccc",borderRadius:"8px"}},e.createElement("h3",null,"Round Trip Conversion"),e.createElement("p",{style:{marginBottom:"15px"}},"Convert Object → Query String → Object to verify data integrity"),e.createElement("div",{style:{marginBottom:"15px"}},e.createElement("label",{htmlFor:"roundTripInput",style:{display:"block",marginBottom:"5px"}},"JSON Object:"),e.createElement("textarea",{id:"roundTripInput",value:t,onChange:o=>r(o.target.value),style:{width:"100%",height:"80px",padding:"8px",border:"1px solid #ddd",borderRadius:"4px",fontFamily:"monospace"}})),e.createElement("button",{onClick:a,style:{padding:"10px 20px",backgroundColor:"#17a2b8",color:"white",border:"none",borderRadius:"4px",cursor:"pointer",marginBottom:"15px"}},"Perform Round Trip"),e.createElement("div",null,e.createElement("label",{style:{display:"block",marginBottom:"5px"}},"Final Object:"),e.createElement("pre",{style:{padding:"10px",backgroundColor:"#f8f9fa",border:"1px solid #ddd",borderRadius:"4px",fontFamily:"monospace",fontSize:"14px"}},s||"Result will appear here")))},m=()=>{const t=[{name:"Empty Object",input:"{}",expectedQuery:"?"},{name:"Object with Empty Values",input:'{"name": "", "age": 25}',expectedQuery:"?age=25"},{name:"Special Characters",input:'{"query": "hello world", "symbol": "@#$"}',expectedQuery:"?query=hello world&symbol=@#$"},{name:"Unicode Characters",input:'{"greeting": "こんにちは", "emoji": "🌍"}',expectedQuery:"?greeting=こんにちは&emoji=🌍"}],[r,s]=i.useState(0),[n,a]=i.useState(""),o=()=>{const l=t[r];try{const p=JSON.parse(l.input),I=g(p);a(`Generated: ${I}
Expected: ${l.expectedQuery}`)}catch{a("Error: Invalid JSON")}};return e.createElement("div",{style:{padding:"20px",border:"1px solid #ccc",borderRadius:"8px"}},e.createElement("h3",null,"Edge Cases Testing"),e.createElement("div",{style:{marginBottom:"15px"}},e.createElement("label",{style:{display:"block",marginBottom:"5px"}},"Test Case:"),e.createElement("select",{value:r,onChange:l=>s(parseInt(l.target.value)),style:{width:"100%",padding:"8px",border:"1px solid #ddd",borderRadius:"4px"}},t.map((l,p)=>e.createElement("option",{key:p,value:p},l.name)))),e.createElement("div",{style:{marginBottom:"15px"}},e.createElement("label",{style:{display:"block",marginBottom:"5px"}},"Input:"),e.createElement("div",{style:{padding:"10px",backgroundColor:"#f8f9fa",border:"1px solid #ddd",borderRadius:"4px",fontFamily:"monospace"}},t[r].input)),e.createElement("button",{onClick:o,style:{padding:"10px 20px",backgroundColor:"#ffc107",color:"black",border:"none",borderRadius:"4px",cursor:"pointer",marginBottom:"15px"}},"Run Test"),e.createElement("div",null,e.createElement("label",{style:{display:"block",marginBottom:"5px"}},"Result:"),e.createElement("pre",{style:{padding:"10px",backgroundColor:"#f8f9fa",border:"1px solid #ddd",borderRadius:"4px",fontFamily:"monospace",fontSize:"14px"}},n||'Click "Run Test" to see results')))},b=()=>{const t={obj2Query:`
import { obj2Query } from '@wuchuheng/helper/utils/url';

const params = {
  search: 'typescript',
  page: 1,
  category: 'programming',
  sort: 'desc'
};

const queryString = obj2Query(params);
console.log(queryString); // "?search=typescript&page=1&category=programming&sort=desc"
    `,query2Obj:`
import { query2Obj } from '@wuchuheng/helper/utils/url';

const queryString = "?search=typescript&page=1&category=programming";
const params = query2Obj(queryString);
console.log(params);
// Output: { search: "typescript", page: "1", category: "programming" }
    `,combined:`
import { obj2Query, query2Obj } from '@wuchuheng/helper/utils/url';

// Create URL parameters from an object
const searchParams = {
  query: 'react hooks',
  filters: ['latest', 'popular'],
  page: 2
};

const queryString = obj2Query(searchParams);
// queryString = "?query=react hooks&filters=latest,filters=popular&page=2"

// Parse the query string back to an object
const parsedParams = query2Obj(queryString);
console.log(parsedParams);
    `};return e.createElement("div",{style:{padding:"20px",border:"1px solid #ccc",borderRadius:"8px"}},e.createElement("h3",null,"Usage Examples"),e.createElement("div",{style:{marginBottom:"20px"}},e.createElement("h4",{style:{color:"#007bff"}},"obj2Query"),e.createElement(y,null,t.obj2Query)),e.createElement("div",{style:{marginBottom:"20px"}},e.createElement("h4",{style:{color:"#28a745"}},"query2Obj"),e.createElement(y,null,t.query2Obj)),e.createElement("div",null,e.createElement("h4",{style:{color:"#17a2b8"}},"Combined Usage"),e.createElement(y,null,t.combined)))};var x,h,j;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`() => {
  const [inputObject, setInputObject] = useState<string>('{"name": "John", "age": 30}');
  const [result, setResult] = useState<string>('');
  const convertObjectToQuery = () => {
    try {
      const obj = JSON.parse(inputObject);
      const query = obj2Query(obj);
      setResult(query);
    } catch (error) {
      setResult('Invalid JSON object');
    }
  };
  return <div style={{
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px'
  }}>
      <h3>Object to Query String</h3>
      <div style={{
      marginBottom: '15px'
    }}>
        <label htmlFor="objectInput" style={{
        display: 'block',
        marginBottom: '5px'
      }}>
          JSON Object:
        </label>
        <textarea id="objectInput" value={inputObject} onChange={e => setInputObject(e.target.value)} style={{
        width: '100%',
        height: '80px',
        padding: '8px',
        border: '1px solid #ddd',
        borderRadius: '4px',
        fontFamily: 'monospace'
      }} />
      </div>
      <button onClick={convertObjectToQuery} style={{
      padding: '10px 20px',
      backgroundColor: '#007bff',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      marginBottom: '15px'
    }}>
        Convert to Query String
      </button>
      <div>
        <label style={{
        display: 'block',
        marginBottom: '5px'
      }}>
          Result:
        </label>
        <div style={{
        padding: '10px',
        backgroundColor: '#f8f9fa',
        border: '1px solid #ddd',
        borderRadius: '4px',
        fontFamily: 'monospace',
        wordBreak: 'break-all'
      }}>
          {result || 'Result will appear here'}
        </div>
      </div>
    </div>;
}`,...(j=(h=d.parameters)==null?void 0:h.docs)==null?void 0:j.source}}};var f,v,R;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`() => {
  const [inputQuery, setInputQuery] = useState<string>('?name=John&age=30&city=New%20York');
  const [result, setResult] = useState<string>('');
  const convertQueryToObject = () => {
    try {
      const obj = query2Obj(inputQuery);
      setResult(JSON.stringify(obj, null, 2));
    } catch (error) {
      setResult('Invalid query string');
    }
  };
  return <div style={{
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px'
  }}>
      <h3>Query String to Object</h3>
      <div style={{
      marginBottom: '15px'
    }}>
        <label htmlFor="queryInput" style={{
        display: 'block',
        marginBottom: '5px'
      }}>
          Query String:
        </label>
        <textarea id="queryInput" value={inputQuery} onChange={e => setInputQuery(e.target.value)} style={{
        width: '100%',
        height: '80px',
        padding: '8px',
        border: '1px solid #ddd',
        borderRadius: '4px',
        fontFamily: 'monospace'
      }} />
      </div>
      <button onClick={convertQueryToObject} style={{
      padding: '10px 20px',
      backgroundColor: '#28a745',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      marginBottom: '15px'
    }}>
        Convert to Object
      </button>
      <div>
        <label style={{
        display: 'block',
        marginBottom: '5px'
      }}>
          Result:
        </label>
        <pre style={{
        padding: '10px',
        backgroundColor: '#f8f9fa',
        border: '1px solid #ddd',
        borderRadius: '4px',
        fontFamily: 'monospace',
        fontSize: '14px'
      }}>
          {result || 'Result will appear here'}
        </pre>
      </div>
    </div>;
}`,...(R=(v=c.parameters)==null?void 0:v.docs)==null?void 0:R.source}}};var O,E,C;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`() => {
  const [inputObject, setInputObject] = useState<string>('{"search": "typescript", "page": 1, "limit": 10}');
  const [roundTripResult, setRoundTripResult] = useState<string>('');
  const performRoundTrip = () => {
    try {
      // Step 1: Object to Query
      const obj = JSON.parse(inputObject);
      const query = obj2Query(obj);

      // Step 2: Query back to Object
      const newObj = query2Obj(query);
      setRoundTripResult(JSON.stringify(newObj, null, 2));
    } catch (error) {
      setRoundTripResult('Error in conversion');
    }
  };
  return <div style={{
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px'
  }}>
      <h3>Round Trip Conversion</h3>
      <p style={{
      marginBottom: '15px'
    }}>
        Convert Object → Query String → Object to verify data integrity
      </p>
      
      <div style={{
      marginBottom: '15px'
    }}>
        <label htmlFor="roundTripInput" style={{
        display: 'block',
        marginBottom: '5px'
      }}>
          JSON Object:
        </label>
        <textarea id="roundTripInput" value={inputObject} onChange={e => setInputObject(e.target.value)} style={{
        width: '100%',
        height: '80px',
        padding: '8px',
        border: '1px solid #ddd',
        borderRadius: '4px',
        fontFamily: 'monospace'
      }} />
      </div>
      
      <button onClick={performRoundTrip} style={{
      padding: '10px 20px',
      backgroundColor: '#17a2b8',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      marginBottom: '15px'
    }}>
        Perform Round Trip
      </button>
      
      <div>
        <label style={{
        display: 'block',
        marginBottom: '5px'
      }}>
          Final Object:
        </label>
        <pre style={{
        padding: '10px',
        backgroundColor: '#f8f9fa',
        border: '1px solid #ddd',
        borderRadius: '4px',
        fontFamily: 'monospace',
        fontSize: '14px'
      }}>
          {roundTripResult || 'Result will appear here'}
        </pre>
      </div>
    </div>;
}`,...(C=(E=u.parameters)==null?void 0:E.docs)==null?void 0:C.source}}};var S,k,Q;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:`() => {
  const testCases = [{
    name: 'Empty Object',
    input: '{}',
    expectedQuery: '?'
  }, {
    name: 'Object with Empty Values',
    input: '{"name": "", "age": 25}',
    expectedQuery: '?age=25'
  }, {
    name: 'Special Characters',
    input: '{"query": "hello world", "symbol": "@#$"}',
    expectedQuery: '?query=hello world&symbol=@#$'
  }, {
    name: 'Unicode Characters',
    input: '{"greeting": "こんにちは", "emoji": "🌍"}',
    expectedQuery: '?greeting=こんにちは&emoji=🌍'
  }];
  const [selectedTest, setSelectedTest] = useState(0);
  const [result, setResult] = useState<string>('');
  const runTest = () => {
    const testCase = testCases[selectedTest];
    try {
      const obj = JSON.parse(testCase.input);
      const query = obj2Query(obj);
      setResult(\`Generated: \${query}\\nExpected: \${testCase.expectedQuery}\`);
    } catch (error) {
      setResult('Error: Invalid JSON');
    }
  };
  return <div style={{
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px'
  }}>
      <h3>Edge Cases Testing</h3>
      
      <div style={{
      marginBottom: '15px'
    }}>
        <label style={{
        display: 'block',
        marginBottom: '5px'
      }}>
          Test Case:
        </label>
        <select value={selectedTest} onChange={e => setSelectedTest(parseInt(e.target.value))} style={{
        width: '100%',
        padding: '8px',
        border: '1px solid #ddd',
        borderRadius: '4px'
      }}>
          {testCases.map((testCase, index) => <option key={index} value={index}>
              {testCase.name}
            </option>)}
        </select>
      </div>
      
      <div style={{
      marginBottom: '15px'
    }}>
        <label style={{
        display: 'block',
        marginBottom: '5px'
      }}>
          Input:
        </label>
        <div style={{
        padding: '10px',
        backgroundColor: '#f8f9fa',
        border: '1px solid #ddd',
        borderRadius: '4px',
        fontFamily: 'monospace'
      }}>
          {testCases[selectedTest].input}
        </div>
      </div>
      
      <button onClick={runTest} style={{
      padding: '10px 20px',
      backgroundColor: '#ffc107',
      color: 'black',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      marginBottom: '15px'
    }}>
        Run Test
      </button>
      
      <div>
        <label style={{
        display: 'block',
        marginBottom: '5px'
      }}>
          Result:
        </label>
        <pre style={{
        padding: '10px',
        backgroundColor: '#f8f9fa',
        border: '1px solid #ddd',
        borderRadius: '4px',
        fontFamily: 'monospace',
        fontSize: '14px'
      }}>
          {result || 'Click "Run Test" to see results'}
        </pre>
      </div>
    </div>;
}`,...(Q=(k=m.parameters)==null?void 0:k.docs)==null?void 0:Q.source}}};var T,q,B;b.parameters={...b.parameters,docs:{...(T=b.parameters)==null?void 0:T.docs,source:{originalSource:`() => {
  const codeExamples = {
    obj2Query: \`
import { obj2Query } from '@wuchuheng/helper/utils/url';

const params = {
  search: 'typescript',
  page: 1,
  category: 'programming',
  sort: 'desc'
};

const queryString = obj2Query(params);
console.log(queryString); // "?search=typescript&page=1&category=programming&sort=desc"
    \`,
    query2Obj: \`
import { query2Obj } from '@wuchuheng/helper/utils/url';

const queryString = "?search=typescript&page=1&category=programming";
const params = query2Obj(queryString);
console.log(params);
// Output: { search: "typescript", page: "1", category: "programming" }
    \`,
    combined: \`
import { obj2Query, query2Obj } from '@wuchuheng/helper/utils/url';

// Create URL parameters from an object
const searchParams = {
  query: 'react hooks',
  filters: ['latest', 'popular'],
  page: 2
};

const queryString = obj2Query(searchParams);
// queryString = "?query=react hooks&filters=latest,filters=popular&page=2"

// Parse the query string back to an object
const parsedParams = query2Obj(queryString);
console.log(parsedParams);
    \`
  };
  return <div style={{
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px'
  }}>
      <h3>Usage Examples</h3>
      
      <div style={{
      marginBottom: '20px'
    }}>
        <h4 style={{
        color: '#007bff'
      }}>obj2Query</h4>
        <TypescriptCodeBlock>
          {codeExamples.obj2Query}
        </TypescriptCodeBlock>
      </div>
      
      <div style={{
      marginBottom: '20px'
    }}>
        <h4 style={{
        color: '#28a745'
      }}>query2Obj</h4>
        <TypescriptCodeBlock>

      
          {codeExamples.query2Obj}
        </TypescriptCodeBlock>
      </div>
      
      <div>
        <h4 style={{
        color: '#17a2b8'
      }}>Combined Usage</h4>
        <TypescriptCodeBlock>
          {codeExamples.combined}
        </TypescriptCodeBlock>
      </div>
    </div>;
}`,...(B=(q=b.parameters)==null?void 0:q.docs)==null?void 0:B.source}}};const U=["ObjectToQuery","QueryToObject","RoundTripExample","EdgeCases","UsageExample"];export{m as EdgeCases,d as ObjectToQuery,c as QueryToObject,u as RoundTripExample,b as UsageExample,U as __namedExportsOrder,N as default};

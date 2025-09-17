import React, { useState } from 'react';
import { obj2Query, query2Obj } from './index';
import { TypescriptCodeBlock } from '../../../.storybook/CodeBlock';

export default {
  title: 'Utils/URL',
  component: null,
};

export const ObjectToQuery = () => {
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

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h3>Object to Query String</h3>
      <div style={{ marginBottom: '15px' }}>
        <label htmlFor="objectInput" style={{ display: 'block', marginBottom: '5px' }}>
          JSON Object:
        </label>
        <textarea
          id="objectInput"
          value={inputObject}
          onChange={(e) => setInputObject(e.target.value)}
          style={{
            width: '100%',
            height: '80px',
            padding: '8px',
            border: '1px solid #ddd',
            borderRadius: '4px',
            fontFamily: 'monospace'
          }}
        />
      </div>
      <button
        onClick={convertObjectToQuery}
        style={{
          padding: '10px 20px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          marginBottom: '15px'
        }}
      >
        Convert to Query String
      </button>
      <div>
        <label style={{ display: 'block', marginBottom: '5px' }}>
          Result:
        </label>
        <div
          style={{
            padding: '10px',
            backgroundColor: '#f8f9fa',
            border: '1px solid #ddd',
            borderRadius: '4px',
            fontFamily: 'monospace',
            wordBreak: 'break-all'
          }}
        >
          {result || 'Result will appear here'}
        </div>
      </div>
    </div>
  );
};

export const QueryToObject = () => {
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

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h3>Query String to Object</h3>
      <div style={{ marginBottom: '15px' }}>
        <label htmlFor="queryInput" style={{ display: 'block', marginBottom: '5px' }}>
          Query String:
        </label>
        <textarea
          id="queryInput"
          value={inputQuery}
          onChange={(e) => setInputQuery(e.target.value)}
          style={{
            width: '100%',
            height: '80px',
            padding: '8px',
            border: '1px solid #ddd',
            borderRadius: '4px',
            fontFamily: 'monospace'
          }}
        />
      </div>
      <button
        onClick={convertQueryToObject}
        style={{
          padding: '10px 20px',
          backgroundColor: '#28a745',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          marginBottom: '15px'
        }}
      >
        Convert to Object
      </button>
      <div>
        <label style={{ display: 'block', marginBottom: '5px' }}>
          Result:
        </label>
        <pre
          style={{
            padding: '10px',
            backgroundColor: '#f8f9fa',
            border: '1px solid #ddd',
            borderRadius: '4px',
            fontFamily: 'monospace',
            fontSize: '14px'
          }}
        >
          {result || 'Result will appear here'}
        </pre>
      </div>
    </div>
  );
};

export const RoundTripExample = () => {
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

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h3>Round Trip Conversion</h3>
      <p style={{ marginBottom: '15px' }}>
        Convert Object → Query String → Object to verify data integrity
      </p>
      
      <div style={{ marginBottom: '15px' }}>
        <label htmlFor="roundTripInput" style={{ display: 'block', marginBottom: '5px' }}>
          JSON Object:
        </label>
        <textarea
          id="roundTripInput"
          value={inputObject}
          onChange={(e) => setInputObject(e.target.value)}
          style={{
            width: '100%',
            height: '80px',
            padding: '8px',
            border: '1px solid #ddd',
            borderRadius: '4px',
            fontFamily: 'monospace'
          }}
        />
      </div>
      
      <button
        onClick={performRoundTrip}
        style={{
          padding: '10px 20px',
          backgroundColor: '#17a2b8',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          marginBottom: '15px'
        }}
      >
        Perform Round Trip
      </button>
      
      <div>
        <label style={{ display: 'block', marginBottom: '5px' }}>
          Final Object:
        </label>
        <pre
          style={{
            padding: '10px',
            backgroundColor: '#f8f9fa',
            border: '1px solid #ddd',
            borderRadius: '4px',
            fontFamily: 'monospace',
            fontSize: '14px'
          }}
        >
          {roundTripResult || 'Result will appear here'}
        </pre>
      </div>
    </div>
  );
};

export const EdgeCases = () => {
  const testCases = [
    {
      name: 'Empty Object',
      input: '{}',
      expectedQuery: '?'
    },
    {
      name: 'Object with Empty Values',
      input: '{"name": "", "age": 25}',
      expectedQuery: '?age=25'
    },
    {
      name: 'Special Characters',
      input: '{"query": "hello world", "symbol": "@#$"}',
      expectedQuery: '?query=hello world&symbol=@#$'
    },
    {
      name: 'Unicode Characters',
      input: '{"greeting": "こんにちは", "emoji": "🌍"}',
      expectedQuery: '?greeting=こんにちは&emoji=🌍'
    }
  ];

  const [selectedTest, setSelectedTest] = useState(0);
  const [result, setResult] = useState<string>('');

  const runTest = () => {
    const testCase = testCases[selectedTest];
    try {
      const obj = JSON.parse(testCase.input);
      const query = obj2Query(obj);
      setResult(`Generated: ${query}\nExpected: ${testCase.expectedQuery}`);
    } catch (error) {
      setResult('Error: Invalid JSON');
    }
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h3>Edge Cases Testing</h3>
      
      <div style={{ marginBottom: '15px' }}>
        <label style={{ display: 'block', marginBottom: '5px' }}>
          Test Case:
        </label>
        <select
          value={selectedTest}
          onChange={(e) => setSelectedTest(parseInt(e.target.value))}
          style={{
            width: '100%',
            padding: '8px',
            border: '1px solid #ddd',
            borderRadius: '4px'
          }}
        >
          {testCases.map((testCase, index) => (
            <option key={index} value={index}>
              {testCase.name}
            </option>
          ))}
        </select>
      </div>
      
      <div style={{ marginBottom: '15px' }}>
        <label style={{ display: 'block', marginBottom: '5px' }}>
          Input:
        </label>
        <div
          style={{
            padding: '10px',
            backgroundColor: '#f8f9fa',
            border: '1px solid #ddd',
            borderRadius: '4px',
            fontFamily: 'monospace'
          }}
        >
          {testCases[selectedTest].input}
        </div>
      </div>
      
      <button
        onClick={runTest}
        style={{
          padding: '10px 20px',
          backgroundColor: '#ffc107',
          color: 'black',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          marginBottom: '15px'
        }}
      >
        Run Test
      </button>
      
      <div>
        <label style={{ display: 'block', marginBottom: '5px' }}>
          Result:
        </label>
        <pre
          style={{
            padding: '10px',
            backgroundColor: '#f8f9fa',
            border: '1px solid #ddd',
            borderRadius: '4px',
            fontFamily: 'monospace',
            fontSize: '14px'
          }}
        >
          {result || 'Click "Run Test" to see results'}
        </pre>
      </div>
    </div>
  );
};

export const UsageExample = () => {
  const codeExamples = {
    obj2Query: `
import { obj2Query } from '@wuchuheng/helper/utils/url';

const params = {
  search: 'typescript',
  page: 1,
  category: 'programming',
  sort: 'desc'
};

const queryString = obj2Query(params);
console.log(queryString); // "?search=typescript&page=1&category=programming&sort=desc"
    `,
    query2Obj: `
import { query2Obj } from '@wuchuheng/helper/utils/url';

const queryString = "?search=typescript&page=1&category=programming";
const params = query2Obj(queryString);
console.log(params);
// Output: { search: "typescript", page: "1", category: "programming" }
    `,
    combined: `
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
    `
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h3>Usage Examples</h3>
      
      <div style={{ marginBottom: '20px' }}>
        <h4 style={{ color: '#007bff' }}>obj2Query</h4>
        <TypescriptCodeBlock>
          {codeExamples.obj2Query}
        </TypescriptCodeBlock>
      </div>
      
      <div style={{ marginBottom: '20px' }}>
        <h4 style={{ color: '#28a745' }}>query2Obj</h4>
        <TypescriptCodeBlock>

      
          {codeExamples.query2Obj}
        </TypescriptCodeBlock>
      </div>
      
      <div>
        <h4 style={{ color: '#17a2b8' }}>Combined Usage</h4>
        <TypescriptCodeBlock>
          {codeExamples.combined}
        </TypescriptCodeBlock>
      </div>
    </div>
  );
};
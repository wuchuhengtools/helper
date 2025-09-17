import React, { useState, useEffect, useRef, useCallback } from "react";
import type { Meta } from "@storybook/react";
import {  TypescriptCodeBlock as  Prism } from "../../../.storybook/CodeBlock";

import { debounce, throttling } from "./index";

const meta: Meta = {
  title: "Utils/Function",
  parameters: {
    docs: {
      description: {
        component:
          "Utility functions for optimizing performance by controlling function execution frequency.",
      },
    },
  },
};

export default meta;

export const DebounceExample = () => {
  const [inputValue, setInputValue] = useState("");
  const [debouncedValue, setDebouncedValue] = useState("");
  const [searchResults, setSearchResults] = useState<string[]>([]);
  const [delay, setDelay] = useState(500);
  const [callCount, setCallCount] = useState(0);
  const [lastCallTime, setLastCallTime] = useState<string>("");

  // Create debounced function
  const debouncedSearch = useCallback(
    debounce((value: string) => {
      setDebouncedValue(value);
      setCallCount((prev) => prev + 1);
      setLastCallTime(new Date().toLocaleTimeString());

      // Simulate search API call
      const mockResults = value
        ? [
            `Result 1 for "${value}"`,
            `Result 2 for "${value}"`,
            `Result 3 for "${value}"`,
          ]
        : [];
      setSearchResults(mockResults);
    }, delay),
    [delay]
  );

  useEffect(() => {
    debouncedSearch(inputValue);
  }, [inputValue, debouncedSearch]);

  const handleReset = () => {
    setInputValue("");
    setDebouncedValue("");
    setSearchResults([]);
    setCallCount(0);
    setLastCallTime("");
  };

  return (
    <div
      style={{ padding: "20px", border: "1px solid #ccc", borderRadius: "8px" }}
    >
      <h3>Debounce Example - Search Input</h3>
      <p style={{ marginBottom: "15px" }}>
        Type in the input field below. The debounced function will only execute
        after you stop typing for {delay}ms. This is commonly used for search
        inputs to avoid making API calls on every keystroke.
      </p>

      <div style={{ marginBottom: "15px" }}>
        <label
          htmlFor="debounceDelay"
          style={{ display: "block", marginBottom: "5px" }}
        >
          Debounce Delay:
        </label>
        <input
          id="debounceDelay"
          type="range"
          min="100"
          max="2000"
          step="100"
          value={delay}
          onChange={(e) => setDelay(parseInt(e.target.value))}
          style={{ width: "100%" }}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: "14px",
          }}
        >
          <span>100ms</span>
          <span style={{ fontWeight: "bold" }}>{delay}ms</span>
          <span>2000ms</span>
        </div>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <label
          htmlFor="searchInput"
          style={{ display: "block", marginBottom: "5px" }}
        >
          Search Input:
        </label>
        <input
          id="searchInput"
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Start typing to see debounce in action..."
          style={{
            width: "100%",
            padding: "12px",
            fontSize: "16px",
            border: "1px solid #ddd",
            borderRadius: "4px",
          }}
        />
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "15px",
          marginBottom: "20px",
        }}
      >
        <div
          style={{
            padding: "15px",
            backgroundColor: "#f8f9fa",
            borderRadius: "4px",
          }}
        >
          <h4>Current Input:</h4>
          <p
            style={{
              margin: 0,
              fontFamily: "monospace",
              wordBreak: "break-all",
            }}
          >
            "{inputValue}"
          </p>
        </div>

        <div
          style={{
            padding: "15px",
            backgroundColor: "#e2f3ff",
            borderRadius: "4px",
          }}
        >
          <h4>Debounced Value:</h4>
          <p
            style={{
              margin: 0,
              fontFamily: "monospace",
              wordBreak: "break-all",
            }}
          >
            "{debouncedValue}"
          </p>
        </div>

        <div
          style={{
            padding: "15px",
            backgroundColor: "#f0f8ff",
            borderRadius: "4px",
          }}
        >
          <h4>Function Calls:</h4>
          <p style={{ margin: 0, fontSize: "18px", fontWeight: "bold" }}>
            {callCount}
          </p>
        </div>

        <div
          style={{
            padding: "15px",
            backgroundColor: "#fff3cd",
            borderRadius: "4px",
          }}
        >
          <h4>Last Call:</h4>
          <p style={{ margin: 0, fontFamily: "monospace" }}>
            {lastCallTime || "Never"}
          </p>
        </div>
      </div>

      {searchResults.length > 0 && (
        <div style={{ marginBottom: "20px" }}>
          <h4>Search Results:</h4>
          <div
            style={{
              border: "1px solid #ddd",
              borderRadius: "4px",
              backgroundColor: "#f8f9fa",
            }}
          >
            {searchResults.map((result, index) => (
              <div
                key={index}
                style={{
                  padding: "10px 15px",
                  borderBottom:
                    index < searchResults.length - 1
                      ? "1px solid #eee"
                      : "none",
                }}
              >
                {result}
              </div>
            ))}
          </div>
        </div>
      )}

      <button
        onClick={handleReset}
        style={{
          padding: "10px 20px",
          fontSize: "14px",
          backgroundColor: "#6c757d",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Reset
      </button>
    </div>
  );
};

DebounceExample.parameters = {
  docs: {
    description: {
      story:
        "Interactive demonstration of debounce functionality. Debounce delays function execution until after a specified wait time has passed since the last invocation. Perfect for search inputs, form validation, and auto-save features.",
    },
    source: {
      code: `import { debounce } from '@wuchuheng/helper/utils/function';

const debouncedSearch = debounce((query: string) => {
  // This will only execute after user stops typing for 500ms
  console.log('Searching for:', query);
  performSearch(query);
}, 500);

// Usage in React
const [inputValue, setInputValue] = useState('');
const handleInputChange = (e) => {
  setInputValue(e.target.value);
  debouncedSearch(e.target.value);
};`,
    },
  },
};

export const ThrottlingExample = () => {
  const [clickCount, setClickCount] = useState(0);
  const [throttledClickCount, setThrottledClickCount] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [throttledScrollY, setThrottledScrollY] = useState(0);
  const [throttleDelay, setThrottleDelay] = useState(1000);
  const [lastThrottledCall, setLastThrottledCall] = useState<string>("");
  const scrollRef = useRef<HTMLDivElement>(null);

  // Create throttled functions
  const throttledClick = useCallback(
    throttling(() => {
      setThrottledClickCount((prev) => prev + 1);
      setLastThrottledCall(new Date().toLocaleTimeString());
    }, throttleDelay),
    [throttleDelay]
  );

  const throttledScroll = useCallback(
    throttling((y: number) => {
      setThrottledScrollY(y);
    }, 100), // Fixed 100ms for smooth scrolling
    []
  );

  const handleClick = () => {
    setClickCount((prev) => prev + 1);
    throttledClick();
  };

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const scrollTop = e.currentTarget.scrollTop;
    setScrollY(scrollTop);
    throttledScroll(scrollTop);
  };

  const handleReset = () => {
    setClickCount(0);
    setThrottledClickCount(0);
    setScrollY(0);
    setThrottledScrollY(0);
    setLastThrottledCall("");
    if (scrollRef.current) {
      scrollRef.current.scrollTop = 0;
    }
  };

  return (
    <div
      style={{ padding: "20px", border: "1px solid #ccc", borderRadius: "8px" }}
    >
      <h3>Throttling Example - Button Clicks & Scrolling</h3>
      <p style={{ marginBottom: "15px" }}>
        Throttling limits how often a function can be called. Click the button
        rapidly or scroll in the container below to see how throttling reduces
        the frequency of function execution.
      </p>

      <div style={{ marginBottom: "15px" }}>
        <label
          htmlFor="throttleDelay"
          style={{ display: "block", marginBottom: "5px" }}
        >
          Click Throttle Delay:
        </label>
        <input
          id="throttleDelay"
          type="range"
          min="100"
          max="3000"
          step="100"
          value={throttleDelay}
          onChange={(e) => setThrottleDelay(parseInt(e.target.value))}
          style={{ width: "100%" }}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: "14px",
          }}
        >
          <span>100ms</span>
          <span style={{ fontWeight: "bold" }}>{throttleDelay}ms</span>
          <span>3000ms</span>
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "20px",
          marginBottom: "20px",
        }}
      >
        {/* Click Testing */}
        <div
          style={{
            border: "1px solid #ddd",
            borderRadius: "4px",
            padding: "15px",
          }}
        >
          <h4>Click Testing</h4>
          <button
            onClick={handleClick}
            style={{
              padding: "15px 30px",
              fontSize: "18px",
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              width: "100%",
              marginBottom: "15px",
            }}
          >
            Click Me Rapidly!
          </button>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "10px",
            }}
          >
            <div
              style={{
                padding: "10px",
                backgroundColor: "#f8f9fa",
                borderRadius: "4px",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontSize: "24px",
                  fontWeight: "bold",
                  color: "#dc3545",
                }}
              >
                {clickCount}
              </div>
              <div style={{ fontSize: "12px" }}>Total Clicks</div>
            </div>

            <div
              style={{
                padding: "10px",
                backgroundColor: "#e2f3ff",
                borderRadius: "4px",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontSize: "24px",
                  fontWeight: "bold",
                  color: "#007bff",
                }}
              >
                {throttledClickCount}
              </div>
              <div style={{ fontSize: "12px" }}>Throttled Calls</div>
            </div>
          </div>

          {lastThrottledCall && (
            <div
              style={{ marginTop: "10px", fontSize: "12px", color: "#6c757d" }}
            >
              Last throttled call: {lastThrottledCall}
            </div>
          )}
        </div>

        {/* Scroll Testing */}
        <div
          style={{
            border: "1px solid #ddd",
            borderRadius: "4px",
            padding: "15px",
          }}
        >
          <h4>Scroll Testing</h4>
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            style={{
              height: "200px",
              overflowY: "auto",
              border: "1px solid #eee",
              borderRadius: "4px",
              backgroundColor: "#f8f9fa",
              marginBottom: "15px",
            }}
          >
            <div style={{ height: "1000px", padding: "20px" }}>
              <h5>Scroll me!</h5>
              <p>
                This container has a lot of content. Scroll up and down to see
                the throttling effect.
              </p>
              {Array.from({ length: 20 }, (_, i) => (
                <div
                  key={i}
                  style={{ padding: "10px 0", borderBottom: "1px solid #ddd" }}
                >
                  Content block {i + 1} - Keep scrolling to test throttling
                  behavior. The scroll position is updated immediately, but the
                  throttled function only executes every 100ms.
                </div>
              ))}
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "10px",
            }}
          >
            <div
              style={{
                padding: "10px",
                backgroundColor: "#f8f9fa",
                borderRadius: "4px",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  color: "#dc3545",
                }}
              >
                {Math.round(scrollY)}px
              </div>
              <div style={{ fontSize: "12px" }}>Current Scroll</div>
            </div>

            <div
              style={{
                padding: "10px",
                backgroundColor: "#e2f3ff",
                borderRadius: "4px",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  color: "#007bff",
                }}
              >
                {Math.round(throttledScrollY)}px
              </div>
              <div style={{ fontSize: "12px" }}>Throttled Scroll</div>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={handleReset}
        style={{
          padding: "10px 20px",
          fontSize: "14px",
          backgroundColor: "#6c757d",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Reset All
      </button>
    </div>
  );
};

ThrottlingExample.parameters = {
  docs: {
    description: {
      story:
        "Interactive demonstration of throttling functionality. Throttling limits how often a function can be called, ensuring it executes at most once per specified time interval. Perfect for scroll handlers, button click protection, and performance optimization.",
    },
    source: {
      code: `import { throttling } from '@wuchuheng/helper/utils/function';

const throttledScroll = throttling(() => {
  // This will execute at most once every 100ms
  console.log('Scroll position:', window.scrollY);
  updateScrollIndicator();
}, 100);

// Usage with event listeners
window.addEventListener('scroll', throttledScroll);

// Button click protection
const throttledSubmit = throttling(() => {
  submitForm();
}, 2000); // Max once per 2 seconds`,
    },
  },
};

export const PerformanceComparison = () => {
  const [withoutDebounce, setWithoutDebounce] = useState({
    calls: 0,
    values: [] as string[],
  });
  const [withDebounce, setWithDebounce] = useState({
    calls: 0,
    values: [] as string[],
  });
  const [withoutThrottle, setWithoutThrottle] = useState({
    calls: 0,
    events: [] as number[],
  });
  const [withThrottle, setWithThrottle] = useState({
    calls: 0,
    events: [] as number[],
  });
  const [isRunning, setIsRunning] = useState(false);

  // Create debounced function for comparison
  const debouncedFunction = useCallback(
    debounce((value: string) => {
      setWithDebounce((prev) => ({
        calls: prev.calls + 1,
        values: [...prev.values, value],
      }));
    }, 300),
    []
  );

  // Create throttled function for comparison
  const throttledFunction = useCallback(
    throttling((timestamp: number) => {
      setWithThrottle((prev) => ({
        calls: prev.calls + 1,
        events: [...prev.events, timestamp],
      }));
    }, 100),
    []
  );

  const simulateTyping = async () => {
    setIsRunning(true);
    const testString = "Hello World Test";

    // Reset states
    setWithoutDebounce({ calls: 0, values: [] });
    setWithDebounce({ calls: 0, values: [] });

    for (let i = 0; i <= testString.length; i++) {
      const currentValue = testString.slice(0, i);

      // Without debounce - calls immediately
      setWithoutDebounce((prev) => ({
        calls: prev.calls + 1,
        values: [...prev.values, currentValue],
      }));

      // With debounce - only calls after delay
      debouncedFunction(currentValue);

      await new Promise((resolve) => setTimeout(resolve, 150)); // Simulate typing speed
    }

    setIsRunning(false);
  };

  const simulateScrolling = async () => {
    setIsRunning(true);

    // Reset states
    setWithoutThrottle({ calls: 0, events: [] });
    setWithThrottle({ calls: 0, events: [] });

    // Simulate rapid scroll events
    for (let i = 0; i < 100; i++) {
      const timestamp = Date.now();

      // Without throttle - calls every time
      setWithoutThrottle((prev) => ({
        calls: prev.calls + 1,
        events: [...prev.events, timestamp],
      }));

      // With throttle - limited calls
      throttledFunction(timestamp);

      await new Promise((resolve) => setTimeout(resolve, 10)); // Very fast events
    }

    setIsRunning(false);
  };

  const reset = () => {
    setWithoutDebounce({ calls: 0, values: [] });
    setWithDebounce({ calls: 0, values: [] });
    setWithoutThrottle({ calls: 0, events: [] });
    setWithThrottle({ calls: 0, events: [] });
  };

  return (
    <div
      style={{ padding: "20px", border: "1px solid #ccc", borderRadius: "8px" }}
    >
      <h3>Performance Comparison</h3>
      <p style={{ marginBottom: "20px" }}>
        See the difference in function call frequency with and without
        debounce/throttle optimization.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "20px",
          marginBottom: "20px",
        }}
      >
        {/* Debounce Comparison */}
        <div
          style={{
            border: "1px solid #ddd",
            borderRadius: "4px",
            padding: "15px",
          }}
        >
          <h4>Debounce Comparison</h4>
          <p style={{ fontSize: "14px", color: "#666" }}>
            Simulates typing "Hello World Test" with 150ms between keystrokes
          </p>

          <button
            onClick={simulateTyping}
            disabled={isRunning}
            style={{
              padding: "10px 20px",
              fontSize: "14px",
              backgroundColor: isRunning ? "#6c757d" : "#28a745",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: isRunning ? "not-allowed" : "pointer",
              width: "100%",
              marginBottom: "15px",
            }}
          >
            {isRunning ? "Running..." : "Simulate Typing"}
          </button>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "10px",
            }}
          >
            <div
              style={{
                padding: "10px",
                backgroundColor: "#f8d7da",
                borderRadius: "4px",
                textAlign: "center",
                border: "1px solid #f5c6cb",
              }}
            >
              <div
                style={{
                  fontSize: "24px",
                  fontWeight: "bold",
                  color: "#721c24",
                }}
              >
                {withoutDebounce.calls}
              </div>
              <div style={{ fontSize: "12px" }}>Without Debounce</div>
            </div>

            <div
              style={{
                padding: "10px",
                backgroundColor: "#d4edda",
                borderRadius: "4px",
                textAlign: "center",
                border: "1px solid #c3e6cb",
              }}
            >
              <div
                style={{
                  fontSize: "24px",
                  fontWeight: "bold",
                  color: "#155724",
                }}
              >
                {withDebounce.calls}
              </div>
              <div style={{ fontSize: "12px" }}>With Debounce</div>
            </div>
          </div>

          {withoutDebounce.calls > 0 && (
            <div
              style={{ marginTop: "10px", fontSize: "12px", color: "#155724" }}
            >
              Reduction:{" "}
              {Math.round(
                (1 - withDebounce.calls / withoutDebounce.calls) * 100
              )}
              %
            </div>
          )}
        </div>

        {/* Throttle Comparison */}
        <div
          style={{
            border: "1px solid #ddd",
            borderRadius: "4px",
            padding: "15px",
          }}
        >
          <h4>Throttle Comparison</h4>
          <p style={{ fontSize: "14px", color: "#666" }}>
            Simulates 100 rapid scroll events with 10ms intervals
          </p>

          <button
            onClick={simulateScrolling}
            disabled={isRunning}
            style={{
              padding: "10px 20px",
              fontSize: "14px",
              backgroundColor: isRunning ? "#6c757d" : "#17a2b8",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: isRunning ? "not-allowed" : "pointer",
              width: "100%",
              marginBottom: "15px",
            }}
          >
            {isRunning ? "Running..." : "Simulate Scrolling"}
          </button>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "10px",
            }}
          >
            <div
              style={{
                padding: "10px",
                backgroundColor: "#f8d7da",
                borderRadius: "4px",
                textAlign: "center",
                border: "1px solid #f5c6cb",
              }}
            >
              <div
                style={{
                  fontSize: "24px",
                  fontWeight: "bold",
                  color: "#721c24",
                }}
              >
                {withoutThrottle.calls}
              </div>
              <div style={{ fontSize: "12px" }}>Without Throttle</div>
            </div>

            <div
              style={{
                padding: "10px",
                backgroundColor: "#d4edda",
                borderRadius: "4px",
                textAlign: "center",
                border: "1px solid #c3e6cb",
              }}
            >
              <div
                style={{
                  fontSize: "24px",
                  fontWeight: "bold",
                  color: "#155724",
                }}
              >
                {withThrottle.calls}
              </div>
              <div style={{ fontSize: "12px" }}>With Throttle</div>
            </div>
          </div>

          {withoutThrottle.calls > 0 && (
            <div
              style={{ marginTop: "10px", fontSize: "12px", color: "#155724" }}
            >
              Reduction:{" "}
              {Math.round(
                (1 - withThrottle.calls / withoutThrottle.calls) * 100
              )}
              %
            </div>
          )}
        </div>
      </div>

      <button
        onClick={reset}
        style={{
          padding: "10px 20px",
          fontSize: "14px",
          backgroundColor: "#6c757d",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Reset Comparison
      </button>
    </div>
  );
};

PerformanceComparison.parameters = {
  docs: {
    description: {
      story:
        "Side-by-side performance comparison showing the efficiency gains of using debounce and throttling techniques. Run the simulations to see how much these optimization techniques can reduce function call frequency.",
    },
    source: {
      code: `// Performance comparison example
import { debounce, throttling } from '@wuchuheng/helper/utils/function';

// Without optimization - calls for every keystroke
const directSearch = (query: string) => {
  apiCall(query); // Called 17 times for "Hello World Test"
};

// With debounce - calls only after user stops typing
const optimizedSearch = debounce((query: string) => {
  apiCall(query); // Called only 1-2 times
}, 300);

// Result: ~94% reduction in API calls!`,
    },
  },
};

export const UsageExamples = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h3>Usage Examples & Best Practices</h3>

      <div style={{ marginBottom: "30px" }}>
        <h4 style={{ color: "#0066cc", marginBottom: "15px" }}>
          Basic Debounce Usage
        </h4>
        <Prism
          language="typescript"
        >
          {`import { debounce } from '@wuchuheng/helper/utils/function';

// Basic debounce usage
const debouncedSearch = debounce((query: string) => {
  console.log('Searching for:', query);
  // API call here
}, 300);

// Usage in input handler
debouncedSearch('user input');`}
        </Prism>
      </div>

      <div style={{ marginBottom: "30px" }}>
        <h4 style={{ color: "#28a745", marginBottom: "15px" }}>
          React Hook with Debounce
        </h4>
        <Prism
          language="typescript"
        >
          {`import { debounce } from '@wuchuheng/helper/utils/function';
import { useState, useEffect, useMemo } from 'react';

const useDebounce = (value: string, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  
  const debouncedFn = useMemo(
    () => debounce((val: string) => {
      setDebouncedValue(val);
    }, delay),
    [delay]
  );
  
  useEffect(() => {
    debouncedFn(value);
  }, [value, debouncedFn]);
  
  return debouncedValue;
};

// Usage in component
function SearchComponent() {
  const [query, setQuery] = useState('');
  const debouncedQuery = useDebounce(query, 300);
  
  useEffect(() => {
    if (debouncedQuery) {
      // Perform search
      searchAPI(debouncedQuery);
    }
  }, [debouncedQuery]);
  
  return (
    <input
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      placeholder="Search..."
    />
  );
}`}
        </Prism>
      </div>

      <div style={{ marginBottom: "30px" }}>
        <h4 style={{ color: "#17a2b8", marginBottom: "15px" }}>
          Basic Throttling Usage
        </h4>
        <Prism>
          {`import { throttling } from '@wuchuheng/helper/utils/function';

// Basic throttle usage for scroll events
const throttledScroll = throttling(() => {
  console.log('Scroll position:', window.scrollY);
  // Update scroll indicator
}, 100);

// Window resize handler
const throttledResize = throttling(() => {
  console.log('Window resized:', window.innerWidth);
  // Recalculate layout
}, 250);

// Add event listeners
window.addEventListener('scroll', throttledScroll);
window.addEventListener('resize', throttledResize);`}
        </Prism>
      </div>

      <div style={{ marginBottom: "30px" }}>
        <h4 style={{ color: "#dc3545", marginBottom: "15px" }}>
          React Component with Throttling
        </h4>
        <Prism>

          
          {`import { throttling } from '@wuchuheng/helper/utils/function';
import { useEffect, useMemo } from 'react';

function InfiniteScrollComponent() {
  const throttledScrollHandler = useMemo(
    () => throttling(() => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      
      if (scrollTop + clientHeight >= scrollHeight - 1000) {
        loadMoreItems();
      }
    }, 200),
    []
  );
  
  useEffect(() => {
    window.addEventListener('scroll', throttledScrollHandler);
    return () => {
      window.removeEventListener('scroll', throttledScrollHandler);
    };
  }, [throttledScrollHandler]);
  
  return <div>Your scrollable content...</div>;
}

// Button click protection
function SubmitButton() {
  const throttledSubmit = useMemo(
    () => throttling(() => {
      submitForm();
    }, 2000),
    []
  );
  
  return (
    <button onClick={throttledSubmit}>
      Submit (max once per 2s)
    </button>
  );
}`}

        </Prism>
        
      </div>

      <div style={{ marginBottom: "30px" }}>
        <h4 style={{ color: "#6f42c1", marginBottom: "15px" }}>
          Advanced Search Component
        </h4>
        <Prism>
          {`import { debounce } from '@wuchuheng/helper/utils/function';
import { useState, useEffect, useMemo } from 'react';
import { SequentialSleeps } from './../async/async.stories';

interface SearchResult {
  id: string;
  title: string;
  description: string;
}

function AdvancedSearchComponent() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  
  const debouncedSearch = useMemo(
    () => debounce(async (searchQuery: string) => {
      if (!searchQuery.trim()) {
        setResults([]);
        return;
      }
      
      setIsLoading(true);
      try {
        const response = await fetch(\`/api/search?q=\${encodeURIComponent(searchQuery)}\`);
        const data = await response.json();
        setResults(data.results);
      } catch (error) {
        console.error('Search failed:', error);
        setResults([]);
      } finally {
        setIsLoading(false);
      }
    }, 300),
    []
  );
  
  useEffect(() => {
    debouncedSearch(query);
  }, [query, debouncedSearch]);
  
  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
      />
      
      {isLoading && <div>Searching...</div>}
      
      <ul>
        {results.map((result) => (
          <li key={result.id}>
            <h4>{result.title}</h4>
            <p>{result.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}`}


        </Prism>
      </div>

      <div style={{ marginBottom: "30px" }}>
        <h4 style={{ color: "#fd7e14", marginBottom: "15px" }}>
          Best Practices
        </h4>


        <Prism>
          {`// ✅ Good: Memoize debounced/throttled functions in React
const debouncedFn = useMemo(
  () => debounce(callback, delay),
  [callback, delay]
);

// ❌ Bad: Creating new functions on every render
const debouncedFn = debounce(callback, delay);

// ✅ Good: Clean up event listeners
useEffect(() => {
  const throttledHandler = throttling(handler, 100);
  window.addEventListener('scroll', throttledHandler);
  
  return () => {
    window.removeEventListener('scroll', throttledHandler);
  };
}, []);

// ✅ Good: Choose appropriate delays
debounce(searchFn, 300);     // Good for search inputs
debounce(autoSave, 1000);    // Good for auto-save
throttling(scrollFn, 16);    // Good for smooth animations (60fps)
throttling(resizeFn, 250);   // Good for layout updates
throttling(apiCall, 1000);   // Good for API rate limiting

// ✅ Good: Handle edge cases
const debouncedSave = debounce((data: FormData) => {
  if (data && Object.keys(data).length > 0) {
    saveToServer(data);
  }
}, 500);`}
</Prism>
      </div>

      <div
        style={{
          padding: "20px",
          backgroundColor: "#e3f2fd",
          border: "1px solid #90caf9",
          borderRadius: "8px",
          marginBottom: "20px",
        }}
      >
        <h4 style={{ marginTop: 0, color: "#1565c0" }}>💡 Key Differences</h4>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "20px",
          }}
        >
          <div>
            <h5 style={{ color: "#1976d2" }}>Debounce</h5>
            <ul style={{ color: "#424242", fontSize: "14px" }}>
              <li>Waits for a pause in activity</li>
              <li>Resets timer on each new call</li>
              <li>Only executes after the delay</li>
              <li>Perfect for search inputs</li>
            </ul>
          </div>
          <div>
            <h5 style={{ color: "#1976d2" }}>Throttle</h5>
            <ul style={{ color: "#424242", fontSize: "14px" }}>
              <li>Executes at regular intervals</li>
              <li>Ignores calls during wait period</li>
              <li>Ensures consistent execution rate</li>
              <li>Perfect for scroll/resize events</li>
            </ul>
          </div>
        </div>
      </div>

      <div
        style={{
          padding: "15px",
          backgroundColor: "#f3e5f5",
          border: "1px solid #ce93d8",
          borderRadius: "8px",
        }}
      >
        <h4 style={{ marginTop: 0, color: "#7b1fa2" }}>🎯 When to Use</h4>
        <div style={{ fontSize: "14px", color: "#424242" }}>
          <p>
            <strong>Use Debounce for:</strong> Search inputs, form validation,
            auto-save, API calls triggered by user input
          </p>
          <p>
            <strong>Use Throttle for:</strong> Scroll handlers, mouse movement,
            window resize, button click protection, rate limiting
          </p>
        </div>
      </div>
    </div>
  );
};

UsageExamples.parameters = {
  docs: {
    description: {
      story:
        "Comprehensive code examples and best practices for implementing debounce and throttling in real-world applications. All code snippets are copy-ready and include proper TypeScript typing.",
    },
  },
};

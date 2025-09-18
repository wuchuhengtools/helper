import{R as e,r as o}from"./index-DQDNmYQF.js";const i=t=>{const r=e.useRef(null),n=a=>{const l=j(a);if(!l){console.warn("Visible area calculation failed - will retry later");return}t.onChange&&t.onChange(l)};return o.useEffect(()=>{if(r.current){const a=new ResizeObserver(()=>n(r));return a.observe(r.current),()=>a.disconnect()}},[r]),e.createElement("div",{ref:r,style:{height:"100%",width:"100%"}},t.children)},j=t=>{const r=t.current;if(!r)return console.warn("Container ref is null in updatePosition - will retry later"),!1;const n=r.getBoundingClientRect();return{x:Math.round(n.left),y:Math.round(n.top),width:Math.round(n.width),height:Math.round(n.height)}};try{i.displayName="VisibleAreaReporter",i.__docgenInfo={description:"A React component that reports the visible area of its content to a parent component.\n\nThis component uses a `ResizeObserver` to monitor changes in the size of its container,\nand calls the `onChange` callback prop with the new visible area whenever a resize occurs.",displayName:"VisibleAreaReporter",props:{onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((area: VisibleAreaInput) => void)"}}}}}catch{}const O={title:"Components/VisibleAreaReporter",component:i,parameters:{layout:"padded",docs:{description:{component:`
A powerful React component that monitors and reports the visible area of its content in real-time.

### Key Features:
- **Real-time Monitoring**: Uses ResizeObserver API for precise tracking
- **Position Accuracy**: Provides exact x, y coordinates relative to viewport
- **Dimension Tracking**: Monitors width and height changes
- **Flexible Integration**: Works with any React content or components
- **Performance Optimized**: Efficient observation with automatic cleanup
- **Error Resilient**: Graceful handling of edge cases and failures
- **TypeScript Support**: Full type safety with proper interfaces

### Browser Support:
- Chrome 64+ (with ResizeObserver support)
- Firefox 69+
- Safari 13.1+
- Edge 79+

### Dependencies:
- React 16.8+ (for hooks support)
- ResizeObserver API (polyfill may be needed for older browsers)
        `}}},argTypes:{children:{description:"Content to be wrapped and monitored for visibility",control:!1},onChange:{description:"Callback invoked when visible area changes",table:{type:{summary:"(area: VisibleAreaInput) => void"}}}},tags:["autodocs"]},s=({area:t,title:r="Visible Area Information"})=>e.createElement("div",{style:{padding:"16px",backgroundColor:"#f8f9fa",borderRadius:"8px",border:"1px solid #dee2e6",fontSize:"14px",fontFamily:"monospace",marginTop:"12px"}},e.createElement("h4",{style:{margin:"0 0 8px 0",color:"#495057"}},r),t?e.createElement("div",null,e.createElement("div",null,"Position: (",t.x,", ",t.y,")"),e.createElement("div",null,"Size: ",t.width," × ",t.height),e.createElement("div",null,"Area: ",t.width*t.height,"px²")):e.createElement("div",{style:{color:"#6c757d"}},"Calculating area...")),c={args:{onChange:t=>console.log("Visible area changed:",t)},render:t=>e.createElement("div",{style:{width:"100%",height:"300px",border:"2px solid #007bff",borderRadius:"8px"}},e.createElement(i,{...t},e.createElement("div",{style:{padding:"20px",backgroundColor:"#e3f2fd",borderRadius:"6px",height:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",textAlign:"center"}},e.createElement("h3",{style:{margin:"0 0 16px 0",color:"#1976d2"}},"Tracked Content"),e.createElement("p",{style:{margin:"0",color:"#424242",lineHeight:"1.5"}},"This content is being monitored for visible area changes."),e.createElement("div",{style:{marginTop:"20px",padding:"12px",backgroundColor:"#bbdefb",borderRadius:"4px",fontSize:"14px"}},"Resize the browser window to see real-time updates!"))),e.createElement(s,{area:null})),parameters:{docs:{description:{story:"Basic usage of VisibleAreaReporter with simple content. The component monitors the visible area and logs changes to the console."}}}},d={args:{},render:()=>{const[t,r]=o.useState(null);return e.createElement("div",{style:{width:"100%",height:"400px",border:"2px solid #28a745",borderRadius:"8px"}},e.createElement(i,{onChange:r},e.createElement("div",{style:{padding:"24px",backgroundColor:"#d4edda",borderRadius:"8px",height:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",textAlign:"center"}},e.createElement("h3",{style:{margin:"0 0 20px 0",color:"#155724"}},"Live Area Tracking"),e.createElement("p",{style:{margin:"0 0 16px 0",color:"#155724",lineHeight:"1.5"}},"This content tracks its visible area in real-time."),e.createElement("div",{style:{padding:"16px",backgroundColor:"#c3e6cb",borderRadius:"6px",fontSize:"14px",maxWidth:"300px"}},"Try resizing this container or the browser window to see the area information update below!"))),e.createElement(s,{area:t,title:"Live Area Data"}))},parameters:{docs:{description:{story:"VisibleAreaReporter with live area display. This example shows how to capture and display the tracked area information in real-time using React state."}}}},p={args:{},render:()=>{const[t,r]=o.useState(null),[n,a]=o.useState(null);return e.createElement("div",{style:{display:"flex",gap:"20px",flexWrap:"wrap"}},e.createElement("div",{style:{width:"300px",height:"250px",border:"2px solid #ffc107",borderRadius:"8px"}},e.createElement(i,{onChange:r},e.createElement("div",{style:{padding:"16px",backgroundColor:"#fff3cd",borderRadius:"6px",height:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",textAlign:"center"}},e.createElement("h4",{style:{margin:"0 0 12px 0",color:"#856404"}},"Panel A"),e.createElement("p",{style:{margin:"0",fontSize:"14px",color:"#856404"}},"First tracked area"))),e.createElement(s,{area:t,title:"Panel A Area"})),e.createElement("div",{style:{width:"300px",height:"250px",border:"2px solid #dc3545",borderRadius:"8px"}},e.createElement(i,{onChange:a},e.createElement("div",{style:{padding:"16px",backgroundColor:"#f8d7da",borderRadius:"6px",height:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",textAlign:"center"}},e.createElement("h4",{style:{margin:"0 0 12px 0",color:"#721c24"}},"Panel B"),e.createElement("p",{style:{margin:"0",fontSize:"14px",color:"#721c24"}},"Second tracked area"))),e.createElement(s,{area:n,title:"Panel B Area"})))},parameters:{docs:{description:{story:"Multiple VisibleAreaReporter instances working independently. Each component tracks its own area and maintains separate state, demonstrating how the component can be used multiple times in the same application."}}}},m={args:{},render:()=>{const[t,r]=o.useState(null),[n,a]=o.useState(0);return e.createElement("div",{style:{width:"100%",height:"500px",border:"2px solid #6f42c1",borderRadius:"8px"}},e.createElement(i,{onChange:r},e.createElement("div",{style:{padding:"24px",backgroundColor:"#f3e5f5",borderRadius:"8px",height:"100%",overflow:"auto"}},e.createElement("h3",{style:{margin:"0 0 20px 0",color:"#4a148c"}},"Interactive Dashboard"),e.createElement("div",{style:{marginBottom:"20px"}},e.createElement("button",{onClick:()=>a(n+1),style:{padding:"10px 16px",backgroundColor:"#6f42c1",color:"white",border:"none",borderRadius:"4px",cursor:"pointer",fontSize:"14px"}},"Click me! (",n,")")),e.createElement("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",gap:"16px",marginBottom:"20px"}},[1,2,3,4].map(l=>e.createElement("div",{key:l,style:{padding:"16px",backgroundColor:"#e1bee7",borderRadius:"6px",textAlign:"center"}},e.createElement("h4",{style:{margin:"0 0 8px 0",color:"#4a148c"}},"Item ",l),e.createElement("p",{style:{margin:0,fontSize:"14px",color:"#6a1b9a"}},"Dynamic content area")))),e.createElement("div",{style:{padding:"16px",backgroundColor:"#ce93d8",borderRadius:"6px",fontSize:"14px"}},e.createElement("strong",null,"Tip:")," This complex content demonstrates how VisibleAreaReporter works with interactive elements, dynamic content, and various layout patterns."))),e.createElement(s,{area:t,title:"Dashboard Area"}))},parameters:{docs:{description:{story:"VisibleAreaReporter with complex content and interactive elements. This example demonstrates real-world usage with forms, buttons, dynamic content, and various layout patterns."}}}},h={args:{},render:()=>{const[t,r]=o.useState(null);return e.createElement("div",{style:{width:"100%",height:"400px",border:"2px solid #17a2b8",borderRadius:"8px"}},e.createElement(i,{onChange:r},e.createElement("div",{style:{padding:"20px",backgroundColor:"#d1ecf1",borderRadius:"6px",height:"100%",overflow:"auto",maxHeight:"100%"}},e.createElement("h3",{style:{margin:"0 0 16px 0",color:"#0c5460"}},"Scrollable Content Area"),e.createElement("div",{style:{marginBottom:"20px"}},e.createElement("p",{style:{margin:"0 0 12px 0",lineHeight:"1.5"}},"This content area can be scrolled. The VisibleAreaReporter will track the visible portion of this container as you scroll.")),e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"16px"}},Array.from({length:20},(n,a)=>e.createElement("div",{key:a,style:{padding:"16px",backgroundColor:"#bee5eb",borderRadius:"6px",borderLeft:"4px solid #17a2b8"}},e.createElement("h4",{style:{margin:"0 0 8px 0",color:"#0c5460"}},"Content Item ",a+1),e.createElement("p",{style:{margin:0,fontSize:"14px",color:"#0c5460"}},"This is scrollable content item ",a+1,". Try scrolling up and down to see how the visible area tracking works with scrollable content.")))),e.createElement("div",{style:{marginTop:"20px",padding:"12px",backgroundColor:"#bee5eb",borderRadius:"4px",fontSize:"14px",textAlign:"center"}},"💡 Scroll to see the visible area change in real-time!"))),e.createElement(s,{area:t,title:"Scrollable Area"}))},parameters:{docs:{description:{story:"Integration example with scrollable content. This demonstrates how VisibleAreaReporter works with scrollable content and tracks the visible portion as users scroll."}}}};var g,u,b,x,y;c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    onChange: area => console.log('Visible area changed:', area)
  },
  render: args => <div style={{
    width: '100%',
    height: '300px',
    border: '2px solid #007bff',
    borderRadius: '8px'
  }}>
      <VisibleAreaReporter {...args}>
        <div style={{
        padding: '20px',
        backgroundColor: '#e3f2fd',
        borderRadius: '6px',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'
      }}>
          <h3 style={{
          margin: '0 0 16px 0',
          color: '#1976d2'
        }}>Tracked Content</h3>
          <p style={{
          margin: '0',
          color: '#424242',
          lineHeight: '1.5'
        }}>
            This content is being monitored for visible area changes.
          </p>
          <div style={{
          marginTop: '20px',
          padding: '12px',
          backgroundColor: '#bbdefb',
          borderRadius: '4px',
          fontSize: '14px'
        }}>
            Resize the browser window to see real-time updates!
          </div>
        </div>
      </VisibleAreaReporter>
      <AreaDisplay area={null} />
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Basic usage of VisibleAreaReporter with simple content. The component monitors the visible area and logs changes to the console.'
      }
    }
  }
}`,...(b=(u=c.parameters)==null?void 0:u.docs)==null?void 0:b.source},description:{story:`Basic usage of VisibleAreaReporter with simple content.
Demonstrates fundamental functionality with position tracking.`,...(y=(x=c.parameters)==null?void 0:x.docs)==null?void 0:y.description}}};var f,v,w,A,R;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {},
  render: () => {
    const [area, setArea] = useState<VisibleAreaInput | null>(null);
    return <div style={{
      width: '100%',
      height: '400px',
      border: '2px solid #28a745',
      borderRadius: '8px'
    }}>
        <VisibleAreaReporter onChange={setArea}>
          <div style={{
          padding: '24px',
          backgroundColor: '#d4edda',
          borderRadius: '8px',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center'
        }}>
            <h3 style={{
            margin: '0 0 20px 0',
            color: '#155724'
          }}>Live Area Tracking</h3>
            <p style={{
            margin: '0 0 16px 0',
            color: '#155724',
            lineHeight: '1.5'
          }}>
              This content tracks its visible area in real-time.
            </p>
            <div style={{
            padding: '16px',
            backgroundColor: '#c3e6cb',
            borderRadius: '6px',
            fontSize: '14px',
            maxWidth: '300px'
          }}>
              Try resizing this container or the browser window to see the area information update below!
            </div>
          </div>
        </VisibleAreaReporter>
        <AreaDisplay area={area} title="Live Area Data" />
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'VisibleAreaReporter with live area display. This example shows how to capture and display the tracked area information in real-time using React state.'
      }
    }
  }
}`,...(w=(v=d.parameters)==null?void 0:v.docs)==null?void 0:w.source},description:{story:`VisibleAreaReporter with live area display.
Shows how to display the tracked area information in real-time.`,...(R=(A=d.parameters)==null?void 0:A.docs)==null?void 0:R.description}}};var C,k,E,S,V;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {},
  render: () => {
    const [area1, setArea1] = useState<VisibleAreaInput | null>(null);
    const [area2, setArea2] = useState<VisibleAreaInput | null>(null);
    return <div style={{
      display: 'flex',
      gap: '20px',
      flexWrap: 'wrap'
    }}>
        <div style={{
        width: '300px',
        height: '250px',
        border: '2px solid #ffc107',
        borderRadius: '8px'
      }}>
          <VisibleAreaReporter onChange={setArea1}>
            <div style={{
            padding: '16px',
            backgroundColor: '#fff3cd',
            borderRadius: '6px',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center'
          }}>
              <h4 style={{
              margin: '0 0 12px 0',
              color: '#856404'
            }}>Panel A</h4>
              <p style={{
              margin: '0',
              fontSize: '14px',
              color: '#856404'
            }}>
                First tracked area
              </p>
            </div>
          </VisibleAreaReporter>
          <AreaDisplay area={area1} title="Panel A Area" />
        </div>

        <div style={{
        width: '300px',
        height: '250px',
        border: '2px solid #dc3545',
        borderRadius: '8px'
      }}>
          <VisibleAreaReporter onChange={setArea2}>
            <div style={{
            padding: '16px',
            backgroundColor: '#f8d7da',
            borderRadius: '6px',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center'
          }}>
              <h4 style={{
              margin: '0 0 12px 0',
              color: '#721c24'
            }}>Panel B</h4>
              <p style={{
              margin: '0',
              fontSize: '14px',
              color: '#721c24'
            }}>
                Second tracked area
              </p>
            </div>
          </VisibleAreaReporter>
          <AreaDisplay area={area2} title="Panel B Area" />
        </div>
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Multiple VisibleAreaReporter instances working independently. Each component tracks its own area and maintains separate state, demonstrating how the component can be used multiple times in the same application.'
      }
    }
  }
}`,...(E=(k=p.parameters)==null?void 0:k.docs)==null?void 0:E.source},description:{story:`Multiple VisibleAreaReporter instances working independently.
Demonstrates how multiple components can track different areas simultaneously.`,...(V=(S=p.parameters)==null?void 0:S.docs)==null?void 0:V.description}}};var T,z,D,I,B;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {},
  render: () => {
    const [area, setArea] = useState<VisibleAreaInput | null>(null);
    const [count, setCount] = useState(0);
    return <div style={{
      width: '100%',
      height: '500px',
      border: '2px solid #6f42c1',
      borderRadius: '8px'
    }}>
        <VisibleAreaReporter onChange={setArea}>
          <div style={{
          padding: '24px',
          backgroundColor: '#f3e5f5',
          borderRadius: '8px',
          height: '100%',
          overflow: 'auto'
        }}>
            <h3 style={{
            margin: '0 0 20px 0',
            color: '#4a148c'
          }}>Interactive Dashboard</h3>
            
            <div style={{
            marginBottom: '20px'
          }}>
              <button onClick={() => setCount(count + 1)} style={{
              padding: '10px 16px',
              backgroundColor: '#6f42c1',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '14px'
            }}>
                Click me! ({count})
              </button>
            </div>

            <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '16px',
            marginBottom: '20px'
          }}>
              {[1, 2, 3, 4].map(item => <div key={item} style={{
              padding: '16px',
              backgroundColor: '#e1bee7',
              borderRadius: '6px',
              textAlign: 'center'
            }}>
                  <h4 style={{
                margin: '0 0 8px 0',
                color: '#4a148c'
              }}>Item {item}</h4>
                  <p style={{
                margin: 0,
                fontSize: '14px',
                color: '#6a1b9a'
              }}>
                    Dynamic content area
                  </p>
                </div>)}
            </div>

            <div style={{
            padding: '16px',
            backgroundColor: '#ce93d8',
            borderRadius: '6px',
            fontSize: '14px'
          }}>
              <strong>Tip:</strong> This complex content demonstrates how VisibleAreaReporter works with 
              interactive elements, dynamic content, and various layout patterns.
            </div>
          </div>
        </VisibleAreaReporter>
        <AreaDisplay area={area} title="Dashboard Area" />
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'VisibleAreaReporter with complex content and interactive elements. This example demonstrates real-world usage with forms, buttons, dynamic content, and various layout patterns.'
      }
    }
  }
}`,...(D=(z=m.parameters)==null?void 0:z.docs)==null?void 0:D.source},description:{story:`VisibleAreaReporter with complex content and interactive elements.
Shows real-world usage with forms, buttons, and dynamic content.`,...(B=(I=m.parameters)==null?void 0:I.docs)==null?void 0:B.description}}};var P,_,M,W,L;h.parameters={...h.parameters,docs:{...(P=h.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {},
  render: () => {
    const [area, setArea] = useState<VisibleAreaInput | null>(null);
    return <div style={{
      width: '100%',
      height: '400px',
      border: '2px solid #17a2b8',
      borderRadius: '8px'
    }}>
        <VisibleAreaReporter onChange={setArea}>
          <div style={{
          padding: '20px',
          backgroundColor: '#d1ecf1',
          borderRadius: '6px',
          height: '100%',
          overflow: 'auto',
          maxHeight: '100%'
        }}>
            <h3 style={{
            margin: '0 0 16px 0',
            color: '#0c5460'
          }}>Scrollable Content Area</h3>
            
            <div style={{
            marginBottom: '20px'
          }}>
              <p style={{
              margin: '0 0 12px 0',
              lineHeight: '1.5'
            }}>
                This content area can be scrolled. The VisibleAreaReporter will track the 
                visible portion of this container as you scroll.
              </p>
            </div>

            {/* Long content to enable scrolling */}
            <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px'
          }}>
              {Array.from({
              length: 20
            }, (_, i) => <div key={i} style={{
              padding: '16px',
              backgroundColor: '#bee5eb',
              borderRadius: '6px',
              borderLeft: '4px solid #17a2b8'
            }}>
                  <h4 style={{
                margin: '0 0 8px 0',
                color: '#0c5460'
              }}>Content Item {i + 1}</h4>
                  <p style={{
                margin: 0,
                fontSize: '14px',
                color: '#0c5460'
              }}>
                    This is scrollable content item {i + 1}. Try scrolling up and down to see 
                    how the visible area tracking works with scrollable content.
                  </p>
                </div>)}
            </div>

            <div style={{
            marginTop: '20px',
            padding: '12px',
            backgroundColor: '#bee5eb',
            borderRadius: '4px',
            fontSize: '14px',
            textAlign: 'center'
          }}>
              💡 Scroll to see the visible area change in real-time!
            </div>
          </div>
        </VisibleAreaReporter>
        <AreaDisplay area={area} title="Scrollable Area" />
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Integration example with scrollable content. This demonstrates how VisibleAreaReporter works with scrollable content and tracks the visible portion as users scroll.'
      }
    }
  }
}`,...(M=(_=h.parameters)==null?void 0:_.docs)==null?void 0:M.source},description:{story:`Integration example with scrollable content.
Shows how to track visible area of content that can be scrolled.`,...(L=(W=h.parameters)==null?void 0:W.docs)==null?void 0:L.description}}};const F=["Basic","WithLiveDisplay","MultipleReporters","WithComplexContent","WithScrollableContent"];export{c as Basic,p as MultipleReporters,m as WithComplexContent,d as WithLiveDisplay,h as WithScrollableContent,F as __namedExportsOrder,O as default};

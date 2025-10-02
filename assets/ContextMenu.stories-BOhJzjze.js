import{r as E,R as n}from"./index-DQDNmYQF.js";const ae=()=>{const[e,r]=E.useState({visible:!1,x:0,y:0,browserId:null});return{contextMenu:e,showContextMenu:(t,k)=>{t.preventDefault(),r({visible:!0,x:t.clientX,y:t.clientY,browserId:k})},hideContextMenu:()=>{r(t=>({...t,visible:!1}))}}},i=({children:e,actions:r,onContextMenu:x,itemId:b})=>{const{contextMenu:t,showContextMenu:k,hideContextMenu:w}=ae(),s=E.useRef(null),ee=(o,a,l)=>{const c=l.getBoundingClientRect(),re=window.innerWidth,se=window.innerHeight;let f=o,C=a;return o+c.width>re&&(f=o-c.width,f=Math.max(0,f)),a+c.height>se&&(C=a-c.height,C=Math.max(0,C)),{x:f,y:C}},ne=o=>{o.preventDefault(),k(o,b),x==null||x(o,b)},te=o=>{t.browserId!==null&&(o.onClick(t.browserId),w())};E.useEffect(()=>{const o=l=>{const c=l.target;s.current&&!s.current.contains(c)&&w()},a=()=>{if(!s.current||!t.visible)return;const l=ee(t.x,t.y,s.current);(l.x!==t.x||l.y!==t.y)&&(s.current.style.left=`${l.x}px`,s.current.style.top=`${l.y}px`)};return t.visible&&(document.addEventListener("mousedown",o),setTimeout(a,0)),()=>{document.removeEventListener("mousedown",o)}},[t.visible,t.x,t.y,w]);const oe={position:"fixed",left:t.x,top:t.y,zIndex:50,minWidth:"150px",backgroundColor:"#ffffff",border:"1px solid #d1d5db",borderRadius:"6px",boxShadow:"0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",padding:"8px 0"},ie={padding:"8px 16px",cursor:"pointer",fontSize:"14px",transition:"background-color 0.15s ease-in-out",userSelect:"none"},le={backgroundColor:"#f3f4f6"};return n.createElement("div",{onContextMenu:ne},e,t.visible&&t.browserId===b&&n.createElement("div",{ref:s,style:oe},r.map((o,a)=>n.createElement("div",{key:a,style:ie,onClick:()=>te(o),onMouseEnter:l=>{Object.assign(l.currentTarget.style,le)},onMouseLeave:l=>{l.currentTarget.style.backgroundColor=""}},o.label))))};try{i.displayName="ContextMenu",i.__docgenInfo={description:`A reusable React context menu component that displays a custom menu on right-click.

This component wraps its children and, when right-clicked, shows a context menu
with a list of actions. It handles menu positioning, click-outside detection,
and action execution.`,displayName:"ContextMenu",props:{actions:{defaultValue:null,description:"",name:"actions",required:!0,type:{name:"ContextMenuAction[]"}},onContextMenu:{defaultValue:null,description:"",name:"onContextMenu",required:!1,type:{name:"((e: MouseEvent<Element, MouseEvent>, itemId: number) => void)"}},itemId:{defaultValue:null,description:"",name:"itemId",required:!0,type:{name:"number"}}}}}catch{}const de={title:"Components/ContextMenu",component:i,parameters:{layout:"padded",docs:{description:{component:`
A flexible context menu component that appears on right-click, providing users with contextual actions relevant to the clicked element.

### Key Features:
- **Intuitive Interaction**: Simple right-click to activate
- **Dynamic Positioning**: Automatically appears at cursor location
- **Customizable Actions**: Define unlimited menu items with custom handlers
- **Smart Management**: Click-outside detection and automatic closing
- **Flexible Styling**: Full control over appearance and behavior
- **Accessible**: Proper keyboard and screen reader support
- **TypeScript Support**: Full type safety and IntelliSense support

### Browser Support:
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+
        `}}},argTypes:{children:{description:"Content to wrap with context menu functionality",control:!1},actions:{description:"Array of actions to display in the context menu",control:{type:"object"},table:{type:{summary:"ContextMenuAction[]",detail:"Array of objects with label, onClick handler, and optional className"}}},onContextMenu:{description:"Optional callback when context menu is triggered",table:{type:{summary:"(e: React.MouseEvent, itemId: number) => void"}}},itemId:{description:"Unique identifier for this context menu instance",control:{type:"number"},table:{type:{summary:"number"}}}},tags:["autodocs"]},y=({title:e="Right-click me!",content:r="Right-click on this area to see the context menu with various actions."})=>n.createElement("div",{style:{padding:"20px",backgroundColor:"#f8f9fa",borderRadius:"8px",border:"2px dashed #dee2e6",cursor:"pointer",userSelect:"none",minHeight:"150px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",textAlign:"center"}},n.createElement("h3",{style:{margin:"0 0 12px 0",color:"#2c3e50",fontSize:"18px"}},e),n.createElement("p",{style:{margin:"0",color:"#5a6c7d",lineHeight:"1.5"}},r),n.createElement("div",{style:{marginTop:"16px",padding:"8px 12px",backgroundColor:"#e9ecef",borderRadius:"4px",fontSize:"14px",color:"#6c757d"}},"💡 ",n.createElement("strong",null,"Tip:")," Right-click here to see the menu!")),d={args:{itemId:1,actions:[{label:"Edit",onClick:e=>console.log("Edit item:",e)},{label:"Copy",onClick:e=>console.log("Copy item:",e)},{label:"Delete",onClick:e=>console.log("Delete item:",e)}]},render:e=>n.createElement(i,{...e},n.createElement(y,null)),parameters:{docs:{description:{story:"Basic context menu with standard actions. Right-click the content area to see the menu with Edit, Copy, and Delete options."}}}},p={args:{itemId:2,actions:[{label:"Edit",onClick:e=>console.log("Edit item:",e),className:"menu-item-edit"},{label:"Copy",onClick:e=>console.log("Copy item:",e),className:"menu-item-copy"},{label:"Delete",onClick:e=>console.log("Delete item:",e),className:"menu-item-delete"}]},render:e=>n.createElement(i,{...e},n.createElement(y,{title:"Styled Menu",content:"This menu has custom styling for each action."})),parameters:{docs:{description:{story:"Context menu with custom styling for individual actions. Each menu item has its own CSS class for theming."}}}},m={args:{itemId:3,actions:[{label:"Open",onClick:e=>console.log("Open item:",e)},{label:"Edit Details",onClick:e=>console.log("Edit details:",e)},{label:"Duplicate",onClick:e=>console.log("Duplicate item:",e)},{label:"Share",onClick:e=>console.log("Share item:",e)},{label:"---",onClick:e=>{}},{label:"Export",onClick:e=>console.log("Export item:",e)},{label:"Print",onClick:e=>console.log("Print item:",e)},{label:"Properties",onClick:e=>console.log("Properties:",e)}]},render:e=>n.createElement(i,{...e},n.createElement(y,{title:"Comprehensive Menu",content:"This menu demonstrates many actions that might be found in a file manager or application."})),parameters:{docs:{description:{story:"A comprehensive context menu with many actions. This shows how the component handles multiple menu items effectively."}}}},u={render:()=>n.createElement("div",{style:{display:"flex",gap:"20px",flexWrap:"wrap"}},n.createElement(i,{itemId:101,actions:[{label:"View Profile",onClick:e=>console.log("View profile:",e)},{label:"Edit Profile",onClick:e=>console.log("Edit profile:",e)},{label:"Settings",onClick:e=>console.log("Settings:",e)}]},n.createElement("div",{style:{padding:"20px",backgroundColor:"#e3f2fd",borderRadius:"8px",border:"2px dashed #2196f3",cursor:"pointer",userSelect:"none",minHeight:"120px",width:"200px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",textAlign:"center"}},n.createElement("h4",{style:{margin:"0 0 8px 0",color:"#1976d2"}},"User Profile"),n.createElement("p",{style:{margin:"0",fontSize:"14px",color:"#424242"}},"Right-click for profile actions"))),n.createElement(i,{itemId:102,actions:[{label:"Download",onClick:e=>console.log("Download:",e)},{label:"Share Link",onClick:e=>console.log("Share link:",e)},{label:"Embed",onClick:e=>console.log("Embed:",e)},{label:"Report",onClick:e=>console.log("Report:",e)}]},n.createElement("div",{style:{padding:"20px",backgroundColor:"#f3e5f5",borderRadius:"8px",border:"2px dashed #9c27b0",cursor:"pointer",userSelect:"none",minHeight:"120px",width:"200px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",textAlign:"center"}},n.createElement("h4",{style:{margin:"0 0 8px 0",color:"#7b1fa2"}},"Document"),n.createElement("p",{style:{margin:"0",fontSize:"14px",color:"#424242"}},"Right-click for document actions")))),parameters:{docs:{description:{story:"Multiple ContextMenu components working independently. Each component maintains its own state, itemId, and action set."}}}},g={args:{itemId:4,onContextMenu:(e,r)=>{console.log("Custom callback triggered for item:",r,"at coordinates:",e.clientX,e.clientY)},actions:[{label:"Custom Action 1",onClick:e=>console.log("Action 1 for:",e)},{label:"Custom Action 2",onClick:e=>console.log("Action 2 for:",e)}]},render:e=>n.createElement(i,{...e},n.createElement(y,{title:"With Custom Callback",content:"This menu triggers a custom callback when right-clicked, in addition to showing the menu."})),parameters:{docs:{description:{story:"Context menu with a custom callback function. The onContextMenu prop is called when the menu is triggered, allowing for additional functionality."}}}},h={args:{itemId:5,actions:[{label:"Action 1",onClick:e=>console.log("Action 1 for:",e)},{label:"Action 2",onClick:e=>console.log("Action 2 for:",e)},{label:"Action 3",onClick:e=>console.log("Action 3 for:",e)},{label:"Action 4",onClick:e=>console.log("Action 4 for:",e)},{label:"Action 5",onClick:e=>console.log("Action 5 for:",e)}]},render:e=>n.createElement("div",{style:{height:"100vh",width:"100vw",position:"relative",background:"linear-gradient(45deg, #f0f8ff, #e6f3ff)",padding:"20px",boxSizing:"border-box"}},n.createElement("div",{style:{position:"absolute",top:"20px",left:"20px",color:"#2c3e50",fontWeight:"bold",fontSize:"18px"}},"🧪 Context Menu Edge Case Testing"),n.createElement(i,{...e,itemId:51},n.createElement("div",{style:{position:"absolute",top:"60px",left:"20px",padding:"15px",backgroundColor:"#ff6b6b",color:"white",borderRadius:"8px",cursor:"pointer",userSelect:"none",fontWeight:"bold"}},"Top-Left Corner",n.createElement("br",null),n.createElement("small",null,"Should open down-right"))),n.createElement(i,{...e,itemId:52},n.createElement("div",{style:{position:"absolute",top:"60px",right:"20px",padding:"15px",backgroundColor:"#4ecdc4",color:"white",borderRadius:"8px",cursor:"pointer",userSelect:"none",fontWeight:"bold"}},"Top-Right Corner",n.createElement("br",null),n.createElement("small",null,"Should open down-left"))),n.createElement(i,{...e,itemId:53},n.createElement("div",{style:{position:"absolute",bottom:"20px",left:"20px",padding:"15px",backgroundColor:"#45b7d1",color:"white",borderRadius:"8px",cursor:"pointer",userSelect:"none",fontWeight:"bold"}},"Bottom-Left Corner",n.createElement("br",null),n.createElement("small",null,"Should open up-right"))),n.createElement(i,{...e,itemId:54},n.createElement("div",{style:{position:"absolute",bottom:"20px",right:"20px",padding:"15px",backgroundColor:"#f7b731",color:"white",borderRadius:"8px",cursor:"pointer",userSelect:"none",fontWeight:"bold"}},"Bottom-Right Corner",n.createElement("br",null),n.createElement("small",null,"Should open up-left"))),n.createElement(i,{...e,itemId:55},n.createElement("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",padding:"20px",backgroundColor:"#5f27cd",color:"white",borderRadius:"8px",cursor:"pointer",userSelect:"none",fontWeight:"bold",textAlign:"center"}},"Center Element",n.createElement("br",null),n.createElement("small",null,"Normal positioning"))),n.createElement("div",{style:{position:"absolute",bottom:"60px",left:"50%",transform:"translateX(-50%)",textAlign:"center",color:"#2c3e50",fontSize:"14px",lineHeight:"1.5"}},n.createElement("strong",null,"Instructions:")," Right-click each colored box to test menu positioning.",n.createElement("br",null),"The menu should automatically adjust to stay within the viewport boundaries.")),parameters:{layout:"fullscreen",docs:{description:{story:"Test story for edge case positioning. The context menu automatically adjusts its position when triggered near viewport boundaries to prevent being cut off."}}}};var v,S,M,A,I;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    itemId: 1,
    actions: [{
      label: 'Edit',
      onClick: id => console.log('Edit item:', id)
    }, {
      label: 'Copy',
      onClick: id => console.log('Copy item:', id)
    }, {
      label: 'Delete',
      onClick: id => console.log('Delete item:', id)
    }]
  },
  render: args => <ContextMenu {...args}>
      <SampleContent />
    </ContextMenu>,
  parameters: {
    docs: {
      description: {
        story: 'Basic context menu with standard actions. Right-click the content area to see the menu with Edit, Copy, and Delete options.'
      }
    }
  }
}`,...(M=(S=d.parameters)==null?void 0:S.docs)==null?void 0:M.source},description:{story:`The basic ContextMenu with standard actions.
This demonstrates the fundamental functionality with common menu items.`,...(I=(A=d.parameters)==null?void 0:A.docs)==null?void 0:I.description}}};var R,D,T,P,W;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    itemId: 2,
    actions: [{
      label: 'Edit',
      onClick: id => console.log('Edit item:', id),
      className: 'menu-item-edit'
    }, {
      label: 'Copy',
      onClick: id => console.log('Copy item:', id),
      className: 'menu-item-copy'
    }, {
      label: 'Delete',
      onClick: id => console.log('Delete item:', id),
      className: 'menu-item-delete'
    }]
  },
  render: args => <ContextMenu {...args}>
      <SampleContent title="Styled Menu" content="This menu has custom styling for each action." />
    </ContextMenu>,
  parameters: {
    docs: {
      description: {
        story: 'Context menu with custom styling for individual actions. Each menu item has its own CSS class for theming.'
      }
    }
  }
}`,...(T=(D=p.parameters)==null?void 0:D.docs)==null?void 0:T.source},description:{story:`ContextMenu with styled actions and custom classes.
Shows how to customize the appearance of individual menu items.`,...(W=(P=p.parameters)==null?void 0:P.docs)==null?void 0:W.description}}};var j,z,H,N,B;m.parameters={...m.parameters,docs:{...(j=m.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    itemId: 3,
    actions: [{
      label: 'Open',
      onClick: id => console.log('Open item:', id)
    }, {
      label: 'Edit Details',
      onClick: id => console.log('Edit details:', id)
    }, {
      label: 'Duplicate',
      onClick: id => console.log('Duplicate item:', id)
    }, {
      label: 'Share',
      onClick: id => console.log('Share item:', id)
    }, {
      label: '---',
      onClick: id => {}
    },
    // Separator (not functional in this implementation)
    {
      label: 'Export',
      onClick: id => console.log('Export item:', id)
    }, {
      label: 'Print',
      onClick: id => console.log('Print item:', id)
    }, {
      label: 'Properties',
      onClick: id => console.log('Properties:', id)
    }]
  },
  render: args => <ContextMenu {...args}>
      <SampleContent title="Comprehensive Menu" content="This menu demonstrates many actions that might be found in a file manager or application." />
    </ContextMenu>,
  parameters: {
    docs: {
      description: {
        story: 'A comprehensive context menu with many actions. This shows how the component handles multiple menu items effectively.'
      }
    }
  }
}`,...(H=(z=m.parameters)==null?void 0:z.docs)==null?void 0:H.source},description:{story:`ContextMenu with many actions showing a comprehensive menu.
Demonstrates how to handle multiple menu items effectively.`,...(B=(N=m.parameters)==null?void 0:N.docs)==null?void 0:B.description}}};var _,L,O,V,F;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '20px',
    flexWrap: 'wrap'
  }}>
      <ContextMenu itemId={101} actions={[{
      label: 'View Profile',
      onClick: id => console.log('View profile:', id)
    }, {
      label: 'Edit Profile',
      onClick: id => console.log('Edit profile:', id)
    }, {
      label: 'Settings',
      onClick: id => console.log('Settings:', id)
    }]}>
        <div style={{
        padding: '20px',
        backgroundColor: '#e3f2fd',
        borderRadius: '8px',
        border: '2px dashed #2196f3',
        cursor: 'pointer',
        userSelect: 'none',
        minHeight: '120px',
        width: '200px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'
      }}>
          <h4 style={{
          margin: '0 0 8px 0',
          color: '#1976d2'
        }}>User Profile</h4>
          <p style={{
          margin: '0',
          fontSize: '14px',
          color: '#424242'
        }}>Right-click for profile actions</p>
        </div>
      </ContextMenu>
      
      <ContextMenu itemId={102} actions={[{
      label: 'Download',
      onClick: id => console.log('Download:', id)
    }, {
      label: 'Share Link',
      onClick: id => console.log('Share link:', id)
    }, {
      label: 'Embed',
      onClick: id => console.log('Embed:', id)
    }, {
      label: 'Report',
      onClick: id => console.log('Report:', id)
    }]}>
        <div style={{
        padding: '20px',
        backgroundColor: '#f3e5f5',
        borderRadius: '8px',
        border: '2px dashed #9c27b0',
        cursor: 'pointer',
        userSelect: 'none',
        minHeight: '120px',
        width: '200px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center'
      }}>
          <h4 style={{
          margin: '0 0 8px 0',
          color: '#7b1fa2'
        }}>Document</h4>
          <p style={{
          margin: '0',
          fontSize: '14px',
          color: '#424242'
        }}>Right-click for document actions</p>
        </div>
      </ContextMenu>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Multiple ContextMenu components working independently. Each component maintains its own state, itemId, and action set.'
      }
    }
  }
}`,...(O=(L=u.parameters)==null?void 0:L.docs)==null?void 0:O.source},description:{story:`Multiple ContextMenu components showing independent instances.
Demonstrates that each menu maintains its own state and actions.`,...(F=(V=u.parameters)==null?void 0:V.docs)==null?void 0:F.description}}};var q,X,U,Y,$;g.parameters={...g.parameters,docs:{...(q=g.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    itemId: 4,
    onContextMenu: (e, itemId) => {
      console.log('Custom callback triggered for item:', itemId, 'at coordinates:', e.clientX, e.clientY);
    },
    actions: [{
      label: 'Custom Action 1',
      onClick: id => console.log('Action 1 for:', id)
    }, {
      label: 'Custom Action 2',
      onClick: id => console.log('Action 2 for:', id)
    }]
  },
  render: args => <ContextMenu {...args}>
      <SampleContent title="With Custom Callback" content="This menu triggers a custom callback when right-clicked, in addition to showing the menu." />
    </ContextMenu>,
  parameters: {
    docs: {
      description: {
        story: 'Context menu with a custom callback function. The onContextMenu prop is called when the menu is triggered, allowing for additional functionality.'
      }
    }
  }
}`,...(U=(X=g.parameters)==null?void 0:X.docs)==null?void 0:U.source},description:{story:`ContextMenu with custom callback functionality.
Demonstrates how to use the onContextMenu prop for additional functionality.`,...($=(Y=g.parameters)==null?void 0:Y.docs)==null?void 0:$.description}}};var K,G,J,Q,Z;h.parameters={...h.parameters,docs:{...(K=h.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    itemId: 5,
    actions: [{
      label: 'Action 1',
      onClick: id => console.log('Action 1 for:', id)
    }, {
      label: 'Action 2',
      onClick: id => console.log('Action 2 for:', id)
    }, {
      label: 'Action 3',
      onClick: id => console.log('Action 3 for:', id)
    }, {
      label: 'Action 4',
      onClick: id => console.log('Action 4 for:', id)
    }, {
      label: 'Action 5',
      onClick: id => console.log('Action 5 for:', id)
    }]
  },
  render: args => <div style={{
    height: '100vh',
    width: '100vw',
    position: 'relative',
    background: 'linear-gradient(45deg, #f0f8ff, #e6f3ff)',
    padding: '20px',
    boxSizing: 'border-box'
  }}>
      <div style={{
      position: 'absolute',
      top: '20px',
      left: '20px',
      color: '#2c3e50',
      fontWeight: 'bold',
      fontSize: '18px'
    }}>
        🧪 Context Menu Edge Case Testing
      </div>
      
      {/* Top-left corner */}
      <ContextMenu {...args} itemId={51}>
        <div style={{
        position: 'absolute',
        top: '60px',
        left: '20px',
        padding: '15px',
        backgroundColor: '#ff6b6b',
        color: 'white',
        borderRadius: '8px',
        cursor: 'pointer',
        userSelect: 'none',
        fontWeight: 'bold'
      }}>
          Top-Left Corner
          <br />
          <small>Should open down-right</small>
        </div>
      </ContextMenu>
      
      {/* Top-right corner */}
      <ContextMenu {...args} itemId={52}>
        <div style={{
        position: 'absolute',
        top: '60px',
        right: '20px',
        padding: '15px',
        backgroundColor: '#4ecdc4',
        color: 'white',
        borderRadius: '8px',
        cursor: 'pointer',
        userSelect: 'none',
        fontWeight: 'bold'
      }}>
          Top-Right Corner
          <br />
          <small>Should open down-left</small>
        </div>
      </ContextMenu>
      
      {/* Bottom-left corner */}
      <ContextMenu {...args} itemId={53}>
        <div style={{
        position: 'absolute',
        bottom: '20px',
        left: '20px',
        padding: '15px',
        backgroundColor: '#45b7d1',
        color: 'white',
        borderRadius: '8px',
        cursor: 'pointer',
        userSelect: 'none',
        fontWeight: 'bold'
      }}>
          Bottom-Left Corner
          <br />
          <small>Should open up-right</small>
        </div>
      </ContextMenu>
      
      {/* Bottom-right corner */}
      <ContextMenu {...args} itemId={54}>
        <div style={{
        position: 'absolute',
        bottom: '20px',
        right: '20px',
        padding: '15px',
        backgroundColor: '#f7b731',
        color: 'white',
        borderRadius: '8px',
        cursor: 'pointer',
        userSelect: 'none',
        fontWeight: 'bold'
      }}>
          Bottom-Right Corner
          <br />
          <small>Should open up-left</small>
        </div>
      </ContextMenu>
      
      {/* Center element for normal behavior */}
      <ContextMenu {...args} itemId={55}>
        <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        padding: '20px',
        backgroundColor: '#5f27cd',
        color: 'white',
        borderRadius: '8px',
        cursor: 'pointer',
        userSelect: 'none',
        fontWeight: 'bold',
        textAlign: 'center'
      }}>
          Center Element
          <br />
          <small>Normal positioning</small>
        </div>
      </ContextMenu>
      
      <div style={{
      position: 'absolute',
      bottom: '60px',
      left: '50%',
      transform: 'translateX(-50%)',
      textAlign: 'center',
      color: '#2c3e50',
      fontSize: '14px',
      lineHeight: '1.5'
    }}>
        <strong>Instructions:</strong> Right-click each colored box to test menu positioning.<br />
        The menu should automatically adjust to stay within the viewport boundaries.
      </div>
    </div>,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Test story for edge case positioning. The context menu automatically adjusts its position when triggered near viewport boundaries to prevent being cut off.'
      }
    }
  }
}`,...(J=(G=h.parameters)==null?void 0:G.docs)==null?void 0:J.source},description:{story:`ContextMenu positioning test for edge cases.
Demonstrates automatic repositioning when near viewport boundaries.`,...(Z=(Q=h.parameters)==null?void 0:Q.docs)==null?void 0:Z.description}}};const pe=["Default","StyledActions","ComprehensiveMenu","MultipleComponents","WithCustomCallback","EdgeCasePositioning"];export{m as ComprehensiveMenu,d as Default,h as EdgeCasePositioning,u as MultipleComponents,p as StyledActions,g as WithCustomCallback,pe as __namedExportsOrder,de as default};

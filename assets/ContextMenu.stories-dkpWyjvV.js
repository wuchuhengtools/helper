import{r as b,R as t}from"./index-DQDNmYQF.js";const J=()=>{const[e,l]=b.useState({visible:!1,x:0,y:0,browserId:null});return{contextMenu:e,showContextMenu:(n,h)=>{n.preventDefault(),l({visible:!0,x:n.clientX,y:n.clientY,browserId:h})},hideContextMenu:()=>{l(n=>({...n,visible:!1}))}}},i=({children:e,actions:l,onContextMenu:p,itemId:u})=>{const{contextMenu:n,showContextMenu:h,hideContextMenu:C}=J(),x=b.useRef(null),U=o=>{o.preventDefault(),h(o,u),p==null||p(o,u)},X=o=>{n.browserId!==null&&(o.onClick(n.browserId),C())};b.useEffect(()=>{const o=f=>{const a=f.target;x.current&&!x.current.contains(a)&&C()};return n.visible&&document.addEventListener("mousedown",o),()=>{document.removeEventListener("mousedown",o)}},[n.visible,C]);const Y={position:"fixed",left:n.x,top:n.y,zIndex:50,minWidth:"150px",backgroundColor:"#ffffff",border:"1px solid #d1d5db",borderRadius:"6px",boxShadow:"0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",padding:"8px 0"},K={padding:"8px 16px",cursor:"pointer",fontSize:"14px",transition:"background-color 0.15s ease-in-out",userSelect:"none"},G={backgroundColor:"#f3f4f6"};return t.createElement("div",{onContextMenu:U},e,n.visible&&n.browserId===u&&t.createElement("div",{ref:x,style:Y},l.map((o,f)=>t.createElement("div",{key:f,style:K,onClick:()=>X(o),onMouseEnter:a=>{Object.assign(a.currentTarget.style,G)},onMouseLeave:a=>{a.currentTarget.style.backgroundColor=""}},o.label))))};try{i.displayName="ContextMenu",i.__docgenInfo={description:`A reusable React context menu component that displays a custom menu on right-click.

This component wraps its children and, when right-clicked, shows a context menu
with a list of actions. It handles menu positioning, click-outside detection,
and action execution.`,displayName:"ContextMenu",props:{actions:{defaultValue:null,description:"",name:"actions",required:!0,type:{name:"ContextMenuAction[]"}},onContextMenu:{defaultValue:null,description:"",name:"onContextMenu",required:!1,type:{name:"((e: MouseEvent<Element, MouseEvent>, itemId: number) => void)"}},itemId:{defaultValue:null,description:"",name:"itemId",required:!0,type:{name:"number"}}}}}catch{}const Z={title:"Components/ContextMenu",component:i,parameters:{layout:"padded",docs:{description:{component:`
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
        `}}},argTypes:{children:{description:"Content to wrap with context menu functionality",control:!1},actions:{description:"Array of actions to display in the context menu",control:{type:"object"},table:{type:{summary:"ContextMenuAction[]",detail:"Array of objects with label, onClick handler, and optional className"}}},onContextMenu:{description:"Optional callback when context menu is triggered",table:{type:{summary:"(e: React.MouseEvent, itemId: number) => void"}}},itemId:{description:"Unique identifier for this context menu instance",control:{type:"number"},table:{type:{summary:"number"}}}},tags:["autodocs"]},g=({title:e="Right-click me!",content:l="Right-click on this area to see the context menu with various actions."})=>t.createElement("div",{style:{padding:"20px",backgroundColor:"#f8f9fa",borderRadius:"8px",border:"2px dashed #dee2e6",cursor:"pointer",userSelect:"none",minHeight:"150px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",textAlign:"center"}},t.createElement("h3",{style:{margin:"0 0 12px 0",color:"#2c3e50",fontSize:"18px"}},e),t.createElement("p",{style:{margin:"0",color:"#5a6c7d",lineHeight:"1.5"}},l),t.createElement("div",{style:{marginTop:"16px",padding:"8px 12px",backgroundColor:"#e9ecef",borderRadius:"4px",fontSize:"14px",color:"#6c757d"}},"💡 ",t.createElement("strong",null,"Tip:")," Right-click here to see the menu!")),s={args:{itemId:1,actions:[{label:"Edit",onClick:e=>console.log("Edit item:",e)},{label:"Copy",onClick:e=>console.log("Copy item:",e)},{label:"Delete",onClick:e=>console.log("Delete item:",e)}]},render:e=>t.createElement(i,{...e},t.createElement(g,null)),parameters:{docs:{description:{story:"Basic context menu with standard actions. Right-click the content area to see the menu with Edit, Copy, and Delete options."}}}},r={args:{itemId:2,actions:[{label:"Edit",onClick:e=>console.log("Edit item:",e),className:"menu-item-edit"},{label:"Copy",onClick:e=>console.log("Copy item:",e),className:"menu-item-copy"},{label:"Delete",onClick:e=>console.log("Delete item:",e),className:"menu-item-delete"}]},render:e=>t.createElement(i,{...e},t.createElement(g,{title:"Styled Menu",content:"This menu has custom styling for each action."})),parameters:{docs:{description:{story:"Context menu with custom styling for individual actions. Each menu item has its own CSS class for theming."}}}},c={args:{itemId:3,actions:[{label:"Open",onClick:e=>console.log("Open item:",e)},{label:"Edit Details",onClick:e=>console.log("Edit details:",e)},{label:"Duplicate",onClick:e=>console.log("Duplicate item:",e)},{label:"Share",onClick:e=>console.log("Share item:",e)},{label:"---",onClick:e=>{}},{label:"Export",onClick:e=>console.log("Export item:",e)},{label:"Print",onClick:e=>console.log("Print item:",e)},{label:"Properties",onClick:e=>console.log("Properties:",e)}]},render:e=>t.createElement(i,{...e},t.createElement(g,{title:"Comprehensive Menu",content:"This menu demonstrates many actions that might be found in a file manager or application."})),parameters:{docs:{description:{story:"A comprehensive context menu with many actions. This shows how the component handles multiple menu items effectively."}}}},d={render:()=>t.createElement("div",{style:{display:"flex",gap:"20px",flexWrap:"wrap"}},t.createElement(i,{itemId:101,actions:[{label:"View Profile",onClick:e=>console.log("View profile:",e)},{label:"Edit Profile",onClick:e=>console.log("Edit profile:",e)},{label:"Settings",onClick:e=>console.log("Settings:",e)}]},t.createElement("div",{style:{padding:"20px",backgroundColor:"#e3f2fd",borderRadius:"8px",border:"2px dashed #2196f3",cursor:"pointer",userSelect:"none",minHeight:"120px",width:"200px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",textAlign:"center"}},t.createElement("h4",{style:{margin:"0 0 8px 0",color:"#1976d2"}},"User Profile"),t.createElement("p",{style:{margin:"0",fontSize:"14px",color:"#424242"}},"Right-click for profile actions"))),t.createElement(i,{itemId:102,actions:[{label:"Download",onClick:e=>console.log("Download:",e)},{label:"Share Link",onClick:e=>console.log("Share link:",e)},{label:"Embed",onClick:e=>console.log("Embed:",e)},{label:"Report",onClick:e=>console.log("Report:",e)}]},t.createElement("div",{style:{padding:"20px",backgroundColor:"#f3e5f5",borderRadius:"8px",border:"2px dashed #9c27b0",cursor:"pointer",userSelect:"none",minHeight:"120px",width:"200px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",textAlign:"center"}},t.createElement("h4",{style:{margin:"0 0 8px 0",color:"#7b1fa2"}},"Document"),t.createElement("p",{style:{margin:"0",fontSize:"14px",color:"#424242"}},"Right-click for document actions")))),parameters:{docs:{description:{story:"Multiple ContextMenu components working independently. Each component maintains its own state, itemId, and action set."}}}},m={args:{itemId:4,onContextMenu:(e,l)=>{console.log("Custom callback triggered for item:",l,"at coordinates:",e.clientX,e.clientY)},actions:[{label:"Custom Action 1",onClick:e=>console.log("Action 1 for:",e)},{label:"Custom Action 2",onClick:e=>console.log("Action 2 for:",e)}]},render:e=>t.createElement(i,{...e},t.createElement(g,{title:"With Custom Callback",content:"This menu triggers a custom callback when right-clicked, in addition to showing the menu."})),parameters:{docs:{description:{story:"Context menu with a custom callback function. The onContextMenu prop is called when the menu is triggered, allowing for additional functionality."}}}};var y,k,w,E,M;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(w=(k=s.parameters)==null?void 0:k.docs)==null?void 0:w.source},description:{story:`The basic ContextMenu with standard actions.
This demonstrates the fundamental functionality with common menu items.`,...(M=(E=s.parameters)==null?void 0:E.docs)==null?void 0:M.description}}};var S,v,D,I,A;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(D=(v=r.parameters)==null?void 0:v.docs)==null?void 0:D.source},description:{story:`ContextMenu with styled actions and custom classes.
Shows how to customize the appearance of individual menu items.`,...(A=(I=r.parameters)==null?void 0:I.docs)==null?void 0:A.description}}};var R,T,P,z,_;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(P=(T=c.parameters)==null?void 0:T.docs)==null?void 0:P.source},description:{story:`ContextMenu with many actions showing a comprehensive menu.
Demonstrates how to handle multiple menu items effectively.`,...(_=(z=c.parameters)==null?void 0:z.docs)==null?void 0:_.description}}};var N,j,O,H,V;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(O=(j=d.parameters)==null?void 0:j.docs)==null?void 0:O.source},description:{story:`Multiple ContextMenu components showing independent instances.
Demonstrates that each menu maintains its own state and actions.`,...(V=(H=d.parameters)==null?void 0:H.docs)==null?void 0:V.description}}};var W,F,L,q,B;m.parameters={...m.parameters,docs:{...(W=m.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(L=(F=m.parameters)==null?void 0:F.docs)==null?void 0:L.source},description:{story:`ContextMenu with custom callback functionality.
Demonstrates how to use the onContextMenu prop for additional functionality.`,...(B=(q=m.parameters)==null?void 0:q.docs)==null?void 0:B.description}}};const $=["Default","StyledActions","ComprehensiveMenu","MultipleComponents","WithCustomCallback"];export{c as ComprehensiveMenu,s as Default,d as MultipleComponents,r as StyledActions,m as WithCustomCallback,$ as __namedExportsOrder,Z as default};

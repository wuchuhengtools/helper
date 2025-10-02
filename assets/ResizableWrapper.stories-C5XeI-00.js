import{r as a,R as e}from"./index-DQDNmYQF.js";const r=({children:t,minSize:w=200,maxSize:B=500,initialSize:k=240,fixedSize:v,className:ye="",style:we={},borderColor:R="#ccc",activeBorderColor:W="#3b82f6",borderWidth:d="4px",resizeSide:i="right"})=>{const[s,M]=a.useState(!1),[C,ve]=a.useState(k),[H,Ce]=a.useState(0),[P,Re]=a.useState(0),[c,We]=a.useState(k),E=i==="left"||i==="right",m=i==="top"||i==="bottom",Ee=a.useCallback(o=>{o.preventDefault(),M(!0),Ce(o.clientX),Re(o.clientY),We(C)},[C]),D=a.useCallback(o=>{if(!s)return;let p,l;E?(p=o.clientX-H,i==="right"?l=c+p:l=c-p):(p=o.clientY-P,i==="bottom"?l=c+p:l=c-p),l=Math.max(w,Math.min(B,l)),ve(l)},[s,H,P,c,w,B,i,E]),T=a.useCallback(()=>{M(!1)},[]);a.useEffect(()=>{if(s)return document.addEventListener("mousemove",D),document.addEventListener("mouseup",T),document.body.style.cursor=m?"row-resize":"col-resize",document.body.style.userSelect="none",()=>{document.removeEventListener("mousemove",D),document.removeEventListener("mouseup",T),document.body.style.cursor="",document.body.style.userSelect=""}},[s,D,T,m]);const h={position:"relative",...we};return E?(h.width=`${C}px`,v&&(h.height=`${v}px`)):(h.height=`${C}px`,v&&(h.width=`${v}px`)),e.createElement("div",{className:ye,style:h},t,e.createElement("div",{style:{position:"absolute",...i==="top"?{top:0,left:0,right:0,height:d}:i==="bottom"?{bottom:0,left:0,right:0,height:d}:i==="left"?{left:0,top:0,bottom:0,width:d}:{right:0,top:0,bottom:0,width:d},cursor:m?"row-resize":"col-resize",backgroundColor:s?W:R,transition:"background-color 150ms ease-in-out",zIndex:10},onMouseDown:Ee,onMouseEnter:o=>{s||(o.currentTarget.style.backgroundColor=W)},onMouseLeave:o=>{s||(o.currentTarget.style.backgroundColor=R)}},e.createElement("div",{style:{height:m?d:"100%",width:m?"100%":d,backgroundColor:s?W:R,transition:"background-color 150ms ease-in-out"}})))};try{r.displayName="ResizableWrapper",r.__docgenInfo={description:`A resizable wrapper component that allows horizontal and vertical resizing of its content.

The component provides a draggable handle on any edge that users can drag
to resize the container. The resize operation is constrained by the specified
minimum and maximum width/height values.`,displayName:"ResizableWrapper",props:{children:{defaultValue:null,description:"Content to be wrapped in the resizable container",name:"children",required:!0,type:{name:"ReactNode"}},minSize:{defaultValue:{value:"200"},description:"Minimum size in pixels (width for left/right, height for top/bottom) (default: 200)",name:"minSize",required:!1,type:{name:"number"}},maxSize:{defaultValue:{value:"500"},description:"Maximum size in pixels (width for left/right, height for top/bottom) (default: 500)",name:"maxSize",required:!1,type:{name:"number"}},initialSize:{defaultValue:{value:"240"},description:"Initial size in pixels (width for left/right, height for top/bottom) (default: 240)",name:"initialSize",required:!1,type:{name:"number"}},fixedSize:{defaultValue:null,description:"Fixed dimension - width for top/bottom resize, height for left/right resize",name:"fixedSize",required:!1,type:{name:"number"}},borderWidth:{defaultValue:{value:"4px"},description:"Width of the resize handle border",name:"borderWidth",required:!1,type:{name:"string"}},resizeSide:{defaultValue:{value:"right"},description:"Side from which the resize handle appears (default: right)",name:"resizeSide",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"right"'},{value:'"bottom"'},{value:'"left"'}]}},className:{defaultValue:{value:""},description:"Additional CSS classes to apply to the container",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:{value:"{}"},description:"Inline styles for the container",name:"style",required:!1,type:{name:"CSSProperties"}},borderColor:{defaultValue:{value:"#ccc"},description:"Color of the resize handle in normal state",name:"borderColor",required:!1,type:{name:"string"}},activeBorderColor:{defaultValue:{value:"#3b82f6"},description:"Color of the resize handle when active/hovered",name:"activeBorderColor",required:!1,type:{name:"string"}}}}}catch{}const Te={title:"Components/ResizableWrapper",component:r,parameters:{layout:"padded",docs:{description:{component:`
A flexible resizable container component that allows users to adjust width or height by dragging from any edge.

### Key Features:
- **Multi-directional Resizing**: Resize from top, right, bottom, or left edges
- **Intuitive Interaction**: Simple drag-to-resize functionality
- **Customizable Constraints**: Set minimum and maximum width/height limits
- **Visual Feedback**: Handle provides clear visual cues with hover states
- **Accessible**: Proper cursor changes and visual states for all orientations
- **TypeScript Support**: Full type safety and IntelliSense support
- **Framework Agnostic**: Uses inline styles for maximum compatibility

### Browser Support:
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

### Resize Sides:
- **Right** (default): Horizontal resizing from the right edge
- **Left**: Horizontal resizing from the left edge  
- **Top**: Vertical resizing from the top edge
- **Bottom**: Vertical resizing from the bottom edge
        `}}},argTypes:{children:{description:"Content to be wrapped in the resizable container",control:!1},minSize:{description:"Minimum size in pixels (width for left/right, height for top/bottom)",control:{type:"number",min:50,max:1e3,step:10}},maxSize:{description:"Maximum size in pixels (width for left/right, height for top/bottom)",control:{type:"number",min:100,max:2e3,step:10}},initialSize:{description:"Initial size in pixels (width for left/right, height for top/bottom)",control:{type:"number",min:50,max:1e3,step:10}},fixedSize:{description:"Fixed dimension for the non-resizing axis (optional)",control:{type:"number",min:50,max:1e3,step:10}},borderWidth:{description:"Width of the resize handle",control:{type:"select"},options:["2px","4px","6px","8px"]},borderColor:{description:"Color of the resize handle in normal state",control:{type:"color"}},activeBorderColor:{description:"Color of the resize handle when active/hovered",control:{type:"color"}},resizeSide:{description:"Side from which the resize handle appears",control:{type:"select"},options:["top","right","bottom","left"]},className:{description:"Additional CSS classes",control:{type:"text"}},style:{description:"Inline styles for the container",control:!1}},tags:["autodocs"]},n=({title:t="Resizable Content",content:w="This content can be resized by dragging the right edge. Try it out!"})=>e.createElement("div",{style:{padding:"20px",backgroundColor:"#f8f9fa",borderRadius:"8px",height:"200px",overflow:"auto"}},e.createElement("h3",{style:{margin:"0 0 12px 0",color:"#2c3e50",fontSize:"18px"}},t),e.createElement("p",{style:{margin:"0 0 12px 0",color:"#5a6c7d",lineHeight:"1.5"}},w),e.createElement("div",{style:{padding:"12px",backgroundColor:"#e9ecef",borderRadius:"4px",fontSize:"14px",color:"#6c757d"}},"💡 ",e.createElement("strong",null,"Tip:")," Hover over the resize edge to see the handle, then drag to resize!")),u={args:{minSize:200,maxSize:500,initialSize:300,borderWidth:"4px",borderColor:"#ccc",activeBorderColor:"#3b82f6",resizeSide:"right"},render:t=>e.createElement(r,{...t},e.createElement(n,null))},g={args:{minSize:150,maxSize:400,initialSize:200,borderWidth:"3px",borderColor:"#dee2e6",activeBorderColor:"#28a745",resizeSide:"right"},render:t=>e.createElement(r,{...t},e.createElement(n,{title:"Navigation Panel",content:"This could be a sidebar with navigation items, filters, or tools. Users can adjust the width to their preference."}))},f={args:{minSize:300,maxSize:800,initialSize:500,borderWidth:"5px",borderColor:"#6c757d",activeBorderColor:"#dc3545",resizeSide:"right"},render:t=>e.createElement(r,{...t},e.createElement(n,{title:"Dashboard Widget",content:"This represents a dashboard component that users can resize to fit their workflow. Great for data visualization or content panels."}))},b={args:{minSize:250,maxSize:600,initialSize:350,borderWidth:"6px",borderColor:"#e7c3ff",activeBorderColor:"#9c27b0",resizeSide:"right",style:{border:"2px solid #e7c3ff",borderRadius:"12px",backgroundColor:"#fafafa",boxShadow:"0 4px 6px rgba(0, 0, 0, 0.1)"}},render:t=>e.createElement(r,{...t},e.createElement(n,{title:"Custom Styled Panel",content:"This example shows how you can customize the appearance with your own styles, colors, and borders to match your design system."}))},z={render:()=>e.createElement("div",{style:{display:"flex",gap:"20px",flexWrap:"wrap"}},e.createElement(r,{minSize:150,maxSize:300,initialSize:200,borderWidth:"4px",borderColor:"#17a2b8",activeBorderColor:"#138496"},e.createElement(n,{title:"Panel A",content:"First resizable panel. Each component maintains its own state independently."})),e.createElement(r,{minSize:200,maxSize:400,initialSize:250,borderWidth:"4px",borderColor:"#ffc107",activeBorderColor:"#e0a800"},e.createElement(n,{title:"Panel B",content:"Second resizable panel. Notice how each has its own resize handle and constraints."}))),parameters:{docs:{description:{story:"Multiple ResizableWrapper components can be used together, each maintaining independent state and constraints."}}}},x={args:{minSize:300,maxSize:600,initialSize:400,borderWidth:"4px",borderColor:"#6f42c1",activeBorderColor:"#5a2d91",resizeSide:"right"},render:t=>e.createElement(r,{...t},e.createElement("div",{style:{padding:"20px"}},e.createElement("h3",{style:{marginTop:0,color:"#2c3e50"}},"User Profile Form"),e.createElement("form",{style:{display:"flex",flexDirection:"column",gap:"12px"}},e.createElement("label",{style:{display:"flex",flexDirection:"column",gap:"4px"}},e.createElement("span",{style:{fontWeight:"bold",color:"#495057"}},"Name:"),e.createElement("input",{type:"text",placeholder:"Enter your name",style:{padding:"8px 12px",border:"1px solid #ced4da",borderRadius:"4px",fontSize:"14px"}})),e.createElement("label",{style:{display:"flex",flexDirection:"column",gap:"4px"}},e.createElement("span",{style:{fontWeight:"bold",color:"#495057"}},"Email:"),e.createElement("input",{type:"email",placeholder:"Enter your email",style:{padding:"8px 12px",border:"1px solid #ced4da",borderRadius:"4px",fontSize:"14px"}})),e.createElement("label",{style:{display:"flex",flexDirection:"column",gap:"4px"}},e.createElement("span",{style:{fontWeight:"bold",color:"#495057"}},"Bio:"),e.createElement("textarea",{placeholder:"Tell us about yourself",rows:3,style:{padding:"8px 12px",border:"1px solid #ced4da",borderRadius:"4px",fontSize:"14px",resize:"vertical"}})),e.createElement("button",{type:"submit",style:{padding:"10px 16px",backgroundColor:"#007bff",color:"white",border:"none",borderRadius:"4px",cursor:"pointer",fontSize:"14px",fontWeight:"bold"}},"Save Profile")))),parameters:{docs:{description:{story:"The ResizableWrapper works seamlessly with complex content including forms, inputs, and interactive elements."}}}},S={args:{minSize:200,maxSize:500,initialSize:300,borderWidth:"4px",borderColor:"#6f42c1",activeBorderColor:"#5a2d91",resizeSide:"right"},render:t=>e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"20px"}},e.createElement(r,{...t,resizeSide:"left"},e.createElement(n,{title:"Left Side Handle",content:"Resize handle on the left side. Drag from the left edge to resize."})),e.createElement(r,{...t,resizeSide:"top"},e.createElement(n,{title:"Top Side Handle",content:"Resize handle on the top side. Drag from the top edge to resize."})),e.createElement(r,{...t,resizeSide:"bottom"},e.createElement(n,{title:"Bottom Side Handle",content:"Resize handle on the bottom side. Drag from the bottom edge to resize."})),e.createElement(r,{...t,resizeSide:"right"},e.createElement(n,{title:"Right Side Handle",content:"Resize handle on the right side (default). Drag from the right edge to resize."}))),parameters:{docs:{description:{story:"Shows the ResizableWrapper with resize handles on all four sides."}}}},y={args:{minSize:150,maxSize:400,initialSize:250,fixedSize:400,borderWidth:"4px",borderColor:"#fd7e14",activeBorderColor:"#e55100",resizeSide:"bottom"},render:t=>e.createElement("div",{style:{display:"flex",gap:"20px"}},e.createElement(r,{...t,resizeSide:"top"},e.createElement(n,{title:"Top Handle",content:"This container can be resized by dragging the top edge. Perfect for panels that need to grow upward."})),e.createElement(r,{...t,resizeSide:"bottom"},e.createElement(n,{title:"Bottom Handle",content:"This container can be resized by dragging the bottom edge. Ideal for expandable content areas."}))),parameters:{docs:{description:{story:"Showcases vertical resizing with top and bottom handles, useful for height-adjustable panels."}}}};var V,F,I,N,q;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    minSize: 200,
    maxSize: 500,
    initialSize: 300,
    borderWidth: "4px",
    borderColor: "#ccc",
    activeBorderColor: "#3b82f6",
    resizeSide: "right" as const
  },
  render: args => <ResizableWrapper {...args}>
      <SampleContent />
    </ResizableWrapper>
}`,...(I=(F=u.parameters)==null?void 0:F.docs)==null?void 0:I.source},description:{story:`The default ResizableWrapper with standard settings.
This is the most common use case with default constraints.`,...(q=(N=u.parameters)==null?void 0:N.docs)==null?void 0:q.description}}};var A,_,L,U,j;g.parameters={...g.parameters,docs:{...(A=g.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    minSize: 150,
    maxSize: 400,
    initialSize: 200,
    borderWidth: "3px",
    borderColor: "#dee2e6",
    activeBorderColor: "#28a745",
    resizeSide: "right" as const
  },
  render: args => <ResizableWrapper {...args}>
      <SampleContent title="Navigation Panel" content="This could be a sidebar with navigation items, filters, or tools. Users can adjust the width to their preference." />
    </ResizableWrapper>
}`,...(L=(_=g.parameters)==null?void 0:_.docs)==null?void 0:L.source},description:{story:`A narrow sidebar configuration with smaller constraints.
Perfect for navigation panels or tool palettes.`,...(j=(U=g.parameters)==null?void 0:U.docs)==null?void 0:j.description}}};var X,Y,$,G,K;f.parameters={...f.parameters,docs:{...(X=f.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    minSize: 300,
    maxSize: 800,
    initialSize: 500,
    borderWidth: "5px",
    borderColor: "#6c757d",
    activeBorderColor: "#dc3545",
    resizeSide: "right" as const
  },
  render: args => <ResizableWrapper {...args}>
      <SampleContent title="Dashboard Widget" content="This represents a dashboard component that users can resize to fit their workflow. Great for data visualization or content panels." />
    </ResizableWrapper>
}`,...($=(Y=f.parameters)==null?void 0:Y.docs)==null?void 0:$.source},description:{story:`A wide dashboard widget that can be resized within a larger range.
Suitable for content areas that need more flexibility.`,...(K=(G=f.parameters)==null?void 0:G.docs)==null?void 0:K.description}}};var O,J,Q,Z,ee;b.parameters={...b.parameters,docs:{...(O=b.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    minSize: 250,
    maxSize: 600,
    initialSize: 350,
    borderWidth: "6px",
    borderColor: "#e7c3ff",
    activeBorderColor: "#9c27b0",
    resizeSide: "right" as const,
    style: {
      border: "2px solid #e7c3ff",
      borderRadius: "12px",
      backgroundColor: "#fafafa",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)"
    }
  },
  render: args => <ResizableWrapper {...args}>
      <SampleContent title="Custom Styled Panel" content="This example shows how you can customize the appearance with your own styles, colors, and borders to match your design system." />
    </ResizableWrapper>
}`,...(Q=(J=b.parameters)==null?void 0:J.docs)==null?void 0:Q.source},description:{story:`Custom styled wrapper with custom colors and borders.
Shows how to integrate with your design system.`,...(ee=(Z=b.parameters)==null?void 0:Z.docs)==null?void 0:ee.description}}};var te,re,ne,ie,oe;z.parameters={...z.parameters,docs:{...(te=z.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: "20px",
    flexWrap: "wrap"
  }}>
      <ResizableWrapper minSize={150} maxSize={300} initialSize={200} borderWidth="4px" borderColor="#17a2b8" activeBorderColor="#138496">
        <SampleContent title="Panel A" content="First resizable panel. Each component maintains its own state independently." />
      </ResizableWrapper>

      <ResizableWrapper minSize={200} maxSize={400} initialSize={250} borderWidth="4px" borderColor="#ffc107" activeBorderColor="#e0a800">
        <SampleContent title="Panel B" content="Second resizable panel. Notice how each has its own resize handle and constraints." />
      </ResizableWrapper>
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Multiple ResizableWrapper components can be used together, each maintaining independent state and constraints."
      }
    }
  }
}`,...(ne=(re=z.parameters)==null?void 0:re.docs)==null?void 0:ne.source},description:{story:`Multiple resizable components side by side.
Demonstrates how multiple instances work together.`,...(oe=(ie=z.parameters)==null?void 0:ie.docs)==null?void 0:oe.description}}};var ae,se,le,de,pe;x.parameters={...x.parameters,docs:{...(ae=x.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    minSize: 300,
    maxSize: 600,
    initialSize: 400,
    borderWidth: "4px",
    borderColor: "#6f42c1",
    activeBorderColor: "#5a2d91",
    resizeSide: "right" as const
  },
  render: args => <ResizableWrapper {...args}>
      <div style={{
      padding: "20px"
    }}>
        <h3 style={{
        marginTop: 0,
        color: "#2c3e50"
      }}>User Profile Form</h3>
        <form style={{
        display: "flex",
        flexDirection: "column",
        gap: "12px"
      }}>
          <label style={{
          display: "flex",
          flexDirection: "column",
          gap: "4px"
        }}>
            <span style={{
            fontWeight: "bold",
            color: "#495057"
          }}>Name:</span>
            <input type="text" placeholder="Enter your name" style={{
            padding: "8px 12px",
            border: "1px solid #ced4da",
            borderRadius: "4px",
            fontSize: "14px"
          }} />
          </label>
          <label style={{
          display: "flex",
          flexDirection: "column",
          gap: "4px"
        }}>
            <span style={{
            fontWeight: "bold",
            color: "#495057"
          }}>Email:</span>
            <input type="email" placeholder="Enter your email" style={{
            padding: "8px 12px",
            border: "1px solid #ced4da",
            borderRadius: "4px",
            fontSize: "14px"
          }} />
          </label>
          <label style={{
          display: "flex",
          flexDirection: "column",
          gap: "4px"
        }}>
            <span style={{
            fontWeight: "bold",
            color: "#495057"
          }}>Bio:</span>
            <textarea placeholder="Tell us about yourself" rows={3} style={{
            padding: "8px 12px",
            border: "1px solid #ced4da",
            borderRadius: "4px",
            fontSize: "14px",
            resize: "vertical"
          }} />
          </label>
          <button type="submit" style={{
          padding: "10px 16px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          fontSize: "14px",
          fontWeight: "bold"
        }}>
            Save Profile
          </button>
        </form>
      </div>
    </ResizableWrapper>,
  parameters: {
    docs: {
      description: {
        story: "The ResizableWrapper works seamlessly with complex content including forms, inputs, and interactive elements."
      }
    }
  }
}`,...(le=(se=x.parameters)==null?void 0:se.docs)==null?void 0:le.source},description:{story:`Example with rich content including forms and interactive elements.
Shows real-world usage with complex content.`,...(pe=(de=x.parameters)==null?void 0:de.docs)==null?void 0:pe.description}}};var ce,me,he,ue,ge;S.parameters={...S.parameters,docs:{...(ce=S.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    minSize: 200,
    maxSize: 500,
    initialSize: 300,
    borderWidth: "4px",
    borderColor: "#6f42c1",
    activeBorderColor: "#5a2d91",
    resizeSide: "right" as const
  },
  render: args => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "20px"
  }}>
      <ResizableWrapper {...args} resizeSide="left">
        <SampleContent title="Left Side Handle" content="Resize handle on the left side. Drag from the left edge to resize." />
      </ResizableWrapper>

      <ResizableWrapper {...args} resizeSide="top">
        <SampleContent title="Top Side Handle" content="Resize handle on the top side. Drag from the top edge to resize." />
      </ResizableWrapper>

      <ResizableWrapper {...args} resizeSide="bottom">
        <SampleContent title="Bottom Side Handle" content="Resize handle on the bottom side. Drag from the bottom edge to resize." />
      </ResizableWrapper>

      <ResizableWrapper {...args} resizeSide="right">
        <SampleContent title="Right Side Handle" content="Resize handle on the right side (default). Drag from the right edge to resize." />
      </ResizableWrapper>
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Shows the ResizableWrapper with resize handles on all four sides."
      }
    }
  }
}`,...(he=(me=S.parameters)==null?void 0:me.docs)==null?void 0:he.source},description:{story:`Example showing resize handle on different sides.
Demonstrates how the resize handle can appear on any side.`,...(ge=(ue=S.parameters)==null?void 0:ue.docs)==null?void 0:ge.description}}};var fe,be,ze,xe,Se;y.parameters={...y.parameters,docs:{...(fe=y.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  args: {
    minSize: 150,
    maxSize: 400,
    initialSize: 250,
    fixedSize: 400,
    // Fixed width when resizing height
    borderWidth: "4px",
    borderColor: "#fd7e14",
    activeBorderColor: "#e55100",
    resizeSide: "bottom" as const
  },
  render: args => <div style={{
    display: "flex",
    gap: "20px"
  }}>
      <ResizableWrapper {...args} resizeSide="top">
        <SampleContent title="Top Handle" content="This container can be resized by dragging the top edge. Perfect for panels that need to grow upward." />
      </ResizableWrapper>

      <ResizableWrapper {...args} resizeSide="bottom">
        <SampleContent title="Bottom Handle" content="This container can be resized by dragging the bottom edge. Ideal for expandable content areas." />
      </ResizableWrapper>
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Showcases vertical resizing with top and bottom handles, useful for height-adjustable panels."
      }
    }
  }
}`,...(ze=(be=y.parameters)==null?void 0:be.docs)==null?void 0:ze.source},description:{story:`Demonstrates vertical resizing capabilities with top and bottom handles.
Shows how the component adapts for height-based resizing.`,...(Se=(xe=y.parameters)==null?void 0:xe.docs)==null?void 0:Se.description}}};const Be=["Default","Sidebar","Dashboard","CustomStyled","MultipleComponents","WithRichContent","DifferentSides","VerticalResizing"];export{b as CustomStyled,f as Dashboard,u as Default,S as DifferentSides,z as MultipleComponents,g as Sidebar,y as VerticalResizing,x as WithRichContent,Be as __namedExportsOrder,Te as default};

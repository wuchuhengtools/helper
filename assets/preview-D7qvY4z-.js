import{a8 as ue,R as pe,m as fe,s as de,S as ce,q as ge,c as he,F as be,k as me,e as ye,f as ve,i as we,Z as xe,L as Se,T as ke,I as Ce,B as Fe,h as Pe,j as Te,P as Ie,V as Be,l as je,z as _e,J as Oe,o as Re,x as Me,O as He,N as ze,$ as Ee,n as $e,p as qe,r as De,t as Ae,u as Le,w as Ne,y as Ge,E as Ue,W as Ye,K as Ve,Q as Ze,U as We,a as Xe,X as Je,G as Ke,Y as Qe,a0 as et,a1 as tt,a2 as at,a3 as rt,a4 as ot,a5 as nt,a6 as st,a7 as it}from"./index-D9p-HzGO.js";const At=Object.freeze(Object.defineProperty({__proto__:null,A:pe,get ActionBar(){return fe},Bar:de,Blockquote:ce,Button:ge,Code:he,DL:be,Div:me,EmptyTabContent:ye,ErrorFormatter:ve,FlexBar:we,Form:xe,H1:Se,H2:ke,H3:Ce,H4:Fe,H5:Pe,H6:Te,HR:Ie,IconButton:Be,Img:je,LI:_e,Link:Oe,ListItem:Re,Loader:Me,OL:He,P:ze,Pre:Ee,ResetWrapper:$e,get ScrollArea(){return qe},Separator:De,Span:Ae,SyntaxHighlighter:Le,TT:Ne,TabBar:Ge,TabButton:Ue,Table:Ye,Tabs:Ve,TabsState:Ze,TooltipLinkList:We,TooltipNote:Xe,UL:Je,WithTooltip:Ke,WithTooltipPure:Qe,Zoom:et,codeCommon:tt,components:at,createCopyToClipboardFunction:rt,getStoryHref:ot,icons:nt,nameSpaceClassNames:st,withReset:it},Symbol.toStringTag,{value:"Module"}));var lt=Object.defineProperty,o=(e,t)=>lt(e,"name",{value:t,configurable:!0});function m(){return m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)({}).hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},m.apply(null,arguments)}o(m,"_extends");function Y(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}o(Y,"_assertThisInitialized");function y(e,t){return y=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(a,r){return a.__proto__=r,a},y(e,t)}o(y,"_setPrototypeOf");function V(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,y(e,t)}o(V,"_inheritsLoose");function F(e){return F=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},F(e)}o(F,"_getPrototypeOf");function Z(e){try{return Function.toString.call(e).indexOf("[native code]")!==-1}catch{return typeof e=="function"}}o(Z,"_isNativeFunction");function $(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return($=o(function(){return!!e},"_isNativeReflectConstruct"))()}o($,"_isNativeReflectConstruct");function W(e,t,a){if($())return Reflect.construct.apply(null,arguments);var r=[null];r.push.apply(r,t);var n=new(e.bind.apply(e,r));return a&&y(n,a.prototype),n}o(W,"_construct");function P(e){var t=typeof Map=="function"?new Map:void 0;return P=o(function(a){if(a===null||!Z(a))return a;if(typeof a!="function")throw new TypeError("Super expression must either be null or a function");if(t!==void 0){if(t.has(a))return t.get(a);t.set(a,r)}function r(){return W(a,arguments,F(this).constructor)}return o(r,"Wrapper"),r.prototype=Object.create(a.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),y(r,a)},"_wrapNativeSuper"),P(e)}o(P,"_wrapNativeSuper");var ut={1:`Passed invalid arguments to hsl, please pass multiple numbers e.g. hsl(360, 0.75, 0.4) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75 }).

`,2:`Passed invalid arguments to hsla, please pass multiple numbers e.g. hsla(360, 0.75, 0.4, 0.7) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75, alpha: 0.7 }).

`,3:`Passed an incorrect argument to a color function, please pass a string representation of a color.

`,4:`Couldn't generate valid rgb string from %s, it returned %s.

`,5:`Couldn't parse the color string. Please provide the color as a string in hex, rgb, rgba, hsl or hsla notation.

`,6:`Passed invalid arguments to rgb, please pass multiple numbers e.g. rgb(255, 205, 100) or an object e.g. rgb({ red: 255, green: 205, blue: 100 }).

`,7:`Passed invalid arguments to rgba, please pass multiple numbers e.g. rgb(255, 205, 100, 0.75) or an object e.g. rgb({ red: 255, green: 205, blue: 100, alpha: 0.75 }).

`,8:`Passed invalid argument to toColorString, please pass a RgbColor, RgbaColor, HslColor or HslaColor object.

`,9:`Please provide a number of steps to the modularScale helper.

`,10:`Please pass a number or one of the predefined scales to the modularScale helper as the ratio.

`,11:`Invalid value passed as base to modularScale, expected number or em string but got "%s"

`,12:`Expected a string ending in "px" or a number passed as the first argument to %s(), got "%s" instead.

`,13:`Expected a string ending in "px" or a number passed as the second argument to %s(), got "%s" instead.

`,14:`Passed invalid pixel value ("%s") to %s(), please pass a value like "12px" or 12.

`,15:`Passed invalid base value ("%s") to %s(), please pass a value like "12px" or 12.

`,16:`You must provide a template to this method.

`,17:`You passed an unsupported selector state to this method.

`,18:`minScreen and maxScreen must be provided as stringified numbers with the same units.

`,19:`fromSize and toSize must be provided as stringified numbers with the same units.

`,20:`expects either an array of objects or a single object with the properties prop, fromSize, and toSize.

`,21:"expects the objects in the first argument array to have the properties `prop`, `fromSize`, and `toSize`.\n\n",22:"expects the first argument object to have the properties `prop`, `fromSize`, and `toSize`.\n\n",23:`fontFace expects a name of a font-family.

`,24:`fontFace expects either the path to the font file(s) or a name of a local copy.

`,25:`fontFace expects localFonts to be an array.

`,26:`fontFace expects fileFormats to be an array.

`,27:`radialGradient requries at least 2 color-stops to properly render.

`,28:`Please supply a filename to retinaImage() as the first argument.

`,29:`Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.

`,30:"Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n",31:`The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation

`,32:`To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])
To pass a single animation please supply them in simple values, e.g. animation('rotate', '2s')

`,33:`The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation

`,34:`borderRadius expects a radius value as a string or number as the second argument.

`,35:`borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.

`,36:`Property must be a string value.

`,37:`Syntax Error at %s.

`,38:`Formula contains a function that needs parentheses at %s.

`,39:`Formula is missing closing parenthesis at %s.

`,40:`Formula has too many closing parentheses at %s.

`,41:`All values in a formula must have the same unit or be unitless.

`,42:`Please provide a number of steps to the modularScale helper.

`,43:`Please pass a number or one of the predefined scales to the modularScale helper as the ratio.

`,44:`Invalid value passed as base to modularScale, expected number or em/rem string but got %s.

`,45:`Passed invalid argument to hslToColorString, please pass a HslColor or HslaColor object.

`,46:`Passed invalid argument to rgbToColorString, please pass a RgbColor or RgbaColor object.

`,47:`minScreen and maxScreen must be provided as stringified numbers with the same units.

`,48:`fromSize and toSize must be provided as stringified numbers with the same units.

`,49:`Expects either an array of objects or a single object with the properties prop, fromSize, and toSize.

`,50:`Expects the objects in the first argument array to have the properties prop, fromSize, and toSize.

`,51:`Expects the first argument object to have the properties prop, fromSize, and toSize.

`,52:`fontFace expects either the path to the font file(s) or a name of a local copy.

`,53:`fontFace expects localFonts to be an array.

`,54:`fontFace expects fileFormats to be an array.

`,55:`fontFace expects a name of a font-family.

`,56:`linearGradient requries at least 2 color-stops to properly render.

`,57:`radialGradient requries at least 2 color-stops to properly render.

`,58:`Please supply a filename to retinaImage() as the first argument.

`,59:`Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.

`,60:"Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n",61:`Property must be a string value.

`,62:`borderRadius expects a radius value as a string or number as the second argument.

`,63:`borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.

`,64:`The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation.

`,65:`To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])\\nTo pass a single animation please supply them in simple values, e.g. animation('rotate', '2s').

`,66:`The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation.

`,67:`You must provide a template to this method.

`,68:`You passed an unsupported selector state to this method.

`,69:`Expected a string ending in "px" or a number passed as the first argument to %s(), got %s instead.

`,70:`Expected a string ending in "px" or a number passed as the second argument to %s(), got %s instead.

`,71:`Passed invalid pixel value %s to %s(), please pass a value like "12px" or 12.

`,72:`Passed invalid base value %s to %s(), please pass a value like "12px" or 12.

`,73:`Please provide a valid CSS variable.

`,74:`CSS variable not found and no default was provided.

`,75:`important requires a valid style object, got a %s instead.

`,76:`fromSize and toSize must be provided as stringified numbers with the same units as minScreen and maxScreen.

`,77:`remToPx expects a value in "rem" but you provided it in "%s".

`,78:`base must be set in "px" or "%" but you set it in "%s".
`};function X(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];var r=t[0],n=[],s;for(s=1;s<t.length;s+=1)n.push(t[s]);return n.forEach(function(i){r=r.replace(/%[a-z]/,i)}),r}o(X,"format");var d=function(e){V(t,e);function t(a){for(var r,n=arguments.length,s=new Array(n>1?n-1:0),i=1;i<n;i++)s[i-1]=arguments[i];return r=e.call(this,X.apply(void 0,[ut[a]].concat(s)))||this,Y(r)}return o(t,"PolishedError"),t}(P(Error));function k(e){return Math.round(e*255)}o(k,"colorToInt");function J(e,t,a){return k(e)+","+k(t)+","+k(a)}o(J,"convertToInt");function v(e,t,a,r){if(r===void 0&&(r=J),t===0)return r(a,a,a);var n=(e%360+360)%360/60,s=(1-Math.abs(2*a-1))*t,i=s*(1-Math.abs(n%2-1)),u=0,p=0,f=0;n>=0&&n<1?(u=s,p=i):n>=1&&n<2?(u=i,p=s):n>=2&&n<3?(p=s,f=i):n>=3&&n<4?(p=i,f=s):n>=4&&n<5?(u=i,f=s):n>=5&&n<6&&(u=s,f=i);var h=a-s/2,b=u+h,c=p+h,O=f+h;return r(b,c,O)}o(v,"hslToRgb");var N={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"00ffff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"0000ff",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"00ffff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"ff00ff",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"639",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"};function K(e){if(typeof e!="string")return e;var t=e.toLowerCase();return N[t]?"#"+N[t]:e}o(K,"nameToHex");var pt=/^#[a-fA-F0-9]{6}$/,ft=/^#[a-fA-F0-9]{8}$/,dt=/^#[a-fA-F0-9]{3}$/,ct=/^#[a-fA-F0-9]{4}$/,R=/^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i,gt=/^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i,ht=/^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i,bt=/^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;function B(e){if(typeof e!="string")throw new d(3);var t=K(e);if(t.match(pt))return{red:parseInt(""+t[1]+t[2],16),green:parseInt(""+t[3]+t[4],16),blue:parseInt(""+t[5]+t[6],16)};if(t.match(ft)){var a=parseFloat((parseInt(""+t[7]+t[8],16)/255).toFixed(2));return{red:parseInt(""+t[1]+t[2],16),green:parseInt(""+t[3]+t[4],16),blue:parseInt(""+t[5]+t[6],16),alpha:a}}if(t.match(dt))return{red:parseInt(""+t[1]+t[1],16),green:parseInt(""+t[2]+t[2],16),blue:parseInt(""+t[3]+t[3],16)};if(t.match(ct)){var r=parseFloat((parseInt(""+t[4]+t[4],16)/255).toFixed(2));return{red:parseInt(""+t[1]+t[1],16),green:parseInt(""+t[2]+t[2],16),blue:parseInt(""+t[3]+t[3],16),alpha:r}}var n=R.exec(t);if(n)return{red:parseInt(""+n[1],10),green:parseInt(""+n[2],10),blue:parseInt(""+n[3],10)};var s=gt.exec(t.substring(0,50));if(s)return{red:parseInt(""+s[1],10),green:parseInt(""+s[2],10),blue:parseInt(""+s[3],10),alpha:parseFloat(""+s[4])>1?parseFloat(""+s[4])/100:parseFloat(""+s[4])};var i=ht.exec(t);if(i){var u=parseInt(""+i[1],10),p=parseInt(""+i[2],10)/100,f=parseInt(""+i[3],10)/100,h="rgb("+v(u,p,f)+")",b=R.exec(h);if(!b)throw new d(4,t,h);return{red:parseInt(""+b[1],10),green:parseInt(""+b[2],10),blue:parseInt(""+b[3],10)}}var c=bt.exec(t.substring(0,50));if(c){var O=parseInt(""+c[1],10),ie=parseInt(""+c[2],10)/100,le=parseInt(""+c[3],10)/100,L="rgb("+v(O,ie,le)+")",S=R.exec(L);if(!S)throw new d(4,t,L);return{red:parseInt(""+S[1],10),green:parseInt(""+S[2],10),blue:parseInt(""+S[3],10),alpha:parseFloat(""+c[4])>1?parseFloat(""+c[4])/100:parseFloat(""+c[4])}}throw new d(5)}o(B,"parseToRgb");function Q(e){var t=e.red/255,a=e.green/255,r=e.blue/255,n=Math.max(t,a,r),s=Math.min(t,a,r),i=(n+s)/2;if(n===s)return e.alpha!==void 0?{hue:0,saturation:0,lightness:i,alpha:e.alpha}:{hue:0,saturation:0,lightness:i};var u,p=n-s,f=i>.5?p/(2-n-s):p/(n+s);switch(n){case t:u=(a-r)/p+(a<r?6:0);break;case a:u=(r-t)/p+2;break;default:u=(t-a)/p+4;break}return u*=60,e.alpha!==void 0?{hue:u,saturation:f,lightness:i,alpha:e.alpha}:{hue:u,saturation:f,lightness:i}}o(Q,"rgbToHsl");function q(e){return Q(B(e))}o(q,"parseToHsl");var mt=o(function(e){return e.length===7&&e[1]===e[2]&&e[3]===e[4]&&e[5]===e[6]?"#"+e[1]+e[3]+e[5]:e},"reduceHexValue"),E=mt;function g(e){var t=e.toString(16);return t.length===1?"0"+t:t}o(g,"numberToHex");function C(e){return g(Math.round(e*255))}o(C,"colorToHex");function ee(e,t,a){return E("#"+C(e)+C(t)+C(a))}o(ee,"convertToHex");function w(e,t,a){return v(e,t,a,ee)}o(w,"hslToHex");function te(e,t,a){if(typeof e=="number"&&typeof t=="number"&&typeof a=="number")return w(e,t,a);if(typeof e=="object"&&t===void 0&&a===void 0)return w(e.hue,e.saturation,e.lightness);throw new d(1)}o(te,"hsl");function ae(e,t,a,r){if(typeof e=="number"&&typeof t=="number"&&typeof a=="number"&&typeof r=="number")return r>=1?w(e,t,a):"rgba("+v(e,t,a)+","+r+")";if(typeof e=="object"&&t===void 0&&a===void 0&&r===void 0)return e.alpha>=1?w(e.hue,e.saturation,e.lightness):"rgba("+v(e.hue,e.saturation,e.lightness)+","+e.alpha+")";throw new d(2)}o(ae,"hsla");function T(e,t,a){if(typeof e=="number"&&typeof t=="number"&&typeof a=="number")return E("#"+g(e)+g(t)+g(a));if(typeof e=="object"&&t===void 0&&a===void 0)return E("#"+g(e.red)+g(e.green)+g(e.blue));throw new d(6)}o(T,"rgb");function x(e,t,a,r){if(typeof e=="string"&&typeof t=="number"){var n=B(e);return"rgba("+n.red+","+n.green+","+n.blue+","+t+")"}else{if(typeof e=="number"&&typeof t=="number"&&typeof a=="number"&&typeof r=="number")return r>=1?T(e,t,a):"rgba("+e+","+t+","+a+","+r+")";if(typeof e=="object"&&t===void 0&&a===void 0&&r===void 0)return e.alpha>=1?T(e.red,e.green,e.blue):"rgba("+e.red+","+e.green+","+e.blue+","+e.alpha+")"}throw new d(7)}o(x,"rgba");var yt=o(function(e){return typeof e.red=="number"&&typeof e.green=="number"&&typeof e.blue=="number"&&(typeof e.alpha!="number"||typeof e.alpha>"u")},"isRgb"),vt=o(function(e){return typeof e.red=="number"&&typeof e.green=="number"&&typeof e.blue=="number"&&typeof e.alpha=="number"},"isRgba"),wt=o(function(e){return typeof e.hue=="number"&&typeof e.saturation=="number"&&typeof e.lightness=="number"&&(typeof e.alpha!="number"||typeof e.alpha>"u")},"isHsl"),xt=o(function(e){return typeof e.hue=="number"&&typeof e.saturation=="number"&&typeof e.lightness=="number"&&typeof e.alpha=="number"},"isHsla");function D(e){if(typeof e!="object")throw new d(8);if(vt(e))return x(e);if(yt(e))return T(e);if(xt(e))return ae(e);if(wt(e))return te(e);throw new d(8)}o(D,"toColorString");function A(e,t,a){return o(function(){var r=a.concat(Array.prototype.slice.call(arguments));return r.length>=t?e.apply(this,r):A(e,t,r)},"fn")}o(A,"curried");function j(e){return A(e,e.length,[])}o(j,"curry");function _(e,t,a){return Math.max(e,Math.min(t,a))}o(_,"guard");function re(e,t){if(t==="transparent")return t;var a=q(t);return D(m({},a,{lightness:_(0,1,a.lightness-parseFloat(e))}))}o(re,"darken");var St=j(re),kt=St;function oe(e,t){if(t==="transparent")return t;var a=q(t);return D(m({},a,{lightness:_(0,1,a.lightness+parseFloat(e))}))}o(oe,"lighten");var Ct=j(oe),Ft=Ct;function ne(e,t){if(t==="transparent")return t;var a=B(t),r=typeof a.alpha=="number"?a.alpha:1,n=m({},a,{alpha:_(0,1,+(r*100-parseFloat(e)*100).toFixed(2)/100)});return x(n)}o(ne,"transparentize");var Pt=j(ne),Tt=Pt,l={secondary:"#029CFD",lightest:"#FFFFFF",mediumlight:"#ECF4F9",medium:"#D9E8F2",mediumdark:"#73828C",dark:"#5C6870",darkest:"#2E3438",border:"hsla(203, 50%, 30%, 0.15)"},G={app:"#F6F9FC",hoverable:Tt(.9,l.secondary)},I={fonts:{base:['"Nunito Sans"',"-apple-system",'".SFNSText-Regular"','"San Francisco"',"BlinkMacSystemFont",'"Segoe UI"','"Helvetica Neue"',"Helvetica","Arial","sans-serif"].join(", "),mono:["ui-monospace","Menlo","Monaco",'"Roboto Mono"','"Oxygen Mono"','"Ubuntu Monospace"','"Source Code Pro"','"Droid Sans Mono"','"Courier New"',"monospace"].join(", ")}},It={base:"dark",colorPrimary:"#FF4785",colorSecondary:"#029CFD",appBg:"#222425",appContentBg:"#1B1C1D",appPreviewBg:l.lightest,appBorderColor:"rgba(255,255,255,.1)",appBorderRadius:4,fontBase:I.fonts.base,fontCode:I.fonts.mono,textColor:"#C9CDCF",textInverseColor:"#222425",textMutedColor:"#798186",barTextColor:l.mediumdark,barHoverColor:l.secondary,barSelectedColor:l.secondary,barBg:"#292C2E",buttonBg:"#222425",buttonBorder:"rgba(255,255,255,.1)",booleanBg:"#222425",booleanSelectedBg:"#2E3438",inputBg:"#1B1C1D",inputBorder:"rgba(255,255,255,.1)",inputTextColor:l.lightest,inputBorderRadius:4},Bt=It,jt={base:"light",colorPrimary:"#FF4785",colorSecondary:"#029CFD",appBg:G.app,appContentBg:l.lightest,appPreviewBg:l.lightest,appBorderColor:l.border,appBorderRadius:4,fontBase:I.fonts.base,fontCode:I.fonts.mono,textColor:l.darkest,textInverseColor:l.lightest,textMutedColor:l.dark,barTextColor:l.mediumdark,barHoverColor:l.secondary,barSelectedColor:l.secondary,barBg:l.lightest,buttonBg:G.app,buttonBorder:l.medium,booleanBg:l.mediumlight,booleanSelectedBg:l.lightest,inputBg:l.lightest,inputBorder:l.border,inputTextColor:l.darkest,inputBorderRadius:4},U=jt,_t=(()=>{let e;return typeof window<"u"?e=window:typeof globalThis<"u"?e=globalThis:typeof global<"u"?e=global:typeof self<"u"?e=self:e={},e})();const{logger:Ot}=__STORYBOOK_MODULE_CLIENT_LOGGER__;var{window:M}=_t,Rt=o(e=>typeof e!="string"?(Ot.warn(`Color passed to theme object should be a string. Instead ${e}(${typeof e}) was passed.`),!1):!0,"isColorString"),Mt=o(e=>!/(gradient|var|calc)/.test(e),"isValidColorForPolished"),Ht=o((e,t)=>e==="darken"?x(`${kt(1,t)}`,.95):e==="lighten"?x(`${Ft(1,t)}`,.95):t,"applyPolished"),se=o(e=>t=>{if(!Rt(t)||!Mt(t))return t;try{return Ht(e,t)}catch{return t}},"colorFactory");se("lighten");se("darken");var zt=o(()=>!M||!M.matchMedia?"light":M.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light","getPreferredColorScheme"),H={light:U,dark:Bt,normal:U},z=zt(),Et=o((e={base:z},t)=>{let a={...H[z],...H[e.base]||{},...e,base:H[e.base]?e.base:z};return{...t,...a,barSelectedColor:e.barSelectedColor||a.colorSecondary}},"create");const $t=Et({base:"light",brandTitle:"@wuchuheng/helper",brandUrl:"https://github.com/wuchuhengtools/helper",brandImage:void 0,brandTarget:"_self"}),qt={parameters:{actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}},docs:{toc:!0,theme:$t,container:ue},backgrounds:{default:"light",values:[{name:"light",value:"#ffffff"},{name:"dark",value:"#333333"}]},viewport:{viewports:{mobile:{name:"Mobile",styles:{width:"375px",height:"667px"}},tablet:{name:"Tablet",styles:{width:"768px",height:"1024px"}},desktop:{name:"Desktop",styles:{width:"1024px",height:"768px"}}}}}},Lt=Object.freeze(Object.defineProperty({__proto__:null,default:qt},Symbol.toStringTag,{value:"Module"}));export{At as i,Lt as p};

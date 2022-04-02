"use strict";(self.webpackChunkkubegems_docs=self.webpackChunkkubegems_docs||[]).push([[9997],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=l(r),m=a,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(f,s(s({ref:t},c),{},{components:r})):n.createElement(f,s({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},85203:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return u}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),s=["components"],i={title:"\u5b58\u50a8\u5377\u5feb\u7167",sidebar_position:2},p=void 0,l={unversionedId:"tasks/appservice/storages/snapshot",id:"tasks/appservice/storages/snapshot",title:"\u5b58\u50a8\u5377\u5feb\u7167",description:"\u5feb\u7167",source:"@site/docs/tasks/appservice/storages/snapshot.md",sourceDirName:"tasks/appservice/storages",slug:"/tasks/appservice/storages/snapshot",permalink:"/docs/tasks/appservice/storages/snapshot",editUrl:"https://github.com/kubegems/kubegems.io/edit/main/docs/tasks/appservice/storages/snapshot.md",tags:[],version:"current",lastUpdatedBy:"LinkMaq",lastUpdatedAt:1648805655,formattedLastUpdatedAt:"2022/4/1",sidebarPosition:2,frontMatter:{title:"\u5b58\u50a8\u5377\u5feb\u7167",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\u5b58\u50a8\u5377",permalink:"/docs/tasks/appservice/storages/psersistesvolume"},next:{title:"\u6982\u8981",permalink:"/docs/tasks/observability/user"}},c={},u=[{value:"\u5feb\u7167",id:"\u5feb\u7167",level:2},{value:"\u5feb\u7167\u6062\u590d",id:"\u5feb\u7167\u6062\u590d",level:2}],d={toc:u};function m(e){var t=e.components,i=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u5feb\u7167"},"\u5feb\u7167"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"\u5b58\u50a8\u5377\u5feb\u7167")," \u662f\u5b58\u50a8\u5377\u5728\u67d0\u4e00\u65f6\u523b\u7684\u5b8c\u6574\u5907\u4efd\uff0c\u60a8\u53ef\u4ee5\u901a\u8fc7\u5b58\u50a8\u5377\u5feb\u7167\u6062\u590d\u60a8\u7684\u5b58\u50a8\u5377\u3002"),(0,o.kt)("p",null,"\u901a\u5e38\u5bf9\u4e8e\u91cd\u8981\u6570\u636e\uff0c\u90fd\u4f1a\u9009\u62e9\u5b9a\u671f\u5bf9\u6570\u636e\u8fdb\u884c\u5907\u4efd\uff1b",(0,o.kt)("inlineCode",{parentName:"p"},"CSI"),"\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"Capacity"),"\u63d0\u4f9b\u4e86\u662f\u5426\u652f\u6301\u5377\u5feb\u7167; kubegems \u91c7\u7528\u4e86\u5916\u90e8\u5feb\u7167\u7684\u65b9\u6848;"),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"snapshot-list",src:r(35478).Z,width:"1725",height:"697"})),(0,o.kt)("h2",{id:"\u5feb\u7167\u6062\u590d"},"\u5feb\u7167\u6062\u590d"),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"snapshot-recovery",src:r(17458).Z,width:"621",height:"402"})),(0,o.kt)("p",null,"\u60a8\u53ef\u4ee5\u4ece\u73b0\u6709\u7684\u5feb\u7167\u521b\u5efa\u4e00\u4e2a\u65b0\u7684 ",(0,o.kt)("em",{parentName:"p"},"\u5b58\u50a8\u5377")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5"),(0,o.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"\u5feb\u7167"),(0,o.kt)("td",{parentName:"tr",align:null},"\u5feb\u7167\u540d\u79f0")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"\u5b58\u50a8\u5377\u540d\u79f0"),(0,o.kt)("td",{parentName:"tr",align:null},"\u6062\u590d\u5230\u7684\u5b58\u50a8\u5377\u540d\u79f0")))))}m.isMDXComponent=!0},35478:function(e,t,r){t.Z=r.p+"assets/images/snapshot-list-6231a3f12053e7016d981bd85b64c21c.png"},17458:function(e,t,r){t.Z=r.p+"assets/images/snapshot-recovery-059c3244c09cdfb3f2c8cae8baabc71f.png"}}]);
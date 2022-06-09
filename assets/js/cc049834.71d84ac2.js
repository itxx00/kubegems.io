"use strict";(self.webpackChunkkubegems_docs=self.webpackChunkkubegems_docs||[]).push([[5841],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return g}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),g=i,f=d["".concat(p,".").concat(g)]||d[g]||u[g]||a;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},48071:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return g},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u}});var r=n(87462),i=n(63366),a=(n(67294),n(3905)),o=["components"],l={title:"\u65e5\u5fd7\u6d4f\u89c8\u5668",hide_title:!0,sidebar_position:1},p=void 0,s={unversionedId:"tasks/observability/logging/querying-log",id:"tasks/observability/logging/querying-log",title:"\u65e5\u5fd7\u6d4f\u89c8\u5668",description:"\u65e5\u5fd7\u6d4f\u89c8\u5668",source:"@site/docs/tasks/observability/logging/querying-log.md",sourceDirName:"tasks/observability/logging",slug:"/tasks/observability/logging/querying-log",permalink:"/docs/tasks/observability/logging/querying-log",editUrl:"https://github.com/kubegems/kubegems.io/edit/main/docs/tasks/observability/logging/querying-log.md",tags:[],version:"current",lastUpdatedBy:"LinkMaq",lastUpdatedAt:1648805655,formattedLastUpdatedAt:"2022/4/1",sidebarPosition:1,frontMatter:{title:"\u65e5\u5fd7\u6d4f\u89c8\u5668",hide_title:!0,sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\u65e5\u5fd7\u4e2d\u5fc3",permalink:"/docs/category/\u65e5\u5fd7\u4e2d\u5fc3"},next:{title:"\u9ad8\u7ea7\u8bed\u6cd5",permalink:"/docs/tasks/observability/logging/advanced-syntax"}},c={},u=[{value:"\u65e5\u5fd7\u6d4f\u89c8\u5668",id:"\u65e5\u5fd7\u6d4f\u89c8\u5668",level:2}],d={toc:u};function g(e){var t=e.components,l=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u65e5\u5fd7\u6d4f\u89c8\u5668"},"\u65e5\u5fd7\u6d4f\u89c8\u5668"),(0,a.kt)("p",null,"  \u70b9\u51fb",(0,a.kt)("inlineCode",{parentName:"p"},"\u53ef\u89c2\u6d4b\u6027"),"->",(0,a.kt)("inlineCode",{parentName:"p"},"\u65e5\u5fd7"),"->",(0,a.kt)("inlineCode",{parentName:"p"},"\u65e5\u5fd7\u67e5\u770b\u5668"),", \u8fdb\u5165\u65e5\u5fd7\u67e5\u8be2\u754c\u9762,\n\u9009\u62e9\u7279\u5b9a\u96c6\u7fa4\u6bd4\u5982",(0,a.kt)("inlineCode",{parentName:"p"},"cloud-sit-1"),",\u8fd9\u65f6\u53ef\u4ee5\u70b9\u51fb",(0,a.kt)("inlineCode",{parentName:"p"},"\u67e5\u8be2"),"\u5c55\u5f00\u6807\u7b7e\u7a97\u53e3  "),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"pic",src:n(59015).Z,width:"1920",height:"1080"})),(0,a.kt)("p",null,"  \u53ef\u4ee5\u770b\u5230\u6807\u7b7e\u53ef\u4ee5\u57fa\u4e8e\u591a\u4e2a\u7ef4\u5ea6\u8fdb\u884c\u67e5\u8be2,\u6bd4\u5982app\u540d\u79f0,\u540d\u5b57\u7a7a\u95f4,\u5bb9\u5668\u540d\u79f0,pod\u540d\u79f0\u7b49\u7b49",(0,a.kt)("br",{parentName:"p"}),"\n","\u5047\u5982\u6211\u73b0\u5728\u60f3\u67e5\u8be2 ",(0,a.kt)("inlineCode",{parentName:"p"},"harix-dedicated-server")," \u8fd9\u4e2a\u5e94\u7528\u7684\u65e5\u5fd7, \u5728\u6807\u7b7e\u4e2d\u9009\u62e9",(0,a.kt)("inlineCode",{parentName:"p"},"app"),",",(0,a.kt)("br",{parentName:"p"}),"\n","\u7136\u540e\u8f93\u5165\u6846\u4e2d\u8f93\u5165",(0,a.kt)("inlineCode",{parentName:"p"},"harix-dedi"),"\u524d\u7f00,\u4f1a\u81ea\u52a8\u5339\u914d\u51fa\u5b8c\u6574\u7684\u540d\u79f0,\u8fd9\u65f6\u5728\u53f3\u4e0b\u89d2\u70b9\u51fb",(0,a.kt)("inlineCode",{parentName:"p"},"\u786e\u8ba4"),"  "),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"pic",src:n(1950).Z,width:"1920",height:"1080"})),(0,a.kt)("p",null,"  \u7136\u540e\u70b9\u51fb",(0,a.kt)("inlineCode",{parentName:"p"},"\u8fd0\u884c"),"\u5f97\u5230\u6700\u8fd130\u5206\u949f\u7684\u65e5\u5fd7\u8bb0\u5f55,\u53ef\u4ee5\u770b\u51fa,\u7ed3\u679c\u5305\u542b\u4e86\u5e94\u7528\u6240\u6709\u7684pod\u65e5\u5fd7  "),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"pic",src:n(24698).Z,width:"1920",height:"1080"})))}g.isMDXComponent=!0},59015:function(e,t,n){t.Z=n.p+"assets/images/log-query-brower-acbecdea5a3c5a7c9dab23b1300f42ce.png"},1950:function(e,t,n){t.Z=n.p+"assets/images/log-query-label-90f6c50dad7d2ff4945b8938165f1daa.png"},24698:function(e,t,n){t.Z=n.p+"assets/images/log-query-result-d11920cd9a3ba099d6ee887e27b77a4b.png"}}]);
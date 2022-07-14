"use strict";(self.webpackChunkkubegems_docs=self.webpackChunkkubegems_docs||[]).push([[9388],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(r),m=o,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||a;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},82395:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),i=["components"],s={title:"Opentelemetry\u63a5\u5165",hide_title:!0,sidebar_position:1},c=void 0,l={unversionedId:"tasks/observability/accessor/optl",id:"tasks/observability/accessor/optl",title:"Opentelemetry\u63a5\u5165",description:"Opentelemetry\u63a5\u5165",source:"@site/docs/tasks/observability/accessor/optl.md",sourceDirName:"tasks/observability/accessor",slug:"/tasks/observability/accessor/optl",permalink:"/docs/tasks/observability/accessor/optl",editUrl:"https://github.com/kubegems/kubegems.io/edit/main/docs/tasks/observability/accessor/optl.md",tags:[],version:"current",lastUpdatedBy:"sunlintong",lastUpdatedAt:1657781194,formattedLastUpdatedAt:"2022/7/14",sidebarPosition:1,frontMatter:{title:"Opentelemetry\u63a5\u5165",hide_title:!0,sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\u63a5\u5165\u4e2d\u5fc3",permalink:"/docs/category/\u63a5\u5165\u4e2d\u5fc3"},next:{title:"\u4e2d\u95f4\u4ef6\u63a5\u5165",permalink:"/docs/tasks/observability/accessor/middlewire"}},p={},u=[{value:"Opentelemetry\u63a5\u5165",id:"opentelemetry\u63a5\u5165",level:2},{value:"\u6309\u7167\u63a5\u5165\u6587\u6863\u63d0\u793a\u63a5\u5165",id:"\u6309\u7167\u63a5\u5165\u6587\u6863\u63d0\u793a\u63a5\u5165",level:3}],d={toc:u};function m(e){var t=e.components,s=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"opentelemetry\u63a5\u5165"},"Opentelemetry\u63a5\u5165"),(0,a.kt)("h3",{id:"\u6309\u7167\u63a5\u5165\u6587\u6863\u63d0\u793a\u63a5\u5165"},"\u6309\u7167\u63a5\u5165\u6587\u6863\u63d0\u793a\u63a5\u5165"),(0,a.kt)("p",null,"\u6211\u4eec\u9488\u5bf9\u4e0d\u540c\u7c7b\u578b\u7684\u5e94\u7528(\u5305\u62ec\u4f46\u4e0d\u9650\u4e8eC++, Go, java, nodejs, php, python, erlang, javascript\u7b49)\u63d0\u4f9b\u4e86\u8be6\u7ec6\u7684\u901a\u8fc7Opentelemetry\u63a5\u5165\u7684\u6587\u6863\u3002"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u70b9\u51fb\u5de6\u4e0a\u89d2\uff0c\u9009\u62e9",(0,a.kt)("strong",{parentName:"li"},"\u53ef\u89c2\u6d4b\u6027")),(0,a.kt)("li",{parentName:"ol"},"\u5728\u53ef\u89c2\u6d4b\u6027\u680f\u76ee\uff0c\u9009\u62e9",(0,a.kt)("strong",{parentName:"li"},"\u63a5\u5165\u4e2d\u5fc3-\u63a5\u5165\u4e2d\u5fc3")),(0,a.kt)("li",{parentName:"ol"},"\u9009\u62e9\u5e76\u70b9\u51fb\u5bf9\u5e94\u7684\u5e94\u7528\n",(0,a.kt)("img",{src:r(13339).Z,width:"1920",height:"961"})),(0,a.kt)("li",{parentName:"ol"},"\u63a5\u5165trace\n",(0,a.kt)("img",{src:r(75407).Z,width:"946",height:"890"})),(0,a.kt)("li",{parentName:"ol"},"\u63a5\u5165metrics\n",(0,a.kt)("img",{src:r(19005).Z,width:"958",height:"898"}))))}m.isMDXComponent=!0},13339:function(e,t,r){t.Z=r.p+"assets/images/access-2ded2df11fc4a877b1df8eb72c416c34.jpg"},19005:function(e,t,r){t.Z=r.p+"assets/images/metrics-ec04116833b85958df738863c9d2b4a3.jpg"},75407:function(e,t,r){t.Z=r.p+"assets/images/trace-1c2fba5155a54fd92dabdc6bc4a22189.jpg"}}]);
"use strict";(self.webpackChunkkubegems_docs=self.webpackChunkkubegems_docs||[]).push([[5859],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=i,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,a(a({ref:t},l),{},{components:n})):r.createElement(f,a({ref:t},l))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1628:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a=["components"],s={title:"\u7f51\u7edc\u9694\u79bb\u7b56\u7565",hide_title:!0,sidebar_position:2},p=void 0,c={unversionedId:"tasks/appservice/network-isolation",id:"tasks/appservice/network-isolation",title:"\u7f51\u7edc\u9694\u79bb\u7b56\u7565",description:"\u7f51\u7edc\u9694\u79bb\u7b56\u7565",source:"@site/docs/tasks/appservice/network-isolation.md",sourceDirName:"tasks/appservice",slug:"/tasks/appservice/network-isolation",permalink:"/docs/tasks/appservice/network-isolation",editUrl:"https://github.com/kubegems/kubegems.io/edit/main/docs/tasks/appservice/network-isolation.md",tags:[],version:"current",lastUpdatedBy:"LinkMaq",lastUpdatedAt:1648805655,formattedLastUpdatedAt:"2022/4/1",sidebarPosition:2,frontMatter:{title:"\u7f51\u7edc\u9694\u79bb\u7b56\u7565",hide_title:!0,sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\u73af\u5883\u8d44\u6e90",permalink:"/docs/tasks/appservice/resources"},next:{title:"\u5e94\u7528\u7f16\u6392",permalink:"/docs/tasks/appservice/userapplication/orchestration"}},l={},u=[{value:"\u7f51\u7edc\u9694\u79bb\u7b56\u7565",id:"\u7f51\u7edc\u9694\u79bb\u7b56\u7565",level:2}],d={toc:u};function m(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u7f51\u7edc\u9694\u79bb\u7b56\u7565"},"\u7f51\u7edc\u9694\u79bb\u7b56\u7565"),(0,o.kt)("p",null,"kubegems\u5bf9\u4e8e\u5355\u96c6\u7fa4\u63d0\u4f9b\u4e86\u4e09\u4e2a\u5c42\u9762\u7684\u7f51\u7edc\u9694\u79bb\uff0c\u5206\u522b\u662f",(0,o.kt)("inlineCode",{parentName:"p"},"\u79df\u6237\u7ea7"),"\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"\u9879\u76ee\u7ea7"),"\u548c",(0,o.kt)("inlineCode",{parentName:"p"},"\u73af\u5883\u7ea7"),";"),(0,o.kt)("p",null,"\u79df\u6237\u7ea7\u7f51\u7edc\u9694\u79bb\uff0c\u5c06\u4ec5\u4ec5\u5141\u8bb8\u540c\u79df\u6237\u4e0b\u7684\u670d\u52a1\u8bbf\u95ee\uff1b"),(0,o.kt)("p",null,"\u9879\u76ee\u7ea7\u7f51\u7edc\u9694\u79bb\uff0c\u4ec5\u5141\u8bb8\u540c\u79df\u6237\u4e0b\u7684\u540c\u9879\u76ee\u5185\u7684\u670d\u52a1\u76f8\u4e92\u8bbf\u95ee\uff1b"),(0,o.kt)("p",null,"\u73af\u5883\u7ea7\u7f51\u7edc\u9694\u79bb\uff0c\u4ec5\u5141\u8bb8\u540c\u79df\u6237\u4e0b\u7684\u540c\u73af\u5883\u7684\u670d\u52a1\u76f8\u4e92\u8bbf\u95ee;"),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u79df\u6237\u7ea7\u7f51\u7edc\u9694\u79bb\u672a\u5728\u754c\u9762\u5f00\u653e\uff0c\u9879\u76ee\u7ea7\u7f51\u7edc\u5408\u7406\u548c\u79df\u6237\u7ea7\u7f51\u7edc\u9694\u79bb\u5728\u9879\u76ee\u8be6\u60c5\u9875\u9762\u53ef\u4ee5\u64cd\u4f5c(\u5de5\u4f5c\u53f0\uff0c\u5728\u5177\u4f53\u9879\u76ee\u4e0a\u70b9\u8fdb\u5165\u9879\u76ee)\uff0c\u9700\u8981\u81f3\u5c11\u62e5\u6709",(0,o.kt)("inlineCode",{parentName:"p"},"\u9879\u76ee\u7ba1\u7406\u5458"),"\u4ee5\u4e0a\u7684\u89d2\u8272\u624d\u53ef\u4ee5\u64cd\u4f5c;"))))}m.isMDXComponent=!0}}]);
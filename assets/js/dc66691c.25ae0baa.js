"use strict";(self.webpackChunkkubegems_docs=self.webpackChunkkubegems_docs||[]).push([[5386],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,f=d["".concat(p,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},41051:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return c}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],l={title:"\u5e94\u7528\u5546\u57ce",hide_title:!0,sidebar_position:3},p=void 0,s={unversionedId:"tasks/user-operation/userapplication/user-apptore",id:"tasks/user-operation/userapplication/user-apptore",title:"\u5e94\u7528\u5546\u57ce",description:"\u5e94\u7528\u5546\u57ce",source:"@site/docs/tasks/user-operation/userapplication/user-apptore.md",sourceDirName:"tasks/user-operation/userapplication",slug:"/tasks/user-operation/userapplication/user-apptore",permalink:"/docs/tasks/user-operation/userapplication/user-apptore",tags:[],version:"current",lastUpdatedBy:"cnfatal",lastUpdatedAt:1648175784,formattedLastUpdatedAt:"2022/3/25",sidebarPosition:3,frontMatter:{title:"\u5e94\u7528\u5546\u57ce",hide_title:!0,sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"\u9ad8\u7ea7\u90e8\u7f72",permalink:"/docs/tasks/user-operation/userapplication/advance-deploy"},next:{title:"\u955c\u50cf\u4ed3\u5e93",permalink:"/docs/tasks/user-operation/userapplication/image-registry"}},u={},c=[{value:"\u5e94\u7528\u5546\u57ce",id:"\u5e94\u7528\u5546\u57ce",level:2},{value:"\u90e8\u7f72\u5e94\u7528",id:"\u90e8\u7f72\u5e94\u7528",level:3}],d={toc:c};function m(e){var t=e.components,l=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u5e94\u7528\u5546\u57ce"},"\u5e94\u7528\u5546\u57ce"),(0,o.kt)("p",null,"kubegems \u5185\u7f6e\u4e86\u4e00\u4e2a\u5e94\u7528\u5546\u57ce,\u5305\u542b\u4e86\u8bb8\u591a\u5f00\u7bb1\u53ef\u7528\u7684\u8d44\u6e90\u7f16\u6392\uff0c\u5176\u5185\u5bb9\u4e3a helm charts\u3002\u91cc\u9762\u5185\u7f6e\u4e86\u4e00\u90e8\u5206\u5e38\u7528\u7684\u5e94\u7528\uff0c\u4f8b\u5982mysql, redis\u7b49\uff1b"),(0,o.kt)("p",null,"\u5982\u4f55\u8bbe\u7f6e\u5e94\u7528\u5546\u5e97\uff0c\u8bf7\u79fb\u6b65",(0,o.kt)("a",{parentName:"p",href:"/docs/tasks/platform/appstore-manage"},"\u8fd9\u91cc\uff0c\u8bbe\u7f6e\u5e94\u7528\u5546\u5e97")),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"\u5e94\u7528\u5546\u57ce",src:n(12776).Z,width:"2880",height:"1592"})),(0,o.kt)("h3",{id:"\u90e8\u7f72\u5e94\u7528"},"\u90e8\u7f72\u5e94\u7528"),(0,o.kt)("p",null,"\u7528\u6237\u53ef\u4ee5\u5728\u5e94\u7528\u8be6\u60c5\u9875\u70b9\u51fb",(0,o.kt)("strong",{parentName:"p"},"\u90e8\u7f72"),"\u6309\u94ae\uff0c\u8fdb\u5165\u90e8\u7f72\u6d41\u7a0b;"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u586b\u5199\u57fa\u7840\u4fe1\u606f")),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"\u57fa\u7840\u4fe1\u606f",src:n(85831).Z,width:"2880",height:"1594"})),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5"),(0,o.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"\u5e94\u7528\u540d\u5b57"),(0,o.kt)("td",{parentName:"tr",align:null},"\u5e94\u7528\u7684\u552f\u4e00\u540d\u5b57\uff0c\u4f8b\u5982 \u8d2d\u7269\u8f66\u4e1a\u52a1\u4f9d\u8d56\u7684nignx, \u53ef\u4ee5\u547d\u540d\u4e3a cart-nginx")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"\u9879\u76ee"),(0,o.kt)("td",{parentName:"tr",align:null},"\u90e8\u7f72\u5230\u5f53\u524d\u79df\u6237\u4e0b\u7684\u54ea\u4e2a\u9879\u76ee\u4e2d")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"\u73af\u5883"),(0,o.kt)("td",{parentName:"tr",align:null},"\u90e8\u7f72\u5230\u5f53\u524d\u79df\u6237\u4e0b\u7684\u54ea\u4e2a\u73af\u5883\u4e2d")))),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u586b\u5199/\u4fee\u6539 values\u4fe1\u606f")),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"\u57fa\u7840\u4fe1\u606f",src:n(49226).Z,width:"2880",height:"1592"})),(0,o.kt)("p",null,"\u90e8\u5206charts\u5185\u7f6e\u4e86 schema.json, kubegems \u4f1a\u6839\u636e\u8fd9\u4e2a schema.json \u751f\u6210\u8868\u5355\uff0c\u63d0\u4f9b\u66f4\u7b80\u5355\u7684\u586b\u5199values\u65b9\u5f0f\uff1b\u7528\u6237\u4e5f\u53ef\u4ee5\u9009\u62e9\u76f4\u63a5\u7f16\u8f91values\u6587\u4ef6\uff0c\u81ea\u5b9a\u4e49\u9700\u8981\u7684\u5185\u5bb9;"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u8fdb\u884c\u90e8\u7f72")),(0,o.kt)("p",null,"\u586b\u5199\u5b8c\u57fa\u7840\u4fe1\u606f\u548cvalues\u5185\u5bb9\u540e\uff0c\u5c31\u53ef\u4ee5\u70b9\u51fb",(0,o.kt)("inlineCode",{parentName:"p"},"\u90e8\u7f72"),"\u8fdb\u884c\u90e8\u7f72\uff1b \u90e8\u7f72\u5b8c\u6210\u540e\uff0c\u53ef\u4ee5\u5728\u5bf9\u5e94\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"\u73af\u5883"),"\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"\u5e94\u7528\u4e2d\u5fc3")," -> ",(0,o.kt)("inlineCode",{parentName:"p"},"\u5e94\u7528\u5546\u5e97\u5e94\u7528"),"\u770b\u5230\u8fd9\u4e2a\u5e94\u7528\u7684\u76f8\u5173\u4fe1\u606f"))}m.isMDXComponent=!0},12776:function(e,t,n){t.Z=n.p+"assets/images/appstore-0af1291bdc6517996d94268c04f3f206.png"},85831:function(e,t,n){t.Z=n.p+"assets/images/input-info-deb0c2e71a91ff4f1bc8f900a6bbc304.png"},49226:function(e,t,n){t.Z=n.p+"assets/images/values-fb326f54501f2fc7924e333988b61c9b.png"}}]);
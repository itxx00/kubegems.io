"use strict";(self.webpackChunkkubegems_docs=self.webpackChunkkubegems_docs||[]).push([[3452],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,f=m["".concat(c,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85698:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],s={title:"\u81ea\u5b9a\u4e49\u8d44\u6e90",hide_title:!0,sidebar_position:4},c=void 0,u={unversionedId:"tasks/cluster-manage/crds",id:"tasks/cluster-manage/crds",title:"\u81ea\u5b9a\u4e49\u8d44\u6e90",description:"\u81ea\u5b9a\u4e49\u8d44\u6e90",source:"@site/docs/tasks/cluster-manage/crds.md",sourceDirName:"tasks/cluster-manage",slug:"/tasks/cluster-manage/crds",permalink:"/docs/tasks/cluster-manage/crds",tags:[],version:"current",lastUpdatedBy:"leon.chen",lastUpdatedAt:1648718627,formattedLastUpdatedAt:"2022/3/31",sidebarPosition:4,frontMatter:{title:"\u81ea\u5b9a\u4e49\u8d44\u6e90",hide_title:!0,sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"\u96c6\u7fa4\u8282\u70b9\u7ba1\u7406",permalink:"/docs/tasks/cluster-manage/node-manage"},next:{title:"\u5b58\u50a8\u7c7b\u58f0\u660e",permalink:"/docs/tasks/cluster-manage/storageclass"}},l={},p=[{value:"\u81ea\u5b9a\u4e49\u8d44\u6e90",id:"\u81ea\u5b9a\u4e49\u8d44\u6e90",level:2}],m={toc:p};function d(e){var t=e.components,s=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u81ea\u5b9a\u4e49\u8d44\u6e90"},"\u81ea\u5b9a\u4e49\u8d44\u6e90"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"CustomResourceDefinition"),"\u662f\u7528\u6237\u62d3\u5c55k8s api\u7684\u9014\u5f84\uff0ckubegems\u672c\u8eab\u7684\u79df\u6237\u8d44\u6e90\u9694\u79bb\u7b49\u529f\u80fd\u4e5f\u662f\u57fa\u4e8eCustomResourceDefinition"),(0,o.kt)("p",null,"kubegems \u6ca1\u6709\u63d0\u4f9b\u521b\u5efaCustomResourceDefinition\u7684\u9014\u5f84\uff0ckubegems \u63d0\u4f9b\u4e86",(0,o.kt)("inlineCode",{parentName:"p"},"\u6279\u91cf\u5220\u9664CustomResourceDefinition"),"\uff0c\u67e5\u770bCustomResourceDefinition\u5bf9\u5e94\u7684CustomResource\u548c\u521b\u5efaCustomResource\u7684\u9014\u5f84;"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"crd \u5217\u8868\n",(0,o.kt)("img",{loading:"lazy",alt:"crd\u5217\u8868",src:n(93142).Z,width:"2880",height:"1522"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"crd\u5bf9\u5e94cr\u5217\u8868\n",(0,o.kt)("img",{loading:"lazy",alt:"crd\u5217\u8868",src:n(51219).Z,width:"2880",height:"1522"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u521b\u5efacr\n",(0,o.kt)("img",{loading:"lazy",alt:"crd\u5217\u8868",src:n(31919).Z,width:"2880",height:"1518"})))))}d.isMDXComponent=!0},31919:function(e,t,n){t.Z=n.p+"assets/images/tasks-cluster-manage-cr-create-20e84a84bd0b59eeac207fbed10d1086.png"},51219:function(e,t,n){t.Z=n.p+"assets/images/tasks-cluster-manage-cr-list-185c3b3a097dcea9b11f99bd62da5032.png"},93142:function(e,t,n){t.Z=n.p+"assets/images/tasks-cluster-manage-crd-list-980a7e8c1a25fc762383b20590c4585e.png"}}]);
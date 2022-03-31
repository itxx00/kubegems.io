"use strict";(self.webpackChunkkubegems_docs=self.webpackChunkkubegems_docs||[]).push([[4751],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(n),d=a,k=c["".concat(s,".").concat(d)]||c[d]||m[d]||l;return n?r.createElement(k,o(o({ref:t},p),{},{components:n})):r.createElement(k,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},75163:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return m}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),o=["components"],i={title:"\u96c6\u7fa4\u5bfc\u5165",hide_title:!0,sidebar_position:1},s=void 0,u={unversionedId:"tasks/cluster-manage/import-kubernetes",id:"tasks/cluster-manage/import-kubernetes",title:"\u96c6\u7fa4\u5bfc\u5165",description:"\u96c6\u7fa4\u5bfc\u5165",source:"@site/docs/tasks/cluster-manage/import-kubernetes.md",sourceDirName:"tasks/cluster-manage",slug:"/tasks/cluster-manage/import-kubernetes",permalink:"/docs/tasks/cluster-manage/import-kubernetes",tags:[],version:"current",lastUpdatedBy:"yu.deng",lastUpdatedAt:1648006169,formattedLastUpdatedAt:"2022/3/23",sidebarPosition:1,frontMatter:{title:"\u96c6\u7fa4\u5bfc\u5165",hide_title:!0,sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\u77ed\u57df\u540d",permalink:"/docs/tasks/microservice-manage/mesh-more/short-dns"},next:{title:"\u96c6\u7fa4\u7f51\u7edc",permalink:"/docs/tasks/cluster-manage/plugins/network"}},p={},m=[{value:"\u96c6\u7fa4\u5bfc\u5165",id:"\u96c6\u7fa4\u5bfc\u5165",level:2},{value:"\u6d41\u7a0b",id:"\u6d41\u7a0b",level:4}],c={toc:m};function d(e){var t=e.components,i=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u96c6\u7fa4\u5bfc\u5165"},"\u96c6\u7fa4\u5bfc\u5165"),(0,l.kt)("p",null,"kubegems \u672c\u8eab\u4e0d\u4f1a\u7ef4\u62a4k8s\u96c6\u7fa4\uff0c\u800c\u662f\u901a\u8fc7kubeconfig\u5bfc\u5165\u5230kubegems\u4e2d;"),(0,l.kt)("p",null,"kubegems\u4f1a\u901a\u8fc7kubeconfig\u5728\u76ee\u6807\u96c6\u7fa4\u4e0a\u521b\u5efa \u4e0a\u521b\u5efa\u540d\u5b57\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"kubegems-installer"),"\u7684namespace\uff0c\u548c\u4e00\u4e2acrd ",(0,l.kt)("inlineCode",{parentName:"p"},"installers.plugins.kubegems.io"),"\u4ee5\u53cainstaller\u7684 ",(0,l.kt)("strong",{parentName:"p"},"cr")," ",(0,l.kt)("inlineCode",{parentName:"p"},"kubegems-plugins"),"; \u8fd9\u4e2a ",(0,l.kt)("strong",{parentName:"p"},"cr")," \u4e2d\u5b9a\u4e49\u4e86\u4f5c\u4e3a\u6dfb\u52a0\u96c6\u7fa4\u6240\u9700\u8981\u7684\u6838\u5fc3\u7ec4\u4ef6\uff0ccrd\u7684 controller\u4f1a\u901a\u8fc7",(0,l.kt)("inlineCode",{parentName:"p"},"kubegems-plugins"),"\u4e2d\u63cf\u8ff0\u7684\u63d2\u4ef6\uff0c\u5728\u96c6\u7fa4\u5185\u6dfb\u52a0\u5e73\u53f0\u529f\u80fd\u76f8\u5173\u7684\u63d2\u4ef6\u8fd0\u884c\u7684namespace;"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"namesapce"),(0,l.kt)("th",{parentName:"tr",align:null},"\u4f5c\u7528"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"gemcloud-gateway-system"),(0,l.kt)("td",{parentName:"tr",align:null},"\u79df\u6237\u7f51\u5173\u63d2\u4ef6\u8fd0\u884c\u7684namespace")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"gemcloud-logging-system"),(0,l.kt)("td",{parentName:"tr",align:null},"\u65e5\u5fd7\u91c7\u96c6\u548c\u67e5\u8be2\u76f8\u5173\u670d\u52a1\u8fd0\u884c\u7684namespace")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"gemcloud-monitoring-system"),(0,l.kt)("td",{parentName:"tr",align:null},"\u76d1\u63a7\u544a\u8b66\u76f8\u5173\u670d\u52a1\u8fd0\u884c\u7684namespace")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"gemcloud-workflow-system"),(0,l.kt)("td",{parentName:"tr",align:null},"\u90e8\u7f72\u6d41\u7a0b\u76f8\u5173\u7ec4\u4ef6\u8fd0\u884c\u7684namespace")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"gemcloud-system"),(0,l.kt)("td",{parentName:"tr",align:null},"kubegems\u6838\u5fc3\u7ec4\u4ef6agent+controller\u8fd0\u884c\u7684namespace")))),(0,l.kt)("h4",{id:"\u6d41\u7a0b"},"\u6d41\u7a0b"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u586b\u5199kubeconfig")),(0,l.kt)("p",null,(0,l.kt)("img",{loading:"lazy",alt:"\u6dfb\u52a0\u96c6\u7fa41",src:n(17371).Z,width:"2880",height:"1532"})),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"\u586b\u5199\u5176\u4ed6\u5b89\u88c5\u5fc5\u8981\u6570\u636e")),(0,l.kt)("p",null,(0,l.kt)("img",{loading:"lazy",alt:"\u6dfb\u52a0\u96c6\u7fa42",src:n(82758).Z,width:"2878",height:"1528"})),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5"),(0,l.kt)("th",{parentName:"tr",align:null},"\u4f5c\u7528"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u96c6\u7fa4\u540d\u5b57"),(0,l.kt)("td",{parentName:"tr",align:null},"\u96c6\u7fa4\u540d\u5b57\u5728kubegems\u5fc5\u987b\u552f\u4e00\uff0c\u4e14\u6ee1\u8db3\u547d\u540d\u89c4\u8303")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u5b58\u50a8\u5377\u7c7b\u578b"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7531\u4e8ekubegems\u7684\u6838\u5fc3\u670d\u52a1\u4e5f\u9700\u8981\u5b58\u50a8(pvc)\uff0c\u6240\u4ee5\u5728\u6dfb\u52a0\u96c6\u7fa4\u7684\u65f6\u5019\u9700\u8981\u4e3a\u4ed6\u4eec\u6307\u5b9a\u4f7f\u7528\u4ec0\u4e48\u5b58\u50a8\u5377\u7c7b\u578b")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u955c\u50cf\u4ed3\u5e93"),(0,l.kt)("td",{parentName:"tr",align:null},"kubegems\u6838\u5fc3\u670d\u52a1\u7684\u955c\u50cf\u5e93\u5730\u5740(\u7531\u4e8e\u67d0\u4e00\u4e9b\u539f\u56e0\uff0c\u56fd\u5185\u8bbf\u95eedockerhub\u6216\u8005\u5176\u4ed6\u955c\u50cf\u4ed3\u5e93\u6709\u7f51\u7edc\u6545\u969c,\u6240\u4ee5\u6709\u65f6\u5019\u9700\u8981\u4fee\u6539\u8fd9\u4e2a\u5730\u5740)")))),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},"\u7b49\u5f85\u96c6\u7fa4\u72b6\u6001\u6b63\u5e38")),(0,l.kt)("p",null,"\u5f53\u96c6\u7fa4\u6dfb\u52a0\u5b8c\u6bd5\uff0cinstaller\u8dd1\u5b8c\u5b89\u88c5\u6d41\u7a0b\u540e\uff0c\u96c6\u7fa4\u7684\u72b6\u6001\u4f1a\u663e\u793a\u4e3a\u6b63\u5e38(\u4e00\u4e2a\u84dd\u8272\u7684\u2764\ufe0f)"))}d.isMDXComponent=!0},17371:function(e,t,n){t.Z=n.p+"assets/images/tasks-cluster-manage-add-cluster1-65f5c5cfee23779980a6e56fa20d2271.png"},82758:function(e,t,n){t.Z=n.p+"assets/images/tasks-cluster-manage-add-cluster2-57bb6424d534840222781cfee3c3236d.png"}}]);
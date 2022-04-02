"use strict";(self.webpackChunkkubegems_docs=self.webpackChunkkubegems_docs||[]).push([[5015],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return u}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),d=c(n),u=r,g=d["".concat(l,".").concat(u)]||d[u]||p[u]||s;return n?a.createElement(g,o(o({ref:t},m),{},{components:n})):a.createElement(g,o({ref:t},m))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var c=2;c<s;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},79282:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return p}});var a=n(87462),r=n(63366),s=(n(67294),n(3905)),o=["components"],i={title:"\u5b58\u50a8\u7c7b\u58f0\u660e",hide_title:!0,sidebar_position:4},l=void 0,c={unversionedId:"tasks/admin/cluster-manage/storageclass",id:"tasks/admin/cluster-manage/storageclass",title:"\u5b58\u50a8\u7c7b\u58f0\u660e",description:"\u5b58\u50a8\u7c7b\u58f0\u660e",source:"@site/docs/tasks/admin/cluster-manage/storageclass.md",sourceDirName:"tasks/admin/cluster-manage",slug:"/tasks/admin/cluster-manage/storageclass",permalink:"/docs/tasks/admin/cluster-manage/storageclass",editUrl:"https://github.com/kubegems/kubegems.io/edit/main/docs/tasks/admin/cluster-manage/storageclass.md",tags:[],version:"current",lastUpdatedBy:"LinkMaq",lastUpdatedAt:1648897077,formattedLastUpdatedAt:"2022/4/2",sidebarPosition:4,frontMatter:{title:"\u5b58\u50a8\u7c7b\u58f0\u660e",hide_title:!0,sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"\u81ea\u5b9a\u4e49\u8d44\u6e90",permalink:"/docs/tasks/admin/cluster-manage/crds"},next:{title:"\u7528\u6237\u7ba1\u7406",permalink:"/docs/tasks/admin/tenant"}},m={},p=[{value:"\u5b58\u50a8\u7c7b\u58f0\u660e",id:"\u5b58\u50a8\u7c7b\u58f0\u660e",level:2},{value:"StorageClass \u8d44\u6e90",id:"storageclass-\u8d44\u6e90",level:3}],d={toc:p};function u(e){var t=e.components,n=(0,r.Z)(e,o);return(0,s.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"\u5b58\u50a8\u7c7b\u58f0\u660e"},"\u5b58\u50a8\u7c7b\u58f0\u660e"),(0,s.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"KubeGems 1.20\u7248\u672c\u4ec5\u652f\u6301\u901a\u8fc7 yaml \u7684\u65b9\u5f0f\u63d0\u4ea4 storageClass \u8d44\u6e90"))),(0,s.kt)("p",null,'StorageClass \u4e3a\u7ba1\u7406\u5458\u63d0\u4f9b\u4e86\u63cf\u8ff0\u5b58\u50a8 "\u7c7b" \u7684\u65b9\u6cd5\u3002 \u4e0d\u540c\u7684\u7c7b\u578b\u53ef\u80fd\u4f1a\u6620\u5c04\u5230\u4e0d\u540c\u7684\u670d\u52a1\u8d28\u91cf\u7b49\u7ea7\u6216\u5907\u4efd\u7b56\u7565\uff0c\u6216\u662f\u7531\u96c6\u7fa4\u7ba1\u7406\u5458\u5236\u5b9a\u7684\u4efb\u610f\u7b56\u7565\u3002 Kubernetes \u672c\u8eab\u5e76\u4e0d\u6e05\u695a\u5404\u79cd\u7c7b\u4ee3\u8868\u7684\u4ec0\u4e48\u3002\u8fd9\u4e2a\u7c7b\u7684\u6982\u5ff5\u5728\u5176\u4ed6\u5b58\u50a8\u7cfb\u7edf\u4e2d\u6709\u65f6\u88ab\u79f0\u4e3a "\u914d\u7f6e\u6587\u4ef6"\u3002'),(0,s.kt)("h3",{id:"storageclass-\u8d44\u6e90"},"StorageClass \u8d44\u6e90"),(0,s.kt)("p",null,"\u6bcf\u4e2a StorageClass \u90fd\u5305\u542b ",(0,s.kt)("inlineCode",{parentName:"p"},"provisioner"),"\u3001",(0,s.kt)("inlineCode",{parentName:"p"},"parameters")," \u548c ",(0,s.kt)("inlineCode",{parentName:"p"},"reclaimPolicy")," \u5b57\u6bb5\uff0c \u8fd9\u4e9b\u5b57\u6bb5\u4f1a\u5728 StorageClass \u9700\u8981\u52a8\u6001\u5206\u914d PersistentVolume \u65f6\u4f1a\u4f7f\u7528\u5230\u3002"),(0,s.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"\u5f53\u521b\u5efa StorageClass \u5bf9\u8c61\u65f6\uff0c\u7ba1\u7406\u5458\u8bbe\u7f6e StorageClass \u5bf9\u8c61\u7684\u547d\u540d\u548c\u5176\u4ed6\u53c2\u6570\uff0c\u4e00\u65e6\u521b\u5efa\u4e86\u5bf9\u8c61\u5c31\u4e0d\u80fd\u518d\u5bf9\u5176\u66f4\u65b0\u3002"))),(0,s.kt)("p",null,"KubeGems \u7ba1\u7406\u5458\u53ef\u4ee5\u4e3a\u6ca1\u6709\u7533\u8bf7\u7ed1\u5b9a\u5230\u7279\u5b9a StorageClass \u7684 PVC \u6307\u5b9a\u4e00\u4e2a\u9ed8\u8ba4\u7684\u5b58\u50a8\u7c7b\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"apiVersion: storage.k8s.io/v1\nkind: StorageClass\nmetadata:\n  name: standard\nprovisioner: kubernetes.io/aws-ebs\nparameters:\n  type: gp3\nreclaimPolicy: Retain\nallowVolumeExpansion: true\nmountOptions:\n  - debug\nvolumeBindingMode: Immediate\n")),(0,s.kt)("p",null,"\u66f4\u591a\u5173\u4e8e StorageClass \u8d44\u6e90\u5b9a\u4e49\u548c\u5b58\u50a8\u5b9a\u4e49\u7684\u6587\u6863\u8bf7\u53c2\u8003 ",(0,s.kt)("a",{parentName:"p",href:"https://kubernetes.io/zh/docs/concepts/storage/storage-classes/"},"Kubernetes/StorageClass")))}u.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkkubegems_docs=self.webpackChunkkubegems_docs||[]).push([[9659],{3905:function(t,e,a){a.d(e,{Zo:function(){return d},kt:function(){return g}});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function s(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var l=n.createContext({}),p=function(t){var e=n.useContext(l),a=e;return t&&(a="function"==typeof t?t(e):s(s({},e),t)),a},d=function(t){var e=p(t.components);return n.createElement(l.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,l=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),c=p(a),g=r,k=c["".concat(l,".").concat(g)]||c[g]||m[g]||i;return a?n.createElement(k,s(s({ref:e},d),{},{components:a})):n.createElement(k,s({ref:e},d))}));function g(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,s=new Array(i);s[0]=c;var o={};for(var l in e)hasOwnProperty.call(e,l)&&(o[l]=e[l]);o.originalType=t,o.mdxType="string"==typeof t?t:r,s[1]=o;for(var p=2;p<i;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},6646:function(t,e,a){a.r(e),a.d(e,{assets:function(){return d},contentTitle:function(){return l},default:function(){return g},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return m}});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),s=["components"],o={title:"\u670d\u52a1\u8def\u7531",hide_title:!0,sidebar_position:2},l=void 0,p={unversionedId:"tasks/appservice/gateways/ingress",id:"tasks/appservice/gateways/ingress",title:"\u670d\u52a1\u8def\u7531",description:"\u670d\u52a1\u8def\u7531",source:"@site/docs/tasks/appservice/gateways/ingress.md",sourceDirName:"tasks/appservice/gateways",slug:"/tasks/appservice/gateways/ingress",permalink:"/docs/tasks/appservice/gateways/ingress",editUrl:"https://github.com/kubegems/kubegems.io/edit/main/docs/tasks/appservice/gateways/ingress.md",tags:[],version:"current",lastUpdatedBy:"leon.chen",lastUpdatedAt:1648806821,formattedLastUpdatedAt:"2022/4/1",sidebarPosition:2,frontMatter:{title:"\u670d\u52a1\u8def\u7531",hide_title:!0,sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\u79df\u6237\u7f51\u5173",permalink:"/docs/tasks/appservice/gateways/gateway"},next:{title:"\u5b58\u50a8\u5377",permalink:"/docs/tasks/appservice/storages/psersistesvolume"}},d={},m=[{value:"\u670d\u52a1\u8def\u7531",id:"\u670d\u52a1\u8def\u7531",level:2},{value:"\u7ed1\u5b9a\u8def\u7531\u7f51\u5173",id:"\u7ed1\u5b9a\u8def\u7531\u7f51\u5173",level:3},{value:"\u8def\u7531\u89c4\u5219\u534f\u8bae",id:"\u8def\u7531\u89c4\u5219\u534f\u8bae",level:3}],c={toc:m};function g(t){var e=t.components,o=(0,r.Z)(t,s);return(0,i.kt)("wrapper",(0,n.Z)({},c,o,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u670d\u52a1\u8def\u7531"},"\u670d\u52a1\u8def\u7531"),(0,i.kt)("p",null,"Kubegems \u9488\u5bf9\u79df\u6237\u7f51\u5173\u529f\u80fd\uff0c\u63d0\u4f9b\u4e86\u76f8\u5bf9\u4fbf\u6377\u7684 ingress \u670d\u52a1\u8def\u7531\u529f\u80fd"),(0,i.kt)("h3",{id:"\u7ed1\u5b9a\u8def\u7531\u7f51\u5173"},"\u7ed1\u5b9a\u8def\u7531\u7f51\u5173"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u70b9\u51fb\u53f3\u4e0a\u89d2",(0,i.kt)("strong",{parentName:"li"},"\u5de5\u4f5c\u53f0")),(0,i.kt)("li",{parentName:"ol"},"\u9009\u62e9\u4e00\u4e2a\u73af\u5883\uff0c\u70b9\u51fb",(0,i.kt)("strong",{parentName:"li"},"\u8fdb\u5165\u73af\u5883")),(0,i.kt)("li",{parentName:"ol"},"\u5728\u5de6\u4fa7\u8fb9\u680f",(0,i.kt)("strong",{parentName:"li"},"\u8fd0\u884c\u65f6"),"\uff0c\u9009\u62e9",(0,i.kt)("strong",{parentName:"li"},"\u8def\u7531"),(0,i.kt)("img",{loading:"lazy",src:a(8063).Z,width:"1920",height:"961"})),(0,i.kt)("li",{parentName:"ol"},"\u70b9\u51fb",(0,i.kt)("strong",{parentName:"li"},"\u521b\u5efa\u8def\u7531"),(0,i.kt)("img",{loading:"lazy",src:a(6086).Z,width:"960",height:"850"}))),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"\u5b57\u6bb5\u540d"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u91ca\u4e49"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"\u540d\u79f0"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u8def\u7531\u540d")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"\u58f0\u660e\u7f51\u5173"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u9009\u62e9\u5f53\u524d\u79df\u6237\u4e0b\u5df2\u521b\u5efa\u7684\u7f51\u5173\uff0c\u5c06\u8be5\u8def\u7531\u89c4\u5219\u4e0e\u5176\u7ed1\u5b9a, \u5f53\u7136\uff0c\u4e5f\u53ef\u4ee5\u9009\u62e9\u9ed8\u8ba4\u7f51\u5173\u3002")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"\u57df\u540d"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u8be5\u8def\u7531\u8981\u4ee3\u7406\u7684\u57df\u540d\uff0c\u53ef\u4ee5\u968f\u673a\u751f\u6210\uff0c\u82e5\u4e0d\u6307\u5b9a\u7684\u8bdd\uff0c\u4e5f\u4f1a\u6839\u636e\u5176\u7ed1\u5b9a\u7f51\u5173\u7684 ",(0,i.kt)("strong",{parentName:"td"},"\u9ed8\u8ba4\u57df\u540d")," \u5b57\u6bb5\u968f\u673a\u751f\u6210")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"\u534f\u8bae"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u4ee3\u7406\u534f\u8bae,\u652f\u6301\uff0c\u8be6\u89c1 ",(0,i.kt)("a",{parentName:"td",href:"#%E8%B7%AF%E7%94%B1%E8%A7%84%E5%88%99%E5%8D%8F%E8%AE%AE"},"\u8def\u7531\u89c4\u5219\u534f\u8bae"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"\u5bc6\u94a5"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u6839\u636e\u534f\u8bae\u9009\u586b\uff0c\u8be6\u89c1 ",(0,i.kt)("a",{parentName:"td",href:"#%E8%B7%AF%E7%94%B1%E8%A7%84%E5%88%99%E5%8D%8F%E8%AE%AE"},"\u8def\u7531\u89c4\u5219\u534f\u8bae"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"\u8def\u5f84"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u8981\u4ee3\u7406\u7684 URL \u8def\u5f84")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"\u670d\u52a1"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u4ee3\u7406\u7684\u4e0a\u6e38\uff08\u76ee\u6807\uff09\u670d\u52a1")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"\u7aef\u53e3"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u4ee3\u7406\u5230\u4e0a\u6e38\u670d\u52a1\u7684\u7aef\u53e3\u53f7")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"\u6ce8\u89e3"),(0,i.kt)("td",{parentName:"tr",align:"left"},"\u652f\u6301\u4ee5",(0,i.kt)("inlineCode",{parentName:"td"},"key-value"),"\u5f62\u5f0f\u914d\u7f6e\u6ce8\u89e3\uff0c\u6ce8\u89e3\u4f1a\u4f5c\u4e3a",(0,i.kt)("inlineCode",{parentName:"td"},"annotations"),"\u914d\u7f6e\u5728",(0,i.kt)("inlineCode",{parentName:"td"},"ingress"),"\u8d44\u6e90\u4e0a\uff0c\u901a\u5e38\u7528\u4e8e\u81ea\u5b9a\u4e49\u6216\u5fae\u8c03 NGINX \u884c\u4e3a\uff0c\u4f8b\u5982\uff0c\u8bbe\u7f6e\u8fde\u63a5\u8d85\u65f6\u503c\u3002\u8def\u7531\u4e2d\u914d\u7f6e\u7684\u6ce8\u89e3\u4f18\u5148\u7ea7",(0,i.kt)("strong",{parentName:"td"},"\u9ad8\u4e8e"),"\u7f51\u5173\u4e2d\u7684\u6ce8\u89e3\uff0c\u53e6\u5916\uff0c\u6839\u636e\u4f60\u9009\u62e9\u7684\u534f\u8bae\uff0c\u4f1a\u81ea\u52a8\u5728\u8fd9\u91cc\u751f\u6210\u5bf9\u5e94\u7684\u6ce8\u89e3\uff0c\u8be6\u89c1 ",(0,i.kt)("a",{parentName:"td",href:"#%E8%B7%AF%E7%94%B1%E8%A7%84%E5%88%99%E5%8D%8F%E8%AE%AE"},"\u8def\u7531\u89c4\u5219\u534f\u8bae"),"\u3002\u53d7\u652f\u6301\u7684\u6ce8\u89e3\u914d\u7f6e\u9879\u53c2\u8003\u6587\u6863\uff1a",(0,i.kt)("a",{parentName:"td",href:"https://docs.nginx.com/nginx-ingress-controller/configuration/ingress-resources/advanced-configuration-with-annotations"},"https://docs.nginx.com/nginx-ingress-controller/configuration/ingress-resources/advanced-configuration-with-annotations"))))),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u5c0f\u77e5\u8bc6")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u8def\u7531\u7ed1\u5b9a\u7f51\u5173\u65f6\uff0c\u5c06\u8def\u7531\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"spec.ingressClassName"),"\u5b57\u6bb5\u8bbe\u7f6e\u4e3a\u4e0e\u7f51\u5173\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"spec.ingressClass"),"\u76f8\u540c\uff0c\u5373\u4e3a\u7ed1\u5b9a"))),(0,i.kt)("h3",{id:"\u8def\u7531\u89c4\u5219\u534f\u8bae"},"\u8def\u7531\u89c4\u5219\u534f\u8bae"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"\u534f\u8bae"),(0,i.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u9700\u8981\u7ed1\u5b9a\u5bc6\u94a5"),(0,i.kt)("th",{parentName:"tr",align:"left"},"\u5bf9\u5e94\u7684\u6ce8\u89e3"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"http"),(0,i.kt)("td",{parentName:"tr",align:null},"x"),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"https"),(0,i.kt)("td",{parentName:"tr",align:null},"\u221a"),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"ws"),(0,i.kt)("td",{parentName:"tr",align:null},"x"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"nginx.org/websocket-services: service1, service2"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"wss"),(0,i.kt)("td",{parentName:"tr",align:null},"\u221a"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"nginx.org/websocket-services: service1, service2"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"grpc"),(0,i.kt)("td",{parentName:"tr",align:null},"\u221a"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"nginx.org/grpc-services: service1, service2"))))),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u4f60\u53ef\u4ee5\u5728 ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"/docs/tasks/appservice/workerloads/config"},"\u914d\u7f6e\u4e2d\u5fc3-\u5bc6\u94a5"))," \u6a21\u5757\u521b\u5efa\u5bc6\u94a5"))))}g.isMDXComponent=!0},6086:function(t,e,a){e.Z=a.p+"assets/images/create-ingress-271aac3103681e65a20dfe408b3cb6da.jpg"},8063:function(t,e,a){e.Z=a.p+"assets/images/ingress-468af2d3029acd4175a0331aa22c8d93.jpg"}}]);
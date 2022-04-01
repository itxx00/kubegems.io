"use strict";(self.webpackChunkkubegems_docs=self.webpackChunkkubegems_docs||[]).push([[4104],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return k}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),u=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=u(r),k=a,d=m["".concat(o,".").concat(k)]||m[k]||s[k]||i;return r?n.createElement(d,l(l({ref:t},c),{},{components:r})):n.createElement(d,l({ref:t},c))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=m;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var u=2;u<i;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6612:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return o},default:function(){return k},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return s}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),l=["components"],p={title:"\u5fae\u670d\u52a1\u6cbb\u7406",hide_title:!0,sidebar_position:5},o=void 0,u={unversionedId:"concepts/feature/microservice",id:"concepts/feature/microservice",title:"\u5fae\u670d\u52a1\u6cbb\u7406",description:"\u57fa\u4e8eIstio\u7684\u5fae\u670d\u52a1\u7f51\u683c",source:"@site/docs/concepts/feature/microservice.md",sourceDirName:"concepts/feature",slug:"/concepts/feature/microservice",permalink:"/docs/concepts/feature/microservice",editUrl:"https://github.com/kubegems/kubegems.io/edit/main/docs/concepts/feature/microservice.md",tags:[],version:"current",lastUpdatedBy:"link.ma",lastUpdatedAt:1648023228,formattedLastUpdatedAt:"2022/3/23",sidebarPosition:5,frontMatter:{title:"\u5fae\u670d\u52a1\u6cbb\u7406",hide_title:!0,sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"\u53ef\u89c2\u5bdf\u6027",permalink:"/docs/concepts/feature/observability"},next:{title:"AI\u6a21\u578b\u7ba1\u7406",permalink:"/docs/concepts/feature/ai-module"}},c={},s=[{value:"\u57fa\u4e8eIstio\u7684\u5fae\u670d\u52a1\u7f51\u683c",id:"\u57fa\u4e8eistio\u7684\u5fae\u670d\u52a1\u7f51\u683c",level:2},{value:"\u670d\u52a1\u6cbb\u7406",id:"\u670d\u52a1\u6cbb\u7406",level:3},{value:"\u6d41\u91cf\u7ba1\u7406",id:"\u6d41\u91cf\u7ba1\u7406",level:4},{value:"\u5b89\u5168",id:"\u5b89\u5168",level:4},{value:"\u53ef\u89c2\u5bdf\u6027",id:"\u53ef\u89c2\u5bdf\u6027",level:4},{value:"\u5fae\u670d\u52a1\u7f51\u5173",id:"\u5fae\u670d\u52a1\u7f51\u5173",level:3},{value:"\u57fa\u7840\u7248\u7f51\u5173",id:"\u57fa\u7840\u7248\u7f51\u5173",level:4},{value:"\u5fae\u670d\u52a1\u7f51\u5173\uff08\u5f00\u53d1\u4e2d...\uff09",id:"\u5fae\u670d\u52a1\u7f51\u5173\u5f00\u53d1\u4e2d",level:4}],m={toc:s};function k(e){var t=e.components,p=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},m,p,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u57fa\u4e8eistio\u7684\u5fae\u670d\u52a1\u7f51\u683c"},"\u57fa\u4e8eIstio\u7684\u5fae\u670d\u52a1\u7f51\u683c"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"\u670d\u52a1\u6cbb\u7406"},"\u670d\u52a1\u6cbb\u7406"),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",src:r(3247).Z,width:"2871",height:"1615"})),(0,i.kt)("h4",{id:"\u6d41\u91cf\u7ba1\u7406"},"\u6d41\u91cf\u7ba1\u7406"),(0,i.kt)("p",null,"KubeGems \u4e2d\u865a\u62df\u7a7a\u95f4\u542f\u7528\u4e86\u5e94\u7528\u7684 Istio \u529f\u80fd\u652f\u6301\uff0c\u901a\u8fc7\u5176\u63a7\u5236\u5e73\u9762\u7684\u529f\u80fd\u6765\u914d\u7f6e\u548c\u7ba1\u7406\u5e94\u7528\u884c\u4e3a\uff0c\u8fd9\u5305\u62ec\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"\u8d1f\u8f7d\u5747\u8861:")," \u4e3a HTTP\u3001gRPC\u3001WebSocket \u548c TCP \u6d41\u91cf\u81ea\u52a8\u8d1f\u8f7d\u5747\u8861\uff1b")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"\u8bbf\u95ee\u63a7\u5236:")," \u652f\u6301\u4e30\u5bcc\u7684\u8def\u7531\u89c4\u5219\u3001\u91cd\u8bd5\u3001\u6545\u969c\u8f6c\u79fb\u548c\u6545\u969c\u6ce8\u5165\u5bf9\u6d41\u91cf\u884c\u4e3a\u8fdb\u884c\u7ec6\u7c92\u5ea6\u63a7\u5236\uff1b")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"\u6d41\u91cf\u63a7\u5236:")," \u53ef\u63d2\u62d4\u7684\u7b56\u7565\u5c42\u548c\u914d\u7f6e API\uff0c\u652f\u6301\u8bbf\u95ee\u63a7\u5236\u3001\u901f\u7387\u9650\u5236\u548c\u914d\u989d\uff1b"))),(0,i.kt)("h4",{id:"\u5b89\u5168"},"\u5b89\u5168"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"\u4e30\u5bcc\u7684\u8ba4\u8bc1\u7b56\u7565:")," \u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"peer")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"request")," \u8ba4\u8bc1\u7b56\u7565\u4e3a\u5728 Istio \u7f51\u683c\u4e2d\u63a5\u6536\u8bf7\u6c42\u7684\u5de5\u4f5c\u8d1f\u8f7d\u6307\u5b9a\u8ba4\u8bc1;")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"\u81ea\u5b9a\u4e49\u5e94\u7528\u6388\u6743:")," \u652f\u6301\u57fa\u4e8e ",(0,i.kt)("inlineCode",{parentName:"p"},"RBAC")," \u7684\u5e94\u7528\u6743\u9650\u63a7\u5236\uff1b")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"\u516c\u94a5\u57fa\u7840\u8bbe\u65bd (PKI):")," \u4f7f\u7528 X.509 \u8bc1\u4e66\u4e3a\u6bcf\u4e2a\u5de5\u4f5c\u8d1f\u8f7d\u90fd\u63d0\u4f9b tls \u53cc\u5411\u8ba4\u8bc1;"))),(0,i.kt)("h4",{id:"\u53ef\u89c2\u5bdf\u6027"},"\u53ef\u89c2\u5bdf\u6027"),(0,i.kt)("p",null,"KubeGems \u7684\u865a\u62df\u7a7a\u95f4\u5185\u751f\u6210\u4e86\u5185\u90e8\u670d\u52a1\u901a\u4fe1\u7684\u8be6\u7ec6\u9065\u6d4b\u6570\u636e\u3002\u4f7f\u7528\u6237\u80fd\u591f\u6392\u67e5\u6545\u969c\u3001\u7ef4\u62a4\u548c\u4f18\u5316\u5e94\u7528\u7a0b\u5e8f\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"\u5e94\u7528\u6307\u6807:")," \u57fa\u4e8e 4 \u4e2a\u76d1\u63a7\u7684\u9ec4\u91d1\u6807\u8bc6\uff08\u5ef6\u8fdf\u3001\u6d41\u91cf\u3001\u9519\u8bef\u3001\u9971\u548c\uff09\u751f\u6210\u4e86\u4e00\u7cfb\u5217\u670d\u52a1\u6307\u6807")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"\u5206\u5e03\u5f0f\u8ffd\u8e2a:")," \u4e3a\u6bcf\u4e2a\u670d\u52a1\u751f\u6210\u5206\u5e03\u5f0f\u8ffd\u8e2a span\uff0c\u5bf9\u7f51\u683c\u5185\u7684\u670d\u52a1\u8c03\u7528\u8fdb\u884c\u8ffd\u8e2a\uff1b")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"\u8bbf\u95ee\u65e5\u5fd7:")," \u8bb0\u5f55\u5e94\u7528\u6d41\u91cf\u751f\u6210\u8bf7\u6c42\u7684\u5b8c\u6574\u8bb0\u5f55\uff0c\u5305\u62ec\u6e90\u548c\u76ee\u6807\u7684\u5143\u6570\u636e\uff1b"))),(0,i.kt)("h3",{id:"\u5fae\u670d\u52a1\u7f51\u5173"},"\u5fae\u670d\u52a1\u7f51\u5173"),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",src:r(4951).Z,width:"2134",height:"1250"})),(0,i.kt)("p",null,"KubeGems \u5185\u7f6e\u5fae\u670d\u52a1\u7f51\u5173\u63a7\u5236\u5668\uff0c\u4ee5\u652f\u6301\u5e94\u7528\u5357\u5317\u5411\u6d41\u91cf\u7684\u4ee3\u7406,\u7f51\u5173\u7c7b\u578b\u5206\u4e3a",(0,i.kt)("strong",{parentName:"p"},"\u57fa\u7840\u7248(Basic Nginx)"),"\u548c",(0,i.kt)("strong",{parentName:"p"},"\u5fae\u670d\u52a1\u7248(Mesh Istio)"),"\u3002"),(0,i.kt)("h4",{id:"\u57fa\u7840\u7248\u7f51\u5173"},"\u57fa\u7840\u7248\u7f51\u5173"),(0,i.kt)("p",null,"\u91c7\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"Nginx Ingress Operator")," \u4e3a KubeGems \u63d0\u4f9b\u57fa\u7840\u7f51\u5173\u80fd\u529b\u652f\u6301\uff0c\u5176\u4e2d\u5305\u62ec\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u79df\u6237\u72ec\u5360\u7f51\u5173\uff1a \u6bcf\u4e2a\u79df\u6237\u53ef\u521b\u5efa\u72ec\u5360\u7684 ingress \u7f51\u5173\uff0c\u901a\u8fc7 class \u65b9\u5f0f\u5173\u8054 ingress \u8d44\u6e90\uff1b")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u5e94\u7528\u8def\u7531\u7ba1\u7406\uff1a \u652f\u6301 TCP/UDP, HTTP/HTTPS, GRPC/HTTP2.0 \u7b49\u534f\u8bae\u7684\u652f\u6301\u548c\u8def\u7531\u8f6c\u53d1\uff1b")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u6d41\u91cf\u8d1f\u8f7d\u5747\u8861\uff1a \u652f\u6301\u5bf9 ingress \u5173\u8054\u7684\u4e0a\u6e38 pod \u8fdb\u884c\u6d41\u91cf\u8d1f\u8f7d\u5747\u8861\uff1b")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u8bbf\u95ee\u76d1\u63a7\uff1a\u652f\u6301\u4ee5 Prometheus \u7684\u65b9\u5f0f\u66b4\u9732\u5185\u90e8\u76d1\u63a7\u6307\u6807\uff1b"))),(0,i.kt)("h4",{id:"\u5fae\u670d\u52a1\u7f51\u5173\u5f00\u53d1\u4e2d"},"\u5fae\u670d\u52a1\u7f51\u5173\uff08\u5f00\u53d1\u4e2d...\uff09"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u57fa\u7840\u7f51\u5173\u6240\u6709\u529f\u80fd")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u652f\u6301\u5e94\u7528\u6d41\u91cf\u7ec6\u7c92\u5ea6\u63a7\u5236")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u652f\u6301\u5e94\u7528\u84dd\u7eff\u53d1\u5e03\u3001\u7070\u5ea6\u53d1\u5e03\u7b49\u9ad8\u7ea7\u7b56\u7565")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u8bbf\u95ee\u6743\u9650\u8ba4\u8bc1"))))}k.isMDXComponent=!0},4951:function(e,t,r){t.Z=r.p+"assets/images/api-gateway-basic-8a339807cfee4e457d06768c8d29702a.jpg"},3247:function(e,t,r){t.Z=r.p+"assets/images/service-mesh-3560e46a2a4e8cb7c37c013f7eb37acc.jpg"}}]);
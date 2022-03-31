"use strict";(self.webpackChunkkubegems_docs=self.webpackChunkkubegems_docs||[]).push([[7985],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return g}});var i=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,o=function(e,n){if(null==e)return{};var t,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=i.createContext({}),c=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=c(e.components);return i.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},u=i.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(t),g=o,m=u["".concat(s,".").concat(g)]||u[g]||d[g]||r;return t?i.createElement(m,a(a({ref:n},p),{},{components:t})):i.createElement(m,a({ref:n},p))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,a=new Array(r);a[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<r;c++)a[c]=t[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}u.displayName="MDXCreateElement"},35457:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return d}});var i=t(87462),o=t(63366),r=(t(67294),t(3905)),a=["components"],l={title:"\u914d\u7f6eLogging",hide_title:!0,sidebar_position:4,description:"\u5982\u4f55\u5c06 KubeGems \u4e0e\u5916\u90e8 Loki \u670d\u52a1\u96c6\u6210",keywords:["kubegems","kubernetes","loki"]},s=void 0,c={unversionedId:"installation/more-install-guides/logging",id:"installation/more-install-guides/logging",title:"\u914d\u7f6eLogging",description:"\u5982\u4f55\u5c06 KubeGems \u4e0e\u5916\u90e8 Loki \u670d\u52a1\u96c6\u6210",source:"@site/docs/installation/more-install-guides/logging.md",sourceDirName:"installation/more-install-guides",slug:"/installation/more-install-guides/logging",permalink:"/docs/installation/more-install-guides/logging",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"\u914d\u7f6eLogging",hide_title:!0,sidebar_position:4,description:"\u5982\u4f55\u5c06 KubeGems \u4e0e\u5916\u90e8 Loki \u670d\u52a1\u96c6\u6210",keywords:["kubegems","kubernetes","loki"]},sidebar:"tutorialSidebar",previous:{title:"\u914d\u7f6eMonitoring",permalink:"/docs/installation/more-install-guides/monitoring"},next:{title:"\u914d\u7f6eIstio",permalink:"/docs/installation/more-install-guides/istio"}},p={},d=[{value:"\u914d\u7f6e Logging",id:"\u914d\u7f6e-logging",level:2},{value:"\u5916\u90e8 Loki",id:"\u5916\u90e8-loki",level:2},{value:"\u7981\u7528 Loki",id:"\u7981\u7528-loki",level:3}],u={toc:d};function g(e){var n=e.components,t=(0,o.Z)(e,a);return(0,r.kt)("wrapper",(0,i.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u914d\u7f6e-logging"},"\u914d\u7f6e Logging"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"KubeGems \u5185\u7f6e\u4e86 Logging Operator \u6765\u5904\u7406\u96c6\u7fa4\u5185\u90e8\u5bb9\u5668\u65e5\u5fd7\u91c7\u96c6\u3001\u89e3\u6790\u548c\u5b58\u50a8\u7684\u6d41\u7a0b\u3002Logging \u6a21\u5757\u4e3b\u8981\u6d89\u53ca\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"FluentBit/d")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"Loki")," \u4e24\u4e2a\u6838\u5fc3\u670d\u52a1\uff0c\u60a8\u53ef\u4ee5\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"core_plugins.logging")," \u4e0b\u914d\u7f6e\u5b83\u4eec\u3002"),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u63d0\u793a")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u9ed8\u8ba4\u60c5\u51b5\u4e0b installer \u7684 cr \u4e2d\u5e76\u6ca1\u6709\u542f\u52a8 logging \u63d2\u4ef6\uff0c\u60a8\u53ef\u4ee5\u5728 KubeGems \u540e\u53f0\u7ba1\u7406\u7cfb\u7edf\u4e2d\u542f\u7528\u6b64\u63d2\u4ef6"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'core_plugins:\n  logging:\n    details:\n      catalog: \u65e5\u5fd7\u4e2d\u5fc3\n      description: KubeGems\u5e73\u53f0\u7ba1\u7406\u5bb9\u5668\u65e5\u5fd7\u6846\u67b6,\u5305\u542b\u63a7\u5236\u5668\u3001Loki Stack\u7b49\u670d\u52a1.\n      version: v3.15.0\n    enabled: false\n    namespace: gemcloud-logging-system\n    operator:\n      # Upstream used by logs whitch fluentbit collect, forward to fluentdpstream uspfluentbit and forwarded to flunetd\n      enable_upstream: false\n      fluentbit:\n        # Set the buffer size for HTTP client when reading responses from Kubernetes API server.\n        # The value must be according to the Unit Size specification.\n        #buffer: 256k\n        resources:\n          cpu: "2"\n          memory: 1Gi\n        # If the container logs are redirected to another path(not /var/log/pods), the path needs to be mounted to fluentbit.\n        #volume_mounts:\n        #  source: /data\n        #  destination: /data\n      fluentd:\n        # The replicas of flunetd\n        replicas: 2\n        resources:\n          cpu: "1"\n          memory: 2Gi\n        persistent:\n          size: 10Gi\n          #storageclass: local-path\n      loki:\n        enabled: true\n        #image:\n        #  repository:\n        #  tag:\n        #resources:\n        #  cpu: "4"\n        #  memory: "8Gi"\n        persistent:\n          size: 100Gi\n          #storageclass: local-path\n        # If you need to interface to an external loki service, disealed loki and configured the host field\n        # Tips: host only support <ipaddress>:<ports>\n        #external_host: 172.168.0.1:3100\n    status:\n      deployment:\n      - logging-operator\n')),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u63d0\u793a")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u867d\u7136Loki v2.4.1 \u5bf9\u67e5\u8be2\u901f\u5ea6\u505a\u4e86\u5927\u5e45\u63d0\u5347\uff0c\u4f46\u5728\u751f\u4ea7\u4e2d\u83b7\u5f97\u4e00\u4e2a\u66f4\u597d\u7684\u4f53\u9a8c\uff0c\u8fd8\u662f\u5efa\u8bae\u5355\u72ec\u90e8\u7f72 Loki \u5206\u5e03\u5f0f\u6216\u96c6\u7fa4\u6a21\u5f0f\u3002"))),(0,r.kt)("h2",{id:"\u5916\u90e8-loki"},"\u5916\u90e8 Loki"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"\u7981\u7528-loki"},"\u7981\u7528 Loki"),(0,r.kt)("p",null,"logging \u63d2\u4ef6\u9ed8\u8ba4\u5185\u7f6e\u4e86\u4e00\u4e2a\u5355\u673a\u7248\u7684 Loki \u670d\u52a1\uff0c\u7528\u6237\u53ef\u4ee5\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"core_plugins.logging.operator.loki")," \u4e2d\u5bf9 Loki \u914d\u7f6e\u3002\u5982\u679c\u60a8\u7684\u73af\u5883\u4e0b\u5df2\u5b58\u5728 Loki \u96c6\u7fa4\uff0c\u53ef\u4ee5\u5728 installer \u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"core_plugins. logging.operator.loki.enabled")," \u4e2d\u7981\u7528 loki \u670d\u52a1\uff0c\u5e76\u914d\u7f6e\u5916\u90e8 loki \u7684",(0,r.kt)("inlineCode",{parentName:"p"},"<IP>:<Port>"),"\u8fde\u63a5\u5730\u5740\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"core_plugins:\n  logging:\n    operator:\n      loki:\n        enabled: false\n        # If you need to interface to an external loki service, disealed loki and configured the host field\n        # Tips: host only support <ipaddress>:<ports>\n        external_host: 172.168.0.1:3100\n")),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u63d0\u793a")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u8bf7\u6c42\u5916\u90e8 loki \u670d\u52a1\u662f\u901a\u8fc7 kubernetes \u7684 external service \u5b9e\u73b0\u7684\uff0c\u6240\u4ee5\u8fd9\u91cc\u53ea\u80fd\u914d\u7f6e IP \u5730\u5740\u3002"))))}g.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkkubegems_docs=self.webpackChunkkubegems_docs||[]).push([[6747],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return u}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(a),u=r,g=m["".concat(s,".").concat(u)]||m[u]||d[u]||i;return a?n.createElement(g,o(o({ref:t},p),{},{components:a})):n.createElement(g,o({ref:t},p))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},6171:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return d}});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),o=["components"],l={title:"\u914d\u7f6eJaeger",hide_title:!0,sidebar_position:6,description:"\u672c\u6587\u5c06\u4ecb\u7ecd\u7528\u6237\u5982\u4f55\u5c06 KubeGems \u4e0e Jaeger \u670d\u52a1\u7684\u96c6\u6210\u3002",keywords:["kubegems","kubernetes","jaeger","tracing\uff0cdistributited","operator"]},s=void 0,c={unversionedId:"installation/more-install-guides/jaeger",id:"installation/more-install-guides/jaeger",title:"\u914d\u7f6eJaeger",description:"\u672c\u6587\u5c06\u4ecb\u7ecd\u7528\u6237\u5982\u4f55\u5c06 KubeGems \u4e0e Jaeger \u670d\u52a1\u7684\u96c6\u6210\u3002",source:"@site/docs/installation/more-install-guides/jaeger.md",sourceDirName:"installation/more-install-guides",slug:"/installation/more-install-guides/jaeger",permalink:"/docs/installation/more-install-guides/jaeger",editUrl:"https://github.com/kubegems/kubegems.io/edit/main/docs/installation/more-install-guides/jaeger.md",tags:[],version:"current",lastUpdatedBy:"LinkMaq",lastUpdatedAt:1648805655,formattedLastUpdatedAt:"2022/4/1",sidebarPosition:6,frontMatter:{title:"\u914d\u7f6eJaeger",hide_title:!0,sidebar_position:6,description:"\u672c\u6587\u5c06\u4ecb\u7ecd\u7528\u6237\u5982\u4f55\u5c06 KubeGems \u4e0e Jaeger \u670d\u52a1\u7684\u96c6\u6210\u3002",keywords:["kubegems","kubernetes","jaeger","tracing\uff0cdistributited","operator"]},sidebar:"tutorialSidebar",previous:{title:"\u914d\u7f6eIstio",permalink:"/docs/installation/more-install-guides/istio"},next:{title:"\u5feb\u901f\u5f00\u59cb",permalink:"/docs/quick-starts/quick-start"}},p={},d=[{value:"\u914d\u7f6e Jaeger",id:"\u914d\u7f6e-jaeger",level:2},{value:"\u5916\u90e8 ElasitcSearch",id:"\u5916\u90e8-elasitcsearch",level:3},{value:"\u624b\u52a8\u90e8\u7f72 Jaeger",id:"\u624b\u52a8\u90e8\u7f72-jaeger",level:2},{value:"Jaeger Operator",id:"jaeger-operator",level:3},{value:"\u4e0e Istio \u96c6\u6210",id:"\u4e0e-istio-\u96c6\u6210",level:3}],m={toc:d};function u(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u914d\u7f6e-jaeger"},"\u914d\u7f6e Jaeger"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"KubeGems Installer \u9ed8\u8ba4\u5185\u7f6e\u4e86 ",(0,i.kt)("inlineCode",{parentName:"p"},"Jaeger Operator"),"\uff0c\u7528\u4e8e\u7ba1\u7406\u96c6\u7fa4\u5185\u7684 Jaeger \u670d\u52a1\uff0c\u7528\u6237\u53ef\u4ee5\u5728",(0,i.kt)("inlineCode",{parentName:"p"}," core_plugins.jaeger")," \u4e2d\u5bf9 jaeger \u8fdb\u884c\u4e2a\u6027\u5316\u914d\u7f6e\u3002"),(0,i.kt)("p",null,"\u6837\u4f8b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'core_plugins:\n  details:\n    catalog: \u670d\u52a1\u7f51\u683c\n    description: KubeGems\u5e73\u53f0\u670d\u52a1\u8ffd\u8e2a\u5957\u4ef6.\n    version: v1.25.0\n  enabled: false\n  namespace: observability\n  operator:\n    sampling:\n      type: probabilistic\n      param: 0.5\n    elasticsearch:\n      enabled: true\n      # Elasticsearch running mode, default is single node. <cluster> mode will be set 3 replicas as a cluster.\n      mode: single\n      persistent:\n        size: 100Gi\n        # storageclass: local-path\n\n      # If you need to interface to an external ElasticSearch service, disealed ElasticSearch and configured the external_urls fielda.\n      # external_urls: "http://172.16.0.1:9200"\n  status:\n    deployment:\n    - jaeger-collector\n    - jaeger-query\n')),(0,i.kt)("h3",{id:"\u5916\u90e8-elasitcsearch"},"\u5916\u90e8 ElasitcSearch"),(0,i.kt)("p",null,"Jaeger \u5982\u9700\u5bf9\u63a5\u5916\u90e8 ElasticSearch \u7684\u573a\u666f\u4e0b\uff0c\u9700\u5c06 ",(0,i.kt)("inlineCode",{parentName:"p"},"jaeger.operator.elasticsearch.enabled")," \u8bbe\u7f6e\u4e3a",(0,i.kt)("inlineCode",{parentName:"p"},"false"),"\uff0c\u5e76\u5c06\u5916\u90e8\u5730\u5740\u8bbe\u7f6e\u5230 ",(0,i.kt)("inlineCode",{parentName:"p"},"external_urls"),"\u5373\u53ef\u3002"),(0,i.kt)("p",null,"\u6837\u4f8b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'core_plugins:\n  jaeger:\n    operator:\n      elasticsearch:\n        enabled: false\n        # If you need to an external ElasticSearch service, disealed ElasticSearch and configured the external_urls fielda.\n        external_urls: "http://172.16.0.1:9200"\n')),(0,i.kt)("h2",{id:"\u624b\u52a8\u90e8\u7f72-jaeger"},"\u624b\u52a8\u90e8\u7f72 Jaeger"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"jaeger-operator"},"Jaeger Operator"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: jaegertracing.io/v1\nkind: Jaeger\nmetadata:\n  name: jaeger\n  namespace: observability\nspec:\n  strategy: production\n  ingress:\n    enabled: false\n  agent:\n    image: example.com/jaegertracing/jaeger-agent:1.25.0 # optional\n  query:\n    image: example.com/jaegertracing/jaeger-query:1.25.0 # optional\n  collector:\n    image: example.com/jaegertracing/jaeger-collector:1.25.0 # optional\n    options:\n      collector.zipkin.host-port: "9411"\n  storage:\n    type: elasticsearch\n    options:\n      es:\n        server-urls: http://elasticsearch:9200\n')),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"\u6ce8\u610f")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"1.25 \u7248\u672c\u7684 Jaeger \u9ed8\u8ba4\u672a\u5f00\u542f zipkin \u7aef\u53e3\uff0c\u867d\u7136\u5176\u8bbe\u7f6e\u4e86\u73af\u5883\u53d8\u91cf ",(0,i.kt)("inlineCode",{parentName:"p"},"COLLECTOR_ZIPKIN_HTTP_PORT")," \u4f46\u4f3c\u4e4e\u6ca1\u6709\u751f\u6548\u3002\u6240\u4ee5\u9700\u8981\u624b\u52a8\u8bbe\u7f6e ",(0,i.kt)("inlineCode",{parentName:"p"},'options: {"collector.zipkin.host-port":"9411"}'),"\uff0c\u4ee5\u4fbf\u4e8e istio \u4f7f\u7528\u3002"))),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u4fe1\u606f")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u4e3a\u4e86\u5728 kubernetes 1.18 \u4e0a\u6b63\u5e38\u4f7f\u7528 v1.25 \u7248\u672c\uff0cKubeGems \u5bf9 Jaeger Operator \u505a\u4e86\u6539\u52a8\uff0c\u4f7f\u5176\u652f\u6301 v1beta1 ingress."))),(0,i.kt)("h3",{id:"\u4e0e-istio-\u96c6\u6210"},"\u4e0e Istio \u96c6\u6210"),(0,i.kt)("p",null,"istio \u53ef\u4ee5\u4e0e jaeger \u96c6\u6210\uff0c\u5c06\u670d\u52a1\u7f51\u683c\u5185\u7684 tracing \u6570\u636e\u53d1\u9001\u81f3 jaeger \u670d\u52a1\u3002\u4e0e jaeger \u96c6\u6210\u5c31\u662f\u8ba9\u6bcf\u4e2a\u670d\u52a1\u7f51\u683c\u5185\u7684 sidecar(envoy) \u88ab\u914d\u7f6e\u4e3a\u5f00\u542f\u8ffd\u8e2a\u5e76\u53d1\u9001\u8ffd\u8e2a\u6570\u636e\u81f3 jaeger\u3002"),(0,i.kt)("p",null,"\u5b98\u65b9\u914d\u7f6e\u53c2\u89c1 \uff1a ",(0,i.kt)("a",{parentName:"p",href:"https://istio.io/latest/docs/tasks/observability/distributed-tracing/configurability/#customizing-trace-sampling"},"Configurability")),(0,i.kt)("p",null,"\u4e3b\u8981\u6709\u4e24\u4e2a\u5730\u65b9\u7684\u914d\u7f6e\uff1a"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u91c7\u6837\u65b9\u5f0f"),(0,i.kt)("li",{parentName:"ol"},"tracing \u670d\u52a1\u5668\u5730\u5740")),(0,i.kt)("p",null,"\u9700\u8981\u5728 istio-operator CR \u4e2d\u66f4\u65b0\u8bbe\u7f6e\u4e0a\u8ff0\u4e24\u4e2a\u914d\u7f6e\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: install.istio.io/v1alpha1\nkind: IstioOperator\nmetadata:\n  name: istio\n  namespace: istio-system\nspec:\n  profile: default\n  hub: example.com/istio\n  tag: 1.11.0\n  meshConfig:\n    enableTracing: true\n    defaultConfig:\n      tracing:\n        sampling: 1.0 # defualt 1%\n        zipkin:\n          address: jaeger-collector.observability:9411\n")),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"\u6ce8\u610f")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u7531\u4e8e\u5386\u53f2\u539f\u56e0 istio \u4f7f\u7528 zipkin \u534f\u8bae\u53d1\u9001\u8ffd\u8e2a\u6570\u636e\u3002",(0,i.kt)("br",null),"\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/jaegertracing/jaeger/tree/v1.24.0#backwards-compatibility-with-zipkin"},"backwards-compatibility-with-zipkin")),(0,i.kt)("p",{parentName:"div"},"\u867d\u7136 jaeger \u5ba3\u79f0\u540e\u7aef\u9002\u914d zipkin \u534f\u8bae\uff0c\u4f46\u5728\u5b9e\u9645\u4f7f\u7528\u4e2d\u4f9d\u65e7\u5931\u8d25\uff0c\u7ee7\u7eed\u4f7f\u7528 7411 \u7aef\u53e3\u3002"))))}u.isMDXComponent=!0}}]);
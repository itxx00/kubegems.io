"use strict";(self.webpackChunkkubegems_docs=self.webpackChunkkubegems_docs||[]).push([[5223],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return k}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),u=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=u(e.components);return a.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=u(t),k=r,m=p["".concat(s,".").concat(k)]||p[k]||c[k]||l;return t?a.createElement(m,i(i({ref:n},d),{},{components:t})):a.createElement(m,i({ref:n},d))}));function k(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=p;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=t[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},58215:function(e,n,t){t.d(n,{Z:function(){return r}});var a=t(67294);function r(e){var n=e.children,t=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:t,className:r},n)}},9877:function(e,n,t){t.d(n,{Z:function(){return d}});var a=t(87462),r=t(67294),l=t(72389),i=t(1907),o=t(86010),s="tabItem_LplD";function u(e){var n,t,l,u=e.lazy,d=e.block,c=e.defaultValue,p=e.values,k=e.groupId,m=e.className,b=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=p?p:b.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),v=(0,i.lx)(f,(function(e,n){return e.value===n.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var h=null===c?c:null!=(n=null!=c?c:null==(t=b.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(l=b[0])?void 0:l.props.value;if(null!==h&&!f.some((function(e){return e.value===h})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+h+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=(0,i.UB)(),y=g.tabGroupChoices,w=g.setTabGroupChoices,N=(0,r.useState)(h),x=N[0],O=N[1],T=[],C=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=k){var E=y[k];null!=E&&E!==x&&f.some((function(e){return e.value===E}))&&O(E)}var P=function(e){var n=e.currentTarget,t=T.indexOf(n),a=f[t].value;a!==x&&(C(n),O(a),null!=k&&w(k,a))},j=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a=T.indexOf(e.currentTarget)+1;t=T[a]||T[0];break;case"ArrowLeft":var r=T.indexOf(e.currentTarget)-1;t=T[r]||T[T.length-1]}null==(n=t)||n.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":d},m)},f.map((function(e){var n=e.value,t=e.label,l=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:x===n?0:-1,"aria-selected":x===n,key:n,ref:function(e){return T.push(e)},onKeyDown:j,onFocus:P,onClick:P},l,{className:(0,o.Z)("tabs__item",s,null==l?void 0:l.className,{"tabs__item--active":x===n})}),null!=t?t:n)}))),u?(0,r.cloneElement)(b.filter((function(e){return e.props.value===x}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},b.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==x})}))))}function d(e){var n=(0,l.Z)();return r.createElement(u,(0,a.Z)({key:String(n)},e))}},98721:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return d},default:function(){return b},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return k}});var a=t(87462),r=t(63366),l=(t(67294),t(3905)),i=t(9877),o=t(58215),s=["components"],u={title:"\u4f7f\u7528 Kind \u5b89\u88c5",hide_title:!0,sidebar_position:2},d=void 0,c={unversionedId:"installation/kubernetes-installation/kind",id:"installation/kubernetes-installation/kind",title:"\u4f7f\u7528 Kind \u5b89\u88c5",description:"\u4f7f\u7528 Kind \u5b89\u88c5",source:"@site/docs/installation/kubernetes-installation/kind.mdx",sourceDirName:"installation/kubernetes-installation",slug:"/installation/kubernetes-installation/kind",permalink:"/docs/installation/kubernetes-installation/kind",editUrl:"https://github.com/kubegems/kubegems.io/edit/main/docs/installation/kubernetes-installation/kind.mdx",tags:[],version:"current",lastUpdatedBy:"Link",lastUpdatedAt:1648638899,formattedLastUpdatedAt:"2022/3/30",sidebarPosition:2,frontMatter:{title:"\u4f7f\u7528 Kind \u5b89\u88c5",hide_title:!0,sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\u4f7f\u7528 Kubeadm \u5b89\u88c5 HA \u96c6\u7fa4",permalink:"/docs/installation/kubernetes-installation/kubeadm"},next:{title:"\u66f4\u591a\u914d\u7f6e",permalink:"/docs/category/\u66f4\u591a\u914d\u7f6e"}},p={},k=[{value:"\u4f7f\u7528 Kind \u5b89\u88c5",id:"\u4f7f\u7528-kind-\u5b89\u88c5",level:2},{value:"installation",id:"installation",level:3},{value:"\u521b\u5efa\u96c6\u7fa4",id:"\u521b\u5efa\u96c6\u7fa4",level:3},{value:"\u5220\u9664\u96c6\u7fa4",id:"\u5220\u9664\u96c6\u7fa4",level:3},{value:"\u9ad8\u7ea7\u6a21\u5f0f",id:"\u9ad8\u7ea7\u6a21\u5f0f",level:3},{value:"\u914d\u7f6e kind",id:"\u914d\u7f6e-kind",level:4},{value:"\u521b\u5efa\u591a\u8282\u70b9\u96c6\u7fa4",id:"\u521b\u5efa\u591a\u8282\u70b9\u96c6\u7fa4",level:4},{value:"\u8bbe\u7f6e\u63a7\u5236\u8282\u70b9\u96c6\u7fa4",id:"\u8bbe\u7f6e\u63a7\u5236\u8282\u70b9\u96c6\u7fa4",level:3},{value:"\u6307\u5b9a Kubernetes \u7248\u672c",id:"\u6307\u5b9a-kubernetes-\u7248\u672c",level:3},{value:"\u542f\u7528 Feature Gates",id:"\u542f\u7528-feature-gates",level:3}],m={toc:k};function b(e){var n=e.components,t=(0,r.Z)(e,s);return(0,l.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u4f7f\u7528-kind-\u5b89\u88c5"},"\u4f7f\u7528 Kind \u5b89\u88c5"),(0,l.kt)("hr",null),(0,l.kt)("p",null,'kind\u662f\u4e00\u4e2a\u4f7f\u7528Docker\u5bb9\u5668 "\u8282\u70b9 "\u8fd0\u884c\u672c\u5730Kubernetes\u96c6\u7fa4\u7684\u5de5\u5177\u3002kind\u4e3b\u8981\u662f\u4e3a\u6d4b\u8bd5Kubernetes\u672c\u8eab\u800c\u8bbe\u8ba1\uff0c\u4f46\u4e5f\u53ef\u7528\u4e8e\u672c\u5730\u5f00\u53d1\u6216CI\u3002\u672c\u6587\u901a\u8fc7\u4ecb\u7ecdkind\u7684\u4f7f\u7528\uff0c\u6307\u5bfc\u7528\u6237\u5728\u672c\u5730\u73af\u5883\u5feb\u901f\u542f\u52a8\u4e00\u4e2akubernetes\u670d\u52a1\u7528\u4e8e\u90e8\u7f72 kubegems\u3002'),(0,l.kt)("h3",{id:"installation"},"installation"),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u4fe1\u606f")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},(0,l.kt)("inlineCode",{parentName:"p"},"kind")," \u65e0\u9700\u4f9d\u8d56 ",(0,l.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/kubectl/overview/"},(0,l.kt)("inlineCode",{parentName:"a"},"kubectl")),"\uff0c\u4f46\u60a8\u4ecd\u7136\u9700\u8981\u5b89\u88c5 kubectl \u5de5\u5177\u7528\u4e8e\u64cd\u4f5c kubernetes \u8d44\u6e90\u3002\u5b89\u88c5\u53c2\u8003 ",(0,l.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/tools/install-kubectl/"},"kubectl installation docs"),"."))),(0,l.kt)(i.Z,{mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"linux",label:"\u4f7f\u7528 Linux \u5b89\u88c5",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"curl -Lo ./kind https://kind.sigs.k8s.io/dl/{{< stableVersion >}}/kind-linux-amd64\nchmod +x ./kind\nmv ./kind /some-dir-in-your-PATH/kind\n"))),(0,l.kt)(o.Z,{value:"mac",label:"\u4f7f\u7528 MacOS \u5b89\u88c5",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"curl -Lo ./kind https://kind.sigs.k8s.io/dl/{{< stableVersion >}}/kind-darwin-amd64\nchmod +x ./kind\nmv ./kind /some-dir-in-your-PATH/kind\n"))),(0,l.kt)(o.Z,{value:"windows",label:"\u4f7f\u7528 Windows \u5b89\u88c5",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"curl.exe -Lo kind-windows-amd64.exe https://kind.sigs.k8s.io/dl/{{< stableVersion >}}/kind-windows-amd64\nMove-Item .\\kind-windows-amd64.exe c:\\some-dir-in-your-PATH\\kind.exe\n")))),(0,l.kt)("h3",{id:"\u521b\u5efa\u96c6\u7fa4"},"\u521b\u5efa\u96c6\u7fa4"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'kind create cluster --name my-cluster\nCreating cluster "my-cluster" ...\n \u2713 Ensuring node image (kindest/node:v1.15.3) \ud83d\uddbc\n \u2713 Preparing nodes \ud83d\udce6\n \u2713 Creating kubeadm config \ud83d\udcdc\n \u2713 Starting control-plane \ud83d\udd79\ufe0f\nCluster creation complete. You can now use the cluster with:\n\nexport KUBECONFIG="$(kind get kubeconfig-path --name="my-cluster")"\nkubectl cluster-info\n')),(0,l.kt)("h3",{id:"\u5220\u9664\u96c6\u7fa4"},"\u5220\u9664\u96c6\u7fa4"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"kind delete cluster\n")),(0,l.kt)("h3",{id:"\u9ad8\u7ea7\u6a21\u5f0f"},"\u9ad8\u7ea7\u6a21\u5f0f"),(0,l.kt)("h4",{id:"\u914d\u7f6e-kind"},"\u914d\u7f6e kind"),(0,l.kt)("p",null,"\u60a8\u53ef\u4ee5\u901a\u8fc7\u6307\u5b9a\u53c2\u6570",(0,l.kt)("inlineCode",{parentName:"p"},"--config"),"\uff0c\u5728 kind \u521b\u5efa\u96c6\u7fa4\u9636\u6bb5\u6765\u81ea\u5b9a\u4e49\u914d\u7f6e kubernetes \u96c6\u7fa4\u5b89\u88c5"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"kind create cluster --config kind-example-config.yaml\n")),(0,l.kt)("h4",{id:"\u521b\u5efa\u591a\u8282\u70b9\u96c6\u7fa4"},"\u521b\u5efa\u591a\u8282\u70b9\u96c6\u7fa4"),(0,l.kt)("p",null,"\u60a8\u53ef\u4ee5\u5728 node \u4e2d\u6dfb\u52a0 worker \u5bf9\u8c61\u6765\u5b9a\u4e49 kind \u5728\u521b\u5efa kubernetes \u96c6\u7fa4\u65f6\u7684node \u6570\u91cf\uff0c\u914d\u7f6e\u5982\u4e0b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"# three node (two workers) cluster config\nkind: Cluster\napiVersion: kind.x-k8s.io/v1alpha4\nnodes:\n- role: control-plane\n- role: worker\n- role: worker\n")),(0,l.kt)("h3",{id:"\u8bbe\u7f6e\u63a7\u5236\u8282\u70b9\u96c6\u7fa4"},"\u8bbe\u7f6e\u63a7\u5236\u8282\u70b9\u96c6\u7fa4"),(0,l.kt)("p",null,"\u60a8\u53ef\u4ee5\u914d\u7f6e\u591a\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"control-plane")," \u7528\u4e8e\u521b\u5efa\u9ad8\u53ef\u7528\u7684 kubernetes \u96c6\u7fa4"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"kind: Cluster\napiVersion: kind.x-k8s.io/v1alpha4\nnodes:\n- role: control-plane\n- role: control-plane\n- role: control-plane\n- role: worker\n- role: worker\n- role: worker\n")),(0,l.kt)("h3",{id:"\u6307\u5b9a-kubernetes-\u7248\u672c"},"\u6307\u5b9a Kubernetes \u7248\u672c"),(0,l.kt)("p",null,"\u60a8\u53ef\u4ee5\u901a\u8fc7\u5728 nodes \u5bf9\u8c61\u4e2d\u5b9a\u4e49 kind \u7684 nodeimage \u7248\u672c\u6765\u6307\u5b9a\u5b89\u88c5\u7684 kubernetes \u7248\u672c\u3002\u60a8\u53ef\u4ee5\u5728 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/kubernetes-sigs/kind/releases"},"releases page"),"\u4e2d\u67e5\u9605 kind \u652f\u6301\u7684 kubernetes \u53d1\u884c\u7248\u955c\u50cf\u5217\u8868\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"kind: Cluster\napiVersion: kind.x-k8s.io/v1alpha4\nnodes:\n- role: control-plane\n  image: kindest/node:v1.16.4@sha256:b91a2c2317a000f3a783489dfb755064177dbc3a0b2f4147d50f04825d016f55\n- role: worker\n  image: kindest/node:v1.16.4@sha256:b91a2c2317a000f3a783489dfb755064177dbc3a0b2f4147d50f04825d016f55\n")),(0,l.kt)("h3",{id:"\u542f\u7528-feature-gates"},"\u542f\u7528 Feature Gates"),(0,l.kt)("p",null,"Feature gates \u662f\u4e00\u5bf9 kv \u952e\u503c\u5bf9\u7528\u4e8e\u5b9a\u4e49 kubernetes \u662f\u5426\u5f00\u542f\u67d0\u4e9b\u7279\u6027\uff0c\u4f60\u53ef\u4ee5\u5728 featureGates \u4e2d\u542f\u7528\u5b83\u4eec"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"kind: Cluster\napiVersion: kind.x-k8s.io/v1alpha4\nfeatureGates:\n  FeatureGateName: true\n")))}b.isMDXComponent=!0}}]);
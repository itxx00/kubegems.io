"use strict";(self.webpackChunkkubegems_docs=self.webpackChunkkubegems_docs||[]).push([[4148],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return k}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),o=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=o(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=o(n),k=i,d=p["".concat(u,".").concat(k)]||p[k]||c[k]||a;return n?r.createElement(d,l(l({ref:t},m),{},{components:n})):r.createElement(d,l({ref:t},m))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=p;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:i,l[1]=s;for(var o=2;o<a;o++)l[o]=n[o];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},58159:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return u},default:function(){return k},frontMatter:function(){return s},metadata:function(){return o},toc:function(){return c}});var r=n(87462),i=n(63366),a=(n(67294),n(3905)),l=["components"],s={slug:"sidecarless-mesh",title:"sidecarless-mesh\u65b9\u6848\u53ef\u884c\u6027\u9a8c\u8bc1",authors:["zhanghe"],tags:["ebpf","cilium","sidecarless"]},u=void 0,o={permalink:"/blog/sidecarless-mesh",source:"@site/blog/sidecarless-mesh/2022-03-22-sidecarless-mesh.md",title:"sidecarless-mesh\u65b9\u6848\u53ef\u884c\u6027\u9a8c\u8bc1",description:"\u4f20\u7edf\u65b9\u6848\u4e0esidecarless\u65b9\u6848\u5bf9\u6bd4",date:"2022-03-22T00:00:00.000Z",formattedDate:"2022\u5e743\u670822\u65e5",tags:[{label:"ebpf",permalink:"/blog/tags/ebpf"},{label:"cilium",permalink:"/blog/tags/cilium"},{label:"sidecarless",permalink:"/blog/tags/sidecarless"}],readingTime:3.39,truncated:!1,authors:[{name:"zhanghe",title:"developer@kubegems.io",url:"https://github.com/zhanghe9702",imageURL:"https://github.com/zhanghe9702.png",key:"zhanghe"}],frontMatter:{slug:"sidecarless-mesh",title:"sidecarless-mesh\u65b9\u6848\u53ef\u884c\u6027\u9a8c\u8bc1",authors:["zhanghe"],tags:["ebpf","cilium","sidecarless"]},nextItem:{title:"\u767b\u9646\u548c\u8ba4\u8bc1\u8bbe\u8ba1",permalink:"/blog/kubegems-auth"}},m={authorsImageUrls:[void 0]},c=[{value:"\u4f20\u7edf\u65b9\u6848\u4e0esidecarless\u65b9\u6848\u5bf9\u6bd4",id:"\u4f20\u7edf\u65b9\u6848\u4e0esidecarless\u65b9\u6848\u5bf9\u6bd4",level:2},{value:"kind \u96c6\u7fa4\u642d\u5efa\u6b65\u9aa4",id:"kind-\u96c6\u7fa4\u642d\u5efa\u6b65\u9aa4",level:2},{value:"\u5f00\u53d1\u73af\u5883\u642d\u5efa\u5de5\u4f5c",id:"\u5f00\u53d1\u73af\u5883\u642d\u5efa\u5de5\u4f5c",level:2}],p={toc:c};function k(e){var t=e.components,n=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u4f20\u7edf\u65b9\u6848\u4e0esidecarless\u65b9\u6848\u5bf9\u6bd4"},"\u4f20\u7edf\u65b9\u6848\u4e0esidecarless\u65b9\u6848\u5bf9\u6bd4"),(0,a.kt)("img",{src:"/img/docs/sidecarless-mesh.webp",width:"100%"}),(0,a.kt)("h2",{id:"kind-\u96c6\u7fa4\u642d\u5efa\u6b65\u9aa4"},"kind \u96c6\u7fa4\u642d\u5efa\u6b65\u9aa4"),(0,a.kt)("p",null,"   \u5b89\u88c5kind\u8bf7\u53c2\u8003",(0,a.kt)("a",{parentName:"p",href:"https://kind.sigs.k8s.io/docs/user/quick-start/#installing-from-release-binaries"},"kind install"),",\u5047\u5b9a",(0,a.kt)("inlineCode",{parentName:"p"},"GOPATH=$HOME/go")),(0,a.kt)("h1",{id:"\u6784\u5efakubegems\u9002\u914d\u7684k8s-node-image"},"\u6784\u5efakubegems\u9002\u914d\u7684k8s node-image"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"mkdir $GOPATH/src/k8s.io && cd $GOPATH/src/k8s.io")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"git clone https://github.com/kubernetes/kubernets")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"git check -b kubegems_test v1.21.1")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"kind build node-image"),(0,a.kt)("br",{parentName:"li"}),"\u68c0\u67e5\u662f\u5426\u6210\u529f\u6784\u5efa\u955c\u50cf",(0,a.kt)("br",{parentName:"li"}),(0,a.kt)("inlineCode",{parentName:"li"},"docker images  | grep kindest/node"))),(0,a.kt)("h1",{id:"\u6784\u5efak8s\u96c6\u7fa4"},"\u6784\u5efak8s\u96c6\u7fa4"),(0,a.kt)("p",null,"   \u9700\u8981\u4f7f\u7528\u7684kind\u914d\u7f6e\u6587\u4ef6",(0,a.kt)("inlineCode",{parentName:"p"},"kind-example-config.yaml"),"  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'kind: Cluster\napiVersion: kind.x-k8s.io/v1alpha4\nkubeadmConfigPatches:\n- |\n  apiServer:\n    extraArgs:\n      v: "4"\n  controllerManager:\n    extraArgs:\n      v: "4"\n  scheduler:\n    extraArgs:\n      v: "4"\n  apiVersion: kubelet.config.k8s.io/v1beta1\n  kind: KubeletConfiguration\n  evictionHard:\n    nodefs.available: "0%"\n- |\n  apiVersion: kubeadm.k8s.io/v1beta2\n  kind: InitConfiguration\n  nodeRegistration:\n    kubeletExtraArgs:\n      v: "4"\n- |\n  apiVersion: kubeadm.k8s.io/v1beta2\n  kind: JoinConfiguration\n  nodeRegistration:\n    kubeletExtraArgs:\n      v: "4"\nnetworking:\n  disableDefaultCNI: true\n  podSubnet: "10.0.0.0/16"\n  serviceSubnet: "10.1.0.0/16"\nnodes:\n- role: control-plane\n- role: worker\n- role: worker\n- role: worker\n')),(0,a.kt)("hr",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"NOTE"),(0,a.kt)("br",{parentName:"p"}),"\n","\u914d\u7f6e\u9879\u4e00\u5b9a\u8981\u8bbe\u7f6e",(0,a.kt)("inlineCode",{parentName:"p"},"disableDefaultCNI: true")),(0,a.kt)("hr",null),(0,a.kt)("p",null,"   \u521b\u5efacluster",(0,a.kt)("br",{parentName:"p"}),"\n","",(0,a.kt)("inlineCode",{parentName:"p"},"kind create cluster --config=kind-example-config.yaml --image=kindest/node:latest"),"  "),(0,a.kt)("h1",{id:"\u5b89\u88c5cilium-service-mesh\u955c\u50cf"},"\u5b89\u88c5cilium service-mesh\u955c\u50cf"),(0,a.kt)("p",null,"  \u5b89\u88c5cilium-cli  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"curl -L --remote-name-all https://github.com/cilium/cilium-cli/releases/latest/download/cilium-linux-amd64.tar.gz{,.sha256sum}\nsha256sum --check cilium-linux-amd64.tar.gz.sha256sum\nsudo tar xzvfC cilium-linux-amd64.tar.gz /usr/local/bin\nrm cilium-linux-amd64.tar.gz{,.sha256sum}\n")),(0,a.kt)("hr",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"NOTE"),(0,a.kt)("br",{parentName:"p"}),"\n","\u8bf7\u4fdd\u969ccilium-cli\u7248\u672c > v0.10.0  "),(0,a.kt)("hr",null),(0,a.kt)("p",null,"  \u4f7f\u7528\u5982\u4e0b\u4e00\u5c0f\u6bb5\u811a\u672c\u6765\u7b80\u5316kind\u4e0a\u7684\u5b89\u88c5\u8fc7\u7a0b,\u5c06\u4e4b\u547d\u540d\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"load.sh")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'ciliumMeshImage=("quay.io/cilium/cilium-service-mesh:v1.11.0-beta.1" "quay.io/cilium/operator-generic-service-mesh:v1.11.0-beta.1" "quay.io/cilium/hubble-relay-service-mesh:v1.11.0-beta.1")\nfor i in ${ciliumMeshImage[@]}\ndo\n  docker pull $i\n  kind load docker-image $i\ndone\n\n')),(0,a.kt)("p",null,"   \u6267\u884c",(0,a.kt)("inlineCode",{parentName:"p"},"./load.sh"),(0,a.kt)("br",{parentName:"p"}),"\n","\u6267\u884c\u547d\u4ee4"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"   cilium install --version -service-mesh:v1.11.0-beta.1 --config enable-envoy-config=true  --datapath-mode=vxlan  --kube-proxy-replacement=probe \n")),(0,a.kt)("hr",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"NOTE"),(0,a.kt)("br",{parentName:"p"}),"\n","\u9009\u9879\u89e3\u91ca: "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-service-mesh:v1.11.0-beta.1"),"\u662f\u5b8c\u6574\u7684\u7248\u672c\u540e\u7f00, cilium-cli(>v0.10.0)\u4f1a\u901a\u8fc7\u6b63\u5219\u8868\u8fbe\u5f0f\u6765\u5339\u914d,\u8bf7\u4fdd\u969c\u4e0d\u8981\u51fa\u9519  "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"enable-envoy-config=true")," \u4f7f\u80fd\u5bf9\u5e94\u7684k8s CR"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--datapath-mode=vxlan")," \u76ee\u524dmesh\u529f\u80fd\u8fd8\u4e0d\u652f\u6301native routing, \u5fc5\u987b\u4e3atunnel\u6a21\u5f0f,\u8be6\u89c1issue",(0,a.kt)("br",{parentName:"li"}),(0,a.kt)("a",{parentName:"li",href:"https://github.com/cilium/cilium-service-mesh-beta/issues/9"},"L7 traffic examples need tunnelling datapath mode")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--kube-proxy-replacement=probe")," \u4f7f\u80fdbpf\u76f8\u5173feature\u63a2\u9488, \u6839\u636e\u5185\u6838\u7248\u672c\u5bf9bpf\u7684\u652f\u6301\u80fd\u529b\u8bbe\u7f6ecilium-agent\u7684\u914d\u7f6e  ")),(0,a.kt)("hr",null),(0,a.kt)("p",null,"  \u9a8c\u8bc1\u5b89\u88c5\u7ed3\u679c",(0,a.kt)("inlineCode",{parentName:"p"},"cilium status")),(0,a.kt)("h1",{id:"\u5b89\u88c5kubegems"},"\u5b89\u88c5kubegems"),(0,a.kt)("p",null,"  \u8be6\u7ec6\u6b65\u9aa4\u8bf7\u53c2\u8003",(0,a.kt)("a",{parentName:"p",href:"https://github.com/kubegems/installer-operator#quick-start"},"kubegems quick start"),"  "),(0,a.kt)("h1",{id:"\u9a8c\u8bc1\u6b65\u9aa4"},"\u9a8c\u8bc1\u6b65\u9aa4"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"ingress\u76f8\u5173\u9a8c\u8bc1 ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/cilium/cilium-service-mesh-beta/blob/main/kubernetes-ingress/http.md"},"ingress"),(0,a.kt)("br",{parentName:"li"}),"kind\u7248\u672c\u96c6\u7fa4\u7684ingress\u9a8c\u8bc1\u9700\u8981\u4fee\u6539\u5185\u6838\u542f\u52a8\u53c2\u6570,\u56e0\u4e3asocket-level\u7684BPF\u7a0b\u5e8f\u6682\u65f6\u65e0\u6cd5\u51c6\u786e\u5224\u65ad\u4e0a\u4e0b\u6587\u662f\u5426\u5904\u4e8ehost ns,\u89e3\u51b3\u65b9\u6848\u662f\u542f\u52a8full kube-proxy replacement,\n\u8fd9\u4e2a\u9700\u8981\u7981\u6b62cgroup v1,\u7981\u6b62cgroup v1(ubuntu21.04)\u547d\u4ee4\u5982\u4e0b  ")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'sudo vim /etc/default/grub\n+ GRUB_CMDLINE_LINUX="cgroup_no_v1=all"\nsudo reboot\n')),(0,a.kt)("p",null,"  \u8be6\u7ec6\u80cc\u666f\u5206\u6790\u53c2\u89c1",(0,a.kt)("a",{parentName:"p",href:"https://github.com/cilium/cilium-service-mesh-beta/issues/3"},"issue")," "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"metric\u76f8\u5173\u9a8c\u8bc1 ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/cilium/cilium-service-mesh-beta/tree/main/custom-envoy-listener"},"Open Telemetry")),(0,a.kt)("li",{parentName:"ul"},"l7 traffic ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/cilium/cilium-service-mesh-beta/tree/main/l7-traffic-management"},"L7-aware Traffic Management"))),(0,a.kt)("h2",{id:"\u5f00\u53d1\u73af\u5883\u642d\u5efa\u5de5\u4f5c"},"\u5f00\u53d1\u73af\u5883\u642d\u5efa\u5de5\u4f5c"),(0,a.kt)("p",null,"  \u5f85\u7eed"),(0,a.kt)("h1",{id:"\u9047\u5230\u7684\u95ee\u9898\u4ee5\u53ca\u89e3\u51b3\u65b9\u6cd5"},"\u9047\u5230\u7684\u95ee\u9898\u4ee5\u53ca\u89e3\u51b3\u65b9\u6cd5"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7f16\u8bd1\u5668\u7248\u672c\u548c\u5185\u6838\u7248\u672c\u7684\u9009\u62e9\n\u76ee\u524d\u6211\u4f7f\u7528\u7684ubuntu21.04,clang-14\u662f\u6709\u95ee\u9898\u7684,\u5185\u6838\u7248\u672c\u8f83\u4f4e,\u4f46\u7f16\u8bd1\u5668\u7248\u672c\u8f83\u9ad8,\u63a8\u8350ubuntu20.04 LTS + clang-10\n\u6211\u76ee\u524d\u63d0\u4e86\u4e00\u4e9b\u76f8\u5173issue,\u5f85\u8fdb\u4e00\u6b65\u5206\u6790\u89e3\u51b3",(0,a.kt)("br",{parentName:"li"}),(0,a.kt)("a",{parentName:"li",href:"https://github.com/cilium/cilium/issues/18861"},"llvm"),(0,a.kt)("br",{parentName:"li"}),(0,a.kt)("a",{parentName:"li",href:"https://github.com/cilium/cilium-service-mesh-beta/issues/25"},"operator"),"  "),(0,a.kt)("li",{parentName:"ul"},"iptable\u6a21\u5f0f\u7684k8s\u9650\u5236",(0,a.kt)("br",{parentName:"li"}),"cilium\u5b9e\u73b0ingress\u65b9\u6848\u8f83\u4e3a\u7279\u6b8a,\u6ca1\u6709\u548cistio-gateway/nginx\u4e00\u6837\u5efa\u7acb\u5bf9\u5e94\u7684\u771f\u5b9e\u7684endpoint POD,\u53ea\u6709\u4e00\u4e2aloadbalancer service,\u8fd9\u6837\n\u76f4\u63a5\u5728\u865a\u62df\u673a\u73af\u5883\u4e0anodeport\u65b9\u5f0f\u4e0d\u5de5\u4f5c,\u56e0\u4e3afilter\u8868\u4e2d\u4f1a\u6709\u5bf9\u5e94\u7684REJECT\u89c4\u5219, \u53c2\u89c1k8s\u6e90\u4ee3\u7801",(0,a.kt)("br",{parentName:"li"}),(0,a.kt)("a",{parentName:"li",href:"https://github.com/kubernetes/kubernetes/blob/18df5ad1fdce9d4f7c9c04a9ea4bdcc7a7400a16/pkg/proxy/iptables/proxier.go#L1177-L1253"},"https://github.com/kubernetes/kubernetes/blob/18df5ad1fdce9d4f7c9c04a9ea4bdcc7a7400a16/pkg/proxy/iptables/proxier.go#L1177-L1253"))))}k.isMDXComponent=!0}}]);
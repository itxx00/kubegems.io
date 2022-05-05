"use strict";(self.webpackChunkkubegems_docs=self.webpackChunkkubegems_docs||[]).push([[1477],{30010:function(e){e.exports=JSON.parse('{"blogPosts":[{"id":"kubegems-logging","metadata":{"permalink":"/blog/kubegems-logging","source":"@site/blog/KubeGems Logging/2022-04-11-kubegems-logging-design.md","title":"KubeGems \u4e2d\u7684\u65e5\u5fd7\u8bbe\u8ba1","description":"KubeGems Logging \u670d\u52a1\u4e3b\u8981\u9762\u5411\u5e73\u53f0\u5185\u90e8\u4ee5\u53ca\u5e73\u53f0\u5185\u79df\u6237\u63d0\u4f9b\u65e5\u5fd7\u91c7\u96c6\u3001\u89e3\u6790\u3001\u4f20\u8f93\u548c\u5b58\u50a8\u7b49\u76f8\u5173\u7684\u80fd\u529b\u3002\u4f9d\u9760 Logging Operator \u5bf9\u65e5\u5fd7\u7684\u914d\u7f6e\u548c\u8def\u7531\u7ba1\u7406\uff0c\u5b9e\u73b0\u5e73\u53f0\u7684\u7ec8\u7aef\u7528\u6237\u53ef\u4ee5\u5bf9\u5e94\u7528\u8fd0\u884c\u671f\u95f4\u7684\u65e5\u5fd7\u8fdb\u884c\u5b9e\u65f6\u67e5\u8be2\u548c\u5206\u6790\u3002KubeGems \u65e5\u5fd7\u6301\u4e45\u5316\u91c7\u7528 Grafana Loki \u5b9e\u73b0\u3002","date":"2022-04-11T00:00:00.000Z","formattedDate":"2022\u5e744\u670811\u65e5","tags":[{"label":"logging","permalink":"/blog/tags/logging"},{"label":"kubernetes","permalink":"/blog/tags/kubernetes"},{"label":"loki","permalink":"/blog/tags/loki"},{"label":"logging-operator","permalink":"/blog/tags/logging-operator"},{"label":"observability","permalink":"/blog/tags/observability"}],"readingTime":16.225,"truncated":false,"authors":[{"name":"LinkMaq","title":"developer@kubegems.io","url":"https://github.com/LinkMaq","imageURL":"https://github.com/LinkMaq.png","key":"LinkMaq"}],"frontMatter":{"slug":"kubegems-logging","title":"KubeGems \u4e2d\u7684\u65e5\u5fd7\u8bbe\u8ba1","authors":["LinkMaq"],"tags":["logging","kubernetes","loki","logging-operator","observability"]},"nextItem":{"title":"KubeGems \u7528\u6237\u8ba4\u8bc1\u548c\u767b\u5f55\u8bbe\u8ba1","permalink":"/blog/kubegems-auth"}},"content":"![](https://github.com/kubegems/.github/blob/master/static/image/kubegem-logo.jpg?raw=true)\\n\\n`KubeGems Logging` \u670d\u52a1\u4e3b\u8981\u9762\u5411\u5e73\u53f0\u5185\u90e8\u4ee5\u53ca\u5e73\u53f0\u5185\u79df\u6237\u63d0\u4f9b\u65e5\u5fd7\u91c7\u96c6\u3001\u89e3\u6790\u3001\u4f20\u8f93\u548c\u5b58\u50a8\u7b49\u76f8\u5173\u7684\u80fd\u529b\u3002\u4f9d\u9760 Logging Operator \u5bf9\u65e5\u5fd7\u7684\u914d\u7f6e\u548c\u8def\u7531\u7ba1\u7406\uff0c\u5b9e\u73b0\u5e73\u53f0\u7684\u7ec8\u7aef\u7528\u6237\u53ef\u4ee5\u5bf9\u5e94\u7528\u8fd0\u884c\u671f\u95f4\u7684\u65e5\u5fd7\u8fdb\u884c\u5b9e\u65f6\u67e5\u8be2\u548c\u5206\u6790\u3002KubeGems \u65e5\u5fd7\u6301\u4e45\u5316\u91c7\u7528 Grafana Loki \u5b9e\u73b0\u3002\\n\\n## \u6838\u5fc3\u9700\u6c42\\n\\n### \u591a\u79df\u6237\\n\\nKubeGems \u662f\u4e00\u4e2a\u591a\u79df\u6237\u5e73\u53f0\uff0c\u57fa\u4e8e\u6b64\u573a\u666f\u3002\u5e73\u53f0\u5185\u90e8\u5bf9\u4e8e\u79df\u6237\u5e94\u7528\u4ea7\u751f\u7684\u65e5\u5fd7\u5e94\u8be5\u5177\u5907**\u72ec\u7acb\u7684\u89e3\u6790\u914d\u7f6e\u4ee5\u53ca\u8def\u7531\u89c4\u5219**\u3002\\n\\n### \u7cfb\u7edf\u9c81\u68d2\u6027\\n\\n- \u9ad8\u6027\u80fd\\n  - \u65e5\u5fd7\u91c7\u96c6\u548c\u8f6c\u53d1\u6027\u80fd\u81f3\u5c11\u9700\u5904\u7406 10K line/sec\\n  - \u652f\u6301\u91c7\u53d6\u65e5\u5fd7\u9650\u6d41\u7b56\u7565\\n  - \u65e5\u5fd7\u5ef6\u8fdf\u4e0d\u5f97\u4f4e\u4e8e 5min\\n\\n- \u53ef\u6269\u5c55\\n  - \u67b6\u6784\u652f\u6301\u7075\u6d3b\u7684\u6c34\u5e73\u6269\u5c55\u4ee5\u63d0\u5347\u6574\u4f53\u65e5\u5fd7\u541e\u5410\u91cf\\n  - \u7ec4\u4ef6\u56e0\u6ee1\u8db3\u65e0\u72b6\u6001\u5c5e\u6027\\n\\n### \u53ef\u8fd0\u7ef4\u6027\\n\\n- \u53ef\u914d\u7f6e\\n  - \u65e5\u5fd7\u89c4\u5219\u548c\u8def\u7531\u7684\u914d\u7f6e\u5e94 CRD \u5316\uff0c\u7531 Operator \u7edf\u4e00\u7ba1\u7406\uff0c\u5e76\u5c3d\u91cf\u505a\u5230\u914d\u7f6e\u7b80\u5316\u3002\\n  - \u9700\u652f\u6301\u5e38\u89c1\u7684 `json \u89e3\u6790`\u3001`\u5b57\u6bb5\u589e\u5220\u6539` \u7b49\u63d2\u4ef6\u914d\u7f6e\u3002\\n  - \u5e94\u7528\u65e5\u5fd7\u5e94\u6ee1\u8db3\u53d1\u9001\u591a\u79cd\u5e38\u89c1\u7684\u6570\u636e\u7ba1\u9053\u6216\u6536\u96c6\u7cfb\u7edf\uff0c\u8bf8\u5982 kafka\u3001elasticSearch\u3001MongoDB \u7b49\u3002\\n\\n- \u53ef\u89c6\u5316\\n  - \u65e5\u5fd7\u89c4\u5219\u5e94\u5728 UI \u4e2d\u7531\u7528\u6237\u7ec4\u5408\u88c5\u914d\u7f6e\u65e5\u5fd7\u7684\u89e3\u6790\u4e0e\u8f93\u51fa\u89c4\u5219\u3002\\n\\n- \u76d1\u63a7\u4e0e\u544a\u8b66\\n  - \u65e5\u5fd7\u91c7\u96c6\u7684\u72b6\u6001\u7edf\u8ba1\uff0c\u5305\u542b\u7ec4\u4ef6\u8fd0\u884c\u72b6\u6001\u4ee5\u53ca\u65e5\u5fd7\u91c7\u96c6\u7edf\u8ba1\u3002\\n  - \u9700\u652f\u6301\u7528\u6237\u6839\u636e\u81ea\u5b9a\u4e49\u65e5\u5fd7\u7247\u6bb5\u8fdb\u884c\u8bbe\u7f6e\u544a\u8b66\u89c4\u5219\u3002\\n\\n### \u9700\u6c42\u8fb9\u754c\\n\\n- \u5bf9\u4e8e\u5e94\u7528\u65e5\u5fd7\u6ca1\u6709\u8f93\u51fa\u5230\u63a7\u5236\u53f0\uff08stdout\uff09\u7684\u573a\u666f\uff0c\u6682\u4e0d\u7eb3\u5165\u91c7\u96c6\u9700\u6c42\\n\\n>\u53ef\u91c7\u53d6\u5176\u4ed6\u65b9\u5f0f\u91cd\u5b9a\u5411\u5185\u90e8\u65e5\u5fd7\u5230\u63a7\u5236\u53f0\uff0c\u8bf8\u5982`s6-log`\\n\\n## \u65e5\u5fd7\u8bbe\u8ba1\\n\\n### Logging Operator\\n\\nLogging Operator \u662f BanzaiCloud \u4e0b\u5f00\u6e90\u7684\u4e00\u4e2a\u4e91\u539f\u751f\u573a\u666f\u4e0b\u7684\u65e5\u5fd7\u91c7\u96c6\u65b9\u6848\u3002\u5b83\u5728 2020 \u5e74 3 \u6708\u7684\u65f6\u5019\u7ecf\u8fc7\u91cd\u6784\u540e\u7684 v3 \u7248\u672c\uff0c\u5e95\u5c42\u51ed\u501f\u9ad8\u6548\u7684 fluentbit \u548c\u63d2\u4ef6\u4e30\u5bcc\u7684 flunetd\uff0cLogging Operator\u51e0\u4e4e\u5df2\u7ecf\u5b8c\u7f8e\u7684\u9002\u914d\u4e86 kubernetes \u6a21\u5f0f\u4e0b\u7684\u65e5\u5fd7\u91c7\u96c6\u573a\u666f\u3002\\n\\n\u5728 KubeGems 1.20 \u7684\u7248\u672c\u4e2d\uff0c\u6211\u4eec\u9009\u62e9\u91c7\u7528 Logging Operator \u4f5c\u4e3a\u5185\u90e8\u65e5\u5fd7\u6d41\u4f20\u7684\u6838\u5fc3\u6846\u67b6\u3002\u5176\u4e3b\u8981\u539f\u56e0\u5982\u4e0b\uff1a\\n\\n- \u539f\u751f Flow \u548c Output \u7c7b\u8d44\u6e90\u4f5c\u7528\u57df\u4e3a kubernetes \u547d\u540d\u7a7a\u95f4\uff0c\u8fd9\u4e0e KubeGems \u79df\u6237\u73af\u5883\u7684\u8d44\u6e90\u72ec\u7acb\u6027\u76f8\u8c0b\u548c\\n\\n- \u91c7\u7528\u9ad8\u6027\u80fd\u7684 fluentbit \u4f5c\u4e3a\u65e5\u5fd7\u91c7\u96c6\u5ba2\u6237\u7aef\uff0cfluentd \u4e3a\u65e5\u5fd7\u805a\u5408\u7aef\u3002flunetd \u5728 logging \u4e2d\u901a\u8fc7 `replicas` \u63a7\u5236\u526f\u672c\u6570\uff0c\u53ef\u6839\u636e\u541e\u5410\u91cf\u6c34\u5e73\u6269\u5bb9\\n\\n- flunetd \u652f\u6301\u7684\u63d2\u4ef6\u8f83\u4e3a\u4e30\u5bcc\uff0c\u6ee1\u8db3\u5f53\u524d\u57fa\u672c\u9700\u6c42\\n\\nLogging Operator \u4e0d\u8db3\uff1a\\n\\n- \u6838\u5fc3\u8d44\u6e90 Flow \u548c Output \u4ea4\u4e8e\u7528\u6237\u914d\u7f6e\u8f83\u4e3a\u56f0\u96be\uff0c\u9700\u8981 KubeGems \u5c06\u8d44\u6e90\u5c01\u88c5\uff08\u4e5f\u8bb8\u517c\u5bb9\u6e90\u5bf9\u8c61\uff09\\n- \u53ef\u89c2\u6d4b\u6027\u529f\u80fd\u8f83\u5f31\\n- \u65e5\u5fd7 Match \u90e8\u5206\u529f\u80fd\u8f83\u5f31\uff0c\u65e0\u6cd5\u901a\u8fc7\u76f4\u63a5\u5339\u914d workload \u8fdb\u884c\u5173\u8054\\n\\n### KubeGems \u65e5\u5fd7\u6574\u4f53\u67b6\u6784\\n\\n![](https://www.kubegems.io/assets/images/observability-logging-0d094d03e1d3d7e07e612975234fe44f.jpg)\\n\\n\u7531 Logging Operator \u8d1f\u8d23\u65e5\u5fd7\u7ec4\u4ef6\u7684\u8fd0\u884c\u7ba1\u7406\u548c\u914d\u7f6e\u7ba1\u7406\uff0c\u79df\u6237\u4fa7\u8d44\u6e90\u4ee5 CR \u7684\u65b9\u5f0f\u5728\u6240\u5c5e\u7684\u73af\u5883\u7a7a\u95f4\u4e2d\u7ba1\u7406\u3002Operator \u5c06 CR \u6e32\u67d3\u4e3a Fluentd \u7684\u914d\u7f6e\u6587\u4ef6\uff0c\u7528\u4e8e\u5904\u7406\u65e5\u5fd7\u7684\u8fc7\u6ee4\u548c\u8f6c\u53d1\u89c4\u5219\u3002\u53ef\u89c2\u6d4b\u90e8\u5206\uff0c\u7531 KubeGems Plugins \u670d\u52a1\u521d\u59cb\u5316 ServiceMonitor\uff0c\u6293\u53d6\u7ec4\u4ef6\u8fd0\u884c\u671f\u95f4\u7684\u72b6\u6001\u3002\\n\\n## KubeGems Logging\\n\\nKubeGems \u5bf9 Logging Operator \u7684\u5c01\u88c5\u4ec5\u6ee1\u8db3\u7b80\u5355\u7684\u4e24\u79cd\u6a21\u5f0f\u7684\u573a\u666f\uff1a\\n\\n-  \u7cbe\u7b80\u6a21\u5f0f\\n\\n    \u5f00\u7bb1\u5373\u7528\u7684\u65e5\u5fd7\u91c7\u96c6\u6a21\u5f0f\uff0c\u5bf9\u4e8e\u7528\u6237\u73af\u5883\u7a7a\u95f4\u5185\u7684\u6240\u6709\u5bb9\u5668\u5f00\u542f\u91c7\u96c6\uff0c\u5e76\u8f93\u51fa\u5230 KubeGems \u5e73\u53f0\u5185\u7f6e\u7684 Loki \u7ec4\u4ef6\u7528\u4e8e\u65e5\u5fd7\u5206\u6790\u548c\u544a\u8b66\u7b49\u573a\u666f\\n\\n- \u5c40\u90e8\u81ea\u5b9a\u4e49\u6a21\u5f0f\\n\\n    \u9762\u5411\u5e0c\u671b\u901a\u8fc7\u914d\u7f6e\u5c40\u90e8\u5bb9\u5668\u91c7\u96c6\uff0c\u5e76\u9700\u8981\u5bf9\u63a5\u5916\u90e8\u65e5\u5fd7\u5206\u6790\u7cfb\u7edf\u7684\u573a\u666f\u3002\u5219\u91c7\u7528\u6b64\u65b9\u5f0f\uff0c\u4e0d\u8fc7\u6b64\u65f6\\n\\n![](./assets/logging-flow.jpg)\\n\\n\u9664\u6b64\u4e4b\u5916\uff0c\u5bf9\u4e8e\u5e0c\u671b\u80fd\u591f\u5b8c\u5168\u638c\u63e1\u5e73\u53f0\u5185\u7684\u65e5\u5fd7\u8def\u7531\u7684\u9ad8\u7aef\u7528\u6237\uff0cKubeGems \u53ea\u9700\u517c\u5bb9\u5bf9 Logging Operator \u7684\u539f\u59cb CR \u8d44\u6e90\u5373\u53ef\u3002\\n\\n### \u7cbe\u7b80\u6a21\u5f0f\\n\\n\u5bf9\u4e8e\u901a\u7528\u573a\u666f\u4e0b\u7684\u5bb9\u5668\u63a7\u5236\u53f0\u65e5\u5fd7\u91c7\u96c6\uff0cKubeGems \u91c7\u7528``\u7cbe\u7b80\u6a21\u5f0f``\u914d\u7f6e\u89c4\u5219\uff0c\u4ec5\u9700\u5728\u7528\u6237\u754c\u9762\u4e2d\u652f\u6301 **\u4e00\u952e\u914d\u7f6e\u5f00\u542f\u65e5\u5fd7\u91c7\u96c6** \u529f\u80fd\u3002**\u4e00\u952e\u542f\u7528\u529f\u80fd**\u7684\u5b9e\u73b0\u4e3b\u8981\u5206\u4e3a\u4e24\u90e8\u5206\u3002\\n\\n![](./assets/default-logging-flow.jpg)\\n\\n1. KubeGems Installer \u670d\u52a1\u5728\u5bf9 kubernetes \u96c6\u7fa4\u542f\u7528 logging \u63d2\u4ef6\u65f6\uff0c\u5c06\u5bf9 `logging operator `\u4ee5\u53ca\u5173\u8054\u7684 `clusteroutputs/containers-console`\u8d44\u6e90\u8fdb\u884c\u521d\u59cb\u5316\u3002\\n\\n    > \u9ed8\u8ba4\u7684clusteroutput \u8d44\u6e90\u5b9a\u4e49\u4e86\u5bb9\u5668\u65e5\u5fd7\u7684\u8f93\u51fa\u8def\u5f84\u662f Loki\\n\\n2. \u7528\u6237\u521b\u5efa\u9ed8\u8ba4\u7684\u5bb9\u5668\u91c7\u96c6\u89c4\u5219\u65f6\uff0c`LabelSelector` \u4e3a\u7a7a\uff0c\u5373\u5339\u914d\u5f53\u524d\u547d\u540d\u7a7a\u95f4\u4e0b\u7684\u6240\u6709 Pod\u3002\\n3. Flow \u4e2d\u53ea\u542f\u7528 Prometheus \u63d2\u4ef6\u7528\u4e8e\u7edf\u8ba1\u91c7\u96c6\u72b6\u6001\u3002\\n4. Flow \u4e2d\u5173\u8054\u7cfb\u7edf\u9ed8\u8ba4\u7684 `clusteroutputs/containers-console`\\n\\n\u5373\u5728``\u7cbe\u7b80\u6a21\u5f0f``\u4e0b\uff0cKubeGems \u53ea\u5728\u79df\u6237\u7a7a\u95f4\u7684\u63a5\u53e3\u4e2d\u4f20\u5165\u5982\u4e0b\u53c2\u6570\uff1a\\n\\n```apl\\nPOST  observe/log/<tenant_name>/flowlite?enabled=true&namespace=tenant\\n```\\n\\n\\n|   \u53c2\u6570    |            \u91ca\u610f            | required |  Type   |\\n| :-------: | :------------------------: | :------: | :-----: |\\n|  enabled  | \u542f\u7528\u73af\u5883\u7a7a\u95f4\u7684\u65e5\u5fd7\u91c7\u96c6\u529f\u80fd |   True   | Boolean |\\n| namespace |   \u91c7\u96c6\u65e5\u5fd7\u7684\u76ee\u6807\u547d\u540d\u7a7a\u95f4   |   True   | String  |\\n\\nKubeGems \u5c06 Flows \u6e32\u67d3\u4e3a\u5982\u4e0b\u5185\u5bb9\uff1a\\n\\n```yaml\\napiVersion: logging.banzaicloud.io/v1beta1\\nkind: Flow\\nmetadata:\\n  name: default\\n  namespace: tenant\\nspec:\\n  match:\\n    - select: {}\\n  filters:\\n  - prometheus:\\n      labels:\\n        container: $.kubernetes.container_name\\n        namespace: $.kubernetes.namespace_name\\n        node: $.kubernetes.host\\n        pod: $.kubernetes.pod_name\\n      metrics:\\n      - desc: Total number of log entries generated by either application containers\\n          or system components\\n        name: logging_entry_count\\n        type: counter\\n  globalOutputRefs:\\n  - containers-console\\n```\\n\\n### \u5c40\u90e8\u81ea\u5b9a\u4e49\u6a21\u5f0f\\n\\n\u7528\u6237\u5982\u679c\u9700\u8981\u6309\u7167\u5e94\u7528\u65e5\u5fd7\u9700\u6c42\uff0c\u5c40\u90e8\u5bf9\u73af\u5883\u7a7a\u5185\u5e94\u7528\u8fdb\u884c\u65e5\u5fd7\u7684\u89c4\u5219\u548c\u8def\u7531\u65f6\uff0cKubeGems \u9700\u8981\u5bf9 Logging Operator \u7684 CR \u8d44\u6e90\u8fdb\u884c\u4f18\u5316\uff0c\u4ee5\u65b9\u9762\u5728\u7528\u6237\u754c\u9762\u4e2d\u5b9e\u73b0\u8ddf\u53cb\u597d\u7684\u4ea4\u4e92\u3002\u5176\u4e2d\u9996\u5148\u9700\u8981\u5904\u7406\u5e73\u53f0 **\u5e94\u7528\u5143\u6570\u636e** \u76f8\u5173\u7684\u4e8b\u52a1\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b Flow \u7684\u89c4\u5219\u91c7\u7528 `labelSelector `\u5bf9\u547d\u540d\u7a7a\u95f4\u5185\u8d44\u6e90\u505a\u5339\u914d\uff0c\u5982\u4e0b\uff1a\\n\\n```yaml\\napiVersion: logging.banzaicloud.io/v1beta1\\nkind: Flow\\nmetadata:\\n  name: default \\n  namespace: tenant\\nspec:\\n  localOutputRefs:\\n    - defalt\\n  match:\\n    - select:\\n        labels:\\n          app: nginx\\n```\\n\\n\u867d\u7136\u901a\u8fc7 `labelSelector`\u53ef\u4ee5\u7075\u6d3b\u63a7\u5236\u65e5\u5fd7\u91c7\u96c6\u89c4\u5219\uff0c\u4f46\u7ecf\u8fc7\u5b9e\u9645\u9a8c\u8bc1\uff0c\u8fd9\u4e2a\u903b\u8f91\u4ecd\u7136\u5b58\u5728 **\u53cd\u76f4\u89c9\u7684\u573a\u666f**\uff0c\u7528\u6237\u5927\u591a\u9700\u8981\u7684\u662f**\u5728 Selector \u9636\u6bb5\u4e0e\u5e94\u7528\u8d44\u6e90\u76f4\u63a5\u5173\u8054** \uff0c\u5f53\u7136\u6211\u4eec\u4e0d\u80fd\u76f4\u63a5\u628a`label \u4e0e workload \u505a\u7b49\u540c\u6620\u5c04`\u3002\u6211\u4eec\u9700\u8981\u901a\u8fc7\u5916\u90e8\u65b9\u5f0f\u6765\u5bf9 Label \u505a\u901a\u7528\u6027\u5339\u914d\u3002\\n\\n#### KubeGems CommonLabels\\n\\n**KubeGems \u901a\u7528\u6807\u7b7e** \u662f\u6839\u636e\u7528\u6237\u4e0a\u5c42\u64cd\u4f5c\u800c\u5bf9 Kubernetes Workload \u505a\u81ea\u52a8\u6ce8\u5165\u7684\u4e00\u7ec4\u5143\u6570\u636e\u3002\u5b83\u662f\u4e00\u7ec4\u5e38\u91cf\uff0c\u88ab\u5b9a\u4e49\u5230`common.go`\u5f53\u4e2d\u3002 \u5f53\u7528\u6237\u5728 Kubernetes \u4e2d\u505a\u8d44\u6e90\u5bf9\u8c61\u7684\u64cd\u4f5c\u65f6\uff0c\u5b83\u4f1a\u4ee5 `mutatingwebhook`\u7684\u65b9\u5f0f\u81ea\u52a8\u6ce8\u5165\u7684\u88ab\u7ba1\u7406\u7684\u8d44\u6e90\u5bf9\u8c61\u5f53\u4e2d\u3002\\n\\n![](./assets/commonLabel-timing.jpg)\\n\\nCommonLabel \u4e2d\u7684 `kubegems.io/applications` \u6216\u8005 Kubernetes \u4e2d\u7684 `app.kubernetes.io/name`\u6216`app`\u5171\u540c\u58f0\u660e\u4e86\u8be5\u5e94\u7528\u7684 workerload \u6807\u7b7e\u3002\u57fa\u4e8e\u6b64\uff0c\u7528\u6237\u5728\u521b\u5efa\u65e5\u5fd7\u89c4\u5219\u662f\uff0c\u53ef\u4ee5\u901a\u8fc7 `LabelSelector` \u5b9a\u4f4d\u5230\u73af\u5883\u4e0b\u7684\u552f\u4e00\u8d44\u6e90\u3002\u5bf9\u4e8e\u7528\u6237\u63d0\u4ea4\u7684 Flow \uff0c\u540c\u4e00\u79cd\u65e5\u5fd7\u89e3\u6790\u3001\u8def\u7531\u89c4\u5219\u7c7b\u578b\u7684\u8d44\u6e90\u53ef\u4ee5\u96c6\u4e2d\u7ba1\u7406\u914d\u7f6e\uff0c\u5982\u4e0b\uff1a\\n\\n```yaml\\napiVersion: logging.banzaicloud.io/v1beta1\\nkind: Flow\\nmetadata:\\n  name: default\\n  namespace: tenant\\nspec:\\n  localOutputRefs:\\n    - default\\n  match:\\n    - select:\\n        labels:\\n          kubegems.io/applications: nginx\\n    - select:\\n        labels:\\n          kubegems.io/applications: mysql\\n    - select:\\n        labels:\\n          app.kubernetes.io/name: tomcat\\n```\\n\\n#### \u5c40\u90e8\u6a21\u5f0f\u4e0b\u7684\u7528\u6237\u6d41\u7a0b\\n\\n![](./assets/logging-flow.jpg)\\n\\n\u5c40\u90e8\u81ea\u5b9a\u4e49\u6a21\u5f0f\u4e0b\uff0c\u5f00\u653e\u666e\u901a\u7528\u6237\u914d\u7f6e\u6709\u9650\u529f\u80fd\u7684 Flow \u4ee5\u53ca Outputs \u8d44\u6e90\u3002KubeGems \u4ecd\u7136\u9700\u8981\u5bf9 CR \u505a\u7b80\u5355\u63a5\u53e3\u5c01\u88c5\u3002\u5b83\u7684\u8c03\u7528\u6d41\u7a0b\u5982\u4e0b\uff1a\\n\\n1. \u521b\u5efa\u65e5\u5fd7\u89c4\u5219\u65f6\uff0c\u8bf7\u6c42KubeGems listWorkload \u8fd4\u56de\u5f53\u524d\u73af\u5883\u7a7a\u95f4\u4e0b\u5177\u5907\u91c7\u96c6\u6761\u4ef6\uff08 CommonLabel\uff09\u7684\u8d44\u6e90\u5217\u8868\uff0c\u7531\u7528\u6237\u5728\u524d\u7aef\u9009\u62e9\u52a0\u5165\u3002\\n1. \u7528\u6237\u754c\u9762\u5185\u63d0\u4f9b\u63d2\u4ef6\u5217\u8868\uff0c\u6709\u7528\u6237\u81ea\u5b9a\u4e49\u63d2\u4ef6\u662f\u5426\u542f\u7528\\n3. \u901a\u8fc7\u8bf7\u6c42 KubeGems listOutput \u8fd4\u56de\u5f53\u524d\u73af\u5883\u4e0b\u53ef\u7528\u7684\u65e5\u5fd7\u8def\u7531\u3002\u666e\u901a\u7528\u6237\u540c\u65f6\u4e5f\u5177\u5907\u5217\u51fa `ClusterOutput` \u8d44\u6e90(\u5b83\u7531KubeGems \u5e73\u53f0\u7ba1\u7406\u5458\u521b\u5efa)\u3002\\n4. \u65e5\u5fd7\u89c4\u5219\u5173\u8054 `localOutputRefs`\u6216\u8005 `globalOutputRefs`\u540e\u63d0\u4ea4\u7ed9 KubeGems \u540e\u53f0\u6e32\u67d3 Flow \u6587\u4ef6\u3002\\n5. Flow/Output \u8d44\u6e90\u7531 Logging Operator \u5904\u7406\uff0c\u5e76\u8fd4\u56de\u8d44\u6e90validate\u7ed3\u679c\u548c\u72b6\u6001\u3002\\n\\n![](./assets/logging-timing.jpg)\\n\\n\u5373\u5728 `\u5c40\u90e8\u81ea\u5b9a\u4e49\u6a21\u5f0f` \u4e0b\uff0cKubeGems \u5728\u79df\u6237\u7a7a\u95f4\u7684\u63a5\u53e3\u4e2d\u4f20\u5165\u5982\u4e0b\u53c2\u6570\uff1a\\n\\n\\n```apl\\nPOST  observe/log/<tenant_name>/flow?name=tenant&namespace=tenant&monitor=true&throttle=4000&geoip_keys=remote_addr&outputs=my-elasticsearch,my-kafka&clusteroutputs=loki\\n```\\n\\n|      \u53c2\u6570      |                  \u91ca\u610f                  |   required    |  Type   |\\n| :------------: | :------------------------------------: | :-----------: | :-----: |\\n|      name      |            \u65e5\u5fd7\u91c7\u96c6\u89c4\u5219\u540d\u79f0            |     True      | String  |\\n|   namespace    |         \u91c7\u96c6\u65e5\u5fd7\u7684\u76ee\u6807\u547d\u540d\u7a7a\u95f4         |     True      | String  |\\n|    monitor     |  \u542f\u7528\u65e5\u5fd7\u91c7\u96c6\u72b6\u6001\u76d1\u63a7\uff0cdefault: true   |     False     | Boolean |\\n|    throttle    |  \u542f\u7528\u5bb9\u5668\u7ea7\u65e5\u5fd7\u6761\u76ee\u9650\u901f\uff0cLines / 10s   |     False     |  Int16  |\\n|   geoip_keys   |              \u542f\u7528 GEO IP               |     False     | String  |\\n|    outputs     | \u666e\u901a\u65e5\u5fd7\u8f93\u51fa\u901a\u9053\uff0c\u591a\u4e2a\u901a\u9053\u7528 ,\u9017\u53f7\u5206\u5272 | At laeast one | String  |\\n| clusteroutputs |   \u65e5\u5fd7\u8f93\u51fa\u901a\u9053\uff0c\u591a\u4e2a\u901a\u9053\u7528 ,\u9017\u53f7\u5206\u5272   | At laeast one | String  |\\n\\n> outputs \u548c clusteroutputs \u53c2\u6570\u81f3\u5c11\u6ee1\u8db3\u4e00\u4e2a\\n\\nKubeGems \u5c06 Flow \u6e32\u67d3\u5982\u4e0b\uff1a\\n\\n```yaml\\napiVersion: logging.banzaicloud.io/v1beta1\\nkind: Flow\\nmetadata:\\n  name: tenant\\n  namespace: tenant\\nspec:\\n  filters:\\n   - geoip:\\n       geoip_lookup_keys: remote_addr\\n       records:\\n         - city: ${city.names.en[\\"remote_addr\\"]}\\n           location_array: \'\'\'[${location.longitude[\\"remote\\"]},${location.latitude[\\"remote\\"]}]\'\'\'\\n           country: ${country.iso_code[\\"remote_addr\\"]}\\n           country_name: ${country.names.en[\\"remote_addr\\"]}\\n           postal_code:  ${postal.code[\\"remote_addr\\"]}\\n  - record_modifier:\\n      records:\\n      - throttle_group_key: ${record[\'kubernetes\'][\'namespace_name\']+record[\'kubernetes\'][\'pod_name\']}\\n  - prometheus:\\n      labels:\\n        container: $.kubernetes.container_name\\n        namespace: $.kubernetes.namespace_name\\n        node: $.kubernetes.host\\n        pod: $.kubernetes.pod_name\\n      metrics:\\n      - desc: Total number of log entries generated by either application containers\\n          or system components\\n        name: logging_entry_count\\n        type: counter\\n  - throttle:\\n      group_bucket_limit: 4000\\n      group_bucket_period_s: 10\\n      group_key: throttle_group_key\\n  localOutputRefs:\\n  - my-elasticsearch\\n  - my-kafka\\n  globalOutputRefs:\\n  - loki\\n```\\n\\n### \u539f\u59cb\u6a21\u5f0f\\n\\n\u5bf9\u4e8e\u79df\u6237\u9700\u8981\u4f7f\u7528 Logging Operator \u5b8c\u6574\u7279\u6027\u6765\u505a\u81ea\u5b9a\u4e49\u65e5\u5fd7\u89e3\u6790\u573a\u666f\uff0cKubeGems \u53ea\u9700\u5728\u9875\u9762\u4e2d\u6ee1\u8db3\u5bf9 **Flow \u539f\u59cb\u683c\u5f0f **\u7684\u6821\u9a8c\u548c\u63d0\u4ea4\u5373\u53ef\u3002\\n\\n```api\\nPOST  observe/log/<tenant_name>/flow?raw=true\\n```\\n\\nBody:\\n\\n```yaml\\napiVersion: logging.banzaicloud.io/v1beta1\\nkind: Flow\\nmetadata:\\n  name: kafka\\nspec:\\n  filters:\\n   - tag_normaliser: {}\\n   - parser:\\n       remove_key_name_field: true\\n       reserve_data: true\\n       parse:\\n         type: multi_format\\n         patterns:\\n         - format: nginx\\n         - format: regexp\\n           expression: /foo/\\n         - format: none\\n  match:\\n    - select:\\n        labels:\\n          app.kubernetes.io/name: log-generator\\n  localOutputRefs:\\n    - kafka-output\\n```\\n\\n## KubeGems Log Observability\\n\\nKubeGems \u7684\u65e5\u5fd7\u53ef\u89c2\u6d4b\u6027\u4e3b\u8981\u6ee1\u8db3\u4ee5\u4e0b\u51e0\u70b9\u9700\u6c42\\n\\n- \u7528\u6237\u73af\u5883\u7a7a\u95f4\u5185\u7684\u65e5\u5fd7\u91c7\u96c6\u901f\u7387\u5206\u6790\\n- \u7528\u6237\u73af\u5883\u7a7a\u95f4\u5185\u7684\u9519\u8bef\u65e5\u5fd7\u7edf\u8ba1\\n- \u7528\u6237\u81ea\u5b9a\u4e49\u7684\u65e5\u5fd7\u544a\u8b66\u89c4\u5219\\n\\n\u9ed8\u8ba4\u60c5\u51b5\u4e0b KubeGems Logging \u63d2\u4ef6\u96c6\u6210\u4e86 Loki \u5b9e\u4f8b\u7528\u4e8e\u6301\u4e45\u5316\u5e73\u53f0\u5185\u5bb9\u5668\u65e5\u5fd7\u3002\u501f\u6709 Loki Ruler\uff0c\u53ef\u5b9e\u73b0\u65e5\u5fd7\u544a\u8b66\u548c\u9519\u8bef\u65e5\u5fd7\u5206\u6790\u76f8\u5173\u529f\u80fd\u3002 \\n\\n### \u65e5\u5fd7\u53ef\u89c2\u6d4b\u6027\u6d41\u7a0b\\n\\n![](assets/logging-alert.jpg)\\n\\n1. KubeGems Installer \u5728 Kubernetes \u96c6\u7fa4\u521d\u59cb\u5316\u9636\u6bb5\u8d1f\u8d23\u5c06 Logging \u63d2\u4ef6\u4e0b\u7684 Loki \u548c `Recording Rules` \u914d\u7f6e\u3002\\n2. \u666e\u901a\u7528\u6237\u5728\u7528\u6237\u754c\u9762\u4e2d\u521b\u5efa\u65e5\u5fd7\u544a\u8b66\u89c4\u5219\uff0c\u7531 KubeGems \u5c06\u544a\u8b66\u89c4\u5219\u4ee5 Loki API \u65b9\u5f0f\u63d0\u4ea4\u3002\\n3. \u5f53\u4ea7\u751fLoki \u4ea7\u751f\u65e5\u5fd7\u544a\u8b66\u65f6\uff0c\u7ecf\u7531 AlertManager \u5c06\u544a\u8b66\u4e8b\u4ef6\u63a8\u9001\u7ed9\u7528\u6237\uff0c\u5e76\u5728 KubeGems Webhook \u8bb0\u5f55\u3002\\n\\n\u5728\u4e0a\u8ff0\u6d41\u7a0b\u4e2d\uff0cKubeGems \u65e5\u5fd7\u544a\u8b66\u4e2d\u4ec5\u9700\u63d0\u4f9b logrules \u63a5\u53e3\uff0c\u7528\u4e8e\u7ba1\u7406\u7528\u6237\u544a\u8b66\u5185\u5bb9\u3002\\n\\n### Log Alerting Template\\n\\nLoki \u7684 Rules \u7684\u8bed\u6cd5\u89c4\u5219\u548c Prometheus \u4e00\u6837\uff0c\u533a\u522b\u53ea\u5728`expr`\u4e2d\u4f53\u73b0\u3002\u5f53\u524d KubeGems \u4e2d\u7684 Metrics \u544a\u8b66\u91c7\u7528\u7684\u662f`\u9884\u5236\u6a21\u677f` \u7684\u65b9\u5f0f\uff0c\u4ee5\u652f\u6301\u7528\u6237\u66f4\u5feb\u7684\u521b\u5efa\u89c4\u5219\u3002\u5728\u65e5\u5fd7\u544a\u8b66\u89c4\u5219\u4e5f\u53ef\u53c2\u8003\u6b64\u65b9\u5f0f\uff0c\u9884\u5236\u5e38\u89c1\u7684 LogQL \u6a21\u677f\u3002\\n\\n#### \u666e\u901a\u6a21\u677f\\n\\n\u666e\u901a\u6a21\u677f\u5373\u7528\u6237\u53ea\u9700\u8981\u8bbe\u7f6e`\u65e5\u5fd7\u5173\u952e\u5b57\u7b26`\u4ee5\u7ba1\u9053\u7684\u65b9\u5f0f\u8fc7\u6ee4\u5b57\u7b26\u3002KubeGems \u5728\u540e\u7aef\u7ec4\u88c5\u8bed\u53e5 expr \u5e76\u8bf7\u6c42 Loki API \u5b8c\u6210\u89c4\u5219\u63d0\u4ea4  \u3002\u67e5\u8be2\u8bed\u53e5\u5982\u4e0b\uff1a\\n\\n```yaml\\nsum by (pod,namespace,application) (count_over_time({pod=\\"<pod>\\",namespace=\\"<namespace>\\",applications=\\"<applications>\\"}  |~ `<your_log_string>`  |~ `<your_log_string>`[1m]))\\n```\\n\\n\\n#### \u683c\u5f0f\u5316\u6a21\u677f\uff08json/logfmt)\\n\\n\u91c7\u7528 LogQL \u7684\u683c\u5f0f\u5316\u89e3\u6790\u5668\u63d0\u53d6\u65e5\u5fd7\uff0c\u901a\u8fc7\u67e5\u627e `key-values` \u7684\u65b9\u5f0f\u8fc7\u6ee4\u7ed3\u679c\u3002\\n\\n- json \u89e3\u91ca\u5668\\n\\n```sql\\nsum by  (pod,namespace,application) (count_over_time({pod=\\"<pod>\\",namespace=\\"<namespace>\\",applications=\\"<applications>\\"}  | json |  <your_key>=<your_string>  |   __error__=\\"\\"[1m]))\\n```\\n\\n- logfmt\\n\\n```sql\\n sum by  (pod,namespace,application) (count_over_time({pod=\\"<pod>\\",namespace=\\"<namespace>\\",applications=\\"<applications>\\"}  | logfmt |  <your_key>=<your_string>  |   __error__=\\"\\"[1m]))\\n```\\n\\n#### \u9ad8\u7ea7\u6a21\u5f0f\\n\\n\u91c7\u7528 LogQL \u539f\u751f\u8bed\u53e5\u76f4\u63a5\u63d0\u4ea4 Rules\u3002\\n\\n\u4e0a\u8ff0 3 \u79cd LogQL \u9884\u5236\u6a21\u677f\uff0c\u6700\u7ec8\u63d0\u4ea4\u7684\u683c\u5f0f\u5316 alertrules \u7ed3\u6784\u5982\u4e0b\uff1a\\n\\n```yaml\\n  - name: should_fire\\n    rules:\\n      - alert: <your_log_string>-alert\\n        expr: sum by (pod,namespace,application) (count_over_time({pod=\\"<pod>\\",namespace=\\"<namespace>\\",applications=\\"<applications>\\"}  |~ `<$your_log_string>`  |~ `<$your_log_string>`[1m]))  >= <$your_thresholds>  \\n        for: 1m\\n        labels:\\n            severity: <$your_severity>\\n            pod: {{$labels.pod}}\\n            namespace: {{$labels.namespace}}\\n            application: {{labels.applicastions}}\\n        annotations:\\n            summary:  message <your_log_string> alerting ,now has {{$labels.value}}.\\n```\\n\\n### Log Recording Rules\\n\\n`Recording Rules` \u5141\u8bb8\u7528\u6237\u9884\u5148\u5c06\u9700\u8981\u8fdb\u884c\u5927\u91cf\u8ba1\u7b97\u7684\u8868\u8fbe\u5f0f\u7684\u7ed3\u679c\u8f6c\u5316\u4fdd\u5b58\u4e3a\u4e00\u7ec4\u65b0\u7684\u65f6\u95f4\u5e8f\u5217\uff0c\u5e76\u5c06\u5176\u901a\u8fc7 `remote_write`\u7684\u65b9\u5f0f\u5199\u5165 Prometheus\u3002\u5728 KubeGems \u4e2d\uff0c\u5e73\u53f0\u5c06\u63a5\u5165 `Logging Observability` \u7684\u5e94\u7528\u9884\u5236\u4e86\u901a\u7528\u6027\u7684 Error Log Rules\u3002\\n\\n\u4e0e  Alerting Rules \u4e00\u6837\uff0cRecoring Rules \u5982\u8981 Loki Ruler \u7684\u652f\u6301\uff0c\u8fd9\u90e8\u5206\u5c06\u5728 KubeGems Installer \u521d\u59cb\u5316\u4e2d\u90e8\u7f72\u5230\u60a8\u7684\u96c6\u7fa4\u3002\\n\\n> \u5173\u4e8e Loki Ruler \u5bf9 RemoteWrite \u7684\u914d\u7f6e\uff0c\u53ef\u67e5\u8003[loki/remote-write](https://grafana.com/docs/loki/latest/rules/#remote-write)\\n\\n### Log Metrics\\n\\nLog Metrics \u5728 KubeGems \u4e2d\uff0c\u7531\u7528\u6237\u63d0\u4ea4\u7684\u65e5\u5fd7\u91c7\u96c6\u5668\u4e2d\u58f0\u660e\uff0c\u8fd9\u90e8\u5206\u91c7\u7528 `fluent-plugin-prometheus`\uff0c\u6838\u5fc3\u90e8\u5206\u5373\u4e3a\u6bcf\u4e2a\u8fdb\u5165\u7ba1\u9053\u7684\u65e5\u5fd7\u6d41\u521b\u5efa\u4e00\u4e2a `\u8ba1\u6570\u5668(Counter)`\u5e76\u8bb0\u5f55\u5176\u6761\u76ee\u548c\u5143\u6570\u636e\u3002\\n\\n```yaml\\n  - prrometheus:\\n      labels:\\n        container: $.kubernetes.container_name\\n        namespace: $.kubernetes.namespace_name\\n        node: $.kubernetes.host\\n        pod: $.kubernetes.pod_name\\n      metrics:\\n      - desc: Total number of log entries generated by either application containers\\n          or system components\\n        name: logging_entry_count\\n        type: counter\\n```\\n\\n\u6700\u7ec8\u7531 Prometheus \u5c06\u6307\u6807`logging_entry_count`\u6301\u4e45\u5316\u5230\u672c\u5730\u3002\\n\\n\\n\\n## \u603b\u7ed3\\n\\nKubeGems \u4e2d\u57fa\u4e8e\u79df\u6237\u7684\u65e5\u5fd7\u91c7\u96c6\u65b9\u6848\u6574\u4f53\u8bbe\u8ba1\u91c7\u7528 Logging Operator + Loki \u67b6\u6784\uff0c\u7528\u6237\u53ef\u6839\u636e\u4f01\u4e1a\u81ea\u8eab\u7ec4\u7ec7\u7ed3\u6784\u5bf9\u5176\u8fdb\u884c\u7ba1\u7406\u548c\u9002\u914d\u3002\u5bf9\u4e8e\u5728 Kubernetes \u96c6\u7fa4\u4e2d\u64cd\u4f5c\u539f\u751f\u7684 CRD \u8d44\u6e90\u590d\u6742\u7684\u573a\u666f\u4e0b\uff0cKubeGems \u5c3d\u91cf\u8ba9\u7528\u6237\u5728\u63a5\u5165\u65e5\u5fd7\u91c7\u96c6\u3001\u76d1\u63a7\u548c\u544a\u8b66\u7684\u4e09\u4e2a\u65b9\u9762\u505a\u5230\u5f00\u7bb1\u5373\u7528\u7684\u529f\u80fd\uff0c\u6781\u5927\u7b80\u5316\u7cfb\u7edf\u7ba1\u7406\u8005\u6216\u7814\u53d1\u4eba\u5458\u7684\u662f\u5b66\u4e60\u548c\u63a5\u5165\u6210\u672c\u3002"},{"id":"kubegems-auth","metadata":{"permalink":"/blog/kubegems-auth","source":"@site/blog/kubegems-perms/2022-03-21-kubegems-auth.md","title":"KubeGems \u7528\u6237\u8ba4\u8bc1\u548c\u767b\u5f55\u8bbe\u8ba1","description":"\u4e3b\u8981\u6570\u636e\u6a21\u578b","date":"2022-03-21T00:00:00.000Z","formattedDate":"2022\u5e743\u670821\u65e5","tags":[{"label":"\u767b\u9646\u8ba4\u8bc1","permalink":"/blog/tags/\u767b\u9646\u8ba4\u8bc1"},{"label":"Auth","permalink":"/blog/tags/auth"}],"readingTime":6.435,"truncated":false,"authors":[{"name":"yud","title":"developer@kubegems.io","url":"https://github.com/pepesi","imageURL":"https://github.com/pepesi.png","key":"pepesi"}],"frontMatter":{"slug":"kubegems-auth","title":"KubeGems \u7528\u6237\u8ba4\u8bc1\u548c\u767b\u5f55\u8bbe\u8ba1","authors":["pepesi"],"tags":["\u767b\u9646\u8ba4\u8bc1","Auth"]},"prevItem":{"title":"KubeGems \u4e2d\u7684\u65e5\u5fd7\u8bbe\u8ba1","permalink":"/blog/kubegems-logging"}},"content":"## \u4e3b\u8981\u6570\u636e\u6a21\u578b\\n\\n![pic](./data-models.drawio.svg)\\n\\n\u6570\u636e\u6a21\u578b\u7684\u4e3b\u8981\u5c42\u7ea7\u5173\u7cfb\u4e3a \u79df\u6237 -> \u9879\u76ee -> \u73af\u5883 -> \u5e94\u7528;\\n\\n\u5bf9\u5e94\u5230\u96c6\u7fa4\u4e2d\u7684\u4ee5\u4e0b\u8d44\u6e90\\n\\n| \u8d44\u6e90|\u7b80\u5199| group/version| \u662f\u5426\u662fnamespaced\u8d44\u6e90| Crd|\\n| --- |--- |---|---|---|\\n|environments                      |tenv               |gems.kubegems.io/v1beta1            |false        |Environment|\\n|tenantgateways                    |tgw                |gems.kubegems.io/v1beta1            |false        |TenantGateway |\\n|tenantnetworkpolicies             |tnetpol            |gems.kubegems.io/v1beta1            |false        |TenantNetworkPolicy |\\n|tenantresourcequotas              |tquota             |gems.kubegems.io/v1beta1            |false        |TenantResourceQuota |\\n|tenants                           |ten                |gems.kubegems.io/v1beta1            |false        |Tenant |\\n\\n- \u7cfb\u7edf\u5185\u9876\u7ea7\u8d44\u6e90\u4e3a\u79df\u6237\u548c\u96c6\u7fa4,  \u79df\u6237\u548c\u96c6\u7fa4\u90fd\u7531\u7cfb\u7edf\u7ba1\u7406\u5458\u6dfb\u52a0\uff1b\u79df\u6237\u4e0e\u96c6\u7fa4\u901a\u8fc7`TenantResourceQuota`\u5173\u8054\uff0c\u4e00\u4e2a\u79df\u6237\u5728\u4e00\u4e2a\u96c6\u7fa4\u4e0b\u53ea\u80fd\u5b58\u5728\u4e00\u4e2aTenantResourceQuota;\\n\u79df\u6237\u6620\u5c04\u5230\u96c6\u7fa4\u4e2d\u7684CRD\u4e3a`Tenant`, \u79df\u6237CRD\u4e0b\u5b58\u5728`\u7f51\u7edc\u9694\u79bb\u7b56\u7565(TenantNetworkPolicy)`\u548c`\u8d44\u6e90\u9650\u5236(TenantResourceQuota)`\u4ee5\u53ca`\u79df\u6237\u7f51\u5173(TenantGateway)`, \u8fd9\u4e9b\u5b50\u8d44\u6e90\u90fd\u5c06\u5728\u79df\u6237crd\u521b\u5efa\u7684\u65f6\u5019\u9ed8\u8ba4\u521b\u5efa\uff1b\\n- \u7528\u6237(Users)\u4e0e\u79df\u6237\uff0c\u9879\u76ee\uff0c\u73af\u5883\u90fd\u5b58\u5728\u7740\u5173\u8054\u5173\u7cfb\uff0c\u8fd9\u4e9b\u5173\u8054\u5173\u7cfb\u5c06\u4e3a\u4ee5\u540e\u7684\u7528\u6237\u6743\u9650\u63d0\u4f9b\u6570\u636e\u652f\u6301\uff1b\\n- \u9879\u76ee\u4ec5\u4ec5\u662f\u5e73\u53f0\u4fa7\u7684\u6982\u5ff5\uff0c\u5b83\u8868\u793a\u4e00\u7ec4\u5e94\u7528\u7684\u96c6\u5408\\n- \u73af\u5883\u4e0e\u96c6\u7fa4\u7684namespace\u5173\u8054\uff0c\u5b9e\u73b0\u73af\u5883\u9694\u79bb\uff0c\u8d44\u6e90\u9650\u5236\uff0c\u7f51\u7edc\u9694\u79bb\u7b49\uff0c\u73af\u5883\u5219\u66f4\u591a\u7684\u662f\u8fd0\u7ef4\u76f8\u5173\u5c5e\u6027;\\n- \u5e94\u7528\u8868\u793a\u771f\u5b9e\u7684\u5e94\u7528\\n\\n## \u7528\u6237\u6743\u9650\\n\\n\u7cfb\u7edf\u7684\u7528\u6237\u6743\u9650\u4e3b\u8981\u901a\u8fc7**\u89d2\u8272**\u5b9e\u73b0, \u89d2\u8272\u53c8\u5206\u4e3a*\u7cfb\u7edf\u7ea7\u89d2\u8272*,*\u79df\u6237\u7ea7\u89d2\u8272*,*\u9879\u76ee\u7ea7\u89d2\u8272*\u548c*\u73af\u5883\u7ea7\u89d2\u8272*;\\n\\n### \u7cfb\u7edf\u7ea7\u89d2\u8272\\n\\n- **\u7cfb\u7edf\u7ba1\u7406\u5458**\u7684\u804c\u8d23\u662f\u7ba1\u7406\u7cfb\u7edf\u8d44\u6e90\uff0c\u96c6\u7fa4\uff0c\u96c6\u7fa4\u63d2\u4ef6\uff0c\u79df\u6237\u7b49; \u7cfb\u7edf\u7ba1\u7406\u5458\u62e5\u6709\u4e00\u5207\u8d44\u6e90\u7684\u64cd\u4f5c\u6743\u9650\u548c\u8bfb\u6743\u9650\\n\\t \\n- **\u666e\u901a\u7528\u6237**\u4ee3\u8868 KubeGems \u4e2d\u7684\u666e\u901a\u6210\u5458\uff0c\u7528\u666e\u901a\u7528\u6237\u89d2\u8272\u7684\u8d26\u53f7\u4ec5\u80fd\u767b\u9646\u7cfb\u7edf\uff0c\u5176\u4ed6\u79df\u6237\uff0c\u9879\u76ee\u7b49\u6743\u9650\u5c06\u6839\u636e\u79df\u6237\u548c\u9879\u76ee\u4e0b\u7684\u89d2\u8272\u5224\u65ad\\n\\n### \u79df\u6237\u7ea7\u89d2\u8272\\n\\n- **\u79df\u6237\u7ba1\u7406\u5458**\u7684\u4e3b\u8981\u804c\u8d23\u662f\u8d1f\u8d23\u79df\u6237\u7684\u6210\u5458\u7ba1\u7406\u548c\u9879\u76ee\u7ba1\u7406,\u8d1f\u8d23\u9879\u76ee\u6dfb\u52a0\u548c\u5220\u9664\uff0c\u79df\u6237\u6210\u5458\u7684\u6dfb\u52a0\u548c\u4fee\u6539; \u79df\u6237\u7ba1\u7406\u5458\u62e5\u6709\u79df\u6237\u4e0b\u7684\u4e00\u5207\u8d44\u6e90\u64cd\u4f5c\u6743\u9650\u548c\u8bfb\u6743\u9650\\n\\n- **\u79df\u6237\u6210\u5458**\u9ed8\u8ba4\u4ec5\u53ef\u4ee5\u8bfb\u79df\u6237\u4e0b\u7684\u9879\u76ee\u4fe1\u606f; \u5728\u6dfb\u52a0`\u9879\u76ee\u6210\u5458`\uff0c`\u73af\u5883\u6210\u5458`\u7684\u65f6\u5019\uff0c\u7528\u6237\u5fc5\u987b\u662f\u79df\u6237\u6210\u5458\u624d\u80fd\u4f5c\u4e3a\u9879\u76ee\u6210\u5458\u548c\u73af\u5883\u6210\u5458\u7684\u5907\u9009\u9879;\\n\\t\\n### \u9879\u76ee\u7ea7\u89d2\u8272\\n\\t\\n- **\u9879\u76ee\u7ba1\u7406\u5458**\u7684\u804c\u8d23\u662f\u8d1f\u8d23\u9879\u76ee\u7684\u6210\u5458\u7ba1\u7406\uff0c\u9879\u76ee\u7684\u73af\u5883\u7ba1\u7406\u548c\u9879\u76ee\u4e0b\u7684\u5e94\u7528\u7ba1\u7406; \u9879\u76ee\u7ba1\u7406\u5458\u62e5\u6709\u9879\u76ee\u4e0b\u7684\u4e00\u5207\u8d44\u6e90\u7684\u64cd\u4f5c\u6743\u9650\u548c\u8bfb\u6743\u9650;\\n\\n- \u9879\u76ee\u6210\u5458\u62e5\u6709\u4e09\u4e2a\u89d2\u8272\uff0c\u5206\u522b\u662f`\u5f00\u53d1` `\u6d4b\u8bd5` `\u8fd0\u7ef4`\\n\\n    - **\u9879\u76ee\u5f00\u53d1\u6210\u5458**\u53ef\u4ee5\u8bfb\u6240\u6709\u73af\u5883\uff0c\u53ea\u80fd\u64cd\u4f5c\u5f00\u53d1\u7c7b\u578b\u7684\u73af\u5883\\n    - **\u9879\u76ee\u6d4b\u8bd5\u6210\u5458**\u53ef\u4ee5\u8bfb\u6240\u6709\u73af\u5883\uff0c\u53ea\u80fd\u64cd\u4f5c\u6d4b\u8bd5\u7c7b\u578b\u7684\u73af\u5883\\n    - **\u9879\u76ee\u8fd0\u7ef4\u6210\u5458**\u53ef\u4ee5\u8bfb\u6240\u6709\u73af\u5883\uff0c\u53ef\u4ee5\u64cd\u4f5c\u5f00\u53d1 \u6d4b\u8bd5 \u751f\u4ea7\u7c7b\u578b\u7684\u73af\u5883\\n\\t\\t\\n### \u73af\u5883\u7ea7\u89d2\u8272\\n\\n- **\u73af\u5883reader**\u5728\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u9879\u76ee\u6210\u5458\u662f\u6240\u6709\u73af\u5883\u7684reader,\u5373\u53ea\u8981\u662f\u9879\u76ee\u6210\u5458\uff0c\u5c31\u80fd\u8bfb\u53d6\u6240\u6709\u7684\u73af\u5883\u6570\u636e\\n\\n- **\u73af\u5883operator**\u901a\u5e38\u4e0d\u9700\u8981\u914d\u7f6e\u8fd9\u4e2a\u89d2\u8272\uff0c\u4f46\u662f\u6709\u7279\u6b8a\u7684\u60c5\u51b5\uff0c\u4f8b\u5982\u5f00\u53d1\u9700\u8981\u64cd\u4f5c\u751f\u4ea7\u73af\u5883\u7684\u8d44\u6e90\uff0c\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u5f00\u53d1\u4eba\u5458\u53ea\u80fd\u64cd\u4f5c\u5f00\u53d1\u73af\u5883\uff0c\u8fd9\u65f6\u5019\u6388\u6743\u5f00\u53d1\u4eba\u5458\u5728\u751f\u4ea7\u73af\u5883\u662foperator\u7684\u89d2\u8272\uff0c\u5c31\u53ef\u4ee5\u64cd\u4f5c\u751f\u4ea7\u73af\u5883\u4e86;\\n\\n## \u767b\u9646\u6a21\u5757\\n\\n### \u9700\u6c42\\n\\n\u652f\u6301\u591a\u6e90\u767b\u9646(ldap, oauth2)\\n\\n- \u672c\u5730\u8ba4\u8bc1\uff0c\u652f\u6301\u8d26\u53f7+\u5bc6\u7801\u767b\u9646\\n\\n- \u5916\u90e8\u8ba4\u8bc1\uff0c\u652f\u6301ldap\u548coauth2\u7684\u8ba4\u8bc1\\n\\n### \u767b\u9646\u8bbe\u8ba1\\n\\n\u63d2\u4ef6\u5f0f\u8bbe\u8ba1\uff0c\u5141\u8bb8\u4e0d\u540c\u7c7b\u578b\u7684\u767b\u9646\u6e90\u5b9e\u73b0\u767b\u9646\u63d2\u4ef6\u5373\u53ef,\u63d2\u4ef6\u76ee\u524d\u5206\u4e3a\u4e24\u7c7b,\u5206\u522b\u662f`OAUTH`\u548c`LDAP`\\n\\n\u63d2\u4ef6\u9700\u8981\u5b9e\u73b0\u63a5\u53e3`aaa.AuthenticateIface`\u63a5\u53e3\\n\\n    type AuthenticateIface interface {\\n        // \u8fd4\u56de\u767b\u9646\u63d2\u4ef6\u7684\u540d\u5b57\\n        GetName() string\\n        // \u8fd4\u56de\u767b\u9646\u5730\u5740\\n        LoginAddr() string\\n        // , \u83b7\u53d6\u7528\u6237\u4fe1\u606f\\n        // \u9a8c\u8bc1\u51ed\u636e,\u83b7\u53d6\u6839\u636e\u7528\u6237\u63d0\u4f9b\u7684\u51ed\u636e\u83b7\u53d6\u7528\u6237\u4fe1\u606f\\n        GetUserInfo(ctx context.Context, cred *Credential) (*UserInfo, error)\\n    }\\n\\n\u767b\u9646\u6d41\u7a0b:\\n\\n1. LDAP\u7c7b\u578b\u548c\u9ed8\u8ba4\u8d26\u53f7\u5bc6\u7801\u767b\u9646,\u76f4\u63a5\u63d0\u4f9b\u767b\u9646\u7684\u7528\u6237\u548c\u5bc6\u7801\u4ee5\u53ca\u767b\u9646\u6e90\u5373\u53ef,\u767b\u9646\u540e\u5c06\u83b7\u5f97token\\n\\n2. OAUTH\u7c7b\u578b\uff0c\u5148\u83b7\u53d6\u767b\u9646\u5730\u5740\uff0c\u91cd\u5b9a\u5411\u5230\u767b\u9646\u5730\u5740\uff0c\u901a\u5e38\u8fd9\u4e2a\u767b\u9646\u5730\u5740\u4e3a\u7b2c\u4e09\u65b9\u5e73\u53f0\u7684\u8ba4\u8bc1\u6388\u6743\u754c\u9762\uff0c\u6388\u6743\u540e\u7b2c\u4e09\u65b9\u5c06\u4f1a\u91cd\u5b9a\u5411\u5230\u5e73\u53f0\u914d\u7f6e\u7684\u4e00\u4e2a\u5730\u5740\uff0c\u5e76\u4e14\u643a\u5e26\u7740\u7b2c\u4e09\u65b9\u5e73\u53f0\u7684\u4e00\u4e2a\u6388\u6743code,\u5e73\u53f0\u901a\u8fc7\u8fd9\u4e2acode\u83b7\u53d6access_token\uff0c\u518d\u5e26\u7740\u8fd9\u4e2aaccess_token\u8bbf\u95ee\u7528\u6237\u4fe1\u606f\uff0c\u901a\u8fc7\u7b2c\u4e09\u65b9\u5e73\u53f0\u4e2d\u7684`\u7528\u6237\u540d`\u4f5c\u4e3akubegems\u4e2d\u7684\u7528\u6237\uff0c\u767b\u9646\u6210\u529f\u540e\u83b7\u5f97token\\n\\n\\n### \u8ba4\u8bc1\u8bbe\u8ba1\\n\\n\u63d2\u4ef6\u5f0f\u8bbe\u8ba1\uff0c\u76ee\u524d\u4ec5\u5b9e\u73b0\u4e86\u57fa\u4e8eJWT\u7684\u8ba4\u8bc1\u65b9\u5f0f; \u9700\u8981\u5b9e\u73b0\u63a5\u53e3`aaa.UserGetterIface`\\n\\n    type UserGetterIface interface {\\n        GetUser(req *http.Request) (u user.CommonUserIface, exist bool)\\n    }\\n\\n### \u8ba4\u8bc1\u6d41\u7a0b\\n\\n\u4e0d\u540c\u7684\u8ba4\u8bc1\u63d2\u4ef6, \u4ece\u8bf7\u6c42\u5934\u4e2d\u83b7\u53d6\u9700\u8981\u7684\u4fe1\u606f\uff0c\u4f8b\u5982\u901a\u8fc7Authorization\u5934\u83b7\u53d6Bearer token,\u901a\u8fc7\u83b7\u53d6\u5230\u7684\u4fe1\u606f\u8f7d\u5165\u7528\u6237\uff0c\u5982\u679c\u6ca1\u6709\u627e\u5230\u7528\u6237\uff0c\u5219\u8868\u793a\u672a\u767b\u9646"}]}')}}]);
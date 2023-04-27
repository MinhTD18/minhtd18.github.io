import { defineClientConfig } from "@vuepress/client";
import ChartJS from "/Users/minhtd/Desktop/Blogs/vue_blog/node_modules/vuepress-plugin-md-enhance/lib/client/components/ChartJS.js";
import CodeTabs from "/Users/minhtd/Desktop/Blogs/vue_blog/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeTabs.js";
import { hasGlobalComponent } from "/Users/minhtd/Desktop/Blogs/vue_blog/node_modules/vuepress-shared/lib/client/index.js";
import { CodeGroup, CodeGroupItem } from "/Users/minhtd/Desktop/Blogs/vue_blog/node_modules/vuepress-plugin-md-enhance/lib/client/compact/index.js";
import "/Users/minhtd/Desktop/Blogs/vue_blog/node_modules/vuepress-plugin-md-enhance/lib/client/styles/container/index.scss";
import ECharts from "/Users/minhtd/Desktop/Blogs/vue_blog/node_modules/vuepress-plugin-md-enhance/lib/client/components/ECharts.js";
import "/Users/minhtd/Desktop/Blogs/vue_blog/node_modules/vuepress-plugin-md-enhance/lib/client/styles/figure.scss";
import FlowChart from "/Users/minhtd/Desktop/Blogs/vue_blog/node_modules/vuepress-plugin-md-enhance/lib/client/components/FlowChart.js";
import "/Users/minhtd/Desktop/Blogs/vue_blog/node_modules/vuepress-plugin-md-enhance/lib/client/styles/footnote.scss";
import "/Users/minhtd/Desktop/Blogs/vue_blog/node_modules/vuepress-plugin-md-enhance/lib/client/styles/image-mark.scss"
import Mermaid from "/Users/minhtd/Desktop/Blogs/vue_blog/node_modules/vuepress-plugin-md-enhance/lib/client/components/Mermaid.js";
import "/Users/minhtd/Desktop/Blogs/vue_blog/node_modules/reveal.js/dist/reveal.css";
import Presentation from "/Users/minhtd/Desktop/Blogs/vue_blog/node_modules/vuepress-plugin-md-enhance/lib/client/components/Presentation.js";
import Playground from "/Users/minhtd/Desktop/Blogs/vue_blog/node_modules/vuepress-plugin-md-enhance/lib/client/components/Playground.js";
import Tabs from "/Users/minhtd/Desktop/Blogs/vue_blog/node_modules/vuepress-plugin-md-enhance/lib/client/components/Tabs.js";
import "/Users/minhtd/Desktop/Blogs/vue_blog/node_modules/vuepress-plugin-md-enhance/lib/client/styles/tasklist.scss";
import "/Users/minhtd/Desktop/Blogs/vue_blog/node_modules/katex/dist/katex.min.css";
import "/Users/minhtd/Desktop/Blogs/vue_blog/node_modules/vuepress-plugin-md-enhance/lib/client/styles/katex.scss";
import { defineAsyncComponent } from "vue";

export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("ChartJS", ChartJS)
    app.component("CodeTabs", CodeTabs);
    if(!hasGlobalComponent("CodeGroup", app)) app.component("CodeGroup", CodeGroup);
    if(!hasGlobalComponent("CodeGroupItem", app)) app.component("CodeGroupItem", CodeGroupItem);
    app.component("ECharts", ECharts);
    app.component("FlowChart", FlowChart);
    app.component("Mermaid", Mermaid);
    app.component("Presentation", Presentation);
    app.component("Playground", Playground);
    app.component("Tabs", Tabs);
    app.component("VuePlayground", defineAsyncComponent(() => import("/Users/minhtd/Desktop/Blogs/vue_blog/node_modules/vuepress-plugin-md-enhance/lib/client/components/VuePlayground.js")));
    
  },
});

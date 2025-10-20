import "./bootstrap";
import "../css/app.css";

import { createApp, h } from "vue";
import { createInertiaApp, Head, Link } from "@inertiajs/vue3";
import Default from "./Layouts/Default.vue";
import { ZiggyVue } from "ziggy-js";
import { gsap } from "gsap";
import { createPinia } from "pinia";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

createInertiaApp({
    title: (title) => `My app ${title}`,
    resolve: (name) => {
        const pages = import.meta.glob("./Pages/**/*.vue", { eager: true });
        let page = pages[`./Pages/${name}.vue`];
        page.default.layout = page.default.layout || Default;
        return page;
    },
    setup({ el, App, props, plugin }) {
        const app = createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(ZiggyVue)
            .use(createPinia())
            .component("Head", Head)
            .component("Link", Link);
        app.config.globalProperties.$gsap = gsap;
        app.mount(el);
    },
    progress: {
        color: "#29d",
        includeCSS: true,
        showSpinner: false,
    },
});

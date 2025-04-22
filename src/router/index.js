import Home from "@/views/Home.vue";
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
        meta: { title: "Home" },
    },
    {
        path: "/about",
        name: "About",
        component: () => import("../views/About.vue"),
        meta: { title: "About" },
    },
    {
        path: "/projects",
        name: "Projects",
        component: () => import("../views/Projects.vue"),
        meta: { title: "Projects" },
    },
    {
        path: "/contact",
        name: "Contact",
        component: () => import("../views/Contact.vue"),
        meta: { title: "Contact" },
    },
];

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes,
    scrollBehavior: () => document.getElementById("app")?.scrollIntoView(),
});

router.beforeEach((to, from, next) => {
    const nearestWithTitle = to.matched
        .slice()
        .reverse()
        .find((r) => r.meta?.title);

    const nearestWithMeta = to.matched
        .slice()
        .reverse()
        .find((r) => r.meta?.metaTags);

    const previousNearestWithMeta = from.matched
        .slice()
        .reverse()
        .find((r) => r.meta?.metaTags);

    if (nearestWithTitle) {
        document.title = nearestWithTitle.meta.title;
        return applyMetaTags(nearestWithMeta, next);
    }

    if (previousNearestWithMeta) {
        document.title = previousNearestWithMeta.meta.title;
    }

    applyMetaTags(nearestWithMeta, next);
});

const applyMetaTags = (meta, next) => {
    Array.from(document.querySelectorAll("[data-vue-router-controlled]")).forEach((el) =>
        el.parentNode?.removeChild(el)
    );

    if (!meta) return next();

    meta.meta.metaTags
        .map((tagDef) => {
            const tag = document.createElement("meta");
            Object.entries(tagDef).forEach(([key, value]) => {
                tag.setAttribute(key, value);
            });
            tag.setAttribute("data-vue-router-controlled", "");
            return tag;
        })
        .forEach((tag) => document.head.appendChild(tag));

    next();
};

export default router;

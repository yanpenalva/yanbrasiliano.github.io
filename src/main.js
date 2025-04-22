import App from "@/App.vue";
import "@/assets/css/app.css";
import router from "@/router";
import { createApp } from "vue";

import feather from "feather-icons";
feather.replace();

const app = createApp(App);
app.use(router).mount("#app");

const body = document.querySelector("body");
const appTheme = localStorage.getItem("theme");

const applyThemeClass = () => {
    if (appTheme === "dark" && body?.classList.contains("app-theme")) {
        body.classList.add("bg-primary-dark");
        return;
    }

    body?.classList.add("bg-secondary-light");
};

applyThemeClass();

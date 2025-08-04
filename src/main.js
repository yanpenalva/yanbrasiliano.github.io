import App from "@/App.vue";
import "@/assets/css/app.css";
import router from "@/router";
import feather from "feather-icons";
import { createApp } from "vue";

feather.replace();

createApp(App).use(router).mount("#app");

const body = document.body;
const appTheme = localStorage.getItem("theme");

const themeClass =
    appTheme === "dark" && body.classList.contains("app-theme") ? "bg-primary-dark" : "bg-secondary-light";

body.classList.add(themeClass);

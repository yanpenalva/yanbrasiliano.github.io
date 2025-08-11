<script>
export default {
    props: { theme: { type: String, required: true } },
    emits: ["themeChanged"],
    computed: {
        isLight() {
            return this.theme === "light";
        },
        icon() {
            return this.isLight ? "moon" : "sun";
        },
        iconClass() {
            return this.isLight
                ? "text-liText-ternary-dark hover:text-gray-400 dark:text-liText-ternary-light dark:hover:text-liBorder-primary-light w-5"
                : "text-gray-200 hover:text-gray-50 w-5";
        },
    },
    methods: {
        toggleTheme() {
            const newTheme = this.isLight ? "dark" : "light";
            localStorage.setItem("theme", newTheme);
            this.$emit("themeChanged", newTheme);
            location.reload();
        },
    },
};
</script>

<template>
    <a href="#" @click.prevent="toggleTheme" aria-label="Theme Switcher">
        <i :data-feather="icon" :class="iconClass"></i>
    </a>
</template>

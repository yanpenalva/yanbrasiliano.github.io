import { ref } from "vue";

export default function useThemeSwitcher() {
    const currentTheme = ref("light");

    const setTheme = (theme) => {
        currentTheme.value = theme;
        process.isClient && localStorage.setItem("theme", theme);
    };

    const toggleTheme = () => setTheme(currentTheme.value === "dark" ? "light" : "dark");

    return { toggleTheme };
}

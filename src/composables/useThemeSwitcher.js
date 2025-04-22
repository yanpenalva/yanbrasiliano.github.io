import { ref } from "vue";

export default function useThemeSwitcher() {
    const currentTheme = ref("light");

    const toggleTheme = () => {
        if (currentTheme.value === "dark") {
            return setLightTheme();
        }
        setDarkTheme();
    };

    const setLightTheme = () => {
        currentTheme.value = "light";
        process.isClient && localStorage.setItem("theme", "light");
    };

    const setDarkTheme = () => {
        currentTheme.value = "dark";
        process.isClient && localStorage.setItem("theme", "dark");
    };

    return {
        toggleTheme,
    };
}

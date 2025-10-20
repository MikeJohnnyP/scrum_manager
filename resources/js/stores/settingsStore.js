import { defineStore } from "pinia";

export const useSettingsStore = defineStore("settings", {
    state: () => ({
        darkMode: false,
        showHeader: true,
    }),
    actions: {
        toggleDarkMode() {
            this.darkMode = !this.darkMode;
        },
        setHeader(value) {
            this.showHeader = value;
        },
    },
});

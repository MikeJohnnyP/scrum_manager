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
        toggleHeader() {
            this.showHeader = !this.showHeader;
        },
        setHeader(value) {
            this.showHeader = value;
        },
    },
});

import { defineStore } from "pinia";

export const useMouseMoveStore = defineStore("mouseMove", {
    state: () => ({
        isVisible: false,
        isHover: false,
        isLoading: false,
        cursorShape: {
            width: 80,
            height: 80,
            borderRadius: "50%",
        },
    }),
    actions: {
        setIsVisible(value) {
            this.isVisible = value;
        },
        setHover(value, shape = null) {
            this.isHover = value;
            if (shape) {
                this.cursorShape = shape;
            } else {
                this.cursorShape = {
                    width: 80,
                    height: 80,
                    borderRadius: "50%",
                };
            }
        },
        setLoading(value) {
            this.isLoading = value;
        },
    },
});

export const useMouseMoveBasicStore = defineStore("mouseMoveBasic", {
    state: () => ({
        isVisible: false,
        isHover: false,
        isLoading: false,
        cursorShape: {
            width: 80,
            height: 80,
            borderRadius: "50%",
            scale: 1,
        },
    }),
    actions: {
        setIsVisible(value) {
            this.isVisible = value;
        },
        setHover(value) {
            this.isHover = value;
            if (value) {
                this.cursorShape = {
                    width: 80,
                    height: 80,
                    borderRadius: "50%",
                    scale: 1.2,
                };
            } else {
                this.cursorShape = {
                    width: 80,
                    height: 80,
                    borderRadius: "50%",
                    scale: 1,
                };
            }
        },
        setLoading(value) {
            this.isLoading = value;
        },
    },
});

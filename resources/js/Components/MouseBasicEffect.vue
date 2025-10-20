<template>
    <div ref="cursorOutline" class="cursor-outline"></div>
    <div ref="cursorDot" class="cursor-dot"></div>
    <div ref="loading" class="loading"></div>
</template>
<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue';
import { gsap } from 'gsap';
import { useMouseMoveBasicStore, useMouseMoveStore } from '../stores/mouseMoveStore';

const cursorOutline = ref(null);
const cursorDot = ref(null);
const loading = ref(null);
const store = useMouseMoveBasicStore();

let xCTo, yCTo, xDTo, yDTo;

let defaultWidth = 0;
let defaultHeight = 0;
let defaultBorderRadius = '50%';

function mouseMove(e) {
    if (!store.isVisible) {
        gsap.set([cursorOutline.value, cursorDot.value], { opacity: 1 });
        store.setIsVisible(true);
    }
    const cursorPosition = { left: e.clientX, top: e.clientY };
    xCTo(cursorPosition.left);
    yCTo(cursorPosition.top);
    xDTo(cursorPosition.left);
    yDTo(cursorPosition.top);
}

function mouseEnter(e) {
    gsap.to([cursorOutline.value, cursorDot.value], { opacity: 1, duration: 0.3, overwrite: 'auto' });
    store.setIsVisible(true);
}

function mouseLeave(e) {
    gsap.to([cursorOutline.value, cursorDot.value], { opacity: 0, duration: 0.3, overwrite: 'auto' });
    store.setIsVisible(false);
}

onMounted(() => {
    defaultWidth = cursorDot.value.offsetWidth;
    defaultHeight = cursorDot.value.offsetHeight;
    defaultBorderRadius = getComputedStyle(cursorDot.value).borderRadius;

    gsap.set(cursorDot.value, { scale: 0.1 });
    gsap.set(cursorOutline.value, { scale: 0.5 });
    gsap.set(loading.value, { scale: 0.5 });

    xCTo = gsap.quickTo(cursorOutline.value, 'left', { duration: 0.3 });
    yCTo = gsap.quickTo(cursorOutline.value, 'top', { duration: 0.3 });
    xDTo = gsap.quickSetter(cursorDot.value, 'left', 'px');
    yDTo = gsap.quickSetter(cursorDot.value, 'top', 'px');

    document.addEventListener('mousemove', mouseMove);
    document.addEventListener('mouseenter', mouseEnter);
    document.addEventListener('mouseleave', mouseLeave);
});

// Theo dõi thay đổi hình dạng
watch(() => store.cursorShape, (shape) => {
    gsap.to(cursorOutline.value, {
        width: shape.width,
        height: shape.height,
        borderRadius: shape.borderRadius,
        duration: 0.3,
        scale: (shape.scale || 1) - 0.5,
    });
    gsap.to(cursorDot.value, {
        width: shape.width,
        height: shape.height,
        borderRadius: shape.borderRadius,
        duration: 0.3,
        scale: (shape.scale || 1) - 0.9,
    });
});

onUnmounted(() => {
    document.removeEventListener('mousemove', mouseMove);
    document.removeEventListener('mouseenter', mouseEnter);
    document.removeEventListener('mouseleave', mouseLeave);
});
</script>
<style>
.cursor-outline,
.cursor-dot,
.loading {
    opacity: 0;
    z-index: 9999;
}

.cursor-outline {
    border-radius: 50px;
    position: absolute;
    width: 80px;
    height: 80px;
    border: solid 1px #1d1d1d;
    /* mix-blend-mode: difference; */
    pointer-events: none;
}

.loading {
    border-radius: 50px;
    position: absolute;
    width: 80px;
    height: 80px;
    border: solid 1px #000000;
    mix-blend-mode: difference;
    pointer-events: none;
}

/* Visible when running fancy.js */
.cursor-dot {
    /* mix-blend-mode: difference; */
    border-radius: 50px;
    position: absolute;
    width: 80px;
    height: 80px;
    background-color: rgb(29, 29, 29);
    border: solid 1px #000000;
    pointer-events: none;
}

.target,
.cursor-outline,
.cursor-dot,
.loading {
    /* needed for target (shared) */
    top: 50%;
    left: 10%;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-transform: translate(-50%, -50%) rotate(0deg);
    transform: translate(-50%, -50%) rotate(0deg);
}
</style>
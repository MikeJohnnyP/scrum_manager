<template>
    <div @mouseenter="mouseStore.handleEnter" @mouseleave="mouseStore.handleLeave" @click="handleClick" ref="button"
        class="px-3 py-2 bg-neutral-950 rounded-xl text-white flex items-center gap-2">
        <slot />
    </div>
</template>
<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import { gsap } from "gsap";
import { useMouseMoveBasicStore } from '../../stores/mouseMoveStore';

const button = ref(null);

const mouseStore = useMouseMoveBasicStore();


function fadeIn() {
    gsap.fromTo(button.value, { scale: 0.8, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.3 });
}

function shake() {
    gsap.fromTo(button.value, { x: 0 }, { x: 20, yoyo: true, repeat: 3, duration: 0.2 });
}

async function handleClick() {
    emits('click');
}

onMounted(() => {
});

onUnmounted(() => {
    if (button.value) {
        button.value.removeEventListener('click', handleClick);
    }
});

defineExpose({
    fadeIn,
    shake
});

const emits = defineEmits(['click']);
</script>
<script setup>
import { Transition } from 'vue';
import MouseBasicEffect from '../Components/MouseBasicEffect.vue';
</script>

<template>

    <Head :title="` | Đăng nhập`" />
    <MouseBasicEffect />
    <Transition name="fade" mode="out-in">
        <slot />
    </Transition>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

body {
    cursor: none;
}
</style>
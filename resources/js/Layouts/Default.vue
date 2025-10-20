<script setup>
import { Transition } from 'vue';
import Header from '../Components/Header.vue';
import MouseBasicEffect from '../Components/MouseBasicEffect.vue';
</script>

<template>

    <Head :title="` | ${$page.component}`" />
    <MouseBasicEffect />
    <Header></Header>
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

/* body {
    cursor: none;
} */
</style>
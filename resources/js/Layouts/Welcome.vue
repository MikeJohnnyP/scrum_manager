<script setup lang="ts">
import { Transition } from 'vue';
import Header from '../Components/Header.vue';
import MouseMoveEffect from '../Components/MouseMoveEffect.vue';

</script>

<template>

    <Head :title="` | ${$page.component}`" />
    <MouseMoveEffect />
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
</style>
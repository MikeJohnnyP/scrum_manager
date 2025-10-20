<script setup>
import { onMounted, Transition } from 'vue';
import Header from '../Components/Header.vue';
import MouseBasicEffect from '../Components/MouseBasicEffect.vue';

onMounted(() => {
    document.body.classList.add('page-home-bg')
});
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

/* đặt cùng selector body.page-home-bg nếu muốn */
body.page-home-bg {
    background-image: url('/public/images/miku.png');
    background-color: rgba(14, 14, 14, 0.3);
    /* chỉnh độ tối */
    background-blend-mode: multiply;
    /* hoặc overlay, darken */
    background-size: cover;
    background-position: center;
}

/* body {
    cursor: none;
} */
</style>
<template>
    <main class="w-11/12 mx-auto mt-4 text-white" style="height: calc(90vh);">
        <div>
            <h1 class="text-6xl font-bold" @mouseenter="mouseStore.handleEnter" @mouseleave="mouseStore.handleLeave">
                Hôm nay thời tiết rất tuyệt vời</h1>
        </div>
        <div>
            <p class="mt-4 text-lg">Đây là trang chính của ứng dụng.</p>
        </div>
        <Link :href="route('login')" class="mt-6 text-blue-500 underline">
        Giới thiệu
        </Link>
    </main>
</template>
<script setup>
import { onMounted, onUnmounted } from 'vue';
import { useMouseMoveBasicStore } from '../stores/mouseMoveStore';
import { useSettingsStore } from '../stores/settingsStore';

const mouseStore = useMouseMoveBasicStore();

</script>

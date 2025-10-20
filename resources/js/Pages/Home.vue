<template>
    <main class="w-9/12 mx-auto flex justify-center flex-col items-center" style="height: calc(90vh);">
        <div>
            <h1 class="text-5xl font-bold" @mouseenter="handleEnter" @mouseleave="handleLeave">Welcome</h1>
        </div>
        <div>
            <p class="mt-4 text-lg">This is the home page of the application.</p>
        </div>
        <Link :href="route('login')" class="mt-6 text-blue-500 underline">
        About
        </Link>
    </main>
</template>
<script setup>
import { useMouseMoveBasicStore } from '../stores/mouseMoveStore';

const mouseStore = useMouseMoveBasicStore();
function handleEnter() {
    mouseStore.setHover(true);
}
function handleLeave() {
    mouseStore.setHover(false);
}
</script>
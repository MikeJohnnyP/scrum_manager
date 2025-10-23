<template>
    <main class="w-9/12 mx-auto flex justify-center flex-col items-center text-white" style="height: calc(90vh);">
        <h1>Task Page</h1>
    </main>
</template>
<script setup>
import { useSettingsStore } from '../stores/settingsStore';

const settingsStore = useSettingsStore();

settingsStore.showHeader = true;
</script>
<style></style>
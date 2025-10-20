<template>
</template>
<script setup>
import { useSettingsStore } from '../stores/settingsStore';

const settingsStore = useSettingsStore();

settingsStore.showHeader = true;
</script>
<style></style>
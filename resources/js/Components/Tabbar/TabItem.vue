<template>
    <Link :href="href"
        class="tab-item flex flex-col items-center justify-center px-4 py-1 min-w-28 text-white rounded-full hover:text-blue-400 transition-colors duration-300"
        :class="isActive ? 'bg-blue-400' : ''">
    <component :is="icon" class="w-6 h-6" />
    <span class="text-sm">{{ title }}</span>
    </Link>
</template>
<script setup>
import { Link } from '@inertiajs/vue3';
defineProps({
    href: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    icon: {
        type: Object,
        required: true,
    },
    isActive: {
        type: Boolean,
        default: false,
    },
});

</script>

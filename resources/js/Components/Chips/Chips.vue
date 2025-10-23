<template>
    <span class="inline-flex items-center px-2 py-1 me-2 text-sm font-medium text-blue-800 bg-blue-100"
        :class="`${textColor} ${bgColor} ${rounded}`">
        <slot name="icon" />
        {{ label }}
        <button v-if="removable" type="button"
            class="inline-flex items-center p-1 ms-2 text-sm text-blue-400 bg-transparent rounded-xs hover:bg-blue-200 hover:text-blue-900 dark:hover:bg-blue-800 dark:hover:text-blue-300"
            data-dismiss-target="#badge-dismiss-default" aria-label="Remove">
            <svg class="w-2 h-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
            </svg>
            <span class="sr-only">Remove badge</span>
        </button>
    </span>
</template>
<script setup>
defineProps({
    label: {
        type: String,
        default: ''
    },
    textColor: {
        type: String,
        default: 'text-blue-800'
    },
    bgColor: {
        type: String,
        default: 'bg-blue-100'
    },
    removable: {
        type: Boolean,
        default: false
    },
    rounded: {
        type: String,
        default: 'rounded-md'
    }
})
</script>
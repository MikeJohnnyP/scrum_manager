<template>
    <div class="bg-gray-800 rounded-xl flex flex-col items-center relative overflow-hidden"
        :class="`${width} ${height}`">
        <img v-if="image" :src="image" class="w-full h-full object-cover rounded-xl" />
        <!-- Blur gradient overlay -->
        <div
            class="absolute flex flex-row justify-between bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/30 via-black/20 to-transparent backdrop-blur-sm px-4 py-1">
            <div class="flex flex-col justify-center">
                <span class="font-semibold text-lg drop-shadow">{{ title }}</span>
                <span class="text-sm text-gray-400">{{ description }}
                </span>
            </div>
            <div class="flex items-center justify-center h-full">
                <i-mdi-chevron-right class="h-7 w-7 text-white drop-shadow" />
            </div>

        </div>
        <div class="absolute top-0 left-0 right-0 h-1/4 flex items-center justify-between p-2">
            <Chips v-if="isChip" rounded="rounded-xl" :label="chipItem.text" :textColor="chipItem.color"
                :bgColor="chipItem.bgColor">
                <template #icon>
                    <slot name="chipIcon"></slot>
                </template>
            </Chips>
            <i-mdi-star class="h-6 w-6 text-yellow-400 drop-shadow" />
        </div>
    </div>
</template>
<script setup>
import Chips from '../Chips/Chips.vue';
defineProps({
    title: {
        type: String,
        default: ''
    },
    description: {
        type: String,
        default: ''
    },
    image: {
        type: String,
        default: null
    },
    width: {
        type: String,
        default: 'w-full'
    },
    height: {
        type: String,
        default: 'h-[200px]'
    },
    isChip: {
        type: Boolean,
        default: true
    },
    isFavorite: {
        type: Boolean,
        default: true
    },
    chipItem: {
        type: Object,
        default: {
            text: 'Đang tiến hành',
            color: 'text-yellow-800',
            bgColor: 'bg-yellow-100'
        }
    },
})
</script>
<template>
    <div class="grid grid-cols-[1fr_4fr_1fr] text-white gap-2 p-4 mt-10">
        <section class="mb-4 col-span-3 flex flex-col justify-center items-center">
            <h1 class="text-4xl font-bold">Tất cả các dự án của bạn</h1>
        </section>
        <section class="col-start-2 mb-2 flex flex-row justify-start items-center gap-4">
            <div>Bộ lọc :</div>
            <div class="flex flex-wrap mt-2">
                <Chips rounded="rounded-xl" label="Tất cả dự án" textColor="text-green-800" bgColor="bg-green-100" />
                <Chips rounded="rounded-xl" label="Đang tiến hành" textColor="text-yellow-800"
                    bgColor="bg-yellow-100" />
                <Chips rounded="rounded-xl" label="Hoàn thành" textColor="text-blue-800" bgColor="bg-blue-100" />
                <Chips rounded="rounded-xl" label="Đang chờ" textColor="text-red-800" bgColor="bg-red-100" />
            </div>
        </section>
        <section class="col-start-2">
            <div ref="carousel" class="overflow-x-auto no-scrollbar scroll-smooth w-full">
                <div class="grid grid-cols-3 gap-3 gap-y-3 py-2 w-full">
                    <div class="flex flex-row justify-center" v-for="item in recent" :key="item.id">
                        <ProjectCard :title="item.title" :description="item.description" :image="item.image">
                            <template #chipIcon>
                                <i-mdi-progress-clock class="h-4 w-4 text-yellow-800 mr-1" />
                            </template>
                        </ProjectCard>
                    </div>
                </div>
            </div>
        </section>
    </div>


</template>
<script setup>
import { ref } from 'vue';
import Chips from '../Components/Chips/Chips.vue';
import ProjectCard from '../Components/Cards/ProjectCard.vue';

const recent = ref([
    { id: 1, title: 'Dự án A', description: 'Mô tả dự án A', image: '/images/miku.png' },
    { id: 2, title: 'Dự án B', description: 'Mô tả dự án B', image: '/images/landscape-1.jpg' },
    { id: 3, title: 'Dự án C', description: 'Mô tả dự án C', image: '/images/sunny.png' },
    { id: 1, title: 'Dự án A', description: 'Mô tả dự án A', image: '/images/miku.png' },
    { id: 2, title: 'Dự án B', description: 'Mô tả dự án B', image: '/images/landscape-1.jpg' },
    { id: 3, title: 'Dự án C', description: 'Mô tả dự án C', image: '/images/sunny.png' },
    { id: 1, title: 'Dự án A', description: 'Mô tả dự án A', image: '/images/miku.png' },
    { id: 2, title: 'Dự án B', description: 'Mô tả dự án B', image: '/images/landscape-1.jpg' },
    { id: 3, title: 'Dự án C', description: 'Mô tả dự án C', image: '/images/sunny.png' },
    // Thêm các mục khác nếu cần
]);
</script>
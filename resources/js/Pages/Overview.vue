<template>
    <div class="grid grid-cols-[1fr_6fr_1fr] text-white gap-2 p-4 mt-10">
        <div class="col-start-2">
            <div class="grid grid-cols-[2fr_1fr] h-full">
                <div class="flex flex-col justify-between p-6 pl-0 h-full text-black">
                    <div>
                        <h1 class="text-7xl font-bold mb-2 text-gray-50">Chào buổi sáng 💖</h1>
                        <p class="text-gray-300 text-3xl font-semibold">MikeJohnP</p>
                    </div>

                    <div class="mt-5 text-2xl text-gray-100">Hôm nay bạn đã hoàn thành 5 nhiệm vụ</div>
                </div>
                <div
                    class="flex justify-between items-center bg-white/10 backdrop-blur-[2px] rounded-2xl border border-white/10 shadow-lg before:content-[''] before:absolute before:inset-0 before:rounded-2xl before:border before:border-white/20 before:blur-lg p-6">
                    <div class="h-full flex flex-col justify-center">
                        <h1>Thời tiết hôm nay</h1>
                        <p class="text-6xl font-bold mt-2">28°C</p>
                        <div class="mt-2 flex items-center justify-between h-full text-gray-200 text-lg">
                            <i-mdi-weather-sunny class="h-6 w-6 mr-2" />
                            <div>Nắng nhẹ</div>
                            <div class="mx-4">|</div>
                            <i-mdi-water-percent class="h-6 w-6 mr-2" />
                            <div>Độ ẩm: 60%</div>
                        </div>

                    </div>
                    <img src="/public/images/sunny.png" alt="Miku Image" class="w-32 h-32 object-contain" />
                </div>
            </div>
        </div>
        <div class="col-start-2 mt-6 mb-2">
            <h3 class="text-lg">Truy cập gần đây</h3>
        </div>

        <div class="col-start-2">
            <div class="relative">
                <!-- <button @click="scrollLeft"
                    class="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-gray-700 bg-opacity-70 hover:bg-opacity-100 text-white rounded-full w-8 h-8 flex items-center justify-center"
                    aria-label="Trái">
                    &lt;
                </button>
                <button @click="scrollRight"
                    class="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-gray-700 bg-opacity-70 hover:bg-opacity-100 text-white rounded-full w-8 h-8 flex items-center justify-center"
                    aria-label="Phải">
                    &gt;
                </button> -->
                <div ref="carousel" class="overflow-x-auto no-scrollbar scroll-smooth w-full">
                    <div class="flex gap-4 py-2 w-50">
                        <ProjectCard v-for="item in recent" :key="item.id" :title="item.title"
                            :description="item.description" :image="item.image" width="w-[350px]"></ProjectCard>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-start-2">Công việc đã hoàn thành</div>
        <div class="col-start-2">Công việc đang thực hiện</div>
    </div>
</template>
<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import { useMouseMoveBasicStore } from '../stores/mouseMoveStore';
import { useSettingsStore } from '../stores/settingsStore';
import ProjectCard from '../Components/Cards/ProjectCard.vue';

const mouseStore = useMouseMoveBasicStore();

const carousel = ref(null)

function scrollLeft() {
    if (carousel.value) {
        carousel.value.scrollBy({ left: -200, behavior: 'smooth' })
    }
}
function scrollRight() {
    if (carousel.value) {
        carousel.value.scrollBy({ left: 200, behavior: 'smooth' })
    }
}

const recent = ref([
    { id: 1, title: 'Dự án A', description: 'Mô tả dự án A', image: '/images/miku.png' },
    { id: 2, title: 'Dự án B', description: 'Mô tả dự án B', image: '/images/landscape-1.jpg' },
    { id: 3, title: 'Dự án C', description: 'Mô tả dự án C', image: '/images/sunny.png' },
    // Thêm các mục khác nếu cần
]);

</script>

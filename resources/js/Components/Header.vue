<template>
    <transition name="fade-header">
        <header ref="header" class="bg-transparent px-10 grid grid-cols-3 items-center">
            <nav class="flex items-center gap-6 justify-start">
                <img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg"
                    width="200" alt="Laravel Logo">
            </nav>
            <nav class="px-4 py-4 flex flex-col justify-evenly items-center text-white">
                <ul class="flex justify-start flex-row gap-10 text-base">
                    <li>
                        <Link :href="route('home')">
                        Tổng quan
                        </Link>
                    </li>
                    <li>
                        <Link :href="route('home')">
                        Dự án
                        </Link>
                    </li>
                    <li>
                        <Link :href="route('home')">
                        Báo cáo
                        </Link>
                    </li>
                    <li>
                        <Link :href="route('tasks')">
                        Công việc
                        </Link>
                    </li>
                </ul>
            </nav>
            <nav class="px-4 py-4 flex items-center gap-6 justify-end">
                <RingingButton ref="forwardButton" @click="pushToLogin">
                    <i-mdi-account width="30" height="30" />
                    Đăng nhập
                </RingingButton>
                <div class="account-info flex items-center gap-4 text-white">
                    <div class="info flex flex-col font-normal text-right">
                        <p class="name font-semibold">Nguyễn Văn A</p>
                        <p class="role text-sm text-gray-300">Quản trị viên</p>
                    </div>
                    <div class="avatar">
                        <img src="/public/images/miku.png" alt="Avatar" class="w-10 h-10 rounded-full" />
                    </div>
                </div>
            </nav>
        </header>
    </transition>
</template>
<script setup>
import RingingButton from '../Components/Buttons/RingingButton.vue';
import { ref, onMounted, watch } from 'vue';
import { router } from '@inertiajs/vue3';
import { useSettingsStore } from '../stores/settingsStore';
import gsap from 'gsap';

const settingsStore = useSettingsStore();

const backButton = ref(null);
const forwardButton = ref(null);
const header = ref(null);

watch(
    () => settingsStore.showHeader,
    (newValue) => {
        if (newValue) {
            gsap.to(header.value, { duration: 0.4, opacity: 1, pointerEvents: 'auto' });
        } else {
            gsap.to(header.value, { duration: 0.4, opacity: 0, pointerEvents: 'none' });
        }
    }
);


onMounted(() => {
    if (backButton.value) {
        backButton.value.fadeIn();
    }
    if (forwardButton.value) {
        forwardButton.value.fadeIn();
    }
});

async function pushToLogin() {
    router.visit(route('login'));
}
</script>

<style>
.fade-header-enter-active,
.fade-header-leave-active {
    transition: opacity 0.4s;
}

.fade-header-enter-from,
.fade-header-leave-to {
    opacity: 0;
}

.fade-header-enter-to,
.fade-header-leave-from {
    opacity: 1;
}
</style>

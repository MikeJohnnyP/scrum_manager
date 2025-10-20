<template>
    <main ref="login" class="w-9/12 mx-auto flex justify-center flex-col items-center" style="height: calc(100vh);">
        <img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg"
            width="400" alt="Laravel Logo">
        <div>
            <h1 class="text-3xl font-bold">Đăng nhập</h1>
        </div>
        <div>
            <p class="mt-4 text-base">Đăng nhập và tận hưởng niềm vui nào 😘😘😘</p>
        </div>
        <form class="w-[350px] mt-10">
            <div class="mb-6 relative">
                <label for="username" class="block mb-2 text-sm font-medium text-gray-900">Tên đăng nhập</label>
                <span class="absolute left-3 top-1/2 text-gray-400">
                    <i-mdi-account />
                </span>
                <input type="text" id="username"
                    class="pl-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="MikeJohnP" required />
            </div>
            <div class="mb-6 relative">
                <label for="password" class="block mb-2 text-sm font-medium text-gray-900">Mật khẩu</label>
                <span class="absolute left-3 top-1/2 text-gray-400">
                    <i-mdi-lock />
                </span>
                <input type="password" id="password"
                    class="pl-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="•••••••••" required />
            </div>
            <button type="button" @click="submit"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center">Đăng
                nhập</button>
        </form>
    </main>
</template>
<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import Auth from '../Layouts/Auth.vue';
import { router } from '@inertiajs/vue3';
import gsap from 'gsap';

defineOptions({
    layout: Auth
})

const login = ref(null);

onMounted(() => {
    gsap.fromTo(login.value,
        {
            opacity: 0,
            y: -50
        },
        {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power2.out"
        });
});

async function submit() {
    router.get(route('home'));
}
</script>
<template>
    <main class="w-9/12 mx-auto flex justify-center flex-col items-center" style="height: calc(100vh - 78px);">
        <div>
            <h1 class="text-5xl font-bold">About Us</h1>
        </div>
        <div>
            <p class="mt-4 text-lg">This is the about page of the application.</p>
        </div>
        <Link :href="route('home')" class="mt-6 text-blue-500 underline">
        Home
        </Link>
    </main>
</template>

<script setup>
import { Link } from '@inertiajs/vue3';


</script>

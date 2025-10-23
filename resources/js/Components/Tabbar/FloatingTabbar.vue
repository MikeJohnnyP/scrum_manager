<template>
    <div class="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
        <div class="bg-white bg-opacity-20 backdrop-blur-md rounded-full shadow-lg p-1 flex items-center space-x-1">
            <TabItem :href="route('home')" title="Trang chủ" :icon="IconHome" :isActive="true" />
            <TabItem :href="route('projects')" title="Dự án" :icon="IconBriefcase" :isActive="false" />
            <TabItem :href="route('reports')" title="Báo cáo" :icon="IconChartBar" :isActive="false" />
            <TabItem :href="route('spentTimes')" title="Thời gian" :icon="IconFormatListBulleted" :isActive="false" />
        </div>
    </div>
</template>
<script setup>
import TabItem from './TabItem.vue';
import IconHome from '~icons/mdi/home';
import IconBriefcase from '~icons/mdi/briefcase';
import IconChartBar from '~icons/mdi/chart-bar';
import IconFormatListBulleted from '~icons/mdi/format-list-bulleted';



</script>

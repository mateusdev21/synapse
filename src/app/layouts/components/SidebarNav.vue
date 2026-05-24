<script setup lang="ts">
import { RouterLink, useRoute } from 'vue-router';

import { navigation } from '../../../shared/constants/navigation';
import { cn } from '../../../shared/utils/cn';

const route = useRoute();
</script>

<template>
    <nav class="space-y-2">
        <RouterLink v-for="item in navigation" :key="item.path" :to="item.path" :class="cn(
            'flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition-all duration-200',
            route.path === item.path
                ? 'bg-violet-600 text-white shadow-lg shadow-violet-950/50'
                : 'text-zinc-400 hover:bg-zinc-800 hover:text-white',
        )
            ">
            <component :is="item.icon" class="size-5" />
            <span>{{ item.label }}</span>
        </RouterLink>
    </nav>
</template>
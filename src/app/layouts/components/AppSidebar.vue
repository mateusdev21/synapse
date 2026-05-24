<script setup lang="ts">
import { cn } from '@/shared/utils/cn';

import SidebarFooter from './SidebarFooter.vue';
import SidebarHeader from './SidebarHeader.vue';
import SidebarNav from './SidebarNav.vue';

interface Props {
    open: boolean;
}

defineProps<Props>();

defineEmits<{
    close: [];
}>();
</script>

<template>
    <div class="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden" :class="cn(
        open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0',
    )
        " @click="$emit('close')" />

    <aside :class="cn(
        'fixed left-0 top-0 z-50 flex h-screen w-70 flex-col border-r transition-transform duration-300 md:static md:translate-x-0',
        'border-(--border) bg-(--surface)/90 backdrop-blur-xl',
        open ? 'translate-x-0' : '-translate-x-full',
    )
        ">
        <SidebarHeader />

        <div class="flex-1 overflow-y-auto px-3 py-4">
            <SidebarNav />
        </div>

        <SidebarFooter />
    </aside>
</template>
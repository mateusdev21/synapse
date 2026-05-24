<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';

import CommandPalette from '@/shared/components/CommandPalette.vue';
import { useCommandPaletteStore } from '@/shared/stores/useCommandPaletteStore';

import AppSidebar from './components/AppSidebar.vue';
import MobileNavbar from './components/MobileNavbar.vue';

const sidebarOpen = ref(false);

const paletteStore = useCommandPaletteStore();

function toggleSidebar() {
    sidebarOpen.value = !sidebarOpen.value;
}

function handleKeydown(event: KeyboardEvent) {
    const isCommand =
        event.metaKey || event.ctrlKey;

    if (isCommand && event.key === 'k') {
        event.preventDefault();

        paletteStore.toggle();
    }
}

onMounted(() => {
    window.addEventListener(
        'keydown',
        handleKeydown,
    );
});

onUnmounted(() => {
    window.removeEventListener(
        'keydown',
        handleKeydown,
    );
});
</script>

<template>
    <div class="flex h-screen w-full overflow-hidden bg-(--background) text-(--foreground)">
        <AppSidebar :open="sidebarOpen" @close="sidebarOpen = false" />

        <div class="flex flex-1 flex-col overflow-hidden">
            <MobileNavbar @toggle-sidebar="toggleSidebar" />

            <main class="flex-1 overflow-hidden">
                <div class="h-full overflow-y-auto p-4 md:p-6">
                    <RouterView />
                </div>
            </main>
        </div>

        <CommandPalette />
    </div>
</template>
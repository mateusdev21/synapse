<script setup lang="ts">
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';

import { navigation } from '../constants/navigation';

import { useCommandPaletteStore } from '../stores/useCommandPaletteStore';

const router = useRouter();

const paletteStore = useCommandPaletteStore();

const search = ref('');

const filteredItems = computed(() => {
    if (!search.value.trim()) {
        return navigation;
    }

    return navigation.filter((item) =>
        item.label
            .toLowerCase()
            .includes(search.value.toLowerCase()),
    );
});

function navigate(path: string) {
    router.push(path);

    paletteStore.close();

    search.value = '';
}
</script>

<template>
    <Teleport to="body">
        <div v-if="paletteStore.open"
            class="fixed inset-0 z-999 flex items-start justify-center bg-black/60 p-4 pt-24 backdrop-blur-sm"
            @click="paletteStore.close()">
            <div class="w-full max-w-2xl overflow-hidden rounded-3xl border border-(--border) bg-(--surface) shadow-2xl"
                @click.stop>
                <div class="border-b border-(--border) p-4">
                    <input v-model="search" type="text" placeholder="Search commands..."
                        class="h-12 w-full bg-transparent outline-none" autofocus />
                </div>

                <div class="max-h-100 overflow-y-auto p-2">
                    <button v-for="item in filteredItems" :key="item.path"
                        class="flex w-full items-center gap-3 rounded-2xl px-4 py-4 text-left transition hover:bg-(--surface-secondary)"
                        @click="navigate(item.path)">
                        <component :is="item.icon" class="size-5" />

                        <span>{{ item.label }}</span>
                    </button>
                </div>
            </div>
        </div>
    </Teleport>
</template>
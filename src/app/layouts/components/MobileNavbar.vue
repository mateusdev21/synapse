<script setup lang="ts">
import { Menu } from 'lucide-vue-next';

defineEmits<{
    'toggle-sidebar': [];
}>();
</script>

<template>
    <header
        class="flex h-16 items-center justify-between border-b border-(--border) bg-(--background) px-4 md:hidden">
        <button class="flex h-10 w-10 items-center justify-center rounded-xl border border-(--border)"
            @click="$emit('toggle-sidebar')">
            <Menu class="size-5" />
        </button>

        <h1 class="text-sm font-semibold tracking-wide">
            Synapse
        </h1>

        <div class="w-10" />
    </header>
</template>
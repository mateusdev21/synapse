<script setup lang="ts">
import PromptCard from '../components/PromptCard.vue';
import { usePromptStore } from '../stores/usePromptStore';

const promptStore = usePromptStore();
</script>

<template>
    <section>
        <div class="mb-8">
            <p class="mb-2 text-sm text-violet-400">
                Prompt Library
            </p>

            <h1 class="text-4xl font-bold tracking-tight">
                AI Prompt Workspace
            </h1>

            <p class="mt-3 text-(--muted)">
                Organize and reuse prompts for your workflow.
            </p>
        </div>

        <div class="mb-8">
            <input v-model="promptStore.search" type="text" placeholder="Search prompts..."
                class="h-12 w-full rounded-2xl border border-(--border) bg-(--surface) px-4 outline-none" />
        </div>

        <div v-if="promptStore.loading" class="py-20 text-center text-(--muted)">
            Loading prompts...
        </div>

        <div v-else-if="promptStore.error" class="py-20 text-center text-red-400">
            {{ promptStore.error }}
        </div>

        <div class="grid gap-6 xl:grid-cols-2">
            <PromptCard v-for="prompt in promptStore.filteredPrompts" :key="prompt.id" :prompt="prompt" />
        </div>
    </section>
</template>
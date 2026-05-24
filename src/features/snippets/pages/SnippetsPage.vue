<script setup lang="ts">
import SnippetCard from '../components/SnippetCard.vue';
import { useSnippetStore } from '../stores/useSnippetStore';

const snippetStore = useSnippetStore();
</script>

<template>
    <section>
        <div class="mb-8">
            <p class="mb-2 text-sm text-violet-400">
                Snippets
            </p>

            <h1 class="text-4xl font-bold tracking-tight">
                Code Snippet Workspace
            </h1>

            <p class="mt-3 text-(--muted)">
                Store reusable frontend snippets and utilities.
            </p>
        </div>

        <div class="grid gap-6">
            <SnippetCard v-for="snippet in snippetStore.snippets" :key="snippet.id" :snippet="snippet" />
        </div>
    </section>
</template>
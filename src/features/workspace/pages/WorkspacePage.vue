<script setup lang="ts">
import { computed, ref } from 'vue';

const text = ref('');

const wordCount = computed(() => {
    return text.value
        .trim()
        .split(/\s+/)
        .filter(Boolean).length;
});

const uppercase = computed(() => {
    return text.value.toUpperCase();
});
</script>

<template>
    <section>
        <div class="mb-8">
            <p class="mb-2 text-sm text-violet-400">
                Workspace
            </p>

            <h1 class="text-4xl font-bold tracking-tight">
                Productivity Tools
            </h1>

            <p class="mt-3 text-(--muted)">
                Quick utilities for everyday AI workflows.
            </p>
        </div>

        <div class="grid gap-6 xl:grid-cols-2">
            <div class="rounded-3xl border border-(--border) bg-(--surface) p-6">
                <h3 class="mb-4 text-lg font-semibold">
                    Word Counter
                </h3>

                <textarea v-model="text" rows="8" placeholder="Type something..."
                    class="w-full rounded-2xl border border-(--border) bg-(--background) p-4 outline-none" />

                <div class="mt-4 text-sm text-(--muted)">
                    Total words:
                    <span class="font-semibold text-(--foreground)">
                        {{ wordCount }}
                    </span>
                </div>
            </div>

            <div class="rounded-3xl border border-(--border) bg-(--surface) p-6">
                <h3 class="mb-4 text-lg font-semibold">
                    Uppercase Transformer
                </h3>

                <div class="min-h-55 rounded-2xl border border-(--border) bg-(--background) p-4 text-sm">
                    {{ uppercase || 'Transformed text will appear here.' }}
                </div>
            </div>
        </div>
    </section>
</template>
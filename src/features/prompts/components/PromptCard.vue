<script setup lang="ts">
import { Copy } from 'lucide-vue-next';

import type { Prompt } from '../types/prompt';

interface Props {
    prompt: Prompt;
}

defineProps<Props>();

async function copyPrompt(content: string) {
    await navigator.clipboard.writeText(content);
}
</script>

<template>
    <div class="rounded-3xl border border-(--border) bg-(--surface) p-6 transition hover:border-violet-500/30">
        <div class="mb-5 flex items-start justify-between gap-4">
            <div>
                <span class="rounded-full bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-400">
                    {{ prompt.category }}
                </span>

                <h3 class="mt-4 text-lg font-semibold">
                    {{ prompt.title }}
                </h3>

                <p class="mt-2 text-sm text-(--muted)">
                    {{ prompt.description }}
                </p>
            </div>

            <button
                class="flex h-10 w-10 items-center justify-center rounded-xl border border-(--border) transition hover:bg-(--surface-secondary)"
                @click="copyPrompt(prompt.content)">
                <Copy class="size-4" />
            </button>
        </div>

        <div class="rounded-2xl bg-(--background) p-4 text-sm text-(--muted)">
            {{ prompt.content }}
        </div>
    </div>
</template>
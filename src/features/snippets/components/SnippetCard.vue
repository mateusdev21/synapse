<script setup lang="ts">
import { computed } from 'vue';

import { Copy } from 'lucide-vue-next';

import MarkdownRenderer from '@/shared/components/MarkdownRenderer.vue';

import type { Snippet } from '../types/snippet';

interface Props {
    snippet: Snippet;
}

const props = defineProps<Props>();

const markdownContent = computed(() => {
    return `\`\`\`${props.snippet.language}
${props.snippet.code}
\`\`\``;
});

async function copyCode(code: string) {
    await navigator.clipboard.writeText(code);
}
</script>

<template>
    <div class="overflow-hidden rounded-3xl border border-(--border) bg-(--surface)">
        <div class="flex items-center justify-between border-b border-(--border) px-5 py-4">
            <div>
                <h3 class="font-semibold">
                    {{ snippet.title }}
                </h3>

                <p class="text-sm text-(--muted)">
                    {{ snippet.language }}
                </p>
            </div>

            <button class="flex h-10 w-10 items-center justify-center rounded-xl border border-(--border)"
                @click="copyCode(snippet.code)">
                <Copy class="size-4" />
            </button>
        </div>

        <div class="p-5">
            <MarkdownRenderer :content="markdownContent" />
        </div>
    </div>
</template>
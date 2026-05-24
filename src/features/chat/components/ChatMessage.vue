<script setup lang="ts">
import MarkdownRenderer from '@/shared/components/MarkdownRenderer.vue';

import type { ChatMessage as ChatMessageType } from '../types/chat';

interface Props {
    message: ChatMessageType;
}

defineProps<Props>();
</script>

<template>
    <div class="flex w-full" :class="message.role === 'user'
            ? 'justify-end'
            : 'justify-start'
        ">
        <div :class="message.role === 'user'
                ? 'bg-violet-600 text-white'
                : 'border border-(--border) bg-(--background) text-(--foreground)'
            " class="max-w-[85%] rounded-3xl px-5 py-4 shadow-sm">
            <MarkdownRenderer :content="message.content" />
        </div>
    </div>
</template>
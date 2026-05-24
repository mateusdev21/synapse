<script setup lang="ts">
import { nextTick, onMounted, ref, watch } from 'vue';

import { useChatStore } from '../stores/useChatStore';

import ChatMessage from './ChatMessage.vue';
import ChatTyping from './ChatTyping.vue';

const chatStore = useChatStore();

const containerRef = ref<HTMLElement | null>(null);

async function scrollToBottom() {
    await nextTick();

    if (!containerRef.value) return;

    containerRef.value.scrollTop =
        containerRef.value.scrollHeight;
}

watch(
    () => chatStore.messages.length,
    async () => {
        await scrollToBottom();
    },
);

watch(
    () => chatStore.isTyping,
    async () => {
        await scrollToBottom();
    },
);

onMounted(async () => {
    await scrollToBottom();
});
</script>

<template>
    <div ref="containerRef" class="flex-1 space-y-6 overflow-y-auto p-6">
        <ChatMessage v-for="message in chatStore.messages" :key="message.id" :message="message" />

        <ChatTyping v-if="chatStore.isTyping" />
    </div>
</template>
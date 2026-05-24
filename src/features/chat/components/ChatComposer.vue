<script setup lang="ts">
import { ref } from 'vue';

import { SendHorizontal } from '@lucide/vue';

import { useChatSimulation } from '../composables/useChatSimulation';
import { useChatStore } from '../stores/useChatStore';

const input = ref('');

const chatStore = useChatStore();

const { simulateAssistantResponse } =
    useChatSimulation();

async function sendMessage() {
    if (!input.value.trim()) return;

    const content = input.value;

    input.value = '';

    chatStore.addMessage({
        id: crypto.randomUUID(),
        role: 'user',
        content,
        createdAt: new Date().toISOString(),
    });

    await simulateAssistantResponse();
}
</script>

<template>
    <div class="border-t border-(--border) bg-(--surface) p-4">
        <div class="flex items-end gap-3 rounded-3xl border border-(--border) bg-(--background) p-3">
            <textarea v-model="input" rows="1" placeholder="Message Synapse..."
                class="max-h-40 flex-1 resize-none bg-transparent px-2 py-2 text-sm outline-none placeholder:text-(--muted)"
                @keydown.enter.prevent="sendMessage" />

            <button
                class="flex h-11 w-11 items-center justify-center rounded-2xl bg-violet-600 text-white transition hover:opacity-80"
                @click="sendMessage">
                <SendHorizontal class="size-5" />
            </button>
        </div>
    </div>
</template>
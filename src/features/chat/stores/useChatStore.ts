import { defineStore } from 'pinia';
import { ref } from 'vue';

import type { ChatMessage } from '../types/chat';

export const useChatStore = defineStore('chat', () => {
    const messages = ref<ChatMessage[]>([]);

    const isTyping = ref(false);

    function addMessage(message: ChatMessage) {
        messages.value.push(message);
    }

    return {
        messages,
        isTyping,

        addMessage,
    };
});
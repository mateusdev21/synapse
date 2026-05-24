<script setup lang="ts">
import FadeIn from '@/shared/components/FadeIn.vue';

import ChatComposer from '../components/ChatComposer.vue';
import ChatContainer from '../components/ChatContainer.vue';
import MessageList from '../components/MessageList.vue';
</script>

<template>
    <FadeIn>
        <section class="flex h-full flex-col">
            <div class="mb-6">
                <p class="mb-2 text-sm text-violet-400">
                    AI Chat
                </p>

                <h1 class="text-4xl font-bold tracking-tight">
                    Conversation Workspace
                </h1>

                <p class="mt-3 text-(--muted)">
                    Collaborate with AI in a modern productivity workspace.
                </p>
            </div>

            <div class="flex-1 overflow-hidden">
                <ChatContainer>
                    <MessageList />
                    <ChatComposer />
                </ChatContainer>
            </div>
        </section>
    </FadeIn>
</template>
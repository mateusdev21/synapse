<script setup lang="ts">
import { onMounted, ref } from 'vue';

const open = ref(false);

function closeModal() {
    open.value = false;

    localStorage.setItem(
        'synapse-onboarding',
        'completed',
    );
}

onMounted(() => {
    const completed = localStorage.getItem(
        'synapse-onboarding',
    );

    if (!completed) {
        open.value = true;
    }
});
</script>

<template>
    <Teleport to="body">
        <div v-if="open" class="fixed inset-0 z-999 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm">
            <div class="w-full max-w-xl rounded-4xl border border-(--border) bg-(--surface) p-8 shadow-2xl">
                <span class="rounded-full bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-400">
                    Welcome to Synapse
                </span>

                <h2 class="mt-5 text-3xl font-bold tracking-tight">
                    Your AI productivity workspace.
                </h2>

                <p class="mt-4 leading-relaxed text-(--muted)">
                    Organize prompts, manage snippets, and collaborate with AI in one
                    unified environment.
                </p>

                <div class="mt-8 grid gap-4 md:grid-cols-3">
                    <div class="rounded-2xl bg-(--background) p-4">
                        <h3 class="font-semibold">
                            AI Chat
                        </h3>

                        <p class="mt-2 text-sm text-(--muted)">
                            Smart markdown-based conversations.
                        </p>
                    </div>

                    <div class="rounded-2xl bg-(--background) p-4">
                        <h3 class="font-semibold">
                            Prompt Library
                        </h3>

                        <p class="mt-2 text-sm text-(--muted)">
                            Save reusable AI workflows.
                        </p>
                    </div>

                    <div class="rounded-2xl bg-(--background) p-4">
                        <h3 class="font-semibold">
                            Snippets
                        </h3>

                        <p class="mt-2 text-sm text-(--muted)">
                            Store frontend utilities and code blocks.
                        </p>
                    </div>
                </div>

                <button
                    class="mt-8 w-full rounded-2xl bg-violet-600 px-5 py-4 font-medium text-white transition hover:opacity-90"
                    @click="closeModal">
                    Start Exploring
                </button>
            </div>
        </div>
    </Teleport>
</template>
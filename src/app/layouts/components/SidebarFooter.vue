<script setup lang="ts">
import { Moon, Sparkles, Sun } from '@lucide/vue';

import { useThemeStore } from '@/features/settings/stores/useThemeStore';

const themeStore = useThemeStore();
</script>

<template>
    <div class="border-t border-(--border) p-4">
        <div class="rounded-2xl border border-violet-500/20 bg-violet-500/10 p-4">
            <div class="mb-3 flex items-center gap-2 text-violet-300">
                <Sparkles class="size-4" />
                <span class="text-sm font-medium">Synapse AI</span>
            </div>

            <p class="mb-4 text-sm leading-relaxed text-(--muted)">
                Organize prompts, snippets, and AI conversations in one workspace.
            </p>

            <button
                class="flex w-full items-center justify-center gap-2 rounded-xl bg-(--surface-secondary) px-4 py-2 text-sm font-medium transition hover:opacity-80"
                @click="themeStore.toggleTheme()">
                <Sun v-if="themeStore.isDark" class="size-4" />

                <Moon v-else class="size-4" />

                <span>
                    {{ themeStore.isDark ? 'Light Mode' : 'Dark Mode' }}
                </span>
            </button>
        </div>
    </div>
</template>
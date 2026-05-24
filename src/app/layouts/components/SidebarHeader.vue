<script setup lang="ts">
import { BrainCircuit } from '@lucide/vue';
</script>

<template>
    <div class="border-b border-zinc-800 px-5 py-5">
        <div class="flex items-center gap-3">
            <div class="flex h-11 w-11 items-center justify-center rounded-2xl bg-violet-600/20 text-violet-400">
                <BrainCircuit class="size-6" />
            </div>

            <div>
                <h1 class="text-lg font-semibold tracking-tight">Synapse</h1>
                <p class="text-sm text-zinc-400">AI Productivity Workspace</p>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { Motion } from 'motion-v';
</script>

<template>
    <Motion :initial="{
        opacity: 0,
        y: 16,
    }" :animate="{
        opacity: 1,
        y: 0,
    }" :transition="{
        duration: 0.4,
    }">
        <slot />
    </Motion>
</template>
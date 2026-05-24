<script setup lang="ts">
import { computed } from 'vue';

import markdown from '../lib/markdown';

interface Props {
    content: string;
}

const props = defineProps<Props>();

const renderedContent = computed(() => {
    return markdown.render(props.content);
});
</script>

<template>
    <div class="markdown" v-html="renderedContent" />
</template>
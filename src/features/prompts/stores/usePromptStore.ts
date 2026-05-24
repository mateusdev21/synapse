import { defineStore } from 'pinia';
import {
    computed,
    onMounted,
    ref,
} from 'vue';

import { promptService } from '../services/prompt.service';

import type { Prompt } from '../types/prompt';

export const usePromptStore = defineStore(
    'prompts',
    () => {
        const prompts = ref<Prompt[]>([]);

        const loading = ref(false);

        const error = ref('');

        const search = ref('');

        async function fetchPrompts() {
            try {
                loading.value = true;

                error.value = '';

                prompts.value =
                    await promptService.getPrompts();
            } catch {
                error.value =
                    'Failed to load prompts.';
            } finally {
                loading.value = false;
            }
        }

        const filteredPrompts = computed(() => {
            if (!search.value.trim()) {
                return prompts.value;
            }

            return prompts.value.filter((prompt) =>
                prompt.title
                    .toLowerCase()
                    .includes(search.value.toLowerCase()),
            );
        });

        onMounted(() => {
            fetchPrompts();
        });

        return {
            prompts,
            loading,
            error,
            search,

            filteredPrompts,

            fetchPrompts,
        };
    },
);
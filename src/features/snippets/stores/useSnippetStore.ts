import { defineStore } from 'pinia';
import { ref } from 'vue';

import type { Snippet } from '../types/snippet';

export const useSnippetStore = defineStore(
    'snippets',
    () => {
        const snippets = ref<Snippet[]>([
            {
                id: crypto.randomUUID(),
                title: 'Vue Composable',
                language: 'ts',

                code:
                    `import { ref } from 'vue';
                export function useToggle() {
                const open = ref(false);

                function toggle() {
                    open.value = !open.value;
                }

                return {
                    open,
                    toggle,
                };
                }
                `,
            },

            {
                id: crypto.randomUUID(),
                title: 'Fetch Utility',
                language: 'ts',

                code: `
export async function fetcher<T>(
  url: string,
): Promise<T> {
  const response = await fetch(url);

  return response.json();
}
`,
            },
        ]);

        return {
            snippets,
        };
    },
);
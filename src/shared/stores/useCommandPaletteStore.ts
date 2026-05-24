import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useCommandPaletteStore = defineStore(
    'command-palette',
    () => {
        const open = ref(false);

        function toggle() {
            open.value = !open.value;
        }

        function close() {
            open.value = false;
        }

        return {
            open,

            toggle,
            close,
        };
    },
);
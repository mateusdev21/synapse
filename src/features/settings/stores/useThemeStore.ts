import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

type Theme = 'light' | 'dark';

export const useThemeStore = defineStore('theme', () => {
    const theme = ref<Theme>('dark');

    const isDark = computed(() => theme.value === 'dark');

    function applyTheme(value: Theme) {
        theme.value = value;

        document.documentElement.classList.toggle(
            'dark',
            value === 'dark',
        );

        localStorage.setItem('synapse-theme', value);
    }

    function toggleTheme() {
        applyTheme(isDark.value ? 'light' : 'dark');
    }

    function initializeTheme() {
        const savedTheme = localStorage.getItem(
            'synapse-theme',
        ) as Theme | null;

        if (savedTheme) {
            applyTheme(savedTheme);
            return;
        }

        const prefersDark = window.matchMedia(
            '(prefers-color-scheme: dark)',
        ).matches;

        applyTheme(prefersDark ? 'dark' : 'light');
    }

    return {
        theme,
        isDark,

        applyTheme,
        toggleTheme,
        initializeTheme,
    };
});
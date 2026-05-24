import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';

import router from './app/router';

import './styles/globals.css';

import 'highlight.js/styles/github-dark.css';

import { useThemeStore } from './features/settings/stores/useThemeStore';

async function bootstrap() {
    if (import.meta.env.DEV) {
        const { worker } = await import(
            './mocks/browser'
        );

        await worker.start();
    }

    const app = createApp(App);

    const pinia = createPinia();

    app.use(pinia);

    app.use(router);

    const themeStore = useThemeStore();

    themeStore.initializeTheme();

    app.mount('#app');
}

bootstrap();
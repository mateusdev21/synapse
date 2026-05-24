import { createRouter, createWebHistory } from 'vue-router';

import MainLayout from '../layouts/MainLayout.vue';

import ChatPage from '../../features/chat/pages/ChatPage.vue';
import PromptLibraryPage from '../../features/prompts/pages/PromptLibraryPage.vue';
import SettingsPage from '../../features/settings/pages/SettingsPage.vue';
import SnippetsPage from '../../features/snippets/pages/SnippetsPage.vue';
import WorkspacePage from '../../features/workspace/pages/WorkspacePage.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: MainLayout,
            children: [
                {
                    path: '',
                    name: 'workspace',
                    component: WorkspacePage,
                },
                {
                    path: 'chat',
                    name: 'chat',
                    component: ChatPage,
                },
                {
                    path: 'prompts',
                    name: 'prompts',
                    component: PromptLibraryPage,
                },
                {
                    path: 'snippets',
                    name: 'snippets',
                    component: SnippetsPage,
                },
                {
                    path: 'settings',
                    name: 'settings',
                    component: SettingsPage,
                },
            ],
        },
    ],
});

export default router;
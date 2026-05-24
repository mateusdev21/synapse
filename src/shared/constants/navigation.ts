import {
    Bot,
    LayoutDashboard,
    Library,
    Settings,
    Sparkles,
} from 'lucide-vue-next';

export const navigation = [
    {
        label: 'Workspace',
        icon: LayoutDashboard,
        path: '/',
    },
    {
        label: 'AI Chat',
        icon: Bot,
        path: '/chat',
    },
    {
        label: 'Prompt Library',
        icon: Sparkles,
        path: '/prompts',
    },
    {
        label: 'Snippets',
        icon: Library,
        path: '/snippets',
    },
    {
        label: 'Settings',
        icon: Settings,
        path: '/settings',
    },
];
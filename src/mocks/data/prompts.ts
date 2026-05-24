export const prompts = [
    {
        id: crypto.randomUUID(),

        title: 'Code Reviewer',

        description:
            'Review frontend architecture quality.',

        category: 'Development',

        content:
            'Review this frontend architecture and explain scalability issues.',
    },

    {
        id: crypto.randomUUID(),

        title: 'UI Improvement',

        description:
            'Improve modern SaaS UI experience.',

        category: 'Design',

        content:
            'Suggest UI improvements for this SaaS dashboard interface.',
    },
];
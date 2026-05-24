import { useChatStore } from '../stores/useChatStore';

const responses = [
    `
# Vue Architecture

A scalable Vue architecture usually contains:

- feature-based structure
- reusable UI layer
- centralized routing
- isolated business logic

> Clean separation improves maintainability.
`,

    `
# Code Example

Here is a simple composable example:

\`\`\`ts
import { ref } from 'vue';

export function useCounter() {
  const count = ref(0);

  function increment() {
    count.value++;
  }

  return {
    count,
    increment,
  };
}
\`\`\`
`,

    `
# Productivity Insight

Good frontend engineering is not only about UI.

It also includes:

- architecture
- maintainability
- scalability
- developer experience
`,

    `
# Tailwind Tips

Inline utility classes are powerful, but abstraction still matters.

Use reusable components for:

- buttons
- cards
- modal
- layouts
`,
];

export function useChatSimulation() {
    const chatStore = useChatStore();

    async function simulateAssistantResponse() {
        chatStore.isTyping = true;

        await new Promise((resolve) => {
            setTimeout(resolve, 1800);
        });

        const randomResponse =
            responses[Math.floor(Math.random() * responses.length)];

        chatStore.addMessage({
            id: crypto.randomUUID(),
            role: 'assistant',
            content: randomResponse,
            createdAt: new Date().toISOString(),
        });

        chatStore.isTyping = false;
    }

    return {
        simulateAssistantResponse,
    };
}
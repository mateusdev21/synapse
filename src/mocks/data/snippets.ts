export const snippets = [
    {
        id: crypto.randomUUID(),

        title: 'Vue Composable',

        language: 'ts',

        code: `
  import { ref } from 'vue';
  
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
];
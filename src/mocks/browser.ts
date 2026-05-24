import { setupWorker } from 'msw/browser';

import { chatHandlers } from './handlers/chat.handlers';
import { promptHandlers } from './handlers/prompt.handlers';
import { snippetHandlers } from './handlers/snippet.handlers';

export const worker = setupWorker(
    ...chatHandlers,
    ...promptHandlers,
    ...snippetHandlers,
);
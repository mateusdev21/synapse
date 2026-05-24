import { delay, http, HttpResponse } from 'msw';

import { snippets } from '../data/snippets';

export const snippetHandlers = [
    http.get('/api/snippets', async () => {
        await delay(1000);

        return HttpResponse.json(snippets);
    }),
];
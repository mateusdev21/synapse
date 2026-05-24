import { delay, http, HttpResponse } from 'msw';

import { prompts } from '../data/prompts';

export const promptHandlers = [
    http.get('/api/prompts', async () => {
        await delay(800);

        return HttpResponse.json(prompts);
    }),
];
import { delay, http, HttpResponse } from 'msw';

const responses = [
    `
# AI Insight

Feature-based architecture improves scalability.
`,

    `
# Frontend Advice

Separate UI and business logic whenever possible.
`,
];

export const chatHandlers = [
    http.post(
        '/api/chat',
        async () => {
            await delay(1800);

            const randomResponse =
                responses[
                Math.floor(
                    Math.random() *
                    responses.length,
                )
                ];

            return HttpResponse.json({
                content: randomResponse,
            });
        },
    ),
];
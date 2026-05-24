interface RequestConfig
    extends RequestInit {
    body?: unknown;
}

async function request<T>(
    url: string,
    config?: RequestConfig,
): Promise<T> {
    const response = await fetch(url, {
        ...config,

        headers: {
            'Content-Type': 'application/json',

            ...config?.headers,
        },

        body: config?.body
            ? JSON.stringify(config.body)
            : undefined,
    });

    if (!response.ok) {
        throw new Error(
            'Something went wrong.',
        );
    }

    return response.json();
}

export const http = {
    get: <T>(url: string) =>
        request<T>(url),

    post: <T>(
        url: string,
        body?: unknown,
    ) =>
        request<T>(url, {
            method: 'POST',
            body,
        }),
};
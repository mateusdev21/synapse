import { API_URL } from '@/shared/lib/api';
import { http } from '@/shared/lib/http';

import type { Prompt } from '../types/prompt';

export const promptService = {
    getPrompts() {
        return http.get<Prompt[]>(
            `${API_URL}/prompts`,
        );
    },
};
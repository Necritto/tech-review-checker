import type {Questions} from '@shared/types';

export const load = async ({fetch}): Promise<Record<string, Questions[]>> => {
    const questions: Questions[] = await (await fetch('/default-questions.json')).json();

    return {
        '/': questions,
    };
};

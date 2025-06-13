import type {Questions} from '@shared/types';

const JSON_FILES_NAMES = ['questions', 'exercises'];

export const load = async ({fetch}): Promise<Record<string, Questions[]>> => {
    const [questions, exercises] = (await Promise.all<Questions[]>(JSON_FILES_NAMES.map(async (name) => {
        const response = await fetch(`/${name}.json`);

        return response.json();
    })));

    return {
        '/': questions,
        '/exercises': exercises,
    };
};

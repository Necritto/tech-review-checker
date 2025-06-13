import {Cache} from '@shared/utils';

export {default as questions} from './questions';
export {default as exercises} from './exercises';

interface GetTemplateProps {
    folder: string;
    subfolder: string;
    fileName: string;
}

const TEMPLATES = import.meta.glob('./templates/**/*.md', {
    query: '?raw',
    import: 'default',
});

const cache = new Cache();

export const getTemplateMarkdown = async ({folder, subfolder, fileName}: GetTemplateProps): Promise<string> => {
    try {
        const key = `${folder}/${subfolder}/${fileName}`;

        const cachedTemplate = cache.get<string>(key);

        if (cachedTemplate) {
            return cachedTemplate;
        }

        const template = await TEMPLATES[`./templates/${key}.md`]();

        if (typeof template !== 'string') {
            return '';
        }

        cache.set(key, template);

        return template;
    } catch (error) {
        console.error(error);

        return '';
    }
};

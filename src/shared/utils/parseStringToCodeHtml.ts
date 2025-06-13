import Shiki from '@shikijs/markdown-it';
import MarkdownIt from 'markdown-it';

// TODO: improve performance
const createInstance = async () => {
    const instance = MarkdownIt();

    instance.use(await Shiki({
        theme: 'one-dark-pro',
    }));

    return instance;
};

const md = createInstance();

export const parseStringToCodeHtml = async (text: string): Promise<string> => {
    const html = (await md).render(text);

    return html;
};

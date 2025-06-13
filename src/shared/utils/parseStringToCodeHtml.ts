import Shiki from '@shikijs/markdown-it';
import MarkdownIt from 'markdown-it';

const md = MarkdownIt();

md.use(await Shiki({
    theme: 'one-dark-pro',
}));

export const parseStringToCodeHtml = (text: string): string => {
    const html = md.render(text);

    return html;
};

import {fromAsyncCodeToHtml} from '@shikijs/markdown-it/async';
import {codeToHtml} from 'shiki';
import MarkdownItAsync from 'markdown-it-async';

const md = MarkdownItAsync();

md.use(
    fromAsyncCodeToHtml(
        codeToHtml,
        {
            theme: 'one-dark-pro',
        },
    ),
);

export const parseStringToCodeHtml = async (text: string): Promise<string> => {
    const html = await md.renderAsync(text);

    return html;
};

import React from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeHighlight from "rehype-highlight";

import { Paragraph } from "./particles/paragraph";

export interface MarkdownRendererProps {
    content: string;
}

export function MarkdownRenderer({
    content,
}: MarkdownRendererProps): React.JSX.Element {
    return (
        <Markdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw, rehypeHighlight]}
            components={{
                p: Paragraph,
            }}
        >
            {content}
        </Markdown>
    );
}

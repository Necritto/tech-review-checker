import React from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeHighlight from "rehype-highlight";

import { Paragraph } from "./particles/paragraph";
import { Code } from "./particles/code";

export interface MarkdownRendererProps {
    content: string;
    withCodeCopy?: boolean;
}

export function MarkdownRenderer({
    content,
    withCodeCopy,
}: Readonly<MarkdownRendererProps>): React.JSX.Element {
    return (
        <Markdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw, rehypeHighlight]}
            components={{
                p: Paragraph,
                code(props) {
                    return (
                        <Code
                            {...props}
                            content={content}
                            withCodeCopy={withCodeCopy}
                        />
                    );
                },
            }}
        >
            {content}
        </Markdown>
    );
}

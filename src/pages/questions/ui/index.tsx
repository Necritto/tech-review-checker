import React from "react";

import { getTemplateMarkdown } from "@shared/static";
import { MarkdownRenderer } from "@shared/ui/markdown-renderer";

export function QuestionsPage(): React.JSX.Element {
    const [s, sS] = React.useState("");

    const test = async () => {
        const content = await getTemplateMarkdown({
            folder: "exercises",
            subfolder: "common",
            fileName: "cicd",
        });

        sS(content);
    };

    React.useEffect(() => {
        test();
    }, []);

    return (
        <div>
            <MarkdownRenderer content={s} />
        </div>
    );
}

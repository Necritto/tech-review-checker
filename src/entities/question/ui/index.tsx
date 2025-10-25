import React from "react";
import cn from "classnames";

import {
    type DetailedProps,
    type Question,
    type Questions,
} from "@shared/types";
import { Tag } from "@shared/ui/tag";
import { drawerService } from "@shared/ui/drawer";
import { getTemplateMarkdown } from "@shared/static";

import styles from "./styles.module.scss";
import { MarkdownRenderer } from "@shared/ui/markdown-renderer";

export type QuestionProps = Omit<
    DetailedProps<HTMLDivElement>,
    "children" | "id"
> &
    Question & {
        template: Questions["template"];
    };

export function Question(props: Readonly<QuestionProps>): React.JSX.Element {
    const { id, template, question, tags, className, ...rest } = props;

    const handleShowAnswer = async () => {
        const md = await getTemplateMarkdown({
            folder: "questions",
            subfolder: template,
            fileName: id,
        });

        drawerService.open(<MarkdownRenderer content={md} />);
    };

    return (
        <p {...rest} className={cn(className, styles.component)}>
            <button className={styles.button} onClick={handleShowAnswer}>
                {question}
            </button>
            {tags.map((tag) => (
                <Tag key={tag} variant={tag}>
                    {tag}
                </Tag>
            ))}
        </p>
    );
}

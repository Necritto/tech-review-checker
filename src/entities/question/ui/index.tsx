import React from "react";
import cn from "classnames";

import {
    type DetailedProps,
    type Folders,
    type Question,
    type Questions,
} from "@shared/types";
import { Tag } from "@shared/ui/tag";
import { drawerService } from "@shared/ui/drawer";
import { getTemplateMarkdown } from "@shared/static";
import { FOLDERS } from "@shared/lib/constants/templates";

import styles from "./styles.module.scss";

const MarkdownRenderer = React.lazy(() =>
    import("@shared/ui/markdown-renderer").then((module) => ({
        default: module.MarkdownRenderer,
    }))
);

export type QuestionProps = Omit<
    DetailedProps<HTMLDivElement>,
    "children" | "id" | "type"
> &
    Question & {
        type: Folders;
        template: Questions["template"];
    };

export function Question(props: Readonly<QuestionProps>): React.JSX.Element {
    const { id, template, type, question, tags, className, ...rest } = props;

    const handleShowAnswer = async () => {
        const md = await getTemplateMarkdown({
            folder: type,
            subfolder: template,
            fileName: id,
        });

        drawerService.open(
            <React.Suspense>
                <MarkdownRenderer
                    content={md}
                    withCodeCopy={type === FOLDERS.EXERCISES}
                />
            </React.Suspense>
        );
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

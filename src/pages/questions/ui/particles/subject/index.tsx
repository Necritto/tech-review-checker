import React from "react";
import cn from "classnames";
import { ChevronDown } from "lucide-react";

import { type DetailedProps, type Questions } from "@shared/types";

import { Plate } from "@shared/ui/plate";
import { Collapse } from "@shared/ui/collapse";
import { List } from "@shared/ui/list";
import { Question } from "@entities/question";

import { Button } from "../button";
import styles from "./styles.module.scss";

export interface SubjectProps extends DetailedProps<HTMLDivElement> {
    questions: Questions;
}

export function Subject({
    questions,
    className,
    ...props
}: Readonly<SubjectProps>): React.JSX.Element {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <Plate
            {...props}
            className={cn({ [styles.open]: isOpen }, className)}
            headerSlot={
                <Button
                    className={styles.button}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {questions.subject}
                    <ChevronDown className={styles.icon} />
                </Button>
            }
        >
            <Collapse open={isOpen} className={styles.content}>
                <List>
                    {questions.questions.map(({ id, question, tags }) => ({
                        id,
                        slot: (
                            <Question
                                id={id}
                                template={questions.template}
                                question={question}
                                tags={tags}
                            />
                        ),
                    }))}
                </List>
            </Collapse>
        </Plate>
    );
}

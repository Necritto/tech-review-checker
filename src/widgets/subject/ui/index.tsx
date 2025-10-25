import React from "react";
import cn from "classnames";
import { ChevronDown } from "lucide-react";

import { Question } from "@entities/question";

import {
    type DetailedProps,
    type Folders,
    type Questions,
} from "@shared/types";
import { Plate } from "@shared/ui/plate";
import { Collapse } from "@shared/ui/collapse";
import { List } from "@shared/ui/list";

import { Button } from "./particles/button";
import styles from "./styles.module.scss";

export interface SubjectProps
    extends Omit<DetailedProps<HTMLDivElement>, "children" | "type"> {
    questions: Questions;
    type: Folders;
}

export function Subject(props: Readonly<SubjectProps>): React.JSX.Element {
    const { questions, type, className, ...rest } = props;

    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <Plate
            {...rest}
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
                                type={type}
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

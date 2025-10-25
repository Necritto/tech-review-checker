import React from "react";

import { Subject } from "@widgets/subject";

import { questions } from "@shared/static";
import { FOLDERS } from "@shared/lib/constants/templates";

import styles from "./styles.module.scss";

export function QuestionsPage(): React.JSX.Element {
    return (
        <section className={styles.component}>
            {questions.map((questions) => (
                <Subject
                    key={questions.template}
                    type={FOLDERS.QUESTIONS}
                    questions={questions}
                />
            ))}
        </section>
    );
}

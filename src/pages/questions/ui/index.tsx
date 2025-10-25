import React from "react";

import { questions } from "@shared/static";

import styles from "./styles.module.scss";
import { Subject } from "./particles/subject";

export function QuestionsPage(): React.JSX.Element {
    return (
        <section className={styles.component}>
            {questions.map((questions) => (
                <Subject key={questions.template} questions={questions} />
            ))}
        </section>
    );
}

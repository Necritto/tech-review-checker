import React from "react";

import { Subject } from "@widgets/subject";

import { exercises } from "@shared/static";
import { FOLDERS } from "@shared/lib/constants/templates";

import styles from "./styles.module.scss";

export function ExercisesPage(): React.JSX.Element {
    return (
        <section className={styles.component}>
            {exercises.map((questions) => (
                <Subject
                    key={questions.template}
                    type={FOLDERS.EXERCISES}
                    questions={questions}
                />
            ))}
        </section>
    );
}

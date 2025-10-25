import type React from "react";

import type { TAG_VARIANTS } from "@shared/lib/constants/tags";
import type { FOLDERS, SUBFOLDERS } from "@shared/lib/constants/templates";

export type DetailedProps<
    A,
    E extends React.HTMLAttributes<A> = React.HTMLAttributes<A>
> = React.DetailedHTMLProps<E, A>;

export type Nullable<T> = T | null;

export type ObjectValues<T> = T[keyof T];

export interface Questions {
    subject: string;
    template: QuestionsSubfolders | ExercisesSubfolders;
    questions: Question[];
}

export interface Question {
    id: string;
    question: string;
    tags: TagVariants[];
}

export type TagVariants = ObjectValues<typeof TAG_VARIANTS>;

export type Folders = ObjectValues<typeof FOLDERS>;
export type QuestionsSubfolders = ObjectValues<
    (typeof SUBFOLDERS)["questions"]
>;
export type ExercisesSubfolders = ObjectValues<
    (typeof SUBFOLDERS)["exercises"]
>;

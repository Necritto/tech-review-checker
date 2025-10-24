import type React from "react";

import type { TAG_VARIANTS } from "@shared/lib/constants/tags";

export type DetailedProps<A> = React.DetailedHTMLProps<
    React.HTMLAttributes<A>,
    A
>;

export type ObjectValues<T> = T[keyof T];

export interface Questions {
    subject: string;
    template: string;
    questions: Question[];
}

export interface Question {
    id: string;
    question: string;
    tags: TagVariants[];
}

export type TagVariants = ObjectValues<typeof TAG_VARIANTS>;

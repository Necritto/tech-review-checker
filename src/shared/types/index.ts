import type React from "react";

import type { TAG_VARIANTS } from "@shared/lib/constants/tags";

export type DetailedProps<
    A,
    E extends React.HTMLAttributes<A> = React.HTMLAttributes<A>
> = React.DetailedHTMLProps<E, A>;

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

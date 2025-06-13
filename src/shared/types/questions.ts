import type {TagVariants} from '@shared/model';

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

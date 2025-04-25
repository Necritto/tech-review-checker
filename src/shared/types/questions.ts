import type {TagVariants} from '@shared/model';

export interface Questions {
    subject: string;
    questions: Question[];
}

export interface Question {
    question: string;
    tags: TagVariants[];
}

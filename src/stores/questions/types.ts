import {QUESTION_STATUSES} from '@/constants/question';

export interface Questions {
    subject: string;
    questions: Question[];
}

export interface Question {
    question: string;
    isAdvanced: boolean;
    status: QuestionStatus;
}

export type QuestionStatus = typeof QUESTION_STATUSES[keyof typeof QUESTION_STATUSES];

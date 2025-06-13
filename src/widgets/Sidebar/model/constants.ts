import {questions, exercises} from '@shared/static';

import type {Questions} from '@shared/types';

export const DEFAULT_ACTIVE_ID = null;

export const TEMPLATE_BY_PATHNAMES = {
    questions: '/',
    exercises: '/exercises',
};

export const SIDEBAR_CONTENT_BY_PAGE: Record<string, Questions[]> = {
    [TEMPLATE_BY_PATHNAMES.questions]: questions,
    [TEMPLATE_BY_PATHNAMES.exercises]: exercises,
};

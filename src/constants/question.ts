export const QUESTION_STATUSES = {
    SUCCESS: 'success',
    WEAK: 'weak',
    ERROR: 'error',
    OFF: 'off',
} as const;

export const QUESTION_STATUSES_MAP = {
    [QUESTION_STATUSES.SUCCESS]: 'Верно',
    [QUESTION_STATUSES.WEAK]: 'Частично верно',
    [QUESTION_STATUSES.ERROR]: 'Неверно',
    [QUESTION_STATUSES.OFF]: 'Вопрос был пропущен',
};

export const QUESTION_RESULT_PDF_ACTIONS = {
    OPEN: 'openPdf',
    DOWNLOAD: 'downloadPdf',
} as const;

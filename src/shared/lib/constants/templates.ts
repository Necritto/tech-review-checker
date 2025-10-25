export const FOLDERS = {
    QUESTIONS: "questions",
    EXERCISES: "exercises",
} as const;

export const SUBFOLDERS = {
    [FOLDERS.QUESTIONS]: {
        COMMON: "common",
        CSS: "css",
        HTML: "html",
        JS: "js",
        OOP_FP: "oop-fp",
        REACT: "react",
        TS: "ts",
    },
    [FOLDERS.EXERCISES]: {
        COMMON: "common",
        CSS: "css",
        HTML: "html",
        JS: "js",
        REACT: "react",
        TS: "ts",
    },
} as const;

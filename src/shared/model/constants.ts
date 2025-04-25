export const TAG_VARIANTS = {
    EASY: 'easy',
    MEDIUM: 'medium',
    HARD: 'hard',
} as const;

export type TagVariants = typeof TAG_VARIANTS[keyof typeof TAG_VARIANTS];

export interface Questions {
    subject: string
    questions: Question[]
}

export interface Question {
    question: string
    isAdvanced: boolean
}

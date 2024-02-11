import PdfmMke from 'pdfmake';
import {QUESTION_RESULT_PDF_ACTIONS} from '@/constants/question';

interface Definition {
    content: Content[];
    styles: Record<string, any>;
}

interface Content {
    text: string;
    style?: string | string[];
}

export type PDFActions = typeof QUESTION_RESULT_PDF_ACTIONS[keyof typeof QUESTION_RESULT_PDF_ACTIONS];

const pdfmakeInstance: any = PdfmMke;

pdfmakeInstance.fonts = {
    Roboto: {
        normal: 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Regular.ttf',
        bold: 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Medium.ttf',
    },
};

export const docDefinition: Definition = {
    content: [],
    styles: {
        header: {
            fontSize: 22,
            bold: true,
        },
        paragraph: {
            fontSize: 16,
            normal: true,
        },
    },
};

export function createPdf(docDefinition: Definition): Record<PDFActions, () => void> {
    const pdf = pdfmakeInstance.createPdf(docDefinition);

    return {
        [QUESTION_RESULT_PDF_ACTIONS.OPEN]: () => pdf.open(),
        [QUESTION_RESULT_PDF_ACTIONS.DOWNLOAD]: () => pdf.download(),
    };
}

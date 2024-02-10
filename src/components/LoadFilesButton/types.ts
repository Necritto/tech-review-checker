import type {UseFileDialogOptions} from '@vueuse/core';

export interface LoadFilesButtonProps {
    label: string;
    accept?: UseFileDialogOptions['accept'];
}

export type LoadFilesButtonEmits = {
    load: [FileList]
};

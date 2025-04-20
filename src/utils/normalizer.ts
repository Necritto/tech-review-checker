import {toastChannel} from '@events/toast';

const NORMALIZE_ERROR_MESSAGE = 'Cannot normalize file';

const dispatchError = () => toastChannel().emit({type: 'error', message: NORMALIZE_ERROR_MESSAGE});

export const jsonToObject = (file: File): Promise<object> => {
    return new Promise((resolve) => {
        const reader = new FileReader();

        reader.onload = (readerEvent: ProgressEvent<FileReader>) => {
            if (!readerEvent.target || typeof readerEvent.target.result !== 'string') {
                dispatchError();

                return {};
            }

            try {
                resolve(JSON.parse(readerEvent.target.result));
            } catch (error) {
                console.error(error);
                dispatchError();
            }
        };

        reader.readAsText(file, 'UTF-8');
    });
};

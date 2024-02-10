import type {Toast} from '@stores/toast/types';

export interface ToastElementProps extends Toast {
    timeout?: number;
}

export type ToastElementEmits = {
    close: [id: ToastElementProps['id']]
};

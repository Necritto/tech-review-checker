import type {Toast} from '@stores/toast/types';

import {eventChannelBuilder} from '@utils/eventBus/eventChannelBuilder';

export interface ToastChannelEventPayload {
    type: Toast['type'];
    message: Toast['message'];
}

export const toastChannel = eventChannelBuilder<ToastChannelEventPayload>(Symbol('toast'));

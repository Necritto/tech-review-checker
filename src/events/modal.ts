import type {Component} from 'vue';

import {eventChannelBuilder} from '@utils/eventBus/eventChannelBuilder';

export interface ModalChannelEventPayload {
    content: string | Component;
}

export const modalChannel = eventChannelBuilder<ModalChannelEventPayload>(Symbol('modal'));

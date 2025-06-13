import {eventChannelBuilder} from './_eventChannelBuilder';

export const codeHtmlChannel = eventChannelBuilder<string>(Symbol('code-html'));

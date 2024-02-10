import {EventBusImpl, EventKey, EventHandler} from './eventBus';

const bus = new EventBusImpl();

export function eventChannelBuilder<Payload>(eventKey: EventKey) {
    return function () {
        return {
            on: (handler: EventHandler) => bus.on(eventKey, handler),
            off: (handler: EventHandler) => bus.off(eventKey, handler),
            emit: (payload: Payload) => bus.emit(eventKey, payload),
        };
    };
}

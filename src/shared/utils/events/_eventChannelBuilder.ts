import {EventBus, type EventHandler} from './_eventBus';

interface BuilderReturnType<Payload> {
    on: (handler: EventHandler) => ReturnType<EventBus['on']>;
    off: (handler: EventHandler) => ReturnType<EventBus['off']>;
    emit: (payload: Payload) => ReturnType<EventBus['emit']>;
}

export function eventChannelBuilder<Payload>(eventName: symbol): BuilderReturnType<Payload> {
    const bus = new EventBus();

    return {
        on: (handler) => bus.on(eventName, handler),
        off: (handler) => bus.off(eventName, handler),
        emit: (payload) => bus.emit(eventName, payload),
    };
}

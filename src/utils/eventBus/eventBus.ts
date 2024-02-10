export type EventKey = string | symbol;
export type EventHandler<T = any> = (payload: T) => void;
export type EventMap = Record<EventKey, EventHandler>;

export type Bus<E> = Record<keyof E, E[keyof E][]>;

export interface EventBus {
    on(key: EventKey, handler: EventHandler): () => void;
    off(key: EventKey, handler: EventHandler): void;
    emit(key: EventKey, payload: unknown): void;
}

export class EventBusImpl implements EventBus {
    private subscribers = new Map();

    on(key: EventKey, handler: EventHandler) {
        const handlers = this.subscribers.get(key);

        if (handlers) {
            handlers.push(handler);
        } else {
            this.subscribers.set(key, [handler]);
        }

        return () => this.off(key, handler);
    }

    off(key: EventKey, handler: EventHandler) {
        const handlers = this.subscribers.get(key);

        if (!handlers) {
            return;
        }

        handlers.splice(handlers.indexOf(handler) >>> 0, 1);
    }

    emit(key: EventKey, payload: unknown) {
        const handlers = this.subscribers.get(key);

        if (!handlers) {
            return;
        }

        handlers.forEach((handler: EventHandler) => handler(payload));
    }
}

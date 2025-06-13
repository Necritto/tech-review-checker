export type EventHandler = (payload: unknown) => void;

export class EventBus {
    private subscribers = new Map<symbol, EventHandler[]>();

    public on(key: symbol, handler: EventHandler) {
        const handlers = this.subscribers.get(key);

        if (handlers) {
            handlers.push(handler);
        } else {
            this.subscribers.set(key, [handler]);
        }

        return () => this.off(key, handler);
    }

    public off(key: symbol, handler: EventHandler): void {
        const handlers = this.subscribers.get(key);

        if (!handlers) {
            return;
        }

        handlers.splice(handlers.indexOf(handler) >>> 0, 1);
    }

    public emit(key: symbol, payload: Parameters<EventHandler>[0]): void {
        const handlers = this.subscribers.get(key);

        if (!handlers) {
            return;
        }

        handlers.forEach((handler) => handler(payload));
    }
}

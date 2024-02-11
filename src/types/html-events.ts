export interface InputEvent<T> extends Event {
    target: T & EventTarget;
}

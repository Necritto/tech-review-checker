export function isInObject<T>(target: T, key: PropertyKey): target is T {
    return Object.prototype.hasOwnProperty.call(target, key);
}

export const getObjectKeyByValue = <T extends Record<PropertyKey, unknown>>(
    object: T,
    value: T[keyof T],
): PropertyKey => {
    return Object.keys(object).find((key) => object[key] === value) ?? '';
};

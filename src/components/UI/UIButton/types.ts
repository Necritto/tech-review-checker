export type UIButtonProps = {
    label?: string;
    flat?: boolean;
}

export type UIButtonEmits = {
    click: [void];
}

export type UIButtonSlots = {
    default: () => any;
}

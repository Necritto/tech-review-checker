export type ModalProps = {
    modelValue: boolean;
};

export type ModalEmits = {
    'update:modelValue': [modalValue: boolean];
    close: [void];
};

export type ModalSlots = {
    default: () => any;
};

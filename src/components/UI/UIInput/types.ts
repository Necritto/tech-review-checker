export type InputProps = {
    modelValue: string | number;
    label: string;
    hint?: string;
    fieldName?: string;
    type?: 'email' | 'number' | 'tel' | 'text';
    required?: boolean;
    error?: boolean;
};

export type InputEmits = {
    'update:modelValue': [modelValue: InputProps['modelValue']];
    change: [value: InputProps['modelValue']]
};

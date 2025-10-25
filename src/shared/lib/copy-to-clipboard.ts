export interface CopyToClipboardOutput {
    success: boolean;
    message: string;
}

export async function copyToClipboard(
    text: string
): Promise<CopyToClipboardOutput> {
    if (!text || text.trim() === "") {
        return {
            success: false,
            message: "Попытка скопировать пустую строку",
        };
    }

    if (!navigator?.clipboard) {
        return {
            success: false,
            message: "Clipboard API недоступен",
        };
    }

    try {
        await navigator.clipboard.writeText(text);

        return {
            success: true,
            message: "Контент успешно скопирован",
        };
    } catch (error) {
        console.error(error);

        return {
            success: false,
            message: "Ошибка при копировании через Clipboard API",
        };
    }
}

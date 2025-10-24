import { ClipboardList, Code } from "lucide-react";

export const MENU_ROUTES = {
    QUESTIONS: {
        path: "/",
        title: "Теория",
        Icon: ClipboardList,
    },
    EXERCISES: {
        path: "/exercises",
        title: "Практика",
        Icon: Code,
    },
} as const;

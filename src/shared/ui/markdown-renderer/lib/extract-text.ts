import type React from "react";

export function extractText(children: React.ReactNode): string {
    if (typeof children === "string") {
        return children;
    }

    if (typeof children === "number") {
        return String(children);
    }

    if (Array.isArray(children)) {
        return children.map(extractText).join("");
    }

    if (children && typeof children === "object" && "props" in children) {
        const element = children as React.ReactElement<React.PropsWithChildren>;

        return extractText(element.props.children);
    }

    return "";
}

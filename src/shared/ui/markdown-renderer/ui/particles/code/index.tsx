import React from "react";
import cn from "classnames";
import { toast } from "react-toastify";
import { Copy } from "lucide-react";

import { type DetailedProps } from "@shared/types";
import { copyToClipboard } from "@shared/lib/copy-to-clipboard";

import { extractText } from "../../../lib/extract-text";
import styles from "./styles.module.scss";

export interface CodeProps extends DetailedProps<HTMLSpanElement> {
    withCodeCopy?: boolean;
}

export function Code(props: Readonly<CodeProps>): React.JSX.Element {
    const { children, className, withCodeCopy = false, ...rest } = props;

    const handleCopy = async () => {
        const { message } = await copyToClipboard(extractText(children));
        toast.success(message);
    };

    return (
        <code {...rest} className={cn(styles.component, className)}>
            {withCodeCopy && (
                <button className={styles.copy} onClick={handleCopy}>
                    <Copy />
                </button>
            )}
            {children}
        </code>
    );
}

import type React from "react";

type DrawerState = {
    isOpen: boolean;
    template: React.ReactNode;
};

let snapshot: DrawerState = {
    isOpen: false,
    template: null,
};

const listeners = new Set<() => void>();

let scrollY = 0;
let originalScrollBehavior = "";

export const drawerService = {
    open: (template: React.ReactNode) => {
        scrollY = window.scrollY;
        document.body.style.position = "fixed";
        document.body.style.top = `-${scrollY}px`;
        document.body.style.width = "100%";
        originalScrollBehavior = document.documentElement.style.scrollBehavior;

        snapshot = { isOpen: true, template };
        _emitChange();
    },
    close: () => {
        document.documentElement.style.scrollBehavior = "auto";
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.width = "";
        window.scrollTo(0, scrollY);

        snapshot = { isOpen: false, template: null };
        _emitChange();

        requestAnimationFrame(() => {
            document.documentElement.style.scrollBehavior =
                originalScrollBehavior;
        });
    },
};

export const drawerStore = {
    subscribe(notify: () => void) {
        listeners.add(notify);

        return () => listeners.delete(notify);
    },
    getSnapshot() {
        return snapshot;
    },
};

function _emitChange() {
    for (let listener of listeners) {
        listener();
    }
}

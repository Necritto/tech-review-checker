import type {DirectiveBinding} from 'vue';

const root = document.getElementById('app');

export default {
    mounted(_: Element, binding: DirectiveBinding): void {
        _toggleBodyLock(binding.value);
    },
    updated(_: Element, binding: DirectiveBinding): void {
        _toggleBodyLock(binding.value);
    },
    beforeUnmount(): void {
        _toggleBodyLock();
    },
};

function _toggleBodyLock(isLocked: boolean = false) {
    if (isLocked) {
        document.body.style.overflow = 'hidden';
        root?.setAttribute('inert', 'true');
    } else {
        document.body.style.overflow = 'visible';
        root?.removeAttribute('inert');
    }
}

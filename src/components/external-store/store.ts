export const notifiers = new Set<() => void>();

export let now = new Date().toLocaleTimeString();

setInterval(() => {
    now = new Date().toLocaleTimeString();
    notifiers.forEach((notify) => notify());
}, 1000);

export function subscribe(notify: () => void) {
    notifiers.add(notify);

    return () => notifiers.delete(notify);
}
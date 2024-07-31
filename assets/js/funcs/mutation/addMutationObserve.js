export function addMutationObserve(element, params) {
    let mutationObserver = new MutationObserver(params.callback);
        mutationObserver.observe(element, params.options);
}
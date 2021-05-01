import './src/styles/main.scss';

export const onClientEntry = async () => {
    if (typeof IntersectionObserver === 'undefined') {
        await import('intersection-observer');
    }
    if (window.matchMedia('(prefers-reduced-motion: no-preference)').matches) {
        (await import('smoothscroll-polyfill')).polyfill();
    }
}

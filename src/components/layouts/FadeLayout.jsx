import React from 'react';
import { useInView } from 'react-intersection-observer';
import { CSSTransition } from 'react-transition-group';

export default function FadeLayout({ direction, timeout, inViewProps, children }) {
    const { ref, inView } = useInView(inViewProps);

    return (
        <CSSTransition in={inView} classNames={`fade-${direction}`} timeout={timeout}>
            {children({ ref })}
        </CSSTransition>
    )
}
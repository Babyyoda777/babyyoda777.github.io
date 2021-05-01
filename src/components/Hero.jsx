import React from 'react';
import { CSSTransition } from 'react-transition-group';

export default function Hero() {
    return (
        <section className="hero">
            <h1 className="hero__name">Hi, I'm <strong>babyyoda777</strong>.
            <CSSTransition in={true} classNames="hand" appear timeout={500}>
                <span className="hero__hand-emoji" aria-hidden="true">👋</span>
            </CSSTransition>
            </h1>
            <h2 className="hero__description">I’m a <strong>iOS developer</strong> who creates jailbreak tweaks <strong> websites</strong> and <strong>themes</strong>.</h2>
        </section>
    )
}
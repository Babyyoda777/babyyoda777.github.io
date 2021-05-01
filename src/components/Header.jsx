import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Link } from 'gatsby';

import MainNavbar from './MainNavbar';
import Hero from './Hero';
import { ReactComponent as DownIcon } from '../media/icons/chevron-down.svg';


export default function Home() {
    const { ref: heroForwardRef, inView } = useInView({
        threshold: 1.0,
        initialInView: true
    });

    return (
        <header className="header" ref={heroForwardRef}>
            <MainNavbar navScrolled={!inView} />
            <Hero />
            <div className="header__learn-more">
                <p className="header__learn-more-text mt-0">Learn more about me</p>
                <Link className="icon-wrapper icon-wrapper--transition icon-wrapper--hover" to="/#about">
                    <DownIcon className="icon" />
                </Link>
            </div>
        </header>
    )
}
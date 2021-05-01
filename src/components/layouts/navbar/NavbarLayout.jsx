import React from 'react';

export default function NavbarLayout({ rootClass, listClass, ariaLabel, children }) {
    return (
        <nav 
        className={`navbar ${rootClass ?? ''}`}
        {...(ariaLabel && {
            "aria-label": ariaLabel
        })}>
            { children }
        </nav>
    )
}
import React from 'react';

export default function NavList({ rootClass, children, listProps }) {
    return (
        <ul className={`navbar__items ${rootClass ?? ''}`} {...listProps}>
            {children}
        </ul>
    )
}
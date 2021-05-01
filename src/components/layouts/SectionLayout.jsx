import React from 'react';

export default function SectionLayout({ id, icon, title, bodyClass, children }) {
    return (
        <section id={id} className="section-layout" aria-label={title}>
            <header className="section-layout__header">
                <div className="icon-wrapper icon-wrapper--primary section-layout__header-icon" aria-hidden="true">
                    <div className="icon icon--secondary">{icon}</div>
                </div>
                <h1 className="heading heading--xxl heading--primary">{title}</h1>
            </header>
            <div className={`section-layout__body ${bodyClass ?? ''}`}>
                {children}
            </div>
        </section>
    )
}
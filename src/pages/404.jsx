import React from 'react';
import { Link } from 'gatsby';
export default function NotFoundPage() {
    return (
        <main className="not-found">
            <h1 className="heading not-found__404">404</h1>
            <h2 className="heading not-found__description">Page not found!</h2>
            <Link to="/" className="not-found__link">Take Me Home</Link>
        </main>
    )
}
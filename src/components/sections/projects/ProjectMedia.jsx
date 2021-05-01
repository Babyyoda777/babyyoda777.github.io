import React from 'react';
import Img from 'gatsby-image';

export default function ProjectMedia({ desktop, mobile }) {
    return (
        <div className="project__media">
            <div className="project__desktop-media">
                <Img 
                fluid={desktop.media} 
                alt={desktop.alt} />
            </div>
            <div className="project__mobile-media">
                <Img
                fluid={mobile.media}
                alt={mobile.alt} />
            </div>
        </div>
    )
}
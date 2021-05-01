import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

export default function SEO() {
    const { site: { siteMetadata: { title, description , keywords } } } = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                        description
                        keywords
                    }
                }

            }
        `
    );

    return (
        <Helmet 
        title={title}
        htmlAttributes={{
            lang: 'en'
        }}
        meta={[{
            name: 'description',
            content: description
        },
        {
            name: 'keywords',
            content: keywords.join(',')
        },
        {
            property: 'og:title',
            content: title
        },
        {
            property: 'og:description',
            content: description
        }, 
        {
            property: 'og:type',
            content: 'website'
        }]} />
    )
}
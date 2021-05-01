import React from 'react';
import { ReactComponent as GithubIcon } from '../../../media/icons/github.svg';
import { ReactComponent as LinkIcon } from '../../../media/icons/external-link.svg';
import FadeLayout from '../../layouts/FadeLayout';
import ProjectMedia from './ProjectMedia';

export default function Project({ projectInfo: { frontmatter: { title, external, github, stack, desktop_cover, desktop_alt, mobile_cover, mobile_alt, learned }, html: bodyContent }}) {
    return (
        <FadeLayout 
        direction="up" 
        timeout={350} 
        inViewProps={{
            triggerOnce: true,
            rootMargin: "0px 0px -100px 0px"
        }}>
        {
            ({ ref }) => (
                <section className="project" ref={ref}>
                    <div className="project__info">
                        <div className="heading-wrapper projects-body__project-header">
                            <h2 className="heading heading--xl">{title}</h2>
                        </div>
                        <div className="project__body-text" dangerouslySetInnerHTML={{__html: bodyContent}} />
                        <section className="project__subsection">
                            <h3 className="heading heading--sm">What I Learned</h3>
                            <p className="project__body-text">{learned}</p>
                        </section>
                        <div className="project__stack-info">
                            <span className="project__emphasis-text">Built with: </span>
                            <ul className="list list--horizontal project__stack-list">
                            {
                                stack.map((tech) => (
                                    <li className="project__stack-item">{tech}</li>
                                ))
                            }
                            </ul>
                        </div>
                        <div className="project__links">
                            <span className="project__emphasis-text">Links: </span>
                        {
                            github && <a className="project__link" href={github} target="_blank" rel="noreferrer noopener" aria-label="Github Link"><GithubIcon className="icon icon--small project__link-icon" /></a>
                        }
                        {
                            external && <a className="project__link" href={external} target="_blank" rel="noreferrer noopener" aria-label="External Link"><LinkIcon className="icon icon--small project__link-icon" /></a>
                        }
                        </div>
                    </div>
                    <ProjectMedia 
                    desktop={{
                        media: desktop_cover && desktop_cover.childImageSharp.fluid,
                        alt: desktop_alt
                    }}
                    mobile={{
                        media: mobile_cover && mobile_cover.childImageSharp.fluid,
                        alt: mobile_alt
                    }} />
                </section>
            )
        }
        </FadeLayout>


    )
}
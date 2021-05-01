import React from 'react';
import SectionLayout from '../../layouts/SectionLayout';
import { ReactComponent as PersonIcon } from '../../../media/icons/user.svg';

export default function AboutSection() {
    return (
        <SectionLayout 
        id="about" 
        icon={<PersonIcon />} 
        title="About Me"
        bodyClass="about-body">
            <section className="about-body__description">
                <p className="mt-0">
                    Hi! I'm babyyoda777, a <strong>iOS developer</strong> based in <strong>the UK</strong>. I develop <strong>iOS jailbreak tweaks</strong> themes and for fun, I make websites! 
                    I am passionate about creating <strong>user experiences</strong> that are both <strong>performant and responsive</strong>, whether it be transforming an idea
                    into code, or building personal web app projects for myself and others.
                </p>
                <p>
                    As a developer, I'm constantly trying to improve upon my current skills/technologies while learning new ones. Currently, I have experience with <strong>HTML, CSS, HTML, Python, Onjective-C and Swift.</strong> As for new skills, I'm not only learning new technologies like <strong>TailwindCSS</strong> and <strong>GatsbyJS</strong>, 
                    but also learning to be better equipped for creating accessible experiences (following WCAG), and for better performance in my websites and web applications.
                </p>
                <p>
                    The following is a list of technologies that I currently work with for personal projects, and also ones that I've had 
                    varying levels of experience with and would be willing to pick up again whether for a personal or work-related project.                    
                </p>
            </section>
            <section className="about-body__skills">
                <h2 className="heading about-body__skills-heading">Technologies I Currently Use</h2>
                <div className="about-body__skills-content">
                    <div className="about-body__skills-subsection">
                        <h3 className="heading heading--sm heading--space-b">Core</h3>
                        <ul className="list about-body__list">
                            <li className="about-body__list-item">HTML</li>
                            <li className="about-body__list-item">CSS/SASS</li>
                            <li className="about-body__list-item">JavaScript (ES6)</li>
                        </ul>
                    </div>
                    <div className="about-body__skills-subsection">
                        <h3 className="heading heading--sm heading--space-b">Frameworks</h3>
                        <ul className="list about-body__list">
                            <li className="about-body__list-item">TailwindCSS</li>
                            <li className="about-body__list-item">ReactJS</li>
                            <li className="about-body__list-item">GatsbyJS</li>
                            <li className="about-body__list-item">NextJS</li>
                        </ul>
                    </div>
                </div>
                <h2 className="heading about-body__skills-heading">Other Technologies I've Learned</h2>
                <div className="about-body__skills-content">
                    <div className="about-body__skills-subsection">
                        <h3 className="heading heading--sm heading--space-b">Frontend</h3>
                        <ul className="list about-body__list">
                            <li className="about-body__list-item">Typescript</li>
                            <li className="about-body__list-item">Bootstrap</li>
                            <li className="about-body__list-item">jQuery</li>
                        </ul>
                    </div>
                    <div className="about-body__skills-subsection">
                        <h3 className="heading heading--sm heading--space-b">Backend</h3>
                        <ul className="list about-body__list">
                            <li className="about-body__list-item">NodeJS</li>
                            <li className="about-body__list-item">Express</li>
                        </ul>
                    </div> 
                </div>
            </section>
        </SectionLayout>
    )
}
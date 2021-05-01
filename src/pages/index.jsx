import React from "react"
import SEO from '../components/SEO';
import Header from '../components/Header';
import AboutSection from '../components/sections/about/AboutSection';
import WorkExperienceSection from '../components/sections/work/WorkExperienceSection';
import ProjectSection from '../components/sections/projects/ProjectSection';
import LinkSection from '../components/sections/links/LinkSection';
import Footer from '../components/Footer';

export default function Home() {
    return (
        <> 
            <SEO />
            <Header />
            <AboutSection />
            <WorkExperienceSection />
            <ProjectSection />
            <LinkSection />
            <Footer />
        </>
    )
}

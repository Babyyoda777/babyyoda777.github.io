import React, { useState } from 'react';
import NavbarLayout from './layouts/navbar/NavbarLayout';
import NavList from './layouts/navbar/NavList';
import NavItem from './layouts/navbar/NavItem';
import { ReactComponent as PersonIcon } from '../media/icons/user.svg';
import { ReactComponent as BriefcaseIcon } from '../media/icons/briefcase.svg';
import { ReactComponent as ProjectIcon } from '../media/icons/code.svg';
import { ReactComponent as LinkIcon } from '../media/icons/link.svg';
import { ReactComponent as HamburgerIcon } from '../media/icons/menu.svg';
import { ReactComponent as CloseIcon } from '../media/icons/x.svg';

export default function MainNavbar({ navScrolled }) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleOpenMenu = (e) => {
        document.body.style.overflowY = 'hidden';

        setMobileMenuOpen(true);
    }

    const handleCloseMenu = (e) => {
        if (mobileMenuOpen) {
            document.body.style.overflowY = '';

            setMobileMenuOpen(false);
        }
    }

    return (
        <>
            <button 
            className="navbar__hamburger"
            aria-label="Open mobile menu"
            onClick={handleOpenMenu}>
                <HamburgerIcon />
            </button>
            <div 
            aria-hidden="true"
            className={`navbar__backdrop ${mobileMenuOpen ? 'navbar__backdrop--active' : ''}`} 
            onClick={handleCloseMenu} />
            <NavbarLayout
            rootClass={`navbar--main ${mobileMenuOpen ? 'navbar--main--mobile-active' : ''} ${navScrolled ? 'navbar--scrolled' : ''}`}>

                
                <NavList
                rootClass="navbar__items--main"
                listProps={{
                    ariaHidden: !mobileMenuOpen,
                }}>
                    <NavItem 
                    icon={<PersonIcon />} 
                    text="About" 
                    isNativeLink={false}
                    linkProps={{ to: '/#about' }} 
                    rootClass="navbar__item--main" 
                    onClick={handleCloseMenu} />
                    <NavItem 
                    icon={<BriefcaseIcon />} 
                    text="Work" 
                    isNativeLink={false}
                    linkProps={{ to: '/#work' }} 
                    rootClass="navbar__item--main" 
                    onClick={handleCloseMenu} />
                    <NavItem 
                    icon={<ProjectIcon />} 
                    text="Projects" 
                    isNativeLink={false}
                    linkProps={{ to: '/#projects' }} 
                    rootClass="navbar__item--main" 
                    onClick={handleCloseMenu} />
                    <NavItem 
                    icon={<LinkIcon />} 
                    text="Links" 
                    isNativeLink={false}
                    linkProps={{ to: '/#links' }} 
                    rootClass="navbar__item--main" 
                    onClick={handleCloseMenu} />
                </NavList>
                <button 
                className={`icon navbar--main__close ${mobileMenuOpen ? 'navbar--main__close--opened' : ''}`} 
                aria-label="Close mobile menu"
                onClick={handleCloseMenu}>
                    <CloseIcon />
                </button>
            </NavbarLayout>
        </>
    )
}
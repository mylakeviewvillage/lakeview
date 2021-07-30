import React from "react";
import Link from 'next/link';
import { useState } from "react";

import styles from '../../styles/components/header.module.scss';

const SiteHeader = ({ globalData, sitemapNode, page }) => {
    // get header data
    const { logo, mainMenu } = globalData.header;

    // set up href for internal links
    let href = "/pages/[...slug]";

    const [openNav, setOpenNav] = useState(false);
    const [openSubNav, setOpenSubNav] = useState(0);

    const closeMenu = () => {
        setOpenNav(false);
        setOpenSubNav(0);
    }

    return (
        <header className={styles.header}>
            <div className="container">
                <div className={styles.content}>
                    <div className={styles.logo}>
                        <img src={logo.url} alt={logo.label} className="w-100" />
                    </div>
                    <button className="hamburger" onClick={() => setOpenNav(true)}>
                        <div className="ham-bar top-bar"></div>
                        <div className="ham-bar mid-bar"></div>
                        <div className="ham-bar bot-bar"></div>
                    </button>
                    <nav className={openNav ? styles.active : styles.inactive}>
                        <button className={styles.closeNav} onClick={closeMenu} aria-label="close navigation" />
                        <div className={styles.topMenu}>
                            <div className={`container ${styles.container}`}>
                                <ul className={styles.topMenuList}>
                                    {mainMenu.map((topLevelLink, topIndex) => {
                                        if (!topLevelLink.subNavLinks.totalCount) {
                                            return (
                                                <li key={`top-level-link-${topIndex}`}>
                                                    <Link href={topLevelLink.link.href}>
                                                        <a target={topLevelLink.link.target}>{topLevelLink.title}</a>
                                                    </Link>
                                                </li>)
                                        } else {
                                            return (
                                                <li key={`top-level-link-${topIndex}`}>
                                                    <button className={styles.subMenuButton} onClick={() => setOpenSubNav(topIndex)}>{topLevelLink.title}</button>
                                                    <div className={`${styles.subMenu} ${openSubNav === topIndex ? styles.active : styles.inactive}`}>
                                                        <div className="container">
                                                            <ul>
                                                                <li>
                                                                    <button onClick={() => setOpenSubNav(0)}>{topLevelLink.title}</button>
                                                                </li>
                                                                {topLevelLink.subNavLinks.items.map((subNavLink, subIndex) => {
                                                                    return (
                                                                        <li key={`sub-nav-link-${topIndex}-${subIndex}`}>
                                                                            <Link href={'/'}>
                                                                                <a>
                                                                                    {subNavLink.fields.link.text}
                                                                                </a>
                                                                            </Link>
                                                                        </li>
                                                                    )
                                                                })}
                                                                <li>
                                                                    <Link href="/contact">
                                                                        <a>Contact</a>
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </li>
                                            )
                                        }
                                    })}
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
};

SiteHeader.getCustomInitialProps = async function ({
    agility,
    languageCode,
    channelName,
}) {
    // set up api
    const api = agility;

    let logo = null;
    let mainMenu = null;

    try {
        // try to fetch our site header
        let headerContent = await api.getContentList({
            referenceName: "header",
            languageCode: languageCode,
            depth: 10,
            expandAllContentLinks: true,
            take: 10
        });

        // if we have a header, set as content item
        if (headerContent.items && headerContent.items.length > 0) {
            let header = headerContent.items[0].fields;
            logo = header.logo;
            mainMenu = header.mainMenu.items;
            mainMenu.sort((a, b) => (a.properties.itemOrder > b.properties.itemOrder) ? 1 : -1);
            mainMenu = mainMenu.map(link => link.fields);
            // mainMenu = mainMenu.map(link => )
        } else {
            return null;
        }
    } catch (error) {
        if (console) console.error("Could not load site header item.", error);
        return null;
    }

    return {
        logo,
        mainMenu
    };
};

export default SiteHeader;

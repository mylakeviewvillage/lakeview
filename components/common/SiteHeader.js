import React from "react";
import Link from 'next/link';
import { useState } from "react";

const SiteHeader = ({ globalData, sitemapNode, page }) => {
    // get header data
    const { logo, mainMenu } = globalData.header;

    // set up href for internal links
    let href = "/pages/[...slug]";

    const [openSubNav, setOpenSubNav] = useState(0);

    const hiddenSubNav = {
        display: 'none'
    }

    const visibleSubNav = {
        display: 'block'
    }

    console.log(openSubNav);

    return (
        <header>
            <img
                src={logo.url}
                alt={logo.label}
                title={logo.siteName}
            />
            <nav>
                <ul>
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
                                    <button className="subMenuButton" onClick={() => setOpenSubNav(topIndex)}>{topLevelLink.title}</button>
                                    <ul style={openSubNav === topIndex ? visibleSubNav : hiddenSubNav}>
                                        {topLevelLink.subNavLinks.items.map((subNavLink, subIndex) => {
                                            return (
                                                <li key={`sub-nav-link-${topIndex}-${subIndex}`}>{subNavLink.fields.link.text}</li>
                                            )
                                        })}
                                    </ul>
                                </li>
                            )
                        }
                    })}
                </ul>
            </nav>
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
            console.log(mainMenu);
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

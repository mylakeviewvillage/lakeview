import ContactPanel from "components/ContactPanel";
import NextPanel from "components/NextPanel";
import Link from "next/link";
import React from "react";
import styles from '../../styles/components/footer.module.scss';

const SiteFooter = ({ globalData }) => {

    const { nextUpLinks, logo, copyright, legalMenu, socialMenu, secondaryLinks, tertiaryLinks, contactIntro, contactCompliance, contactThankYou, contactHeading } = globalData.footer;

    return (
        <footer className={styles.footer}>
            <ContactPanel copy={{ contactIntro, contactCompliance, contactThankYou, contactHeading }} />
            <NextPanel menu={nextUpLinks} />
            <div className={styles.bottom}>
                <div className="container">
                    <div className="content fat">
                        <div className={styles.grid}>
                            <div className={styles.secondary_links_panel}>
                                <h2>Secondary<br />Site Links</h2>
                                <hr />
                                <ul>
                                    {secondaryLinks.map((item, index) => <li key={`secondary-link-${index}`}><Link href={item.link.href}><a target={item.link.target}>{item.link.text}</a></Link></li>)}
                                </ul>
                            </div>
                            <div className={styles.tertiary_links_panel}>
                                <h2>Tertiary<br />Site Links</h2>
                                <hr />
                                <ul>
                                    {tertiaryLinks.map((item, index) => <li key={`tertiary-link-${index}`}><Link href={item.link.href}><a target={item.link.target}>{item.link.text}</a></Link></li>)}
                                </ul>
                            </div>
                            <div className={styles.legal_panel}>
                                <div className={styles.logo}>
                                    <img src={logo.url} alt={logo.label} className="w-100" />
                                </div>
                                <div className={styles.copyright}>
                                    <p>{copyright}</p>
                                </div>
                                <div className={styles.legal_menu}>
                                    <ul>
                                        {legalMenu.map((item, index) => <li key={`legal-link-${index}`}><Link href={item.link.href}><a target={item.link.target}>{item.link.text}</a></Link></li>)}
                                    </ul>
                                </div>
                                <div className={styles.social_menu}>
                                    <ul>
                                        {socialMenu.map((item, index) => <li key={`social-link-${index}`}><Link href={item.link.href}><a target={item.link.target}><div className={styles.social_menu_icon}><img src={item.image.url} alt={item.image.label} className="w-100" /></div></a></Link></li>)}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

SiteFooter.getCustomInitialProps = async function ({
    agility,
    languageCode,
    channelName,
}) {

    let nextUpLinks;
    let logo;
    let copyright;
    let legalMenu;
    let socialMenu;
    let secondaryLinks;
    let tertiaryLinks;
    let contactIntro;
    let contactCompliance;
    let contactThankYou;
    let contactHeading;

    try {

        let footerContent = await agility.getContentList({
            referenceName: "footer",
            languageCode,
            depth: 10,
            expandAllContentLinks: true,
            take: 10
        });

        if (footerContent.items && footerContent.items.length > 0) {
            let footer = footerContent.items[0].fields;
            nextUpLinks = footer.nextUpLinks.items;
            nextUpLinks.sort((a, b) => (a.properties.itemOrder > b.properties.itemOrder) ? 1 : -1);
            nextUpLinks = nextUpLinks.map(link => link.fields);
            logo = footer.logo;
            copyright = footer.copyright;
            legalMenu = footer.legalMenu.items;
            legalMenu.sort((a, b) => (a.properties.itemOrder > b.properties.itemOrder) ? 1 : -1);
            legalMenu = legalMenu.map(link => link.fields);
            socialMenu = footer.socialMenu.items;
            socialMenu.sort((a, b) => (a.properties.itemOrder > b.properties.itemOrder) ? 1 : -1);
            socialMenu = socialMenu.map(link => link.fields);
            secondaryLinks = footer.secondaryLinks.items;
            secondaryLinks.sort((a, b) => (a.properties.itemOrder > b.properties.itemOrder) ? 1 : -1);
            secondaryLinks = secondaryLinks.map(link => link.fields);
            tertiaryLinks = footer.tertiaryLinks.items;
            tertiaryLinks.sort((a, b) => (a.properties.itemOrder > b.properties.itemOrder) ? 1 : -1);
            tertiaryLinks = tertiaryLinks.map(link => link.fields);
            contactIntro = footer.contactIntro;
            contactCompliance = footer.contactCompliance;
            contactThankYou = footer.contactThankYou;
            contactHeading = footer.contactHeading;
        }

    } catch (err) {
        console.log("Global Footer error: ", err);

    }

    return { nextUpLinks, logo, copyright, legalMenu, socialMenu, secondaryLinks, tertiaryLinks, contactIntro, contactCompliance, contactThankYou, contactHeading };

}


export default SiteFooter;

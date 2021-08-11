import React from "react";

const SiteFooter = ({ globalData }) => {

    console.log(globalData);

    return (
        <footer>
            Footer
        </footer>
    );
};

SiteFooter.getCustomInitialProps = async function ({
    agility,
    languageCode,
    channelName,
}) {

    let logo;
    let copyright;
    let legalMenu;
    let socialMenu;
    let secondaryLinks;
    let tertiaryLinks;

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
        }

    } catch (err) {
        console.log("Global Footer error: ", err);

    }

    return { logo, copyright, legalMenu, socialMenu, secondaryLinks, tertiaryLinks }

}


export default SiteFooter;

import RichTextArea from 'components/RichTextArea';
import Link from 'next/link';
import React from 'react';
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel, } from 'react-accessible-accordion';
import styles from '../../styles/components/accordion.module.scss';

const AccordionSection = ({ module, customData }) => {

    const { title, description, cTA } = module.fields;
    const { accordionItems } = customData;

    return (
        <section className={styles.accordion}>
            <div className="container">
                <div className="content">
                    <div className={styles.grid}>
                        <div className={styles.grid_left}>
                            {title && <h2 className="minor">{title}</h2>}
                            <hr />
                            {description && <RichTextArea html={description} />}
                            {cTA && <Link href={cTA.href}><a className="btn" target={cTA.target}>{cTA.text}</a></Link>}
                        </div>
                        <div className={styles.grid_right}>
                            <Accordion allowMultipleExpanded allowZeroExpanded>
                                {accordionItems.map((accordionItem, index) => (
                                    <AccordionItem className={styles.collapsable_section} key={`collapsable-section-${index}`}>
                                        <AccordionItemHeading>
                                            <AccordionItemButton className={styles.collapsable_section_title}>
                                                <div className={styles.expand_icon}>
                                                    <div className={styles.expand_icon_bar} />
                                                    <div className={styles.expand_icon_bar} />
                                                </div>
                                                <h3>{accordionItem.title}</h3>
                                                <h4>{accordionItem.subtitle}</h4>
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel className={styles.collapsable_section_hidden}>
                                            <RichTextArea html={accordionItem.copy} />
                                        </AccordionItemPanel>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

AccordionSection.getCustomInitialProps = async ({
    agility,
    languageCode,
    channelName,
    item
}) => {
    let accordionItems = null;
    const api = agility;
    let accordionItemsContent = await api.getContentList({
        referenceName: item.fields.accordionItems.referencename,
        languageCode: languageCode,
        depth: 10,
        expandAllContentLinks: true,
        take: 10
    });
    accordionItemsContent.items.sort((a, b) => (a.properties.itemOrder > b.properties.itemOrder) ? 1 : -1);
    accordionItems = accordionItemsContent.items.map(accordionItem => accordionItem.fields);
    return {
        accordionItems
    }
}

export default AccordionSection;
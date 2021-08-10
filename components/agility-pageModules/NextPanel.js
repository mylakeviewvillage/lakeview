import RichTextArea from 'components/RichTextArea';
import Link from 'next/link';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import styles from '../../styles/components/next-panel.module.scss';

const NextPanel = ({ module, customData }) => {

    const { title, subtitle } = module.fields;
    const { links } = customData;

    const [splitTitle, setSplitTitle] = useState([]);

    useEffect(() => {
        setSplitTitle(title.split(' '));
    }, [title])

    return (
        <section className={styles.next_panel}>
            <div className="container">
                <div className="content fat">
                    <h2>
                        {splitTitle.map((word, index) => <span key={`split-title-${index}`}>{word}</span>)}
                    </h2>
                    <h3>{subtitle}</h3>
                    <ul>
                        {links.map(({ link }, index) => {
                            return (
                                <li key={`link-${index}`}>
                                    <span className={styles.dash}>-</span> <Link href={link.href}><a target={link.target}>{link.text}</a></Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </section>
    );
};

NextPanel.getCustomInitialProps = async ({
    agility,
    languageCode,
    channelName,
    item
}) => {
    let links = null;
    const api = agility;
    let linksContent = await api.getContentList({
        referenceName: item.fields.links.referencename,
        languageCode: languageCode,
        depth: 10,
        expandAllContentLinks: true,
        take: 10
    });
    linksContent.items.sort((a, b) => (a.properties.itemOrder > b.properties.itemOrder) ? 1 : -1);
    links = linksContent.items.map(cards => cards.fields);
    return {
        links
    }
}

export default NextPanel;
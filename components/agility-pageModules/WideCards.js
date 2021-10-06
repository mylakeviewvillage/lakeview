import SEOImage from 'components/SEOImage';
import Link from 'next/link';
import React from 'react';
import styles from '../../styles/components/wide-cards.module.scss';
import { Fade } from 'react-awesome-reveal';
import SectionTitle from 'components/SectionTitle';

const WideCards = ({ module, customData }) => {

    const { titleOne, titleTwo, titleThree } = module.fields;
    const { cards } = customData;

    return (
        <section>
            <div className="container">
                <div className="content">
                    {titleOne && <SectionTitle titleOne={titleOne} titleTwo={titleTwo} titleThree={titleThree} />}
                    <div className={styles.wide_cards}>
                        {cards.map((card, index) => {
                            return (
                                <Fade direction="left" delay={index * 100} key={`wide-card-${index}`}>
                                    <div className={styles.wide_card}>
                                        {card.image && (
                                            <div className={styles.wide_card_image}>
                                                <Link href={card.cTA.href}>
                                                    <a target={card.cTA.target}>
                                                        <SEOImage img={card.image} className="w-100" sizes={[725, 400, 300]} />
                                                    </a>
                                                </Link>
                                            </div>
                                        )}
                                        <div className={styles.wide_card_content}>
                                            {card.category && <p className={styles.category}>{card.category}</p>}
                                            <Link href={card.cTA.href}>
                                                <a target={card.cTA.target}>
                                                    <h2 className="minor">{card.title}</h2>
                                                </a>
                                            </Link>
                                            <Link href={card.cTA.href}>
                                                <a target={card.cTA.target} className="btn">{card.cTA.text}</a>
                                            </Link>
                                        </div>
                                    </div>
                                </Fade>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

WideCards.getCustomInitialProps = async ({
    agility,
    languageCode,
    channelName,
    item
}) => {
    let cards = null;
    const api = agility;
    let cardsContent = await api.getContentList({
        referenceName: item.fields.cards.referencename,
        languageCode: languageCode,
        depth: 10,
        expandAllContentLinks: true,
        take: 10
    });
    cardsContent.items.sort((a, b) => (a.properties.itemOrder > b.properties.itemOrder) ? 1 : -1);
    cards = cardsContent.items.map(cards => cards.fields);
    return {
        cards
    }
}

export default WideCards;
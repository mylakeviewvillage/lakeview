import SEOImage from 'components/SEOImage';
import Link from 'next/link';
import React from 'react';
import { format } from 'date-fns'
import styles from '../../styles/components/wide-cards.module.scss';

const WideCards = ({ module, customData }) => {

    const { cards } = customData;

    return (
        <section>
            <div className="container">
                <div className="content">
                    <div className={styles.wide_cards}>
                        {cards.map((card, index) => {
                            let legibleDate;
                            if (card.date) {
                                legibleDate = format(new Date(card.date), 'dd.MM.Y')
                            }
                            return (
                                <div className={styles.wide_card} key={`wide-card-${index}`}>
                                    <div className={styles.wide_card_image}>
                                        <Link href={card.cTA.href}>
                                            <a target={card.cTA.target}>
                                                <SEOImage img={card.image} className="w-100" sizes={[700, 400]} />
                                            </a>
                                        </Link>
                                    </div>
                                    <div className={styles.wide_card_content}>
                                        {legibleDate && <p className={styles.date}>{legibleDate}</p>}
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
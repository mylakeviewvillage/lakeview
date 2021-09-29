import SEOImage from 'components/SEOImage';
import React, { useState } from 'react';
import styles from '../../styles/components/wide-cards.module.scss';

const WideCards = ({ customData }) => {

    const { cards } = customData;

    const [modal, setModal] = useState(false);

    const openModal = () => setModal(true);
    const closeModal = () => setModal(false);

    return (
        <section>
            <div className="container">
                <div className="content">
                    <div className={styles.wide_cards}>
                        {cards.map((card, index) => {
                            return (
                                <div className={styles.wide_card} key={`wide-card-${index}`}>
                                    {card.image && !card.videoID(
                                        <div className={styles.wide_card_image}>
                                            <SEOImage img={card.image} className="w-100" sizes={[700, 400]} />
                                        </div>
                                    )}
                                    {card.image && card.videoID(
                                        <div className={styles.wide_card_image} onClick={openModal}>
                                            <SEOImage img={card.image} className="w-100" sizes={[700, 400]} />
                                        </div>
                                    )}
                                    <div className={styles.wide_card_content}>
                                        {card.category && <p className={styles.category}>{card.category}</p>}

                                        {card.videoID && card.title && <h2 className="minor" onClick={openModal}>{card.title}</h2>}
                                        {!card.videoID && card.title && <h2 className="minor">{card.title}</h2>}

                                        {card.videoID && (
                                            <div>
                                                <button className={`btn ${styles.cta}`} onClick={openModal}>Watch Video</button>
                                                <ModalVideo channel='youtube' autoplay={true} isOpen={modal} videoId={videoID} onClose={closeModal} />
                                            </div>
                                        )}
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
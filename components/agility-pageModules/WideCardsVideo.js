import SEOImage from 'components/SEOImage';
import React, { useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import styles from '../../styles/components/wide-cards.module.scss';

import ModalVideo from 'react-modal-video';
import SectionTitle from 'components/SectionTitle';

const WideCardsVideo = ({ module, customData }) => {

    const { titleOne, titleTwo, titleThree } = module.fields;
    const { cards } = customData;

    const [modal, setModal] = useState(false);

    const openModal = (videoID) => {
        setVideoID(videoID)
        setModal(true)
    };
    const closeModal = () => setModal(false);

    const [videoID, setVideoID] = useState('');

    return (
        <section>
            <div className="container">
                <div className="content">
                    {titleOne && <SectionTitle titleOne={titleOne} titleTwo={titleTwo} titleThree={titleThree} />}
                    <div className={styles.wide_cards}>
                        {cards.map((card, index) => {
                            return (
                                <Fade direction="left" delay={index * 100} key={`wide-card-video-${index}`}>
                                    <div className={styles.wide_card}>
                                        {card.image && !card.videoID && (
                                            <div className={styles.wide_card_image}>
                                                <img src="/img/play-circle.svg" alt="play button" className="play-circle" />
                                                <SEOImage img={card.image} className="w-100" sizes={[725, 400]} />
                                            </div>
                                        )}
                                        {card.image && card.videoID && (
                                            <div className={styles.wide_card_image} onClick={openModal}>
                                                <img src="/img/play-circle.svg" alt="play button" className="play-circle" />
                                                <SEOImage img={card.image} className="w-100" sizes={[725, 400]} />
                                            </div>
                                        )}
                                        <div className={styles.wide_card_content}>
                                            {card.category && <p className={styles.category}>{card.category}</p>}

                                            {card.videoID && card.title && <h2 className="minor" onClick={openModal}>{card.title}</h2>}
                                            {!card.videoID && card.title && <h2 className="minor">{card.title}</h2>}

                                            {card.videoID && (
                                                <div>
                                                    <button className={`btn ${styles.cta}`} onClick={() => openModal(card.videoID)}>Watch Video</button>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </Fade>
                            )
                        })}
                        <ModalVideo channel='youtube' autoplay={true} isOpen={modal} videoId={videoID} onClose={closeModal} />
                    </div>
                </div>
            </div>
        </section>
    );
};

WideCardsVideo.getCustomInitialProps = async ({
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

export default WideCardsVideo;
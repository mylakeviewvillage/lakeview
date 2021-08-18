import React, { useState, useEffect } from 'react';
import { Masonry } from 'masonic';
import styles from '../../styles/components/masonary-cards.module.scss';
import SEOImage from 'components/SEOImage';
import Link from 'next/link';
import { useMediaQuery } from 'react-responsive';
import SectionTitle from 'components/SectionTitle';

const MasonryCards = ({ module, customData }) => {

    const { titleOne, titleTwo, titleThree } = module.fields;

    const isMobile = useMediaQuery({
        maxWidth: 768
    });

    const isTablet = useMediaQuery({
        maxWidth: 1024
    });

    const [masonryColumns, setMasonryColumns] = useState(1);

    useEffect(() => {
        if (isMobile) {
            setMasonryColumns(1)
        } else if (isTablet) {
            setMasonryColumns(2)
        } else {
            setMasonryColumns(3);
        }
    }, [isMobile, isTablet]);

    const { cards } = customData;

    const card = ({ index, data: { image, category, heading, cTA } }) => {
        return (
            <div className={styles.card} key={`masonry-card-${index}`}>
                <div className={styles.card_image}>
                    <SEOImage img={image} sizes={[500, 400]} className="w-100" />
                </div>
                <div className={styles.card_copy}>
                    <p>{category}</p>
                    <h3>{heading}</h3>
                    <Link href={cTA.href}>
                        <a target={cTA.target} className="btn">{cTA.text}</a>
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <section>
            <div className="container">
                <div className="content">
                    {titleOne && <SectionTitle titleOne={titleOne} titleTwo={titleTwo} titleThree={titleThree} />}
                    <Masonry items={cards} render={card} columnCount={masonryColumns} columnGutter={30} />
                </div>
            </div>
        </section>
    );
};

MasonryCards.getCustomInitialProps = async ({
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

export default MasonryCards;
import React, { useState, useEffect } from 'react';
import { Masonry } from 'masonic';
import { useMediaQuery } from 'react-responsive';
import SectionTitle from 'components/SectionTitle';
import MasonryCard from 'components/MasonryCard';

const MasonryCards = ({ module, customData }) => {

    const { titleOne, titleTwo, titleThree } = module.fields;

    const smallScreen = useMediaQuery({
        maxWidth: 768
    });

    const mediumScreen = useMediaQuery({
        maxWidth: 1200
    });

    const [masonryColumns, setMasonryColumns] = useState(1);

    useEffect(() => {
        if (smallScreen) {
            setMasonryColumns(1)
        } else if (mediumScreen) {
            setMasonryColumns(2)
        } else {
            setMasonryColumns(3);
        }
    }, [smallScreen, mediumScreen]);

    const { cards } = customData;

    return (
        <section>
            <div className="container">
                <div className="content">
                    {titleOne && <SectionTitle titleOne={titleOne} titleTwo={titleTwo} titleThree={titleThree} />}
                    <Masonry items={cards} render={MasonryCard} columnCount={masonryColumns} columnGutter={30} />
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
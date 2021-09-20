import React from 'react';
import SectionTitle from 'components/SectionTitle';
import MasonryCard from 'components/agility-pageModules/MasonryCards/MasonryCard';

import Masonry from 'react-masonry-css'

const MasonryCards = ({ module, customData }) => {

    const { titleOne, titleTwo, titleThree } = module.fields;

    const breakpointColumnsObj = {
        default: 3,
        1200: 2,
        768: 1
    };

    const cards = customData.cards.map((card, index) => <MasonryCard index={index} data={card} />)

    return (
        <section>
            <div className="container">
                <div className="content">
                    {titleOne && <SectionTitle titleOne={titleOne} titleTwo={titleTwo} titleThree={titleThree} />}
                    <Masonry
                        breakpointCols={breakpointColumnsObj}
                        className="my-masonry-grid"
                        columnClassName="my-masonry-grid_column">
                        {cards}
                    </Masonry>
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
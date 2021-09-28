import React from 'react';
import SectionTitle from 'components/SectionTitle';
import MasonryCardVideo from 'components/agility-pageModules/MasonryCardsVideo/MasonryCardVideo';

import Masonry from 'react-masonry-css'

const MasonryCardsVideo = ({ module, customData }) => {

    const { titleOne, titleTwo, titleThree } = module.fields;

    const breakpointColumnsObj = {
        default: 3,
        1200: 2,
        768: 1
    };

    const cards = customData.cards.map((card, index) => <MasonryCardVideo index={index} key={`masonry-card-video-${index}`} data={card} />)

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

MasonryCardsVideo.getCustomInitialProps = async ({
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

export default MasonryCardsVideo;
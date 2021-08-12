import React from 'react';

const TileSlider = ({ customData }) => {

    const { tiles } = customData;

    console.log(tiles);

    return (
        <section>
            <div className="container">
                <div className="content">
                    TILE SLIDER
                </div>
            </div>
        </section>
    );
};

TileSlider.getCustomInitialProps = async ({
    agility,
    languageCode,
    channelName,
    item
}) => {
    let tiles = null;
    const api = agility;
    let tilesContent = await api.getContentList({
        referenceName: item.fields.tiles.referencename,
        languageCode: languageCode,
        depth: 10,
        expandAllContentLinks: true,
        take: 10
    });
    tilesContent.items.sort((a, b) => (a.properties.itemOrder > b.properties.itemOrder) ? 1 : -1);
    tiles = tilesContent.items.map(tiles => tiles.fields);
    return {
        tiles
    }
}

export default TileSlider;
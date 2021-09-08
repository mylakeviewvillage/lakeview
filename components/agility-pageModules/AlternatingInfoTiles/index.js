import SectionTitle from 'components/SectionTitle';
import { getContentList } from 'helpers/getContentList';
import React from 'react';
import styles from 'styles/components/alternating-info-tiles.module.scss';
import AlternatingInfoTile from './AlternatingInfoTile';

const AlternatingInfoTiles = ({ module, customData }) => {
    const { titleOne, titleTwo, titleThree } = module.fields;
    const infoTiles = customData.contentList;

    return (
        <section>
            <div className="container">
                <div className="content">
                    <SectionTitle titleOne={titleOne} titleTwo={titleTwo} titleThree={titleThree} />
                    <div className={styles.tiles}>
                        {infoTiles.map((tile, index) => <AlternatingInfoTile key={`alternating-info-tile-${index}`} tile={tile} />)}
                    </div>
                </div>
            </div>
        </section>
    );
};

AlternatingInfoTiles.getCustomInitialProps = async ({
    agility,
    languageCode,
    item
}) => {
    let contentListRes = await getContentList(agility, item.fields.infoTiles.referencename, languageCode);
    let contentList = contentListRes.contentList;
    contentList.forEach(item => item.iconList.items.sort((a, b) => (a.properties.itemOrder > b.properties.itemOrder) ? 1 : -1));
    return { contentList };
}

export default AlternatingInfoTiles;
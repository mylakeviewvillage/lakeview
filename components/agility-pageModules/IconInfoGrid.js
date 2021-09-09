import RichTextArea from 'components/RichTextArea';
import SEOImage from 'components/SEOImage';
import { getContentList } from 'helpers/getContentList';
import React from 'react';
import styles from 'styles/components/icon-info-grid.module.scss';

const IconInfoGrid = ({ module, customData }) => {
    const { title, description } = module.fields;
    const tiles = customData.contentList;

    return (
        <section className={styles.icon_grid}>
            <div className="container">
                <div className="content">
                    <div className={styles.panes}>
                        <div className={styles.paneLeft}>
                            <h3 className={styles.title}>{title}</h3>
                            <RichTextArea html={description} />
                        </div>
                        <div className={styles.paneRight}>
                            <div className={styles.tiles}>
                                {tiles.map((item, index) => (
                                    <div className={styles.tile}>
                                        <SEOImage img={item.icon} sizes={[100]} className="icon" />
                                        <RichTextArea html={item.copy} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

IconInfoGrid.getCustomInitialProps = async ({
    agility,
    languageCode,
    item
}) => {
    let contentListRes = await getContentList(agility, item.fields.iconList.referencename, languageCode);
    let contentList = contentListRes.contentList;
    //contentList.forEach(item => item.iconList.items.sort((a, b) => (a.properties.itemOrder > b.properties.itemOrder) ? 1 : -1));
    return { contentList };
}

export default IconInfoGrid;
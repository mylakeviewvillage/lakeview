import { getContentList } from 'helpers/getContentList';
import React, { useState, useEffect, useRef } from 'react';
import { useWindowSize } from "@react-hook/window-size";
import { usePositioner, useResizeObserver, useContainerPosition, MasonryScroller } from 'masonic';
import { useMediaQuery } from 'react-responsive';
import MasonryCard from 'components/agility-pageModules/MasonryCards/MasonryCard';
import MasonrySort from 'components/MasonrySort';

import styles from 'styles/components/article-list.module.scss';

const ArticleList = ({ module, customData }) => {

    const [cards, setCards] = useState([]);
    const [renderedCards, setRenderedCards] = useState([]);
    const [loadedInt, setLoadedInt] = useState(6);

    useEffect(() => {
        setCards(customData.contentList)
    }, [customData])

    useEffect(() => {
        setRenderedCards(cards.slice(0, loadedInt));
    }, [cards, loadedInt]);

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

    const filterCards = (filter) => {
        setLoadedInt(6)
        if (filter === 'All') {
            setCards(customData.contentList);
        } else {
            const filteredCards = customData.contentList.filter(card => card.category === filter);
            setCards(filteredCards);
        }
    }

    const containerRef = useRef(null);
    const [windowWidth, windowHeight] = useWindowSize();
    const { offset, width } = useContainerPosition(containerRef, [
        windowWidth,
        windowHeight
    ]);

    const positioner = usePositioner(
        { width, columnCount: masonryColumns, columnGutter: 30 },
        [renderedCards]
    );

    const resizeObserver = useResizeObserver(positioner);

    const loadMore = () => {
        setLoadedInt(loadedInt + 6);
    }

    return (
        <section>
            <div className="container">
                <div className="content">
                    <MasonrySort filterCards={filterCards} />
                    <MasonryScroller
                        positioner={positioner}
                        resizeObserver={resizeObserver}
                        containerRef={containerRef}
                        items={renderedCards}
                        height={1080}
                        offset={offset}
                        overscanBy={6}
                        render={MasonryCard}
                    />
                    {cards.length > loadedInt && (
                        <div className={styles.load_more}>
                            <hr />
                            <button onClick={loadMore}>Load More</button>
                            <hr />
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

ArticleList.getCustomInitialProps = async ({
    agility,
    languageCode
}) => {
    return getContentList(agility, 'articles', languageCode);
}

export default ArticleList;
import { getContentList } from 'helpers/getContentList';
import React, { useState, useEffect, useRef } from 'react';
import useWindowScroll from "@react-hook/window-scroll";
import { useWindowSize } from "@react-hook/window-size";
import { usePositioner, useResizeObserver, useContainerPosition, MasonryScroller } from 'masonic';
import { useMediaQuery } from 'react-responsive';
import MasonryCard from 'components/MasonryCard';
import MasonrySort from 'components/MasonrySort';

const ArticleList = ({ module, customData }) => {

    const [cards, setCards] = useState([]);

    useEffect(() => {
        setCards(customData.contentList);
    }, [customData])

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
        [cards]
    );

    const resizeObserver = useResizeObserver(positioner);

    return (
        <section>
            <div className="container">
                <div className="content">
                    <MasonrySort filterCards={filterCards} />
                    {/* <Masonry items={cards} render={MasonryCard} columnCount={masonryColumns} columnGutter={30} /> */}
                    <MasonryScroller
                        positioner={positioner}
                        resizeObserver={resizeObserver}
                        containerRef={containerRef}
                        items={cards}
                        height={1080}
                        offset={offset}
                        overscanBy={6}
                        render={MasonryCard}
                    />
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
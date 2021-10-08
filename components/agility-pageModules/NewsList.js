import { getContentList } from 'helpers/getContentList';
import React, { useState, useEffect } from 'react';
import MasonryCard from 'components/agility-pageModules/MasonryCards/MasonryCard';
import Masonry from 'react-masonry-css';

const NewsList = ({ customData, module }) => {

    const { initialLoad } = module.fields;

    const [cards, setCards] = useState([]);
    const [renderedCards, setRenderedCards] = useState([]);
    const [loadedInt, setLoadedInt] = useState(initialLoad ? initialLoad : 12);
    const loadIncrease = 6;

    useEffect(() => {
        setCards(customData.contentList)
    }, [customData])

    useEffect(() => {
        setRenderedCards(cards.slice(0, loadedInt));
    }, [cards, loadedInt]);

    const filterCards = (filter) => {
        setLoadedInt(initialLoad ? initialLoad : 12)
        if (filter === 'All') {
            setCards(customData.contentList);
        } else {
            const filteredCards = customData.contentList.filter(card => card.category === filter);
            setCards(filteredCards);
        }
    }

    const loadMore = () => {
        setLoadedInt(loadedInt + loadIncrease);
    }

    const breakpointColumnsObj = {
        default: 3,
        1200: 2,
        768: 1
    };

    const cardsRender = renderedCards.map((card, index) => <MasonryCard index={index} data={card} key={`article-card-${index}`} />);

    return (
        <section>
            <div className="container">
                <div className="content">
                    <Masonry
                        breakpointCols={breakpointColumnsObj}
                        className="my-masonry-grid"
                        columnClassName="my-masonry-grid_column">
                        {cardsRender}
                    </Masonry>
                    {cards.length > loadedInt && (
                        <div className="load-more">
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

NewsList.getCustomInitialProps = async ({
    agility,
    languageCode
}) => {
    return getContentList(agility, 'news', languageCode);
}

export default NewsList;
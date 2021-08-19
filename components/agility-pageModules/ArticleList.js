import { getContentList } from 'helpers/getContentList';
import React, { useState, useEffect } from 'react';
import { Masonry } from 'masonic';
import Link from 'next/link';
import { useMediaQuery } from 'react-responsive';

const ArticleList = ({ module, customData }) => {

    console.log(customData);

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

    return (
        <section>
            <div className="container">
                <div className="content">
                    Article List
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
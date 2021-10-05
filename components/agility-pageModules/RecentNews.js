import React, { useEffect, useState } from 'react';
import MasonryCard from './MasonryCards/MasonryCard';

import axios from 'axios';
import SectionTitle from 'components/SectionTitle';
import Masonry from 'react-masonry-css'
import { Fade } from 'react-awesome-reveal';

const RecentNews = ({ module }) => {

    const { titleOne, titleTwo, titleThree } = module.fields;

    const [content, setContent] = useState([]);

    useEffect(() => {
        getContent('news');
    }, []);

    const getContent = async (ref) => {
        try {
            const res = await axios.get(`/api/content/${ref}`);
            setContent(res.data.content.items.map(item => item.fields));
        } catch (err) {
            console.log("content API request error: ", err);
        }
    }

    const cards = content.map((card, index) => <Fade direction="left" delay={index * 50} key={`masonry-card-${index}`}><MasonryCard index={index} data={card} /></Fade>);

    const breakpointColumnsObj = {
        default: 3,
        1200: 2,
        768: 1
    };

    return (
        <section>
            <div className="container">
                <div className="content">
                    <SectionTitle titleOne={titleOne} titleTwo={titleTwo} titleThree={titleThree} />
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

export default RecentNews;
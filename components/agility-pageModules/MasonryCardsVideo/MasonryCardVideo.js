import React from 'react';
import SEOImage from 'components/SEOImage';
import Link from 'next/link';
import styles from 'styles/components/masonry-cards.module.scss';
import { format } from 'date-fns';

const MasonryCardVideo = ({ index, data: { image, category, title, videoID, date } }) => {

    return (
        <div className={styles.card} key={`masonry-card-${index}`}>
            {image && (
                <div className={styles.card_image}>
                    <SEOImage img={image} sizes={[500, 400]} className="w-100" />
                </div>
            )}
            <div className={styles.card_copy}>
                {category && <p>{category}</p>}
                {date && <p>{format(new Date(date), 'MMMM d, yyyy')}</p>}
                {title && <h3>{title}</h3>}
                {videoID && <button className="btn">Watch Video</button>}
            </div>
        </div>
    )
};

export default MasonryCardVideo;
import React, { useState } from 'react';
import SEOImage from 'components/SEOImage';
import styles from 'styles/components/masonry-cards.module.scss';

const MasonryCardVideo = ({ index, data: { image, category, title, videoID }, openModal }) => {

    return (
        <div className={styles.card} key={`masonry-card-${index}`}>
            {image && (
                <div className={styles.card_image}>
                    <button onClick={() => openModal(videoID)}>
                        <img className="play-circle" src="/img/play-circle.svg" alt="Play Button" />
                        <SEOImage img={image} sizes={[500, 400]} className="w-100" />
                    </button>
                </div>
            )}
            <div className={styles.card_copy}>
                {category && <p>{category}</p>}
                {title && (
                    <button onClick={() => openModal(videoID)}>
                        <h3>{title}</h3>
                    </button>
                )}
                {videoID && (
                    <div>
                        <button className={`btn ${styles.cta}`} onClick={() => openModal(videoID)}>Watch Video</button>
                    </div>
                )}
            </div>
        </div>
    )
};

export default MasonryCardVideo;
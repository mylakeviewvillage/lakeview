import React, { useState } from 'react';
import SEOImage from 'components/SEOImage';
import styles from 'styles/components/masonry-cards.module.scss';

import ModalVideo from 'react-modal-video';

const MasonryCardVideo = ({ index, data: { image, category, title, videoID } }) => {

    const [openModal, setOpenModal] = useState(false);

    return (
        <div className={styles.card} key={`masonry-card-${index}`}>
            {image && (
                <div className={styles.card_image}>
                    <button onClick={() => setOpenModal(videoID ? true : false)}>
                        <SEOImage img={image} sizes={[500, 400]} className="w-100" />
                    </button>
                </div>
            )}
            <div className={styles.card_copy}>
                {category && <p>{category}</p>}
                {title && (
                    <button onClick={() => setOpenModal(videoID ? true : false)}>
                        <h3>{title}</h3>
                    </button>
                )}
                {videoID && (
                    <div>
                        <button className={`btn ${styles.cta}`} onClick={() => setOpenModal(true)}>Watch Video</button>
                        <ModalVideo channel='youtube' autoplay={true} isOpen={openModal} videoId={videoID} onClose={() => setOpenModal(false)} />
                    </div>
                )}
            </div>
        </div>
    )
};

export default MasonryCardVideo;
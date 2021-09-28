import React, { useState } from 'react';
import SEOImage from 'components/SEOImage';
import styles from 'styles/components/masonry-cards.module.scss';

import { format } from 'date-fns';
import ModalVideo from 'react-modal-video';

const MasonryCardVideo = ({ index, data: { image, category, title, videoID, date } }) => {

    const [openModal, setOpenModal] = useState(false);

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
                {videoID && (
                    <div>
                        <button className="btn" onClick={() => setOpenModal(true)}>Watch Video</button>
                        <ModalVideo channel='youtube' autoplay={true} isOpen={openModal} videoId={videoID} onClose={() => setOpenModal(false)} />
                    </div>
                )}
            </div>
        </div>
    )
};

export default MasonryCardVideo;
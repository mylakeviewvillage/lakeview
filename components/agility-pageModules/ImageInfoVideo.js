import RichTextArea from 'components/RichTextArea';
import SectionTitle from 'components/SectionTitle';
import SEOImage from 'components/SEOImage';
import React, { useState } from 'react';
import styles from '../../styles/components/image-info.module.scss';

import ModalVideo from 'react-modal-video';

const ImageInfoVideo = ({ module }) => {

    const { titleOne, titleTwo, titleThree, image, topTitle, mainTitle, copy, videoID, backgroundColor, textColor } = module.fields;

    const [openModal, setOpenModal] = useState(false);

    return (
        <section>
            <div className="content">
                <div className="container">
                    <SectionTitle titleOne={titleOne} titleTwo={titleTwo} titleThree={titleThree} />
                </div>
                <div className="container full-width">
                    <div className={styles.image_info} style={backgroundColor ? { background: `linear-gradient(to left, ${backgroundColor} 75%, transparent 75%)` } : null}>
                        <div className={styles.image}>
                            <SEOImage img={image} className="w-100" sizes={[700, 600]} />
                        </div>
                        <div className={`${styles.info} ${textColor === 'Light' ? styles.light : styles.dark}`}>
                            <h3>{topTitle && <span>{topTitle}<br /></span>}{mainTitle}</h3>
                            {copy && <RichTextArea html={copy} />}
                            {videoID && (
                                <div>
                                    <button className={`btn ${textColor === 'Light' ? 'white' : ''}`} onClick={() => setOpenModal(true)}>Watch Video</button>
                                    <ModalVideo channel='youtube' autoplay={true} isOpen={openModal} videoId={videoID} onClose={() => setOpenModal(false)} />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ImageInfoVideo;
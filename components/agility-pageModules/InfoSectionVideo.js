import RichTextArea from 'components/RichTextArea';
import SectionTitle from 'components/SectionTitle';
import React, { useState } from 'react';
import styles from '../../styles/components/info-section.module.scss';

import ModalVideo from 'react-modal-video';

const InfoSectionVideo = ({ module }) => {

    const { videoID, image, infoLeft, infoRight, infoTitle, subtitle, titleOne, titleTwo, titleThree } = module.fields;

    const [modal, setModal] = useState(false);

    const closeModal = () => setModal(false);

    const openModal = () => setModal(true);

    return (
        <section className={styles.infoSection} id="info-section">
            <div className="container">
                <div className="content">
                    {titleOne && <SectionTitle titleOne={titleOne} titleTwo={titleTwo} titleThree={titleThree} />}
                    <div className={styles.panes}>
                        <div className={styles.panesLeft}>
                            {subtitle && <h3>{subtitle}</h3>}
                            {titleOne && <div className={`divider ${styles.divider}`} />}
                            {infoTitle && <h4>{infoTitle}</h4>}
                            <hr />
                            <div className={styles.info}>
                                <div className={styles.infoLeft}>
                                    {infoLeft && <RichTextArea html={infoLeft} />}
                                    {videoID && <button className="btn" onClick={openModal}>Watch</button>}
                                </div>
                                <div className={styles.infoRight}>
                                    {infoRight && <RichTextArea html={infoRight} />}
                                </div>
                            </div>
                        </div>
                        <div className={styles.panesRight}>
                            {image && (
                                <div className={styles.panningImage}>
                                    <img src={image.url} alt={image.label} className="w-100" ref={imageEl} onClick={openModal} />
                                </div>
                            )}
                            <ModalVideo channel='youtube' autoplay={true} isOpen={modal} videoId={videoID} onClose={closeModal} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InfoSectionVideo;
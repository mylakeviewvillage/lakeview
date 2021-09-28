import RichTextArea from 'components/RichTextArea';
import SEOImage from 'components/SEOImage';
import ModalVideo from 'react-modal-video';
import React, { useState } from 'react';
import styles from '../../styles/components/info-section-video-modal.module.scss';

const InfoSectionVideoModal = (props) => {


    const { title, description, youtubeVideoThumbnail, youtubeVideoID } = props.module.fields;
    const [openModal, setOpenModal] = useState(false);

    return (
        <section className={styles.infoSectionVideoModal}>
            <div className="container">
                <div className="content">
                    {title && <h4>{title}</h4>}
                    <div className={styles.panes}>
                        <div className={styles.left}>
                            <hr />
                            {description && <RichTextArea html={description} />}
                        </div>
                        <div className={styles.right}>
                            {youtubeVideoThumbnail && (
                                <div className={styles.image} onClick={() => setOpenModal(true)} >
                                    <SEOImage img={youtubeVideoThumbnail} sizes={[500, 1024, 1920]} className="w-100" />
                                </div>
                            )}
                        </div>
                    </div>
                    <ModalVideo channel='youtube' autoplay={true} isOpen={openModal} videoId={youtubeVideoID} onClose={() => setOpenModal(false)} />
                </div>
            </div>
        </section>
    );
};

export default InfoSectionVideoModal;
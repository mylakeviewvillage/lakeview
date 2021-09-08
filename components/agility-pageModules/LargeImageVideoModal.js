import SectionTitle from 'components/SectionTitle';
import SEOImage from 'components/SEOImage';
import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
import styles from 'styles/components/large-image-video-modal.module.scss';

const LargeImageVideoModal = ({ module }) => {

    const { titleOne, titleTwo, titleThree, image, youtubeVideoID } = module.fields;

    const [openModal, setOpenModal] = useState(false);

    return (
        <section>
            <div className="container">
                <div className="content">
                    {titleOne && <SectionTitle titleOne={titleOne} titleTwo={titleTwo} titleThree={titleThree} />}
                    {image && (
                        <div className={styles.image} onClick={() => setOpenModal(true)} >
                            <SEOImage img={image} sizes={[1400, 1024, 768, 400]} className="w-100" />
                        </div>
                    )}
                    <ModalVideo channel='youtube' autoplay={true} isOpen={openModal} videoId={youtubeVideoID} onClose={() => setOpenModal(false)} />
                </div>
            </div>
        </section>
    );
};

export default LargeImageVideoModal;
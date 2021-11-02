import RichTextArea from 'components/RichTextArea';
import SectionTitle from 'components/SectionTitle';
import React, { useState, useRef, useEffect } from 'react';
import Plx from 'react-plx';
import { useMediaQuery } from 'react-responsive';
import ModalVideo from 'react-modal-video';
import styles from '../../styles/components/info-section.module.scss';

const InfoSectionVideo = ({ module }) => {

    const { videoID, image, infoLeft, infoRight, infoTitle, subtitle, titleOne, titleTwo, titleThree } = module.fields;

    const [modal, setModal] = useState(false);
    const closeModal = () => setModal(false);
    const openModal = () => setModal(true);

    const [imageContainerHeight, setImageContainerHeight] = useState(0);
    const imageContainerEl = useRef(null);
    const [imageHeight, setImageHeight] = useState(0);
    const imageEl = useRef(null);
    const [parallaxData, setParallaxData] = useState([]);

    // Have a useEffect that updates the container height
    useEffect(() => {
        setImageContainerHeight(imageContainerEl.current.clientHeight);
    }, [imageContainerEl]);

    // Have a callback run that updates the height of the image once it has been loaded
    const onImageLoad = () => {
        const loadedImageHeight = imageEl.current.height;
        setImageHeight(loadedImageHeight);
    }

    // Make sure the onLoad function runs at least once on first contact with the page in case caching renders the onLoad function unnecessary
    useEffect(() => {
        onImageLoad();
    }, [])

    // Every time state is updated on image/container heights, build a new options object for PLX
    useEffect(() => {
        if (imageContainerHeight && imageHeight) {
            setParallaxData([
                {
                    start: '#info-section',
                    duration: imageContainerHeight * 2,
                    properties: [
                        {
                            startValue: 800,
                            endValue: imageHeight - imageContainerHeight + 100,
                            property: 'translateY',
                        },
                    ],
                },
            ]);
        }
    }, [imageContainerHeight, imageHeight])

    const isMobileOrTablet = useMediaQuery({
        maxWidth: 1024
    });

    const [smallWindow, setSmallWindow] = useState(true);

    useEffect(() => {
        setSmallWindow(isMobileOrTablet);
    }, [isMobileOrTablet]);

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
                                    {videoID && <button className="btn" onClick={openModal}>Play Video</button>}
                                </div>
                                <div className={styles.infoRight}>
                                    {infoRight && <RichTextArea html={infoRight} />}
                                </div>
                            </div>
                        </div>
                        <div className={styles.panesRight} ref={imageContainerEl}>
                            {image && (
                                <Plx
                                    className={styles.panningImage}
                                    parallaxData={parallaxData}
                                    disabled={smallWindow}>
                                    <button onClick={openModal}>
                                        <img src="/img/play-circle.svg" alt="play button" className="play-circle" />
                                        <img
                                            src={image.url}
                                            alt={image.label}
                                            width={1}
                                            height={2}
                                            className="w-100"
                                            ref={imageEl}
                                            onLoad={onImageLoad} />
                                    </button>
                                </Plx>
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
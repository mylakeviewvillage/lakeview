import RichTextArea from 'components/RichTextArea';
import SectionTitle from 'components/SectionTitle';
import Link from 'next/link';
import React, { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Plx from 'react-plx';
import { useMediaQuery } from 'react-responsive';
import styles from '../../styles/components/info-section-home.module.scss';

const InfoSectionHome = ({ module }) => {

    const { imageTitle, imageCTA, cTA, image, infoLeft, infoRight, infoTitle, subtitle, titleOne, titleTwo, titleThree } = module.fields;

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
                    start: '#info-section-home',
                    duration: imageContainerHeight * 2,
                    properties: [
                        {
                            startValue: 800,
                            endValue: -400,
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
        <section className={styles.infoSectionHome} id="info-section-home">
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
                                    {cTA && (
                                        <Link href={cTA.href}>
                                            <a target={cTA.target} className="btn">{cTA.text}</a>
                                        </Link>
                                    )}
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
                                        <img
                                            src={image.url}
                                            alt={image.label}
                                            width={1}
                                            height={2}
                                            className="w-100"
                                            ref={imageEl}
                                            onLoad={onImageLoad} />
                                        <div className={styles.imageInfo}>
                                            <h2 class="minor">{imageTitle}</h2>
                                            {imageCTA && (
                                            <Link href={imageCTA.href}>
                                                <a target={imageCTA.target} className="btn solid-white">{imageCTA.text}</a>
                                            </Link>)}
                                        </div>
                                </Plx>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InfoSectionHome;
import RichTextArea from 'components/RichTextArea';
import Link from 'next/link';
import React, { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Plx from 'react-plx';
import { useMediaQuery } from 'react-responsive';
import styles from '../../styles/components/info-section.module.scss';

const InfoSection = ({ module }) => {

    const { cTA, image, infoLeft, infoRight, infoTitle, subtitle, titleOne, titleTwo, titleThree } = module.fields;

    const [imageContainerHeight, setImageContainerHeight] = useState(0);
    const imageContainerEl = useRef(null);

    const [imageHeight, setImageHeight] = useState(0);
    const imageEl = useRef(null);

    const [parallaxData, setParallaxData] = useState([]);

    useEffect(() => {
        setImageContainerHeight(imageContainerEl.current.clientHeight);
        setImageHeight(imageEl.current.clientHeight);
    }, [imageEl, imageContainerEl]);

    useEffect(() => {
        if (imageContainerHeight && imageHeight) {
            setParallaxData([
                {
                    start: '#test',
                    duration: imageContainerHeight,
                    properties: [
                        {
                            startValue: 0,
                            endValue: imageHeight - imageContainerHeight,
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

    return (
        <section className={styles.infoSection} id="test">
            <div className="container">
                <div className="content">
                    <div className={styles.panes}>
                        <div className={styles.panesLeft}>
                            <h2 className="stacked-title">
                                {titleOne && <span>{titleOne}</span>}
                                {titleTwo && <span><br />{titleTwo}</span>}
                                {titleThree && <span><br />{titleThree}</span>}
                            </h2>
                            {subtitle && <h3>{subtitle}</h3>}
                            <div className="divider" />
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
                            <Plx
                                className={styles.panningImage}
                                parallaxData={parallaxData}
                                disabled={isMobileOrTablet}
                            >
                                <img src={image.url} alt={image.label} className="w-100" ref={imageEl} />
                            </Plx>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InfoSection;
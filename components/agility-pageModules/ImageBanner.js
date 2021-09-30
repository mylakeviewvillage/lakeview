import SectionTitle from 'components/SectionTitle';
import SEOImage from 'components/SEOImage';
import React, { useEffect, useRef, useState } from 'react';
import styles from '../../styles/components/banner.module.scss';

import Plx from 'react-plx';

const Banner = ({ module }) => {

    const { image, titleOne, titleTwo, titleThree } = module.fields;

    const imageRef = useRef(null);
    const bannerRef = useRef(null);

    const [bannerHeight, setBannerHeight] = useState(0);
    const [movement, setMovement] = useState(0);

    useEffect(() => {
        let imageHeightCurrent = imageRef.current.offsetHeight;
        let bannerHeightCurrent = bannerRef.current.offsetHeight;
        if (imageHeightCurrent > bannerHeightCurrent) {
            setMovement(bannerHeightCurrent - imageHeightCurrent);
        } else {
            setMovement(0);
        }
        setBannerHeight(bannerHeightCurrent);
    }, [imageRef, bannerRef]);

    const parallaxData = [
        {
            start: 'self',
            end: bannerHeight * 1.5,
            properties: [
                {
                    startValue: 0,
                    endValue: movement,
                    property: 'translateY',
                },
            ],
        },
    ];

    return (
        <section className={styles.image_banner}>
            <div className="content no-top">
                <div className="container">
                    {titleOne && <SectionTitle titleOne={titleOne} titleTwo={titleTwo} titleThree={titleThree} />}
                </div>
                <div className="container full-width">
                    <div className={styles.banner} ref={bannerRef}>
                        <div ref={imageRef}>
                            <Plx className={styles.banner_image} parallaxData={parallaxData}>
                                <SEOImage img={image} sizes={[500, 1024, 1920]} className="w-100" />
                            </Plx>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
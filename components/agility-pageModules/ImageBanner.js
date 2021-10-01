import SectionTitle from 'components/SectionTitle';
import SEOImage from 'components/SEOImage';
import React, { useEffect, useRef, useState } from 'react';
import styles from '../../styles/components/banner.module.scss';

import Plx from 'react-plx';

const Banner = ({ module }) => {

    const { image, titleOne, titleTwo, titleThree } = module.fields;

    const bannerRef = useRef(null);
    const [bannerHeight, setBannerHeight] = useState(0);

    useEffect(() => {
        setBannerHeight(bannerRef.current.offsetHeight);
    }, [bannerRef])

    const parallaxData = [
        {
            start: 'self',
            end: bannerHeight * 1.5,
            properties: [
                {
                    startValue: 0,
                    endValue: -23.07,
                    property: 'translateY',
                    unit: '%'
                },
                {
                    startValue: 1,
                    endValue: 1.05,
                    property: 'scale'
                }
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
                        <Plx className={styles.banner_image} parallaxData={parallaxData}>
                            <SEOImage img={image} sizes={[500, 1024, 1920]} className="w-100" />
                        </Plx>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
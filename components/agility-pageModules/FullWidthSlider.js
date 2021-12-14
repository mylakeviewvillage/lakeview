import React, { useRef } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SEOImage from 'components/SEOImage';
import styles from '../../styles/components/full-width-slider.module.scss';
import SectionTitle from 'components/SectionTitle';

const FullWidthSlider = ({ module, customData }) => {

    const { titleOne, titleTwo, titleThree, subtitle } = module.fields;
    const { slides } = customData;

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        arrows: false,
        dotsClass: `${styles.dots} slick-dots`,
        customPaging: i => <button className={styles.dot} />
    };

    const sliderRef = useRef();

    return (
        <section className={styles.full_width_slider}>
            <div className="container full-width">
                <div className="content">
                    <div className="container">
                        {titleOne && <SectionTitle titleOne={titleOne} titleTwo={titleTwo} titleThree={titleThree} />}
                        {subtitle && <h3>{subtitle}</h3>}
                    </div>
                    <Slider {...settings} ref={sliderRef} className={styles.slider}>
                        {slides.map((slide, index) => {
                            return (
                                <div className={styles.slide} key={`full-width-slide-${index}`}>
                                    <div className={styles.slide_content_image}>
                                        <SEOImage img={slide.image} sizes={[1920, 1024, 768]} className="w-100" />
                                    </div>
                                </div>
                            )
                        })}
                    </Slider>
                </div>
            </div>
        </section>
    );
};

FullWidthSlider.getCustomInitialProps = async ({
    agility,
    languageCode,
    channelName,
    item
}) => {
    let slides = null;
    const api = agility;
    let slidesContent = await api.getContentList({
        referenceName: item.fields.slides.referencename,
        languageCode: languageCode,
        depth: 10,
        expandAllContentLinks: true,
        take: 40
    });
    slidesContent.items.sort((a, b) => (a.properties.itemOrder > b.properties.itemOrder) ? 1 : -1);
    slides = slidesContent.items.map(slides => slides.fields);
    return {
        slides
    }
}

export default FullWidthSlider;
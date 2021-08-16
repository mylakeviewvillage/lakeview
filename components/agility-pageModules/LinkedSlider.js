import React, { useRef, useState } from 'react';
import Link from 'next/link';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from '../../styles/components/linked-slider.module.scss';
import RichTextArea from 'components/RichTextArea';
import SEOImage from 'components/SEOImage';
import SectionTitle from 'components/SectionTitle';

const LinkedSlider = ({ module, customData }) => {

    const { titleOne, titleTwo, titleThree, layout, backgroundColor, copyColor } = module.fields;
    const { slides } = customData;

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        arrows: false,
    };

    const sliderRef = useRef();

    const ArrowLeft = ({ onClick }) => {
        return (
            <button
                className={`${styles.arrow} ${styles.prev}`}
                aria-label="previous slide"
                onClick={onClick}
            >
                <img src={copyColor === 'dark' ? '/img/arrow-left-dark.svg' : '/img/arrow-left.svg'} alt="left arrow" className="w-100" />
            </button>
        )
    }

    const ArrowRight = ({ onClick }) => {
        return (
            <button
                className={`${styles.arrow} ${styles.next}`}
                aria-label="next slide"
                onClick={onClick}
            >
                <img src={copyColor === 'dark' ? '/img/arrow-right-dark.svg' : '/img/arrow-right.svg'} alt="right arrow" className="w-100" />
            </button>
        )
    }

    return (
        <section className={styles.linked_slider}>
            <div className="content">
                <div className="container">
                    {titleOne && (
                        <SectionTitle titleOne={titleOne} titleTwo={titleTwo} titleThree={titleThree} />
                    )}
                </div>
                <div className="container full-width">
                    <Slider {...settings} ref={sliderRef} className={styles.slider}>
                        {slides.map((slide, index) => {
                            return (
                                <div>
                                    <div
                                        className={`${styles.slide} ${layout === 'left' ? styles.left : styles.right}`}
                                        style={backgroundColor ? { background: `linear-gradient(to ${layout}, ${backgroundColor} 50%, transparent 50%)` } : null}
                                        key={`linked-slider-slide-${index}`}>

                                        <div className={styles.slide_image}>
                                            <SEOImage img={slide.image} sizes={[1024, 500]} className="w-100" />
                                        </div>

                                        <div className={styles.slide_info} style={backgroundColor ? { backgroundColor } : null}>
                                            <div className={`${styles.slide_info_content} ${copyColor === 'dark' ? styles.dark : styles.light}`}>
                                                <div className={styles.navigation}>
                                                    <ArrowLeft onClick={() => sliderRef.current.slickPrev()} />
                                                    <span>{`${index + 1}/${slides.length}`}</span>
                                                    <ArrowRight onClick={() => sliderRef.current.slickNext()} />
                                                </div>
                                                <h3>{slide.topTitle && <span className={`${styles.top_title} ${copyColor === 'dark' ? styles.dark : styles.light}`}>{slide.topTitle}<br /></span>}{slide.slideTitle}</h3>
                                                <RichTextArea html={slide.slideCopy} />
                                                <Link href={slide.cTA.href}>
                                                    <a target={slide.cTA.target} className={`btn solid-white`}>{slide.cTA.text}</a>
                                                </Link>
                                            </div>
                                        </div>

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

LinkedSlider.getCustomInitialProps = async ({
    agility,
    languageCode,
    channelName,
    item
}) => {
    let slides = null;
    const api = agility;
    let sliderContent = await api.getContentList({
        referenceName: item.fields.slides.referencename,
        languageCode: languageCode,
        depth: 10,
        expandAllContentLinks: true,
        take: 10
    });
    sliderContent.items.sort((a, b) => (a.properties.itemOrder > b.properties.itemOrder) ? 1 : -1);
    slides = sliderContent.items.map(slide => slide.fields);
    return {
        slides
    }
}

export default LinkedSlider;
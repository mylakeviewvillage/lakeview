import React, { useEffect } from 'react';
import Link from 'next/link';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from 'styles/components/linked-slider-overlapping.module.scss';
import RichTextArea from 'components/RichTextArea';
import SEOImage from 'components/SEOImage';
import { useState } from 'react';
import { useRef } from 'react';

const LinkedSliderOverlapping = ({ slides, backgroundColor, copyColor, layout }) => {

    const settingsImageSlider = {
        dots: false,
        infinite: true,
        speed: 500,
        arrows: false,
    };

    const settingsInfoSlider = {
        dots: false,
        infinite: true,
        speed: 700,
        arrows: false,
    };

    const [imageNav, setImageNav] = useState(null);
    const [infoNav, setInfoNav] = useState(null);

    const imageSlider = useRef(null);
    const infoSlider = useRef(null);

    useEffect(() => {
        setImageNav(imageSlider.current);
        setInfoNav(infoSlider.current);
    }, []);

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
        <div className={`${styles.sliders} ${layout === 'left' ? styles.left : styles.right}`}>
            <div className={`${styles.image_slider}`}>
                <div className="w-100">
                    <Slider {...settingsImageSlider} asNavFor={infoNav} ref={imageSlider}>
                        {slides.map((slide, index) => {
                            return (
                                <div key={`image-slide-${index}`}>
                                    <div>
                                        <div className={styles.slide_image}>
                                            <SEOImage img={slide.image} sizes={[1024, 500]} className="w-100" />
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </Slider>
                </div>
            </div>
            <div className={styles.info_slider} style={backgroundColor ? { backgroundColor: backgroundColor } : null}>
                <div className="w-100">
                    <Slider {...settingsInfoSlider} asNavFor={imageNav} ref={infoSlider}>
                        {slides.map((slide, index) => {
                            return (
                                <div key={`info-slide-${index}`}>
                                    <div className={styles.slide_info} style={backgroundColor ? { backgroundColor } : null}>
                                        <div className={`${styles.slide_info_content} ${copyColor === 'dark' ? styles.dark : styles.light}`}>
                                            <div className={styles.navigation}>
                                                <ArrowLeft onClick={() => infoSlider.current.slickPrev()} />
                                                <span>{`${index + 1}/${slides.length}`}</span>
                                                <ArrowRight onClick={() => infoSlider.current.slickNext()} />
                                            </div>
                                            <h3>{slide.topTitle && <span className={`${styles.top_title} ${copyColor === 'dark' ? styles.dark : styles.light}`}>{slide.topTitle}<br /></span>}{slide.slideTitle}</h3>
                                            <RichTextArea html={slide.slideCopy} />
                                            <Link href={slide.cTA.href}>
                                                <a target={slide.cTA.target} className={`btn solid-white`}>{slide.cTA.text}</a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default LinkedSliderOverlapping;
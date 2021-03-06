import React from 'react';
import Link from 'next/link';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from 'styles/components/linked-slider-banner.module.scss';
import RichTextArea from 'components/RichTextArea';
import SEOImage from 'components/SEOImage';
import { useRef } from 'react';

const LinkedSliderBanner = ({ slides, backgroundColor, copyColor, layout }) => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        arrows: false,
    };

    const slider = useRef(null);

    const ArrowLeft = ({ onClick }) => {
        return (
            <button
                className={`${styles.arrow} ${styles.prev}`}
                aria-label="previous slide"
                onClick={onClick}
            >
                <img src={copyColor === 'dark' ? '/img/arrow-left-dark.svg' : '/img/arrow-left.svg'} alt="left arrow" className="w-100" width={16} height={16} />
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
                <img src={copyColor === 'dark' ? '/img/arrow-right-dark.svg' : '/img/arrow-right.svg'} alt="right arrow" className="w-100" width={16} height={16} />
            </button>
        )
    }

    return (
        <div className={styles.slider}>
            <Slider {...settings} ref={slider}>
                {slides.map((slide, index) => {
                    return (
                        <div className={styles.slide} key={`slider-slide-${index}`}>
                            <div className={`${styles.slide_content} ${layout === 'left' ? styles.left : styles.right}`}>
                                <div className={styles.slide_image}>
                                    <SEOImage img={slide.image} sizes={[1024, 500]} className="w-100" />
                                </div>
                                <div className={styles.slide_info} style={backgroundColor ? { backgroundColor } : null}>
                                    <div className={`${styles.slide_info_content} ${copyColor === 'dark' ? styles.dark : styles.light}`}>
                                        <div className={styles.navigation}>
                                            <ArrowLeft onClick={() => slider.current.slickPrev()} />
                                            <span>{`${index + 1}/${slides.length}`}</span>
                                            <ArrowRight onClick={() => slider.current.slickNext()} />
                                        </div>
                                        <h3>{slide.topTitle && <span className={`${styles.top_title} ${copyColor === 'dark' ? styles.dark : styles.light}`}>{slide.topTitle}<br /></span>}{slide.slideTitle}</h3>
                                        <RichTextArea html={slide.slideCopy} />
                                        {slide.cTA && (
                                            <Link href={slide.cTA.href}>
                                                <a target={slide.cTA.target} className={`btn solid-white`}>{slide.cTA.text}</a>
                                            </Link>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </Slider>
        </div>

    );
};

export default LinkedSliderBanner;
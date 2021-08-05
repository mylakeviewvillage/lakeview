import React from 'react';
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import styles from '../../styles/components/linked-slider.module.scss';
import RichTextArea from 'components/RichTextArea';
import Link from 'next/link';
import SEOImage from 'components/SEOImage';
import { useState } from 'react';

const LinkedSlider = ({ module, customData }) => {

    const { titleOne, titleTwo, titleThree, layout, backgroundColor } = module.fields;
    const { slides } = customData;

    const [currentSlide, setCurrentSlide] = useState(0);

    const [sliderRef, slider] = useKeenSlider({
        loop: true,
        initial: 0,
        slideChanged(s) {
            setCurrentSlide(s.details().relativeSlide)
        },
    });

    const ArrowLeft = ({ onClick }) => {
        return (
            <button
                className={`${styles.arrow} ${styles.prev}`}
                ariaLabel="previous slide"
                onClick={onClick}
            >
                <img src="/img/arrow-left.svg" alt="left arrow" className="w-100" />
            </button>
        )
    }

    const ArrowRight = ({ onClick }) => {
        return (
            <button
                className={`${styles.arrow} ${styles.next}`}
                ariaLabel="next slide"
                onClick={onClick}
            >
                <img src="/img/arrow-right.svg" alt="right arrow" className="w-100" />
            </button>
        )
    }

    return (
        <section className={styles.linked_slider}>
            <div className="content">
                <div className="container">
                    {titleOne && (
                        <h2 className="stacked-title">
                            <span>{titleOne}</span>
                            {titleTwo && <span><br />{titleTwo}</span>}
                            {titleThree && <span><br />{titleThree}</span>}
                        </h2>
                    )}
                </div>
                <div className="container full-width">
                    <div ref={sliderRef} className={`keen-slider ${styles.slider}`}>
                        {slides.map((slide, index) => {
                            return (
                                <div className={`keen-slider__slide ${styles.slide} ${layout === 'left' ? styles.left : styles.right}`} key={`linked-slider-slide-${index}`}>
                                    <div className={styles.slide_image} style={backgroundColor ? { background: layout === 'left' ? `linear-gradient(to right, transparent 90%, ${backgroundColor} 90%)` : `linear-gradient(to left, transparent 90%, ${backgroundColor} 90%)` } : null}>
                                        <SEOImage img={slide.image} sizes={[1024, 500]} className="w-100" />
                                    </div>
                                    <div className={styles.slide_info} style={backgroundColor ? { backgroundColor, color: 'white' } : null}>
                                        <div className={styles.slide_info_content}>
                                            {slider && (
                                                <div className={styles.navigation}>
                                                    <ArrowLeft
                                                        onClick={(e) => e.stopPropagation() || slider.prev()}
                                                        disabled={currentSlide === 0}
                                                    />
                                                    <span>{`${currentSlide + 1}/${slider.details().size}`}</span>
                                                    <ArrowRight
                                                        onClick={(e) => e.stopPropagation() || slider.next()}
                                                        disabled={currentSlide === slider.details().size - 1}
                                                    />
                                                </div>
                                            )}
                                            <h3>{slide.topTitle && <span className={styles.top_title}>{slide.topTitle}<br /></span>}{slide.slideTitle}</h3>
                                            <RichTextArea html={slide.slideCopy} />
                                            <Link href={slide.cTA.href}>
                                                <a target={slide.cTA.target} className={`btn ${backgroundColor ? 'white' : null}`}>{slide.cTA.text}</a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
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
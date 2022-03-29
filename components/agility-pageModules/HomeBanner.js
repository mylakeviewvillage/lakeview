import React,{ useRef } from 'react';
import Link from 'next/link';
import { Fade } from "react-awesome-reveal";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from 'styles/components/home-banner.module.scss';

const HomeBanner = ({ module }) => {

    const { image, mobileImage, headline, subHeadline, cTA } = module.fields;

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        arrows: false,
        dotsClass: `${styles.dots} slick-dots`,
    };

    const slider = useRef(null);

    const ArrowLeft = ({ onClick }) => {
        return (
            <button
                className={`${styles.arrow} ${styles.prev}`}
                aria-label="previous slide"
                onClick={onClick}
            >
                <img src='/img/arrow-left.svg' alt="left arrow" className="w-100" width={16} height={16} />
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
                <img src='/img/arrow-right.svg' alt="right arrow" className="w-100" width={16} height={16} />
            </button>
        )
    }

    return (
        <section className={styles.home_banner}>
            <div className="container full-width">
                <Slider {...settings} ref={slider}>
                        <div key='slider-slide-1'>
                            <img src="/img/builderbanner/hero-1900.jpg" className={styles.image1900} alt="" width={1} height={1} />
                            <img src="/img/builderbanner/hero-1280.jpg" className={styles.image1280} alt="" width={1} height={1} />
                            <img src="/img/builderbanner/hero-800.jpg" className={styles.image800} alt="" width={1} height={1} />
                            <img src="/img/builderbanner/hero-420.jpg" className={styles.image420} alt="" width={1} height={1} />
                            <a href="#register" aria-label="register now">
                                <img src="/img/builderbanner/text-1900.svg" className={styles.copy1900} alt="Wouldn't it be nice to live together. Coming to the shores of Mississauga." width={1} height={1} />
                                <img src="/img/builderbanner/text-1280.svg" className={styles.copy1280} alt="Wouldn't it be nice to live together. Coming to the shores of Mississauga." width={1} height={1} />
                                <img src="/img/builderbanner/text-800.svg" className={styles.copy800} alt="Wouldn't it be nice to live together. Coming to the shores of Mississauga." width={1} height={1} />
                                <img src="/img/builderbanner/text-420.svg" className={styles.copy420} alt="Wouldn't it be nice to live together. Coming to the shores of Mississauga." width={1} height={1} />
                            </a>
                        </div>
                        <div key='slider-slide-2'>
                            <img src="/img/builderbanner/hero-1900.jpg" className={styles.image1900} alt="" width={1} height={1} />
                            <img src="/img/builderbanner/hero-1280.jpg" className={styles.image1280} alt="" width={1} height={1} />
                            <img src="/img/builderbanner/hero-800.jpg" className={styles.image800} alt="" width={1} height={1} />
                            <img src="/img/builderbanner/hero-420.jpg" className={styles.image420} alt="" width={1} height={1} />
                            <a href="https://live.mylakeviewvillage.com/" aria-label="live at lakeview">
                                <img src="/img/builderbanner/text-1900.svg" className={styles.copy1900} alt="Wouldn't it be nice to live together. Coming to the shores of Mississauga." width={1} height={1} />
                                <img src="/img/builderbanner/text-1280.svg" className={styles.copy1280} alt="Wouldn't it be nice to live together. Coming to the shores of Mississauga." width={1} height={1} />
                                <img src="/img/builderbanner/text-800.svg" className={styles.copy800} alt="Wouldn't it be nice to live together. Coming to the shores of Mississauga." width={1} height={1} />
                                <img src="/img/builderbanner/text-420.svg" className={styles.copy420} alt="Wouldn't it be nice to live together. Coming to the shores of Mississauga." width={1} height={1} />
                            </a>
                        </div>
                </Slider>
                <div className={styles.navigation}>
                    <ArrowLeft onClick={() => slider.current.slickPrev()} />
                    <ArrowRight onClick={() => slider.current.slickNext()}/> 
                </div>
            </div>

            {/* <div className="container">
                <div className="content">
                    <div className={styles.copy}>
                        <Fade direction="up">
                            <h2>{headline}</h2>
                        </Fade>
                        <Fade direction="up" delay="40">
                        <h3>{subHeadline}</h3>
                        </Fade>
                        {cTA &&(
                            <Fade direction="up" delay="80">
                            <Link href={cTA.href}>
                                <a target={cTA.target} className="btn register-now">
                                    REGISTER NOW
                                </a>
                            </Link>
                            </Fade>
                        )}
                    </div>
                </div>
            </div> */}
        </section>
    );
};

export default HomeBanner;
import React from 'react';
import Link from 'next/link';
import { Fade } from "react-awesome-reveal";
import styles from '../../styles/components/home-banner.module.scss';

const HomeBanner = ({ module }) => {

    const { image, mobileImage, headline, subHeadline, cTA } = module.fields;

    return (
        <section className={styles.home_banner}>
            <div className="container full-width">
                <img src="/img/builderbanner/hero-1900.jpg" className={styles.image1900} alt="" />
                <img src="/img/builderbanner/hero-1280.jpg" className={styles.image1280} alt="" />
                <img src="/img/builderbanner/hero-800.jpg" className={styles.image800} alt="" />
                <img src="/img/builderbanner/hero-420.jpg" className={styles.image420} alt="" />
                <a href="#register" aria-label="register now">
                    <img src="/img/builderbanner/text-1900.svg" className={styles.copy1900} alt="Wouldn't it be nice to live together. Coming to the shores of Mississauga." />
                    <img src="/img/builderbanner/text-1280.svg" className={styles.copy1280} alt="Wouldn't it be nice to live together. Coming to the shores of Mississauga." />
                    <img src="/img/builderbanner/text-800.svg" className={styles.copy800} alt="Wouldn't it be nice to live together. Coming to the shores of Mississauga." />
                    <img src="/img/builderbanner/text-420.svg" className={styles.copy420} alt="Wouldn't it be nice to live together. Coming to the shores of Mississauga." />
                </a>
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
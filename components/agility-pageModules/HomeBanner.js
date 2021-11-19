import React from 'react';
import Link from 'next/link';
import { Fade } from "react-awesome-reveal";
import styles from '../../styles/components/home-banner.module.scss';

const HomeBanner = ({ module }) => {

    const { image, mobileImage, headline, subHeadline, cTA } = module.fields;

    return (
        <div>
        <section className={styles.home_banner}>
            <div className="container full-width">
                <img src={image.url} className={styles.image} />
                <img src={mobileImage.url} className={styles.mobile_image} />
            </div>
            <div className="container">
                <div>
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
                                <a target={cTA.target}>
                                    <img src="/img/homebanner/btn-HERO.svg" />
                                </a>
                            </Link>
                            </Fade>
                        )}
                    </div>
                </div>
            </div>
        </section>
        <section className={styles.home_logos}>
            <div className="container">
                <div className="content no-top">
                    <div className={styles.partners}>
                        <img src="/img/homebanner/logo-BH.svg" />
                        <img src="/img/homebanner/logo-CAIVAN.svg" />
                        <img src="/img/homebanner/logo-GP.svg" />
                        <img src="/img/homebanner/logo-DECO.svg" />
                        <img src="/img/homebanner/logo-OPUS.svg" />
                        <img src="/img/homebanner/logo-TRIDEL.svg" />
                    </div>
                </div>
            </div>
        </section>
        </div>
    );
};

export default HomeBanner;
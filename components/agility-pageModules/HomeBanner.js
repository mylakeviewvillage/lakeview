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
            </div>
        </section>
        <section className={styles.home_logos}>
            <div className="container">
                <div className="content no-top">
                    <div className={styles.partners}>
                        <a href="https://www.branthaven.com/" target="_blank"><img src="/img/homebanner/logo-BH.svg" /></a>
                        <a href="https://caivan.com/communities/greater-toronto-area/lakeview-village/" target="_blank"><img src="/img/homebanner/logo-CAIVAN.svg" /></a>
                        <a href="https://www.greenparkgroup.ca/" target="_blank"><img src="/img/homebanner/logo-GP.svg" /></a>
                        <a href="https://www.decohomes.ca/" target="_blank"><img src="/img/homebanner/logo-DECO.svg" /></a>
                        <a href="https://www.opushomes.com/" target="_blank"><img src="/img/homebanner/logo-OPUS.svg" /></a>
                        <a href="https://www.tridel.com/" target="_blank"><img src="/img/homebanner/logo-TRIDEL.svg" /></a>
                    </div>
                </div>
            </div>
        </section>
        </div>
    );
};

export default HomeBanner;
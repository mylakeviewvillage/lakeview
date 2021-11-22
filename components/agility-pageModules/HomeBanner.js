import React from 'react';
import Link from 'next/link';
import { Fade } from "react-awesome-reveal";
import styles from '../../styles/components/home-banner.module.scss';

const HomeBanner = ({ module }) => {

    const { image, mobileImage, headline, subHeadline, cTA } = module.fields;

    return (
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
    );
};

export default HomeBanner;
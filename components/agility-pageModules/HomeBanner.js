import React from 'react';
import Link from 'next/link';
import styles from '../../styles/components/home-banner.module.scss';

const HomeBanner = ({ module }) => {

    const { image, headline, subHeadline, cTA } = module.fields;

    return (
        <div>
        <section className={styles.home_banner} style={{ backgroundImage: `url(${image.url})` }}>
            <div className="container">
                <div className="content">
                    <div className={styles.copy}>
                        <h2>{headline}</h2>
                        <h3>{subHeadline}</h3>
                        {cTA &&(
                            <Link href={cTA.href}>
                                <a target={cTA.target}>
                                    <img src="/img/homebanner/btn-HERO.svg" />
                                </a>
                            </Link>
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
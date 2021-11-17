import Link from 'next/link';
import SEOImage from 'components/SEOImage';
import React from 'react';
import styles from '../../styles/components/ad-unit.module.scss';

const AdUnit = ({ module, customData }) => {

    const { image, cTA } = module.fields;

    return (
        <section className={styles.ad_unit}>
            <div className="container">
                <div className="content">
                    {cTA && (
                        <Link href={cTA.href}>
                            <a target={cTA.target}>
                                {image && (
                                    <div className={styles.image}>
                                        <SEOImage img={image} sizes={[1400, 1024, 768, 400]} className="w-100" />
                                    </div>
                                )}
                            </a>
                        </Link>
                    )}
                </div>
            </div>
        </section>
    );
};

export default AdUnit;
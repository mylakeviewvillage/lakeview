import React from 'react';
import SEOImage from 'components/SEOImage';
import styles from '../../styles/components/banner.module.scss';

const HomeBanner = ({ module }) => {

    const { image } = module.fields;

    return (
        <section className={styles.image_banner}>
        <div className="content no-top no-bottom-sm">
            <div className="container full-width">
                <div className={styles.banner}>
                    <SEOImage img={image} sizes={[1500, 1024, 1920]} className="w-100" />
                </div>
            </div>
        </div>
    </section>
    );
};

export default HomeBanner;
import SectionTitle from 'components/SectionTitle';
import SEOImage from 'components/SEOImage';
import React from 'react';
import styles from '../../styles/components/banner.module.scss';

const Banner = ({ module }) => {

    const { image, titleOne, titleTwo, titleThree } = module.fields;

    return (
        <section className={styles.banner}>
            <div className="content no-top">
                <div className="container">
                    {titleOne && <SectionTitle titleOne={titleOne} titleTwo={titleTwo} titleThree={titleThree} />}
                </div>
                <div className="container full-width">
                    <SEOImage img={image} sizes={[500, 1024, 1920]} className="w-100" />
                </div>
            </div>
        </section>
    );
};

export default Banner;
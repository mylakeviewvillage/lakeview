import SectionTitle from 'components/SectionTitle';
import SEOImage from 'components/SEOImage';
import React from 'react';
import styles from 'styles/components/large-image.module.scss';

const LargeImage = ({ module }) => {

    const { titleOne, titleTwo, titleThree, subtitle, image } = module.fields;

    return (
        <section>
            <div className="container">
                <div className="content">
                    {titleOne && <SectionTitle titleOne={titleOne} titleTwo={titleTwo} titleThree={titleThree} />}
                    {subtitle && <h3 className={styles.subtitle}>{subtitle}</h3>}
                    {titleOne || subtitle ? <div className="divider" /> : null}
                    {image && (
                        <div className={styles.image}>
                            <SEOImage img={image} sizes={[1400, 1024, 768, 400]} className="w-100" />
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default LargeImage;
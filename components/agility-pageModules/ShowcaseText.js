import RichTextArea from 'components/RichTextArea';
import SectionTitle from 'components/SectionTitle';
import React from 'react';

import styles from '../../styles/components/showcase-text.module.scss';

const ShowcaseText = ({ module }) => {
    const { titleOne, titleTwo, titleThree, subtitle } = module.fields;
    return (
        <section className={styles.showcase_text}>
            <div className="container">
                <div className="content">
                    {titleOne && <SectionTitle titleOne={titleOne} titleTwo={titleTwo} titleThree={titleThree} />}
                    {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
                    <div className="divider" />
                </div>
            </div>
        </section>
    );
};

export default ShowcaseText;
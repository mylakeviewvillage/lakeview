import RichTextArea from 'components/RichTextArea';
import SectionTitle from 'components/SectionTitle';
import SEOImage from 'components/SEOImage';
import Link from 'next/link';
import React from 'react';
import styles from '../../styles/components/image-info.module.scss';

const ImageInfo = ({ module }) => {
    const { titleOne, titleTwo, titleThree, image, topTitle, mainTitle, copy, cTA } = module.fields;
    return (
        <section>
            <div className="content">
                <div className="container">
                    <SectionTitle titleOne={titleOne} titleTwo={titleTwo} titleThree={titleThree} />
                </div>
                <div className="container full-width">
                    <div className={styles.image_info}>
                        <div className={styles.image}>
                            <SEOImage img={image} className="w-100" sizes={[700, 600]} />
                        </div>
                        <div className={styles.info}>
                            <h3>{topTitle && <span>{topTitle}<br /></span>}{mainTitle}</h3>
                            <RichTextArea html={copy} />
                            <Link href={cTA.href}>
                                <a target={cTA.target} className="btn">{cTA.text}</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ImageInfo;
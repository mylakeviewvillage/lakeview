import RichTextArea from 'components/RichTextArea';
import SectionTitle from 'components/SectionTitle';
import SEOImage from 'components/SEOImage';
import Link from 'next/link';
import React from 'react';
import styles from '../../styles/components/image-info.module.scss';

const ImageInfo = ({ module }) => {
    const { titleOne, titleTwo, titleThree, image, topTitle, mainTitle, copy, cTA, backgroundColor, textColor } = module.fields;
    return (
        <section>
            <div className="content">
                <div className="container">
                    <SectionTitle titleOne={titleOne} titleTwo={titleTwo} titleThree={titleThree} />
                </div>
                <div className="container full-width">
                    <div className={styles.image_info} style={backgroundColor ? { background: `linear-gradient(to left, ${backgroundColor} 75%, transparent 75%)` } : null}>
                        <div className={styles.image}>
                            <SEOImage img={image} className="w-100" sizes={[700, 600]} />
                        </div>
                        <div className={`${styles.info} ${textColor === 'Light' ? styles.light : styles.dark} `} style={backgroundColor ? { background: `${backgroundColor}` } : null}>
                            <h3>{topTitle && <span>{topTitle}<br /></span>}{mainTitle}</h3>
                            <RichTextArea html={copy} />
                            {cTA && (
                                <Link href={cTA.href}>
                                    <a target={cTA.target} className={`btn ${textColor === 'Light' ? 'white' : ''}`}>{cTA.text}</a>
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ImageInfo;
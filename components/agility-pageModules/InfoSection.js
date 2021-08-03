import RichTextArea from 'components/RichTextArea';
import Link from 'next/link';
import React from 'react';
import styles from '../../styles/components/info-section.module.scss';

const InfoSection = ({ module }) => {
    const { cTA, image, infoLeft, infoRight, infoTitle, subtitle, titleOne, titleTwo, titleThree } = module.fields;
    return (
        <section className={styles.infoSection}>
            <div className="container">
                <div className="content">
                    <div className={styles.panes}>
                        <div className={styles.panesLeft}>
                            <h2 className="stacked-title">
                                {titleOne && <span>{titleOne}</span>}
                                {titleTwo && <span><br />{titleTwo}</span>}
                                {titleThree && <span><br />{titleThree}</span>}
                            </h2>
                            {subtitle && <h3>{subtitle}</h3>}
                            <div className="divider" />
                            {infoTitle && <h4>{infoTitle}</h4>}
                            <hr />
                            <div className={styles.info}>
                                <div className={styles.infoLeft}>
                                    {infoLeft && <RichTextArea html={infoLeft} />}
                                    {cTA && (
                                        <Link href={cTA.href}>
                                            <a target={cTA.target} className="btn">{cTA.text}</a>
                                        </Link>
                                    )}
                                </div>
                                <div className={styles.infoRight}>
                                    {infoRight && <RichTextArea html={infoRight} />}
                                </div>
                            </div>
                        </div>
                        <div className={styles.panesRight}>
                            <div className={styles.panningImage}>
                                <img src={image.url} alt={image.label} className="w-100" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InfoSection;
import Modal from 'components/Modal';
import RichTextArea from 'components/RichTextArea';
import SectionTitle from 'components/SectionTitle';
import SEOImage from 'components/SEOImage';
import Link from 'next/link';
import React, { useState } from 'react';
import styles from '../../styles/components/info-section.module.scss';

const InfoSection = ({ module }) => {

    const { cTA, image, infoLeft, infoRight, infoTitle, subtitle, titleOne, titleTwo, titleThree } = module.fields;

    const [modal, setModal] = useState(false);

    const closeModal = () => setModal(false);

    const openModal = () => setModal(true);

    return (
        <section className={styles.infoSection} id="info-section">
            <div className="container">
                <div className="content">
                    {titleOne && <SectionTitle titleOne={titleOne} titleTwo={titleTwo} titleThree={titleThree} />}
                    <div className={styles.panes}>
                        <div className={styles.panesLeft}>
                            {subtitle && <h3>{subtitle}</h3>}
                            {titleOne && <div className={`divider ${styles.divider}`} />}
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
                            {image && (
                                <div className={styles.panningImage}>
                                    <img src={image.url} alt={image.label} className="w-100" onClick={openModal} />
                                </div>
                            )}
                            {modal && image && (
                                <Modal closeModal={closeModal}>
                                    <SEOImage img={image} sizes={[900, 500, 300]} className="w-100" />
                                </Modal>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InfoSection;
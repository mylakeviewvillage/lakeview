import React from 'react';
import SectionTitle from 'components/SectionTitle';
import styles from '../../styles/components/home-partners-video.module.scss';

const HomePartnersVideo = ({ module }) => {

    return (
        <section className={styles.home_partners_video}>
            <div className="container">
                <SectionTitle titleOne="Meet The" titleTwo="Builders" />
            </div>
            <div className="container full-width">
                <div className={styles.partners_video}>
                    <div className={styles.embed_container}>
                        <iframe src="https://player.vimeo.com/video/253989945?h=c6db007fe5&color=ef0800&title=0&byline=0&portrait=0" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" webkitAllowFullScreen mozallowfullscreen allowfullscreen></iframe>
                    </div>
                </div>
                <div className={styles.partners}>
                    <div className={styles.partner}>
                        <a href="https://www.branthaven.com/communities/lakeview-village/" aria-label='navigates to branthaven website' target="_blank"><img src="/img/builderbanner/logo-bh-wht.svg" width={2} height={1} alt="Branthaven" /></a>
                        <a href="https://www.branthaven.com/communities/lakeview-village/" aria-label='navigates to branthaven website' target="_blank"><img src="/img/arrow-right-long.svg" width={2} height={1} alt="Branthaven" /></a>
                    </div>
                    <div className={styles.partner}>
                        <a href="https://caivan.com/greater-toronto-area/lakeview-village" target="_blank" aria-label='navigates to vaivan website'><img src="/img/builderbanner/logo-caivan-wht.svg" width={2} height={1} alt="caivan" /></a>
                    </div>
                    <div className={styles.partner}>
                        <a href="https://www.greenparkgroup.ca/" target="_blank" aria-label='navigates to greenpark group website'><img src="/img/builderbanner/logo-gp-wht.svg" width={2} height={1} alt="greenpark group" /></a>
                    </div>
                    <div className={styles.partner}>
                        <a href="https://www.decohomes.ca/" target="_blank" aria-label='navigates to decohomes website'><img src="/img/builderbanner/logo-deco-wht.svg" width={2} height={1} alt="deco" /></a>
                    </div>
                    <div className={styles.partner}>
                        <a href="https://www.opushomes.com/" target="_blank" aria-label='navigates to opus homes website'><img src="/img/builderbanner/logo-opus-wht.svg" width={2} height={1} alt="opus homes" /></a>
                    </div>
                    <div className={styles.partner}>
                        <a href="https://www.tridel.com/lakeviewvillagecondos" target="_blank" aria-label='navigates to tridel website'><img src="/img/builderbanner/logo-tridel-ltblue.svg" width={2} height={1} alt="Tridel - Built for life" /></a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomePartnersVideo;
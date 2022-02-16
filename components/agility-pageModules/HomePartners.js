import React from 'react';
import Link from 'next/link';
import { Fade } from "react-awesome-reveal";
import styles from '../../styles/components/home-partners.module.scss';

const HomePartners = ({ module }) => {

    return (
        <section className={styles.home_partners}>
            <div className="container full-width">
                <div className={styles.partners}>
                    <div className={styles.partner}>
                        <a href="https://www.branthaven.com/communities/lakeview-village/" target="_blank"><img src="/img/builderbanner/logo-bh-wht.svg" width={2} height={1} /></a>
                    </div>
                    <div className={styles.partner}>
                        <a href="https://caivan.com/greater-toronto-area/lakeview-village" target="_blank"><img src="/img/builderbanner/logo-caivan-wht.svg" width={2} height={1} /></a>
                    </div>
                    <div className={styles.partner}>
                        <a href="https://www.greenparkgroup.ca/" target="_blank"><img src="/img/builderbanner/logo-gp-wht.svg" width={2} height={1} /></a>
                    </div>
                    <div className={styles.partner}>
                        <a href="https://www.decohomes.ca/" target="_blank"><img src="/img/builderbanner/logo-deco-wht.svg" width={2} height={1} /></a>
                    </div>
                    <div className={styles.partner}>
                        <a href="https://www.opushomes.com/" target="_blank"><img src="/img/builderbanner/logo-opus-wht.svg" width={2} height={1} /></a>
                    </div>
                    <div className={styles.partner}>
                        <a href="https://www.tridel.com/lakeviewvillagecondos" target="_blank"><img src="/img/builderbanner/logo-tridel-ltblue.svg" width={2} height={1} /></a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomePartners;
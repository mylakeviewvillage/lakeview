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
                            <a href="https://www.branthaven.com/" target="_blank"><img src="/img/homebanner/logo-bh-wht.svg" /></a>
                        </div>
                        <div className={styles.partner}>
                            <a href="https://caivan.com/communities/greater-toronto-area/lakeview-village/" target="_blank"><img src="/img/homebanner/logo-CAIVAN-wht.svg" /></a>
                        </div>
                        <div className={styles.partner}>
                            <a href="https://www.greenparkgroup.ca/" target="_blank"><img src="/img/homebanner/logo-GP-wht.svg" /></a>
                        </div>
                        <div className={styles.partner}>
                            <a href="https://www.decohomes.ca/" target="_blank"><img src="/img/homebanner/logo-deco-wht.svg" /></a>
                        </div>
                        <div className={styles.partner}>
                            <a href="https://www.opushomes.com/" target="_blank"><img src="/img/homebanner/logo-opus-wht.svg" /></a>
                        </div>
                        <div className={styles.partner}>
                            <a href="https://www.tridel.com/lakeviewvillagecondos" target="_blank"><img src="/img/homebanner/logo-tridel-ltBlue.svg" /></a>
                        </div>
                    </div>
                    </div>
        </section>
    );
};

export default HomePartners;
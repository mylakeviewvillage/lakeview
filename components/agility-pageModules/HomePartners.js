import React from 'react';
import Link from 'next/link';
import { Fade } from "react-awesome-reveal";
import styles from '../../styles/components/home-partners.module.scss';

const HomePartners = ({ module }) => {

    return (
        <section className={styles.home_partners}>
            <div className="container">
                <div className="content no-top">
                    <div className={styles.partners}>
                        <a href="https://www.branthaven.com/" target="_blank"><img src="/img/homebanner/logo-BH.svg" /></a>
                        <a href="https://caivan.com/communities/greater-toronto-area/lakeview-village/" target="_blank"><img src="/img/homebanner/logo-CAIVAN.svg" /></a>
                        <a href="https://www.greenparkgroup.ca/" target="_blank"><img src="/img/homebanner/logo-GP.svg" /></a>
                        <a href="https://www.decohomes.ca/" target="_blank"><img src="/img/homebanner/logo-DECO.svg" /></a>
                        <a href="https://www.opushomes.com/" target="_blank"><img src="/img/homebanner/logo-OPUS.svg" /></a>
                        <a href="https://www.tridel.com/" target="_blank"><img src="/img/homebanner/logo-TRIDEL.svg" /></a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomePartners;
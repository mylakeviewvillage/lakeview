import { getContentList } from 'helpers/getContentList';
import Link from 'next/link';
import React from 'react';
import styles from '../../styles/components/ticker.module.scss';

import Marquee from "react-fast-marquee";

const Ticker = ({ module, customData }) => {

    const { title, cTA } = module.fields;
    const tickerSections = customData.contentList;

    return (
        <section className={styles.ticker_module}>
            <div className="content">
                <div className="container">
                    {title && <h2 className="minor">{title}</h2>}
                    <div className={styles.cta}>
                        {cTA && <Link href={cTA.href}><a target={cTA.target} className="btn">{cTA.text}</a></Link>}
                    </div>
                </div>
                <div>
                    {tickerSections.map((tickerSection, index) => {
                        if (tickerSection.cTA) {
                            return (
                                <Link href={tickerSection.cTA.href} key={`ticker-section-${index}`}>
                                    <a>
                                        <div className={styles.ticker} >
                                            <Marquee direction={index % 2 === 0 ? 'left' : 'right'} speed={60}>
                                                <div className={styles.ticker_image}>
                                                    <img src={tickerSection.image.url} style={{ width: tickerSection.image.width }} />
                                                </div>
                                                <div className={styles.ticker_text}>
                                                    <p>{tickerSection.text}</p>
                                                </div>
                                            </Marquee>
                                        </div>
                                    </a>
                                </Link>
                            )
                        } else {
                            return (
                                <div className={styles.ticker} key={`ticker-section-${index}`}>
                                    <Marquee direction={index % 2 === 0 ? 'left' : 'right'} speed={60}>
                                        <div className={styles.ticker_image}>
                                            <img src={tickerSection.image.url} style={{ width: tickerSection.image.width }} />
                                        </div>
                                        <div className={styles.ticker_text}>
                                            <p>{tickerSection.text}</p>
                                        </div>
                                    </Marquee>
                                </div>
                            )
                        }
                    })}
                </div>
            </div>
        </section>
    );
};

Ticker.getCustomInitialProps = async ({
    agility,
    languageCode,
    item
}) => {
    return getContentList(agility, item.fields.tickerSections.referencename, languageCode);
}

export default Ticker;
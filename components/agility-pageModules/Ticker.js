import { getContentList } from 'helpers/getContentList';
import Link from 'next/link';
import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from '../../styles/components/ticker.module.scss';

const Ticker = ({ module, customData }) => {

    const { title, cTA } = module.fields;
    const tickerSections = customData.contentList;

    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        speed: 10000,
        autoplaySpeed: 0,
        cssEase: "linear",
        pauseOnHover: false,
        variableWidth: true,
        centerMode: true,
    };

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
                        return (
                            <div className={styles.ticker} key={`ticker-section-${index}`}>
                                {/* inital slide is evenly divisable by 2, start the slider on the first slide. If not, start on the second slide
                                this will visually stager the sliders */}
                                <Slider {...settings} initialSlide={index % 2 ? 1 : 0}>
                                    <div className={styles.ticker_image}>
                                        <img src={tickerSection.image.url} style={{ width: tickerSection.image.width }} />
                                    </div>
                                    <div className={styles.ticker_text}>
                                        <span>{tickerSection.text}</span>
                                    </div>
                                </Slider>
                            </div>
                        )
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
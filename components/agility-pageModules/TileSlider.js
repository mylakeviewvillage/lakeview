import React, { useRef } from 'react';
import styles from '../../styles/components/tile-slider.module.scss';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SEOImage from 'components/SEOImage';
import Link from 'next/link';

const TileSlider = ({ customData }) => {

    const { tiles } = customData;

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: 'unslick'
            }
        ]
    };

    const sliderRef = useRef();

    const ArrowLeft = ({ onClick }) => {
        return (
            <button
                className={`${styles.arrow} ${styles.prev}`}
                aria-label="previous slide"
                onClick={onClick}
            >
                <img src="/img/ts-left.svg" alt="left arrow" className="w-100" />
            </button>
        )
    }

    const ArrowRight = ({ onClick }) => {
        return (
            <button
                className={`${styles.arrow} ${styles.next}`}
                aria-label="next slide"
                onClick={onClick}
            >
                <img src="/img/ts-right.svg" alt="right arrow" className="w-100" />
            </button>
        )
    }

    return (
        <section className={styles.tile_slider}>
            <div className="container">
                <div className="content">
                    <div className={styles.slider_container}>
                        <Slider {...settings} ref={sliderRef} className={styles.slider}>
                            {tiles.map((tile, index) => {
                                return (
                                    <div className={styles.slide} key={`tile-slide-${index}`}>
                                        {tile.cTA && (
                                            <Link href={tile.cTA.href}>
                                                <a target={tile.cTA.target}>
                                                    <div className={styles.slide_content}>
                                                        {tile.image && (
                                                            <div className={styles.slide_content_image}>
                                                                <SEOImage img={tile.image} sizes={[200]} className="w-100" />
                                                            </div>
                                                        )}
                                                        <div className={styles.slide_content_copy}>
                                                            {tile.title && <h3>{tile.title}</h3>}
                                                            {tile.subtitle && <h4>{tile.subtitle}</h4>}
                                                        </div>
                                                    </div>
                                                </a>
                                            </Link>
                                        )}
                                        {!tile.cTA && (
                                            <div className={styles.slide_content}>
                                                {tile.image && (
                                                    <div className={styles.slide_content_image}>
                                                        <SEOImage img={tile.image} sizes={[200]} className="w-100" />
                                                    </div>
                                                )}
                                                <div className={styles.slide_content_copy}>
                                                    {tile.title && <h3>{tile.title}</h3>}
                                                    {tile.subtitle && <h4>{tile.subtitle}</h4>}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                )
                            })}
                        </Slider>
                        <div className={styles.navigation}>
                            <ArrowLeft onClick={() => sliderRef.current.slickPrev()} />
                            <ArrowRight onClick={() => sliderRef.current.slickNext()} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

TileSlider.getCustomInitialProps = async ({
    agility,
    languageCode,
    channelName,
    item
}) => {
    let tiles = null;
    const api = agility;
    let tilesContent = await api.getContentList({
        referenceName: item.fields.tiles.referencename,
        languageCode: languageCode,
        depth: 10,
        expandAllContentLinks: true,
        take: 10
    });
    tilesContent.items.sort((a, b) => (a.properties.itemOrder > b.properties.itemOrder) ? 1 : -1);
    tiles = tilesContent.items.map(tiles => tiles.fields);
    return {
        tiles
    }
}

export default TileSlider;
import React, { useState, useEffect } from 'react';
import styles from 'styles/components/three-sixty-slider.module.scss';
import Link from 'next/link';

import axios from 'axios';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ThreeSixtySlider = ({ module }) => {

    const { title, images, cTA } = module.fields;

    const [gallery, setGallery] = useState([]);

    useEffect(() => {
        getGallery(images.galleryid);
    }, [images.galleryid]);

    const getGallery = async (id) => {
        try {
            const res = await axios.get(`/api/gallery/${id}`);
            setGallery(res.data.gallery);
        } catch (err) {
            console.log("Gallery API request error: ", err);
        }
    }


    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        className: [styles.slider],
        arrows: false,
        dots: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    return (
        <section className={styles.three_sixty_slider}>
            <div className="container">
                <div className="content">
                    <div className={styles.top}>
                        {title && <h2 className="minor">{title}</h2>}
                        {cTA && (
                            <div className={styles.cta}>
                                <Link href={cTA.href}>
                                    <a target={cTA.target} className="btn">{cTA.text}</a>
                                </Link>
                            </div>
                        )}
                    </div>
                    <Slider {...settings}>
                        {gallery.map((image, index) => (
                            <div className={styles.slide} key={`three-sixty-slide-${index}`}>
                                <img src={image.url} alt="" className="w-100" />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    );
};

export default ThreeSixtySlider;
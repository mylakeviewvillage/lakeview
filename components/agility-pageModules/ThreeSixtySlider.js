import React, { useState, useEffect } from 'react';
import styles from 'styles/components/three-sixty-slider.module.scss';

import axios from 'axios';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ThreeSixtySlider = ({ module }) => {

    const { title, images } = module.fields;

    const [gallery, setGallery] = useState([]);

    useEffect(() => {
        getGallery(images.galleryid);
    }, [images.galleryid]);

    const getGallery = async (id) => {
        try {
            const res = await axios.get(`/api/${id}`);
            setGallery(res.data.gallery);
        } catch (err) {
            console.log("Gallery API request error: ", err);
        }
    }


    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        className: [styles.slider],
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    dots: true
                }
            }
        ]
    };

    return (
        <section className={styles.three_sixty_slider}>
            <div className="container">
                <div className="content">
                    <h2 className="minor">{title}</h2>
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
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import SEOImage from 'components/SEOImage';
import styles from 'styles/components/image-masonry.module.scss';

import axios from 'axios';
import Masonry from 'react-masonry-css'

const ImageMasonry = ({ module }) => {

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

    const breakpointColumnsObj = {
        default: 3,
        1200: 2,
        768: 1
    };

    const [currentImage, setcurrentImage] = useState(null);
    const [modal, setModal] = useState(false);

    const openModal = (image) => {
        setModal(true);
        setcurrentImage(image);
    }

    const closeModal = () => setModal(false);

    return (
        <section>
            <div className="container">
                <div className="content">
                    {title && <h2 className={`minor ${styles.title}`}>{title}</h2>}
                    <Masonry
                        breakpointCols={breakpointColumnsObj}
                        className="my-masonry-grid"
                        columnClassName="my-masonry-grid_column">
                        {gallery.map((galleryItem, index) => (
                            <div key={`image-masonry-tile-${index}`} className={`w-100 ${styles.masonry_tile}`} onClick={() => openModal(galleryItem)}>
                                <SEOImage img={galleryItem} sizes={[500, 300]} className="w-100" />
                            </div>
                        ))}
                    </Masonry>
                    {modal && (
                        <div className={styles.modal}>
                            <div className={styles.modal_box}>
                                <button className={styles.close_modal} onClick={closeModal}>
                                    <img src="/img/close.svg" alt="Close modal" />
                                </button>
                                <SEOImage img={currentImage} sizes={[1000, 700, 400]} className="w-100" />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default ImageMasonry;
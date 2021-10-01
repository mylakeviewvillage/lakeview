import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import SEOImage from 'components/SEOImage';
import styles from 'styles/components/image-masonry.module.scss';

import axios from 'axios';
import Masonry from 'react-masonry-css'
import Modal from 'components/Modal';
import RichTextArea from 'components/RichTextArea';
import SectionTitle from 'components/SectionTitle';

const ImageMasonry = ({ module }) => {

    const { titleOne, titleTwo, titleThree, images, description } = module.fields;

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
                    {titleOne && <SectionTitle titleOne={titleOne} titleTwo={titleTwo} titleThree={titleThree} />}
                    {description && <RichTextArea html={description} />}
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
                        <Modal closeModal={closeModal}>
                            <SEOImage img={currentImage} sizes={[1000, 700, 400]} className="w-100" />
                        </Modal>
                    )}
                </div>
            </div>
        </section>
    );
};

export default ImageMasonry;
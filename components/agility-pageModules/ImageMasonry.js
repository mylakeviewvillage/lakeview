import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { Masonry } from 'masonic';
import { useMediaQuery } from 'react-responsive';
import SEOImage from 'components/SEOImage';
import styles from 'styles/components/image-masonry.module.scss';

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

    const smallScreen = useMediaQuery({
        maxWidth: 768
    });

    const mediumScreen = useMediaQuery({
        maxWidth: 1200
    });

    const [masonryColumns, setMasonryColumns] = useState(1);

    useEffect(() => {
        if (smallScreen) {
            setMasonryColumns(1)
        } else if (mediumScreen) {
            setMasonryColumns(2)
        } else {
            setMasonryColumns(3);
        }
    }, [smallScreen, mediumScreen]);

    const imageTile = ({ index, data }) => (
        <div key={`image-masonry-tile-${index}`} className="w-100">
            <SEOImage img={data} sizes={[500, 300]} className="w-100" />
        </div>
    )

    return (
        <section>
            <div className="container">
                <div className="content">
                    {title && <h2 className={`minor ${styles.title}`}>{title}</h2>}
                    <Masonry items={gallery} render={imageTile} columnCount={masonryColumns} columnGutter={30} />
                </div>
            </div>
        </section>
    );
};

export default ImageMasonry;
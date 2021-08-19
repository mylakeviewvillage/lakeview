import React from 'react';
import SEOImage from 'components/SEOImage';
import Link from 'next/link';
import styles from 'styles/components/masonry-cards.module.scss';

const MasonryCard = ({ index, data: { image, category, heading, cTA } }) => {
    return (
        <div className={styles.card} key={`masonry-card-${index}`}>
            <div className={styles.card_image}>
                <SEOImage img={image} sizes={[500, 400]} className="w-100" />
            </div>
            <div className={styles.card_copy}>
                <p>{category}</p>
                <h3>{heading}</h3>
                <Link href={cTA.href}>
                    <a target={cTA.target} className="btn">{cTA.text}</a>
                </Link>
            </div>
        </div>
    )
};

export default MasonryCard;
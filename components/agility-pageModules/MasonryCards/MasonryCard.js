import React from 'react';
import SEOImage from 'components/SEOImage';
import Link from 'next/link';
import styles from 'styles/components/masonry-cards.module.scss';

const MasonryCard = ({ index, data: { image, category, title, cTA } }) => {

    return (
        <div className={styles.card} key={`masonry-card-${index}`}>
            {image && (
                <div className={styles.card_image}>
                    <SEOImage img={image} sizes={[500, 400]} className="w-100" />
                </div>
            )}
            <div className={styles.card_copy}>
                {category && <p>{category}</p>}
                {title && <h3>{title}</h3>}
                {cTA && (
                    <Link href={cTA.href}>
                        <a className="btn">{cTA.text}</a>
                    </Link>
                )}
            </div>
        </div>
    )
};

export default MasonryCard;
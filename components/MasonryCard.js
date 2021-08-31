import React from 'react';
import SEOImage from 'components/SEOImage';
import Link from 'next/link';
import styles from 'styles/components/masonry-cards.module.scss';

const MasonryCard = ({ index, data: { image, category, title, slug } }) => {

    let href = "/articles/[...slug]";

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
                {slug && (
                    <Link href={href} as={`/articles/${slug}`}>
                        <a className="btn">Read More</a>
                    </Link>
                )}
            </div>
        </div>
    )
};

export default MasonryCard;
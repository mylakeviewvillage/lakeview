import React from 'react';
import SEOImage from 'components/SEOImage';
import Link from 'next/link';
import styles from 'styles/components/masonry-cards.module.scss';

const MasonryCard = ({ index, data: { image, category, title, cTA } }) => {

    return (
        <div className={styles.card} key={`masonry-card-${index}`}>
            {cTA && image && (
                <div className={styles.card_image}>
                    <Link href={cTA.href}>
                        <a target={cTA.target}><SEOImage img={image} sizes={[473, 300]} className="w-100" /></a>
                    </Link>
                </div>
            )}
            {!cTA && image && (
                <div className={styles.card_image}>
                    <SEOImage img={image} sizes={[473, 300]} className="w-100" />
                </div>
            )}
            <div className={styles.card_copy}>
                {category && <p className={styles.category}>{category}</p>}
                {cTA && title && (
                    <Link href={cTA.href}>
                        <a target={cTA.target}><h3>{title}</h3></a>
                    </Link>
                )}
                {!cTA && title && <h3>{title}</h3>}
                {cTA && (
                    <Link href={cTA.href}>
                        <a className={`btn ${styles.cta}`} target={cTA.target}>{cTA.text}</a>
                    </Link>
                )}
            </div>
        </div>
    )
};

export default MasonryCard;
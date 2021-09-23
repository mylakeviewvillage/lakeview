import React from 'react';
import SEOImage from 'components/SEOImage';
import Link from 'next/link';
import styles from 'styles/components/masonry-cards.module.scss';
import { format } from 'date-fns';

const MasonryCard = ({ index, data: { image, category, title, cTA, date } }) => {

    return (
        <div className={styles.card} key={`masonry-card-${index}`}>
            {image && (
                <div className={styles.card_image}>
                    <SEOImage img={image} sizes={[500, 400]} className="w-100" />
                </div>
            )}
            <div className={styles.card_copy}>
                {category && <p>{category}</p>}
                {date && <p>{format(new Date(date), 'MMMM d, yyyy')}</p>}
                {title && <h3>{title}</h3>}
                {cTA && (
                    <Link href={cTA.href}>
                        <a className="btn" target={cTA.target}>{cTA.text}</a>
                    </Link>
                )}
            </div>
        </div>
    )
};

export default MasonryCard;
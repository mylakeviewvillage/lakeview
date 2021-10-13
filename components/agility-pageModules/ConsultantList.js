import { getContentList } from 'helpers/getContentList';
import React, { useState, useEffect } from 'react';
import SEOImage from 'components/SEOImage';
import Link from 'next/link';
import Masonry from 'react-masonry-css'
import { Fade } from 'react-awesome-reveal';
import styles from 'styles/components/masonry-cards.module.scss';

const ConsultantList = ({ customData }) => {

    const [cards, setCards] = useState([]);

    useEffect(() => {
        console.log(customData);
        setCards(customData.contentList)
    }, [customData])

    const breakpointColumnsObj = {
        default: 3,
        1200: 2,
        768: 1
    };

    return (
        <section>
            <div className="container">
                <div className="content">
                    <Masonry
                        breakpointCols={breakpointColumnsObj}
                        className="my-masonry-grid"
                        columnClassName="my-masonry-grid_column">
                        {cards.map((partner, index) => (
                            <Fade direction="left" delay={index * 50} key={`masonry-partner-card-${index}`}>
                                <div className={styles.card} key={`masonry-card-${index}`}>
                                    {partner.logo && (
                                        <div className={styles.card_image}>
                                            <SEOImage img={partner.logo} sizes={[500, 400]} className="w-100" />
                                        </div>
                                    )}
                                    <div className={styles.card_copy}>
                                        {partner.company && <h3>{partner.company}</h3>}
                                        {partner.bio && (
                                            <div className={styles.bio}>
                                                <p>{partner.bio}</p>
                                            </div>
                                        )}
                                        {partner.website && (
                                            <Link href={partner.website.href}>
                                                <a className={`btn ${styles.cta}`} target={partner.website.target}>{partner.website.text}</a>
                                            </Link>
                                        )}
                                    </div>
                                </div>
                            </Fade>
                        ))}
                    </Masonry>
                </div>
            </div>
        </section>
    );
};

ConsultantList.getCustomInitialProps = async ({
    agility,
    languageCode
}) => {
    return getContentList(agility, 'consultants', languageCode);
}

export default ConsultantList;
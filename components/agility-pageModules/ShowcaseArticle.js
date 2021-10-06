import RichTextArea from 'components/RichTextArea';
import SEOImage from 'components/SEOImage';
import Link from 'next/link';
import React from 'react';
import styles from '../../styles/components/showcase.module.scss';

const ShowcaseArticle = ({ module }) => {

    const { category, title, description, cTA, image } = module.fields.article[0].fields;

    return (
        <section className={styles.showcase}>
            <div className="container">
                <div className="content">
                    <div className={styles.grid}>
                        <div className={styles.grid_left}>
                            <div className={styles.grid_left_content}>
                                {title && <h2 className="minor">{category && <span>{category}<br /></span>}{title}</h2>}
                                <hr />
                                {description && <RichTextArea html={description} />}
                                {cTA && <Link href={cTA.href}><a target={cTA.target} className="btn">{cTA.text}</a></Link>}
                            </div>
                        </div>
                        <div className={styles.grid_right}>
                            {image && <SEOImage img={image} className="w-100" sizes={[975, 700, 400]} />}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ShowcaseArticle;
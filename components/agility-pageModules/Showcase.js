import RichTextArea from 'components/RichTextArea';
import SEOImage from 'components/SEOImage';
import Link from 'next/link';
import React from 'react';
import styles from '../../styles/components/showcase.module.scss';

const Showcase = ({ module }) => {

    const { topTitle, title, copy, cTA, image } = module.fields;

    return (
        <section className={styles.showcase}>
            <div className="container">
                <div className="content">
                    <div className={styles.grid}>
                        <div className={styles.grid_left}>
                            <div className={styles.grid_left_content}>
                                {title && <h2 className="minor">{topTitle && <span>{topTitle}<br /></span>}{title}</h2>}
                                <hr />
                                {copy && <RichTextArea html={copy} />}
                                {cTA && <Link href={cTA.href}><a target={cTA.target} className="btn">{cTA.text}</a></Link>}
                            </div>
                        </div>
                        <div className={styles.grid_right}>
                            <SEOImage img={image} className="w-100" sizes={[1200, 800, 400]} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Showcase;
import RichTextArea from 'components/RichTextArea';
import SEOImage from 'components/SEOImage';
import React from 'react';
import { Fade } from "react-awesome-reveal";
import styles from 'styles/components/split-grid-text-image.module.scss';

const SplitGridTextImage = ({ module }) => {

    const { title, leftCopy, rightCopy, image } = module.fields;

    return (
        <section className={styles.split_grid_text}>
            <div className="container">
                <div className="content">
                    {title && <h2 className="minor">{title}</h2>}
                    <hr />
                    <div className={styles.grid}>
                        <div className={styles.grid_left}>
                            {leftCopy && <RichTextArea html={leftCopy} />}
                        </div>
                        <div className={styles.grid_right}>
                            {rightCopy && <RichTextArea html={rightCopy} />}
                        </div>
                        <div className={styles.grid_image}>
                            {image &&
                                <Fade direction="up">
                                    <SEOImage img={image} sizes={[700, 500, 300]} className="w-100" />
                                </Fade>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SplitGridTextImage;
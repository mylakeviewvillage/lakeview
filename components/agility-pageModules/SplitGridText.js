import RichTextArea from 'components/RichTextArea';
import React from 'react';
import styles from 'styles/components/split-grid-text.module.scss';

const SplitGridText = ({ module }) => {

    const { title, leftCopy, rightCopy } = module.fields;

    return (
        <section className={styles.split_grid_text}>
            <div className="container">
                <div className="content">
                    {title && <h2>{title}</h2>}
                    <div className={styles.grid}>
                        <div className={styles.grid_panel}>
                            {leftCopy && <RichTextArea html={leftCopy} />}
                        </div>
                        <div className={styles.grid_panel}>
                            {rightCopy && <RichTextArea html={rightCopy} />}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SplitGridText;
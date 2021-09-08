import React from 'react';
import styles from 'styles/components/testimonial.module.scss';

const Testimonial = ({ module }) => {

    const { quote, author } = module.fields;

    return (
        <section className={styles.testimonial}>
            <div className="container">
                <div className="content">
                    <h3>{quote}</h3>
                    <h4>{author}</h4>
                </div>
            </div>
        </section>
    );
};

export default Testimonial;
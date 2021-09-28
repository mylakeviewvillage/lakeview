import React from 'react';
import styles from 'styles/components/testimonial-slider.module.scss';
import { getContentList } from 'helpers/getContentList';
import SectionTitle from 'components/SectionTitle';
import RichTextArea from 'components/RichTextArea';

import Flicking, { ViewportSlot } from "@egjs/react-flicking";
import { Pagination, AutoPlay } from "@egjs/flicking-plugins";
import "@egjs/react-flicking/dist/flicking.css";
import "@egjs/flicking-plugins/dist/flicking-plugins.css";

const TestimonialSlider = ({ module, customData }) => {

    const { titleOne, titleTwo, titleThree } = module.fields;

    const testimonials = customData.contentList;

    const plugins = [new Pagination({ type: 'bullet' }), new AutoPlay({ duration: 5000, direction: "NEXT", stopOnHover: true })];

    return (
        <section className={styles.testimonial_slider}>
            <div className="container">
                <div className="content">
                    {titleOne && <SectionTitle titleOne={titleOne} titleTwo={titleTwo} titleThree={titleThree} />}
                    <Flicking className={styles.slider} plugins={plugins} circular={true}>
                        {testimonials.map((testimonial, index) => (
                            <div className={styles.slider_slide} key={`testimonial-slide-${index}`}>
                                <div className={styles.quote}>
                                    <RichTextArea html={testimonial.testimonial} />
                                </div>
                                <p className={styles.attribute}>- {testimonial.attribute}</p>
                                <p className={styles.sub_attribute}>{testimonial.subAttribute}</p>
                            </div>
                        ))}
                        <ViewportSlot>
                            <div className={`flicking-pagination ${styles.bullets}`}></div>
                        </ViewportSlot>
                    </Flicking>
                </div>
            </div>
        </section>
    );
};

TestimonialSlider.getCustomInitialProps = async ({
    agility,
    languageCode,
    item
}) => {
    return getContentList(agility, item.fields.testimonials.referencename, languageCode);
}

export default TestimonialSlider;
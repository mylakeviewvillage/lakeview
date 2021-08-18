import React from 'react';

import SectionTitle from 'components/SectionTitle';
import LinkedSliderOverlapping from './LinkedSliderStyles/LinkedSliderOverlapping';
import LinkedSliderBanner from './LinkedSliderStyles/LinkedSliderBanner';

const LinkedSlider = ({ module, customData }) => {

    const { titleOne, titleTwo, titleThree, layout, backgroundColor, copyColor, style } = module.fields;
    const { slides } = customData;

    const settings = {
        layout, backgroundColor, copyColor, slides
    }

    return (
        <section>
            <div className="content">
                <div className="container">
                    {titleOne && (
                        <SectionTitle titleOne={titleOne} titleTwo={titleTwo} titleThree={titleThree} />
                    )}
                </div>
                <div className="container full-width">
                    {style === 'overlapping' ? <LinkedSliderOverlapping {...settings} /> : <LinkedSliderBanner {...settings} />}

                </div>
            </div>
        </section>
    );
};

LinkedSlider.getCustomInitialProps = async ({
    agility,
    languageCode,
    channelName,
    item
}) => {
    let slides = null;
    const api = agility;
    let sliderContent = await api.getContentList({
        referenceName: item.fields.slides.referencename,
        languageCode: languageCode,
        depth: 10,
        expandAllContentLinks: true,
        take: 10
    });
    sliderContent.items.sort((a, b) => (a.properties.itemOrder > b.properties.itemOrder) ? 1 : -1);
    slides = sliderContent.items.map(slide => slide.fields);
    return {
        slides
    }
}

export default LinkedSlider;
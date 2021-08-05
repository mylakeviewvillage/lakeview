import SEOImage from 'components/SEOImage';
import React from 'react';

const Banner = ({ module }) => {
    return (
        <section className="banner">
            <div className="container full-width">
                <div className="content">
                    <SEOImage img={module.fields.image} sizes={[500, 1024, 1920]} className="w-100" />
                </div>
            </div>
        </section>
    );
};

export default Banner;
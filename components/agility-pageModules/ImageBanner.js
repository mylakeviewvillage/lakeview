import React from 'react';

const Banner = ({ module }) => {
    console.log(module);
    return (
        <section className="banner">
            <div className="container full-width">
                <div className="content">
                    <img src={module.fields.image.url} alt={module.fields.image.label} className="w-100" />
                </div>
            </div>
        </section>
    );
};

export default Banner;
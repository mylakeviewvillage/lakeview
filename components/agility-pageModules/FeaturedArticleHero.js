import SEOImage from 'components/SEOImage';
import React from 'react';

const FeaturedArticleHero = ({ module }) => {

    const { category, title, image } = module.fields;

    return (
        <section>
            <div className="content">
                <div className="container">
                    <p className="small-blue-title">{category}</p>
                    <h1>{title}</h1>
                </div>
                <div className="container full-width">
                    <SEOImage img={image} className="w-100" />
                </div>
            </div>
        </section>
    );
};

export default FeaturedArticleHero;
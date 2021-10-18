import SEOImage from 'components/SEOImage';
import React from 'react';

const FeaturedArticleHero = ({ module }) => {

    const { category, title, image } = module.fields;

    return (
        <section>
            <div className="content">
                <div className="container">
                    {category && <p className="small-blue-title">{category}</p>}
                    {title && <h1>{title}</h1>}
                </div>
                {image && (
                    <div className="container full-width">
                        <SEOImage img={image} sizes={[1920, 1000, 700, 400]} className="w-100" />
                    </div>
                )}
            </div>
        </section>
    );
};

export default FeaturedArticleHero;
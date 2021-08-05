import React from 'react';

const SEOImage = ({ img, sizes, className }) => {
    const srcSet = sizes.map(size => `${img.url}?w=${size} ${size}w, `);
    return (
        <img src={img.url} srcSet={srcSet} alt={img.label} className={className} />
    );
};

export default SEOImage;
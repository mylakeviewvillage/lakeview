import React from 'react';

const SEOImage = ({ img, sizes, className }) => {
    const srcSet = sizes.map(size => `${img.url}?format=auto&w=${size} ${size}w, `);
    return (
        <img src={img.url} width={img.width} height={img.height} srcSet={srcSet} alt={img.label ? img.label : ''} className={className} />
    );
};

export default SEOImage;
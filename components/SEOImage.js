import React from 'react';

const SEOImage = ({ img, sizes, className }) => {
    const srcSet = sizes.map(size => `${img.url}?format=auto&w=${size} ${size}w, `);
    return (
        <img src={img.url} width={img.width ? img.width : 2} height={img.height ? img.height : 1} srcSet={srcSet} alt={img.label ? img.label : ''} className={className} />
    );
};

export default SEOImage;
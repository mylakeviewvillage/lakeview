import React, { useEffect, useState } from 'react';

const SEOImage = ({ img, sizes, className, width, height }) => {

    const [svg, setSvg] = useState(false);

    useEffect(() => {
        if (img.url.includes('.svg')) {
            setSvg(true);
        }
    }, [img]);

    let srcSet = svg ?
        img.url :
        sizes.map(size => `${img?.url.replace(/ /g, '%20')}?format=auto&w=${size} ${size}w, `);

    return (
        <>
            {img && (
                <img src={img.url} srcSet={srcSet} alt={img.label || ''} width={width ?? img.width ?? 1} height={height ?? img.height ?? 1} className={className} />
            )}
        </>
    );
};

export default SEOImage;
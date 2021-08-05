import React from 'react';

const SectionTitle = ({ titleOne, titleTwo, titleThree }) => {
    return (
        <h2 className="stacked-title">
            <span>{titleOne}</span>
            {titleTwo && <span>{titleTwo}</span>}
            {titleThree && <span>{titleThree}</span>}
        </h2>
    );
};

export default SectionTitle;
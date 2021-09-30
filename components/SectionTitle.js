import React from 'react';
import { Fade } from "react-awesome-reveal";

const SectionTitle = ({ titleOne, titleTwo, titleThree }) => {
    return (
        <h2 className="stacked-title">
            {titleOne && <Fade direction="up"><span>{titleOne}</span></Fade>}
            {titleTwo && <Fade direction="up" delay={75}><span>{titleTwo}</span></Fade>}
            {titleThree && <Fade direction="up" delay={150}><span>{titleThree}</span></Fade>}
        </h2>
    );
};

export default SectionTitle;
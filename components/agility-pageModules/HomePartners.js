import React from 'react';
import Link from 'next/link';
import { Fade } from "react-awesome-reveal";
import styles from '../../styles/components/home-partners.module.scss';
import PartnersVideo from 'components/agility-pageModules/HomePartnersVideo';
const HomePartners = ({ module }) => {

    return (
        <PartnersVideo />
    );
};

export default HomePartners;
import React from 'react';
import { useState } from 'react';
import styles from 'styles/components/masonry-sort.module.scss';

const MasonrySort = ({ filterCards }) => {

    const [activeFilter, setActiveFilter] = useState('All');

    const [sortDropdown, setSortDropdown] = useState(false);

    const onFilterChange = (filter) => {
        filterCards(filter);
        setActiveFilter(filter);
    }

    return (
        <div className={styles.filters}>
            <button className={styles.mobileSortDropdown} onClick={() => setSortDropdown(!sortDropdown)}>Sort</button>
            <div className={`${styles.buttons} ${sortDropdown ? styles.active : null}`}>
                <button className={activeFilter === 'All' ? styles.active : null} onClick={() => onFilterChange('All')}>All</button>
                <button className={activeFilter === 'Community' ? styles.active : null} onClick={() => onFilterChange('Community')}>Community</button>
                <button className={activeFilter === 'Public Art & Placemaking' ? styles.active : null} onClick={() => onFilterChange('Public Art & Placemaking')}>Public Art & Placemaking</button>
                <button className={activeFilter === 'Innovation & Sustainability' ? styles.active : null} onClick={() => onFilterChange('Innovation & Sustainability')}>Innovation & Sustainability</button>
                <button className={activeFilter === 'Partnerships' ? styles.active : null} onClick={() => onFilterChange('Partnerships')}>Partnerships</button>
            </div>
        </div>
    );
};

export default MasonrySort;
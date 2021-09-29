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
                <button className={activeFilter === 'Community Relations' ? styles.active : null} onClick={() => onFilterChange('Community Relations')}>Community Relations</button>
                <button className={activeFilter === 'Discovery Centre' ? styles.active : null} onClick={() => onFilterChange('Discovery Centre')}>Discovery Centre</button>
                <button className={activeFilter === 'Placemaking' ? styles.active : null} onClick={() => onFilterChange('Placemaking')}>Placemaking</button>
                <button className={activeFilter === 'Planning & Projects' ? styles.active : null} onClick={() => onFilterChange('Planning & Projects')}>Planning & Projects</button>
                <button className={activeFilter === 'Transit & Trails' ? styles.active : null} onClick={() => onFilterChange('Transit & Trails')}>Transit & Trails</button>
            </div>
        </div>
    );
};

export default MasonrySort;
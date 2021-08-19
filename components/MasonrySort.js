import React from 'react';
import styles from 'styles/components/masonry-sort.module.scss';

const MasonrySort = ({ filterCards }) => {
    return (
        <div className="container">
            <div className={styles.filters}>
                <button onClick={() => filterCards('All')}>All</button>
                <button onClick={() => filterCards('News')}>News</button>
                <button onClick={() => filterCards('Community Relations')}>Community Relations</button>
                <button onClick={() => filterCards('Discovery Centre')}>Discovery Centre</button>
                <button onClick={() => filterCards('Placemaking')}>Placemaking</button>
                <button onClick={() => filterCards('Planning & Project')}>Planning & Project</button>
                <button onClick={() => filterCards('Transit & Trails')}>Transit & Trails</button>
            </div>
        </div>
    );
};

export default MasonrySort;
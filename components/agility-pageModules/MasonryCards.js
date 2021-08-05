import React from 'react';
import { Masonry } from 'masonic';
import styles from '../../styles/components/masonary-cards.module.scss';

const MasonryCards = () => {

    const items = [{ name: 'test', id: 1 }, { name: 'test 2', id: 2 }];

    const card = ({ data }) => {
        return (
            <div>
                <p>I'm a card</p>
                <p>{data.name}</p>
                <p>{data.id}</p>
            </div>
        )
    }

    return (
        <section>
            <div className="container">
                <div className="content">
                    <Masonry items={items} render={card} />
                </div>
            </div>
        </section>
    );
};

export default MasonryCards;
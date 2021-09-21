import SectionTitle from 'components/SectionTitle';
import SEOImage from 'components/SEOImage';
import { getContentList } from 'helpers/getContentList';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from 'styles/components/discover-the-artist.module.scss';

const DiscoverTheArtists = ({ module, customData }) => {

    const { titleOne, titleTwo, titleThree } = module.fields;

    const [artists, setArtists] = useState([]);
    const [visibleArtists, setVisibleArtists] = useState([]);
    const [loadedArtists, setLoadedArtists] = useState(6);

    useEffect(() => {
        // set the artists to the custom data pulled on load
        setArtists(customData.contentList)
    }, []);

    useEffect(() => {
        // move artists into the visible array on the initial load of artists, and every time load more is clicked
        setVisibleArtists([...artists].splice(0, loadedArtists))
    }, [artists, loadedArtists])

    const loadMore = () => {
        // load n number of new artists on each load more click
        const loadInt = 6;
        setLoadedArtists(loadedArtists + loadInt);
    }

    return (
        <section className={styles.discover_the_artist}>
            <div className="container">
                <div className="content">
                    <SectionTitle titleOne={titleOne} titleTwo={titleTwo} titleThree={titleThree} />
                    <div className={styles.artists}>
                        {visibleArtists.map((artist, index) => (
                            <div key={`artist-${index}`} className={styles.artist}>
                                {artist.artwork && (
                                    <div className={styles.artist_image}>
                                        <SEOImage img={artist.artwork} sizes={[700, 500, 300]} className="w-100" />
                                    </div>
                                )}
                                {artist.artworkTitle && <h3>{artist.artworkTitle}</h3>}
                                {artist.title && <h4>{artist.title}</h4>}
                                {artist.website && (
                                    <Link href={artist.website}>
                                        <a target="_blank" className="btn">Learn More</a>
                                    </Link>
                                )}
                            </div>
                        ))}
                    </div>
                    {loadedArtists < artists.length && (
                        <div className="load-more">
                            <hr />
                            <button onClick={loadMore}>Load More</button>
                            <hr />
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

DiscoverTheArtists.getCustomInitialProps = async ({
    agility,
    languageCode
}) => {
    return getContentList(agility, 'artists', languageCode);
}

export default DiscoverTheArtists;
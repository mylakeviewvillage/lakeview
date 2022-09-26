import SectionTitle from 'components/SectionTitle';
import SEOImage from 'components/SEOImage';
import { getContentList } from 'helpers/getContentList';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from 'styles/components/discover-the-artist.module.scss';

import ModalVideo from 'react-modal-video';
import { Fade } from 'react-awesome-reveal';

const DiscoverTheArtists = ({ module, customData }) => {

    const { titleOne, titleTwo, titleThree } = module.fields;

    const [artists, setArtists] = useState([]);
    const [visibleArtists, setVisibleArtists] = useState([]);
    const [loadedArtists, setLoadedArtists] = useState(12);
    const loadIncrease = 6;


    const [openModal, setOpenModal] = useState(false);
    const [currentVideo, setCurrentVideo] = useState("");

    const playVideo = (videoId) => {
        setCurrentVideo(videoId);
        setOpenModal(true);
    }

    useEffect(() => {
        // set the artists to the custom data pulled on load
        setArtists(customData.contentList);
        console.log(customData.contentList);
    }, []);

    useEffect(() => {
        // move artists into the visible array on the initial load of artists, and every time load more is clicked
        setVisibleArtists([...artists].splice(0, loadedArtists))
    }, [artists, loadedArtists])

    const loadMore = () => {
        setLoadedArtists(loadedArtists + loadIncrease);
    }

    return (
        <section className={styles.discover_the_artist}>
            <div className="container">
                <div className="content">
                    <SectionTitle titleOne={titleOne} titleTwo={titleTwo} titleThree={titleThree} />
                    <div className={styles.artists}>
                        {visibleArtists.map((artist, index) => (
                            <Fade direction="left" delay={index % 3 * 50}>
                                <div key={`artist-${index}`} className={styles.artist} style={{ display: artist.hideFromGrid && artist.hideFromGrid == "true" ? 'none' : 'block' }}>
                                    {artist.artwork && (
                                        <div className={styles.artist_image} onClick={() => playVideo(artist.youtubeVideoID)} >
                                            <img className="play-circle" src="/img/play-circle.svg" alt="Play Button" />
                                            <SEOImage img={artist.artwork} sizes={[700, 500, 300]} className="w-100" />
                                        </div>
                                    )}
                                    {artist.artworkTitle && <h3>{artist.artworkTitle}</h3>}
                                    {artist.title && <h4>{artist.title}</h4>}
                                    <Link href={'/artists/[...slug]'} as={`artists/${artist.slug}`}>
                                        <a className="btn">Learn More</a>
                                    </Link>
                                </div>
                            </Fade>
                        ))}
                        <ModalVideo channel='youtube' autoplay={true} isOpen={openModal} videoId={currentVideo} onClose={() => setOpenModal(false)} />
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
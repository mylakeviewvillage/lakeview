import SectionTitle from 'components/SectionTitle';
import { getContentList } from 'helpers/getContentList';
import React, { useEffect, useState } from 'react';

const DiscoverTheArtists = ({ module, customData }) => {

    const { titleOne, titleTwo, titleThree } = module.fields;

    const [artists, setArtists] = useState([]);
    const [visibleArtists, setVisibleArtists] = useState([]);
    const [loadedArtists, setLoadedArtists] = useState(9);

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
        const loadInt = 3;
        setLoadedArtists(loadedArtists + loadInt);
    }

    return (
        <section>
            <div className="container">
                <div className="content">
                    <SectionTitle titleOne={titleOne} titleTwo={titleTwo} titleThree={titleThree} />
                    <div className="artists">
                        {visibleArtists.map((artist, index) => (
                            <div key={`artist-${index}`}>
                                <h3>{artist.title}</h3>
                            </div>
                        ))}
                    </div>
                    {loadedArtists < artists.length && <button onClick={loadMore}>Load More</button>}
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
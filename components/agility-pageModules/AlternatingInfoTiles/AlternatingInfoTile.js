import RichTextArea from 'components/RichTextArea';
import SEOImage from 'components/SEOImage';
import Link from 'next/link';
import React, { useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import styles from 'styles/components/alternating-info-tiles.module.scss';
import ModalVideo from 'react-modal-video';

const AlternatingInfoTile = ({ tile }) => {

    const [modal, setModal] = useState(false);
    const [videoID, setVideoID] = useState('');

    const openModal = (videoID) => {
        setModal(true);
        setVideoID(videoID);
    }

    console.log(tile);

    return (
        <div className={styles.tile}>
            <div className={styles.image}>
                {tile.videoID && (
                    <button onClick={() => openModal(videoID)}>
                        <SEOImage img={tile.image} sizes={[300, 600]} className="w-100" />
                    </button>
                )}
                {!tile.videoID && (<SEOImage img={tile.image} sizes={[300, 600]} className="w-100" />)}
            </div>
            <div className={styles.copy}>
                <p className={styles.minor}>{tile.subtitle}</p>
                <h3>{tile.title}</h3>
                <hr />
                <ul>
                    <Fade direction="up" duration={1000} damping={0.1} cascade>
                        {tile.iconList.items.map((item, index) => (
                            <li key={`info-tile-list-item=${index}`}
                                style={item.fields.icon && (
                                    {
                                        paddingLeft: '70px',
                                        backgroundImage: `url('${item.fields.icon.url}')`
                                    }
                                )}>
                                <RichTextArea html={item.fields.copy} />
                            </li>
                        ))}
                    </Fade>
                </ul>

                {tile.cTA && !tile.videoID && (
                    <Link href={tile.cTA.href}><a className="btn" target={tile.cTA.target}>{tile.cTA.text}</a></Link>
                )}
                {tile.videoID && (
                    <div>
                        <button className={`btn ${styles.cta}`} onClick={() => openModal(tile.videoID)}>Play Video</button>
                    </div>
                )}
            </div>
            <ModalVideo channel='youtube' autoplay={true} isOpen={modal} videoId={videoID} onClose={() => setModal(false)} />
        </div>
    );
};

export default AlternatingInfoTile;
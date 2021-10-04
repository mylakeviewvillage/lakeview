import RichTextArea from 'components/RichTextArea';
import SEOImage from 'components/SEOImage';
import Link from 'next/link';
import React from 'react';
import { Fade } from 'react-awesome-reveal';
import styles from 'styles/components/alternating-info-tiles.module.scss';

const AlternatingInfoTile = ({ tile }) => {

    return (
        <div className={styles.tile}>
            <div className={styles.image}>
                <SEOImage img={tile.image} sizes={[300, 600]} className="w-100" />
            </div>
            <div className={styles.copy}>
                <h2 className="minor">{tile.title}</h2>
                <h3>{tile.subtitle}</h3>
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

                {tile.cTA && (
                    <Link href={tile.cTA.href}><a className="btn" target={tile.cTA.target}>{tile.cTA.text}</a></Link>
                )}
            </div>
        </div>
    );
};

export default AlternatingInfoTile;
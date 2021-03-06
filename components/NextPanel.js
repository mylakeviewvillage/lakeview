import Link from 'next/link';
import React from 'react';
import { Fade } from "react-awesome-reveal";
import styles from 'styles/components/next-panel.module.scss';

const NextPanel = ({ menu }) => {

    return (
        <div className={styles.next_panel}>
            <div className="container">
                <div className="content fat">
                    <h2>
                        <span>Your</span>
                        <span>Waterfront</span>
                        <span>Transformed</span>
                        <span>Connected</span>
                    </h2>
                    <h3>where would you like to go next?</h3>
                    <Fade direction="up">
                        <ul>
                            {menu.map(({ link }, index) => {
                                return (
                                    <li key={`link-${index}`}>
                                        <span className={styles.dash}>-</span> <Link href={link.href}><a target={link.target}>{link.text}</a></Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </Fade>
                </div>
            </div>
        </div>
    );
};

export default NextPanel;
import RichTextArea from 'components/RichTextArea';
import SectionTitle from 'components/SectionTitle';
import SEOImage from 'components/SEOImage';
import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
import InfoSectionVideoModal from '/components/agility-pageModules/InfoSectionVideoModal';
import stylesInfoSectionVideoModal from 'styles/components/info-section-video-modal.module.scss';
import stylesBanner from 'styles/components/banner.module.scss';
import stylesTestimonial from 'styles/components/testimonial.module.scss';
import stylesInfoTiles from 'styles/components/alternating-info-tiles.module.scss';

const ArtistPage = ({ dynamicPageItem }) => {

    const { title, bio, headshot, quote, website, instagram, artwork, artworkTitle, artworkDescription, youtubeThumbnail, youtubeVideoID } = dynamicPageItem.fields;
    const [openModal, setOpenModal] = useState(false);

    return (
        <div>
            <section className={stylesBanner.banner}>
                <div className="content no-top">
                    <div className="container">
                        <h2 className="stacked-title">
                            <span>{title}</span>
                        </h2>
                    </div>
                    <div className="container full-width">
                        <SEOImage img={artwork} sizes={[500, 1024, 1920]} className="w-100" />
                    </div>
                </div>
            </section>
            <section className={stylesInfoSectionVideoModal.infoSectionVideoModal}>
                <div className="container">
                    <div className="content">
                        {artworkTitle && <h4>{artworkTitle}</h4>}
                        <div className={stylesInfoSectionVideoModal.panes}>
                            <div className={stylesInfoSectionVideoModal.left}>
                                <hr />
                                <p>{artworkDescription}</p>
                            </div>
                            <div className={stylesInfoSectionVideoModal.right}>
                                {youtubeThumbnail && (
                                    <div className={stylesInfoSectionVideoModal.image} onClick={() => setOpenModal(true)} >
                                        <SEOImage img={youtubeThumbnail} sizes={[500, 1024, 1920]} className="w-100" />
                                    </div>
                                )}
                            </div>
                        </div>
                        <ModalVideo channel='youtube' autoplay={true} isOpen={openModal} videoId={youtubeVideoID} onClose={() => setOpenModal(false)} />
                    </div>
                </div>
            </section>
            <section className={stylesTestimonial.testimonial}>
                <div className="container">
                    <div className="content">
                        <h3>{quote}</h3>
                        <h4>{title}</h4>
                    </div>
                </div>
            </section>
            <section>
                <div className="container">
                    <div className="content">
                        <SectionTitle titleOne="About" titleTwo="The Artist" />
                        <div className={stylesInfoTiles.tiles}>
                            <div className={stylesInfoTiles.tile}>
                                <div className={stylesInfoTiles.image}>
                                    <SEOImage img={headshot} sizes={[300, 600]} className="w-100" />
                                </div>
                                <div className={stylesInfoTiles.copy}>
                                    {/* <h2 className="minor">{title}</h2> */}
                                    <h3>{title}</h3>
                                    <hr />
                                    <ul>
                                        <li><RichTextArea html={bio} /></li>
                                        <li>{website.href}</li>
                                        <li>{instagram.href}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
export default ArtistPage;
import RichTextArea from "components/RichTextArea";
import SectionTitle from "components/SectionTitle";
import SEOImage from "components/SEOImage";
import React, { useState } from "react";
import Link from "next/link";
import ModalVideo from "react-modal-video";
import stylesInfoSectionVideoModal from "styles/components/info-video-modal.module.scss";
import stylesBanner from "styles/components/banner.module.scss";
import stylesTestimonial from "styles/components/testimonial.module.scss";
import stylesInfoTiles from "styles/components/alternating-info-tiles.module.scss";
import styles from "styles/components/large-image-video-modal.module.scss";

const ArtistPage = ({ dynamicPageItem }) => {
  console.log(dynamicPageItem);
  const {
    title,
    bio,
    headshot,
    quote,
    website,
    instagram,
    facebook,
    artwork,
    artworkTitle,
    artworkDescription,
    artworkDescriptionHTML,
    youtubeThumbnail,
    youtubeVideoID,
    hideFromGrid,
  } = dynamicPageItem.fields;
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
            <div className={styles.image}>
              {youtubeVideoID && (
                <img
                  src="/img/play-circle.svg"
                  alt="play button"
                  className="play-circle"
                  onClick={() => setOpenModal(true)}
                />
              )}
              <SEOImage
                img={artwork}
                sizes={[500, 1024, 1920]}
                className="w-100"
              />
            </div>
          </div>
        </div>
      </section>
      <section className={stylesInfoSectionVideoModal.infoSectionVideoModal}>
        <div className="container">
          <div className="content">
            {artworkTitle && <h2 className="minor">{artworkTitle}</h2>}
            <div className={stylesInfoSectionVideoModal.panes}>
              <div className={stylesInfoSectionVideoModal.left}>
                <hr />
                <p>{artworkDescription}</p>
                {artworkDescriptionHTML && (
                  <RichTextArea html={artworkDescriptionHTML} />
                )}
              </div>
              <div className={stylesInfoSectionVideoModal.right}>
                {youtubeThumbnail && (
                  <div className={stylesInfoSectionVideoModal.image}>
                    <SEOImage
                      img={youtubeThumbnail}
                      sizes={[500, 1024, 1920]}
                      className="w-100"
                    />
                  </div>
                )}
              </div>
            </div>
            <ModalVideo
              channel="youtube"
              autoplay={true}
              isOpen={openModal}
              videoId={youtubeVideoID}
              onClose={() => setOpenModal(false)}
            />
          </div>
        </div>
      </section>
      <section className={stylesTestimonial.testimonial}>
        <div className="container">
          <div className="content">
            <div className={stylesTestimonial.testimonial_copy}>
              <h3>"{quote}"</h3>
              <h4>- {title}</h4>
            </div>
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
                  <SEOImage
                    img={headshot}
                    sizes={[300, 600]}
                    className="w-100"
                  />
                </div>
                <div className={stylesInfoTiles.copy}>
                  {/* <h2 className="minor">{title}</h2> */}
                  <h3>{title}</h3>
                  <hr />
                  <ul>
                    <li>
                      <RichTextArea html={bio} />
                    </li>
                    {website && (
                      <li>
                        <Link href={website.href}>
                          <a target="_blank">{website.href}</a>
                        </Link>
                      </li>
                    )}
                    <li>
                      {instagram && (
                        <Link href={instagram.href}>
                          <a target="_blank">
                            <img
                              src="/img/icons/icon-ig.svg"
                              alt="Instagram"
                              className="social-icon"
                            />
                          </a>
                        </Link>
                      )}
                      {facebook && (
                        <Link href={facebook.href}>
                          <a target="_blank">
                            <img
                              src="/img/icons/icon-fb.svg"
                              alt="Facebook"
                              className="social-icon"
                            />
                          </a>
                        </Link>
                      )}
                    </li>
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

import React, { useState } from "react";
import SectionTitle from "components/SectionTitle";
import MasonryCardVideo from "components/agility-pageModules/MasonryCardsVideo/MasonryCardVideo";

import Masonry from "react-masonry-css";
import { Fade } from "react-awesome-reveal";

import ModalVideo from "react-modal-video";

const MasonryCardsVideo = ({ module, customData }) => {
  console.log(module);
  const { titleOne, titleTwo, titleThree } = module.fields;

  const [modal, setModal] = useState(false);
  const [videoID, setVideoID] = useState("");

  const breakpointColumnsObj = {
    default: 3,
    1200: 2,
    768: 1,
  };

  const openModal = (videoID) => {
    setModal(true);
    setVideoID(videoID);
  };

  const cards = customData.cards.map((card, index) => (
    <Fade
      direction="left"
      delay={index * 50}
      key={`masonry-card-video-${index}`}
      triggerOnce
    >
      <MasonryCardVideo index={index} data={card} openModal={openModal} />
    </Fade>
  ));

  return (
    <section>
      <div className="container">
        <div className="content">
          {titleOne && (
            <SectionTitle
              titleOne={titleOne}
              titleTwo={titleTwo}
              titleThree={titleThree}
            />
          )}
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {cards}
          </Masonry>
          <ModalVideo
            channel="youtube"
            autoplay={true}
            isOpen={modal}
            videoId={videoID}
            onClose={() => setModal(false)}
          />
        </div>
      </div>
    </section>
  );
};

MasonryCardsVideo.getCustomInitialProps = async ({
  agility,
  languageCode,
  channelName,
  item,
}) => {
  let cards = null;
  const api = agility;
  let cardsContent = await api.getContentList({
    referenceName: item.fields.cards.referencename,
    languageCode: languageCode,
    depth: 10,
    expandAllContentLinks: true,
    take: 50,
  });
  cardsContent.items.sort((a, b) =>
    a.properties.itemOrder > b.properties.itemOrder ? 1 : -1
  );
  cards = cardsContent.items.map((cards) => cards.fields);
  return {
    cards,
  };
};

export default MasonryCardsVideo;

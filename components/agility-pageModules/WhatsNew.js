import SectionTitle from "components/SectionTitle";
import SEOImage from "components/SEOImage";
import React from "react";
import styles from "../../styles/components/whatsnew.module.scss";

const WhatsNew = ({ module }) => {
  const { titleOne, titleTwo, titleThree, image, builderImage, cTA } =
    module.fields;

  return (
    <section className={styles.whats_new}>
      <div className="container">
        <div className="content">
          <div className={styles.grid}>
            <div className="left">
              {titleOne && (
                <SectionTitle
                  titleOne={titleOne}
                  titleTwo={titleTwo}
                  titleThree={titleThree}
                />
              )}
            </div>
            <div className={styles.right}>
              <a href={cTA.href} aria-label={cTA.text} target={cTA.target}>
                <SEOImage
                  img={image}
                  sizes={[500, 1024, 1920]}
                  className="w-100"
                />
                <img src={builderImage.url} className={styles.builder_image} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatsNew;

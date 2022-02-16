import React from "react";
import Head from "next/head";
import ReactHtmlParser from "react-html-parser";

const SEO = ({ title, description, keywords, ogImage, metaHTML }) => {
  // setup and parse additional header markup
  let additionalHeaderMarkup = null;
  if (metaHTML) {
    additionalHeaderMarkup = ReactHtmlParser(metaHTML);
  }
  return (
    <Head>
      <title>{title} | My Lakeview Village</title>
      <meta name="generator" content="Agility CMS" />
      <meta name="agility_timestamp" content={new Date().toLocaleString()} />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="facebook-domain-verification" content="jsl91nobjcd5kfhiebxvue4cgdg6w1" />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&display=swap"
        rel="stylesheet"
      />
      {ogImage && <meta property="og:image" content={ogImage} />}
      {additionalHeaderMarkup}
    </Head>
  );
};

export default SEO;

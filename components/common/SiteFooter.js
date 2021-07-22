import React from "react";

const SiteFooter = () => {

  return (
    <footer>
      Footer
    </footer>
  );
};

SiteFooter.getCustomInitialProps = async function ({
  agility,
  languageCode,
  channelName,
}) {

  let footer;

  try {

  } catch (err) {
    console.log("Global Footer error: ", err);

  }

  return { footer }

}


export default SiteFooter;

import React from "react";
import { ContentZone } from "@agility/nextjs";
import { getModule } from "components/agility-pageModules";
import ContactPanel from "components/ContactPanel";

const MainTemplate = (props) => {

  const { contactIntro, contactCompliance, contactThankYou, contactHeading, contactImage } = props.globalData.footer;

  return (
    <>
      <ContentZone name="MainContentZone" {...props} getModule={getModule} />
      <ContactPanel copy={{ contactIntro, contactCompliance, contactThankYou, contactHeading, contactImage }} />
    </>
  );
};

export default MainTemplate;

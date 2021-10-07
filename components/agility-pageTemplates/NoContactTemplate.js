import React from "react";
import { ContentZone } from "@agility/nextjs";
import { getModule } from "components/agility-pageModules";

const NoContactTemplate = (props) => {

  return (
    <>
      <ContentZone name="MainContentZone" {...props} getModule={getModule} />
    </>
  );
};

export default NoContactTemplate;

import ContactPanel from "./ContactPanel";
import ImageBanner from "./ImageBanner";
import ImageInfo from "./ImageInfo";
import InfoSection from "./InfoSection";
import LinkedSlider from "./LinkedSlider";
import MasonryCards from "./MasonryCards";
import NextPanel from "./NextPanel";
import TileSlider from "./TileSlider";

// All of the Agility Page Module Components that are in use in this site need to be imported into this index file.
// Place Page Modules in allModules array below, passing in a name and the component.

const allModules = [
  { name: "ImageBanner", module: ImageBanner },
  { name: "InfoSection", module: InfoSection },
  { name: "LinkedSlider", module: LinkedSlider },
  { name: "ImageInfo", module: ImageInfo },
  { name: "MasonryCards", module: MasonryCards },
  { name: "ContactPanel", module: ContactPanel },
  { name: "NextPanel", module: NextPanel },
  { name: "TileSlider", module: TileSlider }
];

export const getModule = (moduleName) => {
  if (!moduleName) return null;
  const obj = allModules.find(
    (m) => m.name.toLowerCase() === moduleName.toLowerCase()
  );
  if (!obj) return null;
  return obj.module;
};

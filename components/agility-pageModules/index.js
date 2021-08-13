import Accordion from "./Accordion";
import ContactPanel from "./ContactPanel";
import FullWidthSlider from "./FullWidthSlider";
import ImageBanner from "./ImageBanner";
import ImageInfo from "./ImageInfo";
import InfoSection from "./InfoSection";
import LinkedSlider from "./LinkedSlider";
import MasonryCards from "./MasonryCards";
import NextPanel from "./NextPanel";
import Showcase from "./Showcase";
import TileSlider from "./TileSlider";
import WideCards from "./WideCards";

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
  { name: "TileSlider", module: TileSlider },
  { name: "FullWidthSlider", module: FullWidthSlider },
  { name: "Accordion", module: Accordion },
  { name: "Showcase", module: Showcase },
  { name: "WideCards", module: WideCards }
];

export const getModule = (moduleName) => {
  if (!moduleName) return null;
  const obj = allModules.find(
    (m) => m.name.toLowerCase() === moduleName.toLowerCase()
  );
  if (!obj) return null;
  return obj.module;
};

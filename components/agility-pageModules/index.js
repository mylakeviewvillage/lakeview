import Accordion from "./Accordion";
import AlternatingInfoTiles from "./AlternatingInfoTiles";
import ArtistPage from "./ArtistPage";
import ArticleList from "./ArticleList";
import ContactPanel from "./ContactPanel";
import FullWidthSlider from "./FullWidthSlider";
import InfoSectionVideoModal from "./InfoSectionVideoModal";
import IconInfoGrid from "./IconInfoGrid";
import ImageBanner from "./ImageBanner";
import ImageInfo from "./ImageInfo";
import ImageMasonry from "./ImageMasonry";
import InfoSection from "./InfoSection";
import LargeImage from "./LargeImage";
import LargeImageVideoModal from "./LargeImageVideoModal";
import LinkedSlider from "./LinkedSlider";
import MasonryCards from "./MasonryCards";
import ResourceList from "./ResourceList";
import Showcase from "./Showcase";
import ShowcaseText from "./ShowcaseText";
import Testimonial from "./Testimonial";
import Ticker from "./Ticker";
import TileSlider from "./TileSlider";
import WideCards from "./WideCards";
import DiscoverTheArtists from "./DiscoverTheArtists";

// All of the Agility Page Module Components that are in use in this site need to be imported into this index file.
// Place Page Modules in allModules array below, passing in a name and the component.

const allModules = [
  { name: "ImageBanner", module: ImageBanner },
  { name: "InfoSection", module: InfoSection },
  { name: "InfoSectionVideoModal", module: InfoSectionVideoModal },
  { name: "LinkedSlider", module: LinkedSlider },
  { name: "ImageInfo", module: ImageInfo },
  { name: "MasonryCards", module: MasonryCards },
  { name: "ContactPanel", module: ContactPanel },
  { name: "TileSlider", module: TileSlider },
  { name: "FullWidthSlider", module: FullWidthSlider },
  { name: "Accordion", module: Accordion },
  { name: "Showcase", module: Showcase },
  { name: "WideCards", module: WideCards },
  { name: "Ticker", module: Ticker },
  { name: "Testimonial", module: Testimonial },
  { name: "ShowcaseText", module: ShowcaseText },
  { name: "ResourceList", module: ResourceList },
  { name: "ArticleList", module: ArticleList },
  { name: "ArtistPage", module: ArtistPage },
  { name: "AlternatingInfoTiles", module: AlternatingInfoTiles },
  { name: "LargeImage", module: LargeImage },
  { name: "LargeImageVideoModal", module: LargeImageVideoModal },
  { name: "ImageMasonry", module: ImageMasonry },
  { name: "IconInfoGrid", module: IconInfoGrid },
  { name: "DiscovertheArtists", module: DiscoverTheArtists }
];

export const getModule = (moduleName) => {
  if (!moduleName) return null;
  const obj = allModules.find(
    (m) => m.name.toLowerCase() === moduleName.toLowerCase()
  );
  if (!obj) return null;
  return obj.module;
};

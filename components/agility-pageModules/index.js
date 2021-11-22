import Accordion from "./Accordion";
import AdUnit from "./AdUnit";
import AlternatingInfoTiles from "./AlternatingInfoTiles";
import ArtistPage from "./ArtistPage";
import ArticleList from "./ArticleList";
import FullWidthSlider from "./FullWidthSlider";
import HomeBanner from "./HomeBanner";
import HomePartners from "./HomePartners";
import InfoVideoModal from "./InfoVideoModal";
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
import NewsList from "./NewsList";
import FeaturedArticleHero from "./FeaturedArticleHero";
import SplitGridText from "./SplitGridText";
import SplitGridTextImage from "./SplitGridTextImage";
import ImageInfoVideo from "./ImageInfoVideo";
import TestimonialSlider from "./TestimonialSlider";
import MasonryCardsVideo from "./MasonryCardsVideo";
import ThreeSixtySlider from "./ThreeSixtySlider";
import InfoSectionVideo from "./InfoSectionVideo";
import WideCardsVideo from "./WideCardsVideo";
import ShowcaseArticle from "./ShowcaseArticle";
import WideCardsArticles from "./WideCardsArticles";
import PartnerList from "./PartnerList";
import ConsultantList from "./ConsultantList";
import RecentNews from "./RecentNews";
import BasicCopy from "./BasicCopy";
import ContactForm from "./ContactForm";

// All of the Agility Page Module Components that are in use in this site need to be imported into this index file.
// Place Page Modules in allModules array below, passing in a name and the component.

const allModules = [
  { name: "HomePartners", module: HomePartners },
  { name: "HomeBanner", module: HomeBanner },
  { name: "AdUnit", module: AdUnit },
  { name: "ImageBanner", module: ImageBanner },
  { name: "InfoSection", module: InfoSection },
  { name: "InfoSectionVideo", module: InfoSectionVideo },
  { name: "InfoVideoModal", module: InfoVideoModal },
  { name: "LinkedSlider", module: LinkedSlider },
  { name: "ImageInfo", module: ImageInfo },
  { name: "ImageInfoVideo", module: ImageInfoVideo },
  { name: "MasonryCards", module: MasonryCards },
  { name: "MasonryCardsVideo", module: MasonryCardsVideo },
  { name: "TileSlider", module: TileSlider },
  { name: "FullWidthSlider", module: FullWidthSlider },
  { name: "Accordion", module: Accordion },
  { name: "Showcase", module: Showcase },
  { name: "ShowcaseArticle", module: ShowcaseArticle },
  { name: "WideCards", module: WideCards },
  { name: "WideCardsVideo", module: WideCardsVideo },
  { name: "WideCardsArticles", module: WideCardsArticles },
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
  { name: "DiscovertheArtists", module: DiscoverTheArtists },
  { name: "NewsList", module: NewsList },
  { name: "FeaturedArticleHero", module: FeaturedArticleHero },
  { name: "SplitGridText", module: SplitGridText },
  { name: "SplitGridTextImage", module: SplitGridTextImage },
  { name: "TestimonialSlider", module: TestimonialSlider },
  { name: "ThreeSixtySlider", module: ThreeSixtySlider },
  { name: "PartnerList", module: PartnerList },
  { name: "ConsultantList", module: ConsultantList },
  { name: "RecentNews", module: RecentNews },
  { name: "RichTextArea", module: BasicCopy },
  { name: "ContactForm", module: ContactForm }
];

export const getModule = (moduleName) => {
  if (!moduleName) return null;
  const obj = allModules.find(
    (m) => m.name.toLowerCase() === moduleName.toLowerCase()
  );
  if (!obj) return null;
  return obj.module;
};

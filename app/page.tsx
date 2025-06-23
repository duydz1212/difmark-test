// import AboutUS2 from "./components/AboutUS2";
import DynamicBackgroundCarousel from "./components/BG";
import PlatForms from "./components/FlatForms";
import Footer from "./components/Footer";
import LastNews from "./components/LastNews";
import DifmarkNavbar from "./components/NavBar";
import PopularGames from "./components/PopularGames";
// import PopularGames from "./components/PopularGames";
import AboutUS1 from "./components/AboutUS1";
import CardGrowUp2 from "./components/CardGrowUp2";
import UpComingGames from "./components/UpComingGames";
import CarouselTest from "./components/CarouselTest";
import PopularSellers from "./components/PopularSellers";
import CardGrowUp1 from "./components/CardGrowUp1";
import AboutUS2 from "./components/AboutUS2";
import SaleTime from "./components/SaleTime";

export default function HomePage() {
  return (
    <div className="bg-[#131b25] overflow-hidden bg-[#171f2a] justify-center items-center gap-y-16 flex flex-col ">
     
      <DifmarkNavbar />
      <div className="w-full  max-w-[720px] 990:max-w-[940px] 1200:max-w-[1140px] 1640:max-w-[1310px] 1920:max-w-[1590px]">
        <PopularGames />
      </div>
      
    </div>
  );
}
{/* <DynamicBackgroundCarousel /> */}
{/* <AboutUS1 />
      <div className="w-full responsive">
        <PopularGames />
      </div>

      <div className="w-full responsive">
        <CardGrowUp1 />
        <PopularSellers />
        <CardGrowUp2 />
      </div>
      <div className="w-full responsive">
        <PopularGames />
      </div>
      <AboutUS2 />
      <div className="w-full responsive">
        <PopularGames />
      </div>
      <SaleTime />
      <div className="w-full responsive">
        <PopularGames />
      </div>
      <PlatForms />
      <LastNews />

      <Footer /> */}
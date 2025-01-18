import Advantages from "../../sections/advantages/Advantages";
import CarouselSection from "../../sections/carouselSection/CarouselSection";
import Commuication from "../../sections/commuication/Commuication";
import HeroSection from "../../sections/heroSection/HeroSection";
import Prices from "../../sections/prices/Prices";
import PriceTitle from "../../sections/priceTitle/PriceTitle";
import Questions from "../../sections/questionsSection/Questions";
import WithUsSection from "../../sections/withUsSection/WithUsSection";

import { juniorPrice } from "../prices/juniorPrice/JuniorPrice";
import { middlePrice } from "../prices/middlePrice/MiddlePrice";
import { seniorPrice } from "../prices/seniorPrice/SeniorPrice";
const Home = () => {
  return (
    <>
      <HeroSection />
      <CarouselSection />
      <WithUsSection />
      <Advantages />
      <Questions />
      <PriceTitle />
      <Prices price={juniorPrice} />
      <Prices price={middlePrice} />
      <Prices price={seniorPrice} />
      <Commuication />
    </>
  );
};

export default Home;

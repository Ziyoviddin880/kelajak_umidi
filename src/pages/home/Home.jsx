import Advantages from "../../sections/advantages/Advantages";
import CarouselSection from "../../sections/carouselSection/CarouselSection";
import Commuication from "../../sections/commuication/Commuication";
import HeroSection from "../../sections/heroSection/HeroSection";
import Prices from "../../sections/prices/Prices";
import PriceTitle from "../../sections/priceTitle/PriceTitle";
import Questions from "../../sections/questionsSection/Questions";
import WithUsSection from "../../sections/withUsSection/WithUsSection";
import juniorPrice from "../prices/juniorPrice/JuniorPrice";
import middlePrice from "../prices/middlePrice/MiddlePrice";
import seniorPrice from "../prices/seniorPrice/SeniorPrice";

const Home = () => {
  const JuniorPrice = juniorPrice();
  const MiddlePrice = middlePrice();
  const SeniorPrice = seniorPrice();
  return (
    <>
      <HeroSection />
      <CarouselSection />
      <WithUsSection />
      <Advantages />
      <Questions />
      <PriceTitle />
      <Prices price={JuniorPrice} />
      <Prices price={MiddlePrice} />
      <Prices price={SeniorPrice} />
      <Commuication />
    </>
  );
};

export default Home;

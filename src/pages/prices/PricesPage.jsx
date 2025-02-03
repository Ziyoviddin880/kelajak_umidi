import Commuication from "../../sections/commuication/Commuication";
import PriceTitle from "../../sections/priceTitle/PriceTitle";
import Prices from "../../sections/prices/Prices";

import juniorPrice from "../prices/juniorPrice/JuniorPrice";
import middlePrice from "../prices/middlePrice/MiddlePrice";
import seniorPrice from "../prices/seniorPrice/SeniorPrice";

const PricesPage = () => {
  const JuniorPrice = juniorPrice();
  const MiddlePrice = middlePrice();
  const SeniorPrice = seniorPrice();
  return (
    <>
      <PriceTitle />
      <Prices price={JuniorPrice} />
      <Prices price={MiddlePrice} />
      <Prices price={SeniorPrice} />
      <Commuication />
    </>
  );
};

export default PricesPage;

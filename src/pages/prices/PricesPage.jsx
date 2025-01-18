import Commuication from "../../sections/commuication/Commuication";
import PriceTitle from "../../sections/priceTitle/PriceTitle";
import Prices from "../../sections/prices/Prices";

import { juniorPrice } from "./juniorPrice/JuniorPrice";
import { middlePrice } from "./middlePrice/MiddlePrice";
import { seniorPrice } from "./seniorPrice/SeniorPrice";

const PricesPage = () => {
  return (
    <>
      <PriceTitle />
      <Prices price={juniorPrice} />
      <Prices price={middlePrice} />
      <Prices price={seniorPrice} />
      <Commuication />
    </>
  );
};

export default PricesPage;

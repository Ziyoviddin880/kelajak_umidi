import { FaCheck } from "react-icons/fa";

const Prices = ({ price }) => {
  return (
    <section className="bg-customBlack dark:bg-customWhite py-8">
      <div className="container px-3 lg:px-0">
        <div className="flex flex-wrap flex-w border-2 group hover:border-customDarkGreen n transition-all duration-200">
          <div className="border-b-2 lg:border-b-0 lg:border-r-2 md:w-full lg:w-[50%] 2xl:w-[30%] p-10 group-hover:border-r-customDarkGreen group-hover:border-b-customDarkGreen transition-all duration-200">
            <p className="text-[25px] text-center lg:text-left  font-bold text-customDarkGreen transition-all duration-200">
              {price.title}
            </p>
            <p className="text-[16px] text-center lg:text-left text-customWhite dark:text-customBlack opacity-80">
              {price.text}
            </p>
          </div>
          <div className="flex flex-wrap justify-around items-center w-full lg:w-[50%] 2xl:w-[70%] py-10">
            <div className="text-customDarkGreen px-2">
              <div className="flex items-center gap-3">
                <FaCheck className="text-[20px]" />
                <p className="text-[18px]">{price.name}</p>
              </div>
              <div className="flex items-center gap-3">
                <FaCheck className="text-[20px]" />
                <p className="text-[18px]">{price.security}</p>
              </div>
              <div className="flex items-center gap-3">
                <FaCheck className="text-[20px]" />
                <p className="text-[18px]">{price.day}</p>
              </div>
              <div className="flex items-center gap-3">
                <FaCheck className="text-[20px]" />
                <p className="text-[18px]">{price.pages}</p>
              </div>
              {price.language && (
                <div className="flex items-center gap-3">
                  <FaCheck className="text-[20px]" />
                  <p className="text-[18px]">{price.language}</p>
                </div>
              )}
              {price.dizayn && (
                <div className="flex items-center gap-3">
                  <FaCheck className="text-[20px]" />
                  <p className="text-[18px]">{price.dizayn}</p>
                </div>
              )}
            </div>
            <div>
              <p className="text-[30px] text-customDarkGreen font-bold">
                {price.price}
              </p>
            </div>
            <div className="mt-5 sm:mt-0">
              <button className="bg-customDarkGreen  hover:bg-customLightGreen transition-all duration-200 text-customWhite py-3 px-5 rounded">
                Buyurtma berish
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prices;

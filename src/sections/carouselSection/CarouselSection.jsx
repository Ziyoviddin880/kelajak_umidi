import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CarouselSection = () => {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className=" bg-customBlack dark:bg-customWhite py-16">
      <div className="container">
        <h4
          data-aos="fade-up"
          className="text-[40px] text-customWhite dark:text-customBlack  font-bold text-center"
        >
          Sizga taklif etadigan
          <span className="text-customDarkGreen"> xizmatlarimiz</span>
        </h4>
      </div>
      <div className="slider-container text-center mt-14 overflow-hidden">
        <Slider {...settings}>
          <div>
            <h3 className="text-customDarkGreen text-[20px] md:text-[20px] lg:text-[30px]">
              Web sayt yaratish
            </h3>
          </div>
          <div>
            <h3 className="text-customDarkGreen text-[20px] md:text-[20px] lg:text-[30px]">
              Mobil ilovalar yaratish
            </h3>
          </div>
          <div>
            <h3 className="text-customDarkGreen text-[20px]  md:text-[20px] lg:text-[30px]">
              Avtomatlashtirish tizimlari
            </h3>
          </div>
          <div>
            <h3 className="text-customDarkGreen text-[20px] md:text-[20px] lg:text-[30px]">
              Raqamli yechimlar
            </h3>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default CarouselSection;

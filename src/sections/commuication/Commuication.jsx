import Button from "../../components/button/Button";

const Commuication = () => {
  return (
    <section className="py-12 px-4 lg:px-0 bg-customBlack dark:bg-customWhite">
      <div className="container">
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="flex flex-wrap gap-[4%]"
        >
          <div className="w-[100%] lg:w-[58%]">
            <p className="text-customWhite dark:text-customBlack text-[24px] lg:text-[40px] font-bold">
              Biznesingizni rivojlantirish, daromadingizni oshirish uchun
              hoziroq web saytga buyurtma bering va{" "}
              <span className="text-customDarkGreen">20% chegirmaga</span> ega
              bo'ling!
            </p>
            <p className="text-[20px] lg:text-[30px] text-customDarkGreen mt-5">
              Eng muhimi bizda mijozlarimiz roziligi!
            </p>
          </div>
          <div className="w-[100%] lg:w-[38%]">
            <p className="text-customWhite mt-5 dark:text-customBlack text-[20px]  lg:text-[30px] font-bold mb-8 ">
              Ma'lumotingizni qoldiring
            </p>
            <form>
              <input
                className="w-full mb-5 py-3 px-4 bg-gray-200 dark:bg-white dark:border outline-none rounded-md text-[18px]"
                type="text"
                placeholder="Ismingizni kiriting"
              />
              <div>
                <input
                  className="w-full mb-5 py-3 px-4 bg-gray-200 dark:bg-white dark:border outline-none rounded-md text-[18px]"
                  type="text"
                  placeholder="Raqamingizni kiriting"
                />
              </div>
              <textarea
                rows={5}
                className="w-full mb-5 py-3 px-4 bg-gray-200 dark:bg-white dark:border  rounded-md outline-none resize-none"
                placeholder="Xabaringizni qoldiring"
              ></textarea>

              <Button>Yuborish</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Commuication;

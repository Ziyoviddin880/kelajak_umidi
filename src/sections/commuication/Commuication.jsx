import { useTranslation } from "react-i18next";
import Button from "../../components/button/Button";
import { useEffect, useRef } from "react";

const Commuication = () => {
  const { t } = useTranslation();
  const name = useRef(null);
  const telNumber = useRef(null);
  const commit = useRef(null);

  const submit = (e) => {
    e.preventDefault();
    const token = "7908967230:AAFwJi_zztBHH4wHQ3s25W5eBEOLSdHGKdk";
    // const chat_id=
  };

  return (
    <section className="py-12 px-4 lg:px-0 bg-customBlack dark:bg-customWhite">
      <div className="container">
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="flex flex-wrap gap-[4%]"
        >
          <div id="contact" className="w-[100%] lg:w-[58%]">
            <p className="text-customWhite dark:text-customBlack text-[24px] lg:text-[40px] font-bold">
              {t("communication.title.first")}{" "}
              <span className="text-customDarkGreen">
                {t("communication.title.second")}
              </span>{" "}
              {t("communication.title.third")}
            </p>
            <p className="text-[20px] lg:text-[30px] text-customDarkGreen mt-5">
              {t("communication.notification")}
            </p>
          </div>
          <div className="w-[100%] lg:w-[38%]">
            <p className="text-customWhite mt-5 dark:text-customBlack text-[20px]  lg:text-[30px] font-bold mb-8 ">
              {t("communication.form.title")}
            </p>
            <form onSubmit={submit}>
              <input
                required
                className="w-full mb-5 py-3 px-4 bg-gray-200 dark:bg-white dark:border outline-none rounded-md text-[18px]"
                type="text"
                placeholder={t("communication.form.placeholders.firstName")}
              />
              <div>
                <input
                  required
                  className="w-full mb-5 py-3 px-4 bg-gray-200 dark:bg-white dark:border outline-none rounded-md text-[18px]"
                  type="text"
                  placeholder={t("communication.form.placeholders.telNumber")}
                />
              </div>
              <textarea
                required
                rows={5}
                className="w-full mb-5 py-3 px-4 bg-gray-200 dark:bg-white dark:border  rounded-md outline-none resize-none"
                placeholder={t("communication.form.placeholders.sms")}
              ></textarea>
              <Button>{t("communication.form.button")}</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Commuication;

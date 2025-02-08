import { useTranslation } from "react-i18next";
import Button from "../../components/button/Button";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { toast } from "material-react-toastify";

const Commuication = () => {
  const { t } = useTranslation();
  const name = useRef("");
  const telNumber = useRef("");
  const commit = useRef("");

  const [loading, setLoading] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    const token = "7908967230:AAFwJi_zztBHH4wHQ3s25W5eBEOLSdHGKdk";
    const chat_id = -1002167443768;
    const url = `https://api.telegram.org/bot${token}/sendMessage`;
    const messageContent = `Ismi: ${name.current.value} \nTelefon raqami: ${telNumber.current.value} \nXabari: ${commit.current.value}`;
    setLoading(true);

    axios({
      url: url,
      method: "POST",
      data: {
        chat_id,
        text: messageContent,
      },
    })
      .then((response) => {
        if (response.status === 200) {
          toast.success("Muvaffaqiyatli yuborildi");
        }
      })
      .catch((error) => {
        toast.error("Xabar yuborilmadi");
      })
      .finally(() => {
        name.current.value = "";
        telNumber.current.value = "";
        commit.current.value = "";
        setLoading(false);
      });
  };

  return (
    <section
      id="contact"
      className="py-12 px-4 lg:px-0 bg-customBlack dark:bg-customWhite"
    >
      <div className="container">
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="flex flex-wrap gap-[4%]"
        >
          <div className="w-[100%] lg:w-[58%]">
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
                ref={name}
                className="w-full mb-5 py-3 px-4 bg-gray-200 dark:bg-white dark:border outline-none rounded-md text-[18px]"
                type="text"
                placeholder={t("communication.form.placeholders.firstName")}
              />
              <div>
                <input
                  required
                  ref={telNumber}
                  className="w-full mb-5 py-3 px-4 bg-gray-200 dark:bg-white dark:border outline-none rounded-md text-[18px]"
                  type="text"
                  placeholder={t("communication.form.placeholders.telNumber")}
                />
              </div>
              <textarea
                required
                ref={commit}
                rows={5}
                className="w-full mb-5 py-3 px-4 bg-gray-200 dark:bg-white dark:border  rounded-md outline-none resize-none"
                placeholder={t("communication.form.placeholders.sms")}
              ></textarea>
              <Button aria-label="Sending">
                {t("communication.form.button")}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Commuication;

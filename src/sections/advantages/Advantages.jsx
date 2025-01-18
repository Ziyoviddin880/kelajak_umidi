import { FaComputer } from "react-icons/fa6";
import { GiGrowth } from "react-icons/gi";
import { IoSpeedometer } from "react-icons/io5";
import { MdPriceChange } from "react-icons/md";
import { MdOutlineSecurity } from "react-icons/md";
import { FaRecycle } from "react-icons/fa";
import { RiAdminFill } from "react-icons/ri";
import { MdDomain } from "react-icons/md";
import { BiSupport } from "react-icons/bi";

const Advantages = () => {
  const advantages = [
    {
      id: "01",
      icon: <FaComputer className="text-customDarkGreen text-[50px]" />,
      title: "Moslashuvchan",
      text: "Yaratgan web saytlarimiz moslashuvchan, ya'ni komputer, planshet va mobil versiyaga ega bo'ladi.",
    },
    {
      id: "02",
      icon: <GiGrowth className="text-customDarkGreen text-[50px]" />,
      title: "Natijaga yo‘naltirilganlik",
      text: "Mijozlarimiz uchun foydalanuvchilarni jalb qiladigan, daromadni oshiradigan va biznesni rivojlantiradigan samarali web-saytlar yaratamiz",
    },
    {
      id: "03",
      icon: <IoSpeedometer className="text-customDarkGreen text-[50px]" />,
      title: "Tezkorlik",
      text: "Loyihalarni belgilangan muddatlarda va sifatli yakunlaymiz. Kutilmagan qiyinchiliklarga tezkor javob berish va yechim topish qobiliyatimiz bor.",
    },
    {
      id: "04",
      icon: <MdPriceChange className="text-customDarkGreen text-[50px]" />,
      title: "Narx va sifatning uyg'unligi",
      text: "Qulay va raqobatbardosh narxlarda yuqori sifatli xizmatlar ko'rsatamiz. Har bir byudjetga mos variantlarimiz mavjud.",
    },
    {
      id: "05",
      icon: <MdOutlineSecurity className="text-customDarkGreen text-[50px]" />,
      title: "Xavfsizlik",
      text: "Bizning web saytlar zamonaviy antivirus va fayrvollar bilan ximoyalangan bo'lib, spambot va xujumlarga bardosh bera oladi.",
    },
    {
      id: "06",
      icon: <FaRecycle className="text-customDarkGreen text-[50px]" />,
      title: "Uzoq muddatli qo‘llab-quvvatlash",
      text: "Qulay va raqobatbardosh narxlarda yuqori sifatli xizmatlar ko'rsatamiz. Har bir byudjetga mos variantlarimiz mavjud.",
    },
    {
      id: "07",
      icon: <RiAdminFill className="text-customDarkGreen text-[50px]" />,
      title: "Admin Panel",
      text: "Web sayt qulay va sodda boshqaruv tizimiga ega bo'ladi, bu esa sizga web saytni mustaqil boshqarishingizga imkon beradi",
    },
    {
      id: "08",
      icon: <MdDomain className="text-customDarkGreen text-[50px]" />,
      title: "Domen va Xosting",
      text: "Biz bilan siz domen va xosting muammolariga duch kelmaysiz. Bizda domen 1 yilga (.uz) va xosting 3 oyga bepul (keyin 10$/oyiga) ",
    },
    {
      id: "09",
      icon: <BiSupport className="text-customDarkGreen text-[50px]" />,
      title: "Monitoring 24/7",
      text: "Web saytingiz usluksiz ishlab turishi uchun, 24 soat davomida onlayn avtomatik tarzda kuzatib turiladi",
    },
  ];

  return (
    <section className="bg-customBlack dark:bg-customWhite py-16 px-4 md:px-0">
      <div className="container">
        <h4
          data-aos="fade-up"
          className="text-[30px] md:text-[40px] text-center text-customWhite dark:text-customBlack md:mx-14 font-bold"
        >
          Nega aynan biz? Nega ko'pchilik insonlar bizning xizmatimizni
          tanlashadi?
        </h4>
        <h4
          data-aos="fade-up"
          className="text-[30px] md:text-[40px] text-center font-bold text-customDarkGreen"
        >
          Afzalliklarimiz
        </h4>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6 lg:gap-8 auto-rows-fr mt-10">
          {advantages.map((advantage) => (
            <div
              data-aos="fade-up"
              key={advantage.id}
              className="p-4 sm:p-10 rounded-[30px] bg-gradient-to-r from-blue-900 to-zinc-900 dark:bg-none bg-opacity-20 flex flex-col sm:flex-row  gap-x-6 dark:border-2"
            >
              <div className="flex  sm:flex-col justify-between items-center">
                {advantage.icon}
                <code className="text-customWhite text-[25px] dark:text-customBlack font-bold">
                  {advantage.id}
                </code>
              </div>
              <div className="flex flex-col justify-between">
                <p className="text-customDarkGreen text-[20px] md:text-[25px] font-bold">
                  {advantage.title}
                </p>
                <p className="text-customWhite dark:text-customBlack    ">
                  {advantage.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;

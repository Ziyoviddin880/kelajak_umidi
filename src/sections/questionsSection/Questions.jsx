import Dropdown from "../../components/dropdown/Dropdown";
import { useState } from "react";

const Questions = () => {
  const [isOpen, setIsOpen] = useState(null);

  const quesAnsw = [
    {
      id: 1,
      title: "Web sayt yaratish uchun qancha vaqt ketadi?",
      text: "Bu sizning talablaringizga bog‘liq. Oddiy saytni yaratish odatda 5-10 ish kuni ichida yakunlanadi. Katta yoki murakkab loyihalar esa ko‘proq vaqt talab qilishi mumkin. Loyihangizni muhokama qilganimizdan so‘ng aniq vaqtni aytib bera olamiz.",
    },
    {
      id: 2,
      title: "Narxlar nega arzon?",
      text: "Haqiqatdan ham sifatga nisbatan raxlar arzon. Chunki biz sifatni maqbul narxda taqdim etish uchun jarayonni optimallashtirganmiz va ortiqcha xarajatlarni kamaytirdik",
    },
    {
      id: 3,
      title: "Web saytni boshqarishni bilmayman. Bu muammo bo'ladimi?",
      text: "Umuman yo‘q! Biz barcha mijozlarimizga sayt boshqaruv tizimi bo‘yicha trening o‘tkazamiz va kerak bo‘lsa, saytni boshqarishda doim yordam beramiz.",
    },
    {
      id: 4,
      title: "Saytni to'liq o'zim boshqara olamanmi?",
      text: "Ha, biz sizga qulay boshqaruv tizimi (CMS) bilan saytni yetkazib beramiz, bu orqali saytingizni oson boshqarishingiz mumkin. Bundan tashqari, biz qo'llab-quvvatlash xizmatini taklif qilamiz.",
    },
    {
      id: 5,
      title: "Saytni mobil telefonlarda ishlashiga ham e'tibor berasizmi?",
      text: "Ha, barcha saytlarimiz mobil telefonlar, planshetlar va boshqa qurilmalarda mukammal ishlashi uchun responsiv dizaynda yaratiladi.",
    },

    {
      id: 6,
      title: "Web sayt uchun hosting va domenni kim taqdim etadi?",
      text: "Biz sizga hosting va domenni ro‘yxatdan o‘tkazishda yordam beramiz yoki o‘z hosting xizmatlarimizni taklif qilamiz. Shu bilan birga, mavjud domeningizni saytga ulashda ham yordam bera olamiz.",
    },
    {
      id: 7,
      title:
        "Saytimni yangilash yoki o'zgartirish kiritish kerak bo'lsa, nima qilaman?",
      text: "Sizga qulay boshqaruv tizimi orqali o‘zingiz mustaqil ravishda o‘zgartirishlar kiritishingiz mumkin. Agar professional yordam kerak bo‘lsa, bizning texnik jamoamiz xizmat ko‘rsatadi.",
    },
    {
      id: 8,
      title: "Qaysi turdagi web saytlarni yaratasiz?",
      text: " Biz turli xil saytlarni yaratamiz, jumladan: Vizitka saytlar, Onlayn do‘konlar, Bloglar,Korporativ saytlar, Portfoliolar va boshqa maxsus ehtiyojlarga mos saytlar.",
    },
    {
      id: 9,
      title: "To'lov qanday amalga oshiriladi?",
      text: "To‘lovni bosqichma-bosqich amalga oshirishingiz mumkin. Loyihaning boshlanishida 50% oldindan to‘lov talab qilinadi, qolgan qismi esa loyiha yakunlangandan so‘ng to‘lanadi.",
    },
    {
      id: 10,
      title: "Sayt xavfsizligini ta'minlaysizmi?",
      text: "Ha, biz SSL sertifikatlarini o‘rnatamiz va sayt xavfsizligini ta’minlash uchun eng yaxshi amaliyotlardan foydalanamiz",
    },
    {
      id: 11,
      title: "Saytimni qidiruv tizimlariga optimallashtirasizmi (SEO)?",
      text: "Ha, biz saytni qidiruv tizimlari uchun asosiy optimallashtirishni (SEO) amalga oshiramiz. Shu bilan birga, qo‘shimcha SEO xizmatlarini ham taklif qilamiz.",
    },
    {
      id: 12,
      title: "Web saytni tilga moslashtirish (multi-language) mumkinmi?",
      text: "Albatta, biz saytlarni bir nechta tilga moslashtirishni taklif qilamiz. Har bir tilga mos sahifalarni qulay tarzda boshqarishingiz mumkin.",
    },
    {
      id: 13,
      title: "Saytimni yaratishdan oldin maslahat olishim mumkinmi?",
      text: "Albatta! Biz sizning barcha savollaringizga javob beramiz va loyihangiz uchun eng yaxshi yechimni topishga yordam beramiz. Konsultatsiya bepul!",
    },
    {
      id: 14,
      title: "Saytni sotib olgandan keyin texnik yordam taqdim etasizmi?",
      text: "Ha, biz saytni yaratganimizdan so‘ng texnik qo‘llab-quvvatlash xizmatini taklif qilamiz. Bu xizmat bir yilgacha bepul bo‘lishi mumkin, keyin esa shartnomaga binoan davom ettiriladi.",
    },
    {
      id: 15,
      title: "Sayt dizaynini kim tanlaydi?",
      text: "Dizayn sizning brendingiz va talablaringizga moslashtiriladi. Biz sizga bir nechta variantlarni taqdim etamiz va tanlovingiz asosida saytni ishlab chiqamiz.",
    },
  ];

  return (
    <section className="bg-customBlack dark:bg-customWhite py-14 px-4 md:px-0">
      <div className="container">
        <h5
          data-aos="fade-up"
          className="text-customWhite dark:text-customBlack text-[30px] md:text-[40px] text-center mb-10 font-bold"
        >
          Eng ko'p beriladigan
          <span className="text-customDarkGreen"> savollar</span>
        </h5>

        <div className="grid grid-cols-1 lg:grid-cols-2  gap-4">
          {quesAnsw.map((item) => (
            <Dropdown
              key={item.id}
              setIsOpen={setIsOpen}
              item={item}
              isOpen={isOpen}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Questions;

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useTranslation } from "react-i18next";

export default function Testimonials() {
  const { t } = useTranslation();

  const items = [
    { name: "Ram Bahadur Shrestha", text: t("feedback.msg1") },
    { name: "Sita Gurung", text: t("feedback.msg2") },
    { name: "Rakesh Adhikari", text: t("feedback.msg3") }
  ];

  return (
    <section className="py-16 bg-brand.light">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-bold text-brand text-center mb-8">
          {t("feedback.title")}
        </h2>
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 2500 }}
          pagination={{ clickable: true }}
          spaceBetween={24}
          slidesPerView={1}
          className="max-w-3xl mx-auto"
        >
          {items.map((it, i) => (
            <SwiperSlide key={i}>
              <div className="p-8 bg-white shadow-soft rounded-2xl text-center">
                <p className="italic text-slate-700">“{it.text}”</p>
                <p className="mt-4 font-semibold text-slate-900">- {it.name}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

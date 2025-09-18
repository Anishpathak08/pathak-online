import ServicesGrid from "../components/ServicesGrid.jsx";
import { useTranslation } from "react-i18next";

export default function Services() {
  const { t } = useTranslation();

  return (
    <div id="services-section" className="pt-6">
      <ServicesGrid />
      <section className="py-12">
        <div className="container text-center">
          <a
            href="https://wa.me/9779863446644"
            target="_blank"
            className="px-6 py-3 rounded-xl bg-brand text-white font-semibold hover:bg-brand.dark"
          >
            {t("services.see_all")}
          </a>
        </div>
      </section>
    </div>
  );
}

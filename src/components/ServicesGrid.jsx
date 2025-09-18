import ServiceCard from "./ServiceCard.jsx";
import {
  FaPlane,
  FaPassport,
  FaIdCard,
  FaCar,
  FaBuildingColumns,
  FaStamp,
} from "react-icons/fa6";
import { useTranslation } from "react-i18next";

export default function ServicesGrid() {
  const { t } = useTranslation();

  const services = [
    { icon: <FaStamp />, title: t("services.labor"), text: t("services.labor_desc") },
    { icon: <FaPlane />, title: t("services.ticket"), text: t("services.ticket_desc") },
    { icon: <FaPassport />, title: t("services.passport"), text: t("services.passport_desc") },
    { icon: <FaIdCard />, title: t("services.id"), text: t("services.id_desc") },
    { icon: <FaCar />, title: t("services.license"), text: t("services.license_desc") },
    { icon: <FaBuildingColumns />, title: t("services.psc"), text: t("services.psc_desc") },
  ];

  return (
    <section className="py-16 bg-slate-50">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-bold text-brand mb-8">
          {t("services.title")}
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <ServiceCard key={i} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}

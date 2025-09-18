import ContactForm from "../components/ContactForm.jsx";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();

  return (
    <section id="contact-section" className="py-16">
      <div className="container grid md:grid-cols-2 gap-10">
        <div>
          <h1 className="text-3xl font-bold text-brand mb-4">
            {t("contact.title")}
          </h1>
          <ul className="space-y-2 text-slate-700">
            <li>
              <strong>{t("contact.address")}:</strong> Kathmandu, Nepal
            </li>
            <li>
              <strong>{t("contact.phone")}:</strong>{" "}
              <a
                className="text-brand hover:underline"
                href="tel:+9779863446644"
              >
                +977 9863446644
              </a>
            </li>
            <li>
              <strong>{t("contact.email")}:</strong>{" "}
              <a
                className="text-brand hover:underline"
                href="mailto:pathakonline24@gmail.com"
              >
                pathakonline24@gmail.com
              </a>
            </li>
            <li>
              <strong>{t("contact.facebook")}:</strong>{" "}
              <a
                className="text-brand hover:underline"
                href="https://facebook.com/PathakOnline"
                target="_blank"
              >
                facebook.com/PathakOnline
              </a>
            </li>
            <li>
              <strong>{t("contact.whatsapp")}:</strong>{" "}
              <a
                className="text-brand hover:underline"
                href="https://wa.me/9779863446644"
                target="_blank"
              >
                +977 9863446644
              </a>
            </li>
          </ul>
          <div className="mt-6">
            <iframe
              title="Map"
              src="https://maps.google.com/maps?q=Kathmandu&t=&z=11&ie=UTF8&iwloc=&output=embed"
              className="w-full h-64 rounded-xl border"
            ></iframe>
          </div>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">
            {t("contact.message")}
          </h2>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

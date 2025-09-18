import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="container py-10 grid md:grid-cols-3 gap-8">
        <div>
          <h4 className="font-semibold text-white mb-3">PathakOnline</h4>
          <p className="text-sm opacity-80">
            Work permit, passport, ticket booking – all services in one place.
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-white mb-3">
            {t("contact.title")}
          </h4>
          <ul className="space-y-1 text-sm">
            <li>Kathmandu, Nepal</li>
            <li>
              <a
                className="hover:underline"
                href="tel:+9779863446644"
              >
                +977 9863446644
              </a>
            </li>
            <li>
              <a
                className="hover:underline"
                href="mailto:pathakonline24@gmail.com"
              >
                pathakonline24@gmail.com
              </a>
            </li>
          </ul>
        </div>
        <div className="text-sm">
          <h4 className="font-semibold text-white mb-3">{t("footer.follow")}</h4>
          <a
            className="hover:underline"
            href="https://facebook.com/PathakOnline"
            target="_blank"
          >
            Facebook
          </a>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container py-4 text-xs opacity-70">
          © 2025 PathakOnline. {t("footer.rights")}
        </div>
      </div>
    </footer>
  );
}

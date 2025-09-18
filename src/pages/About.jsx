import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();
  const goals = t("about.goals_points", { returnObjects: true });

  return (
    <section id="about-section" className="py-16 bg-slate-100">
      <div className="container max-w-4xl">
        <h1 className="text-3xl font-bold text-brand mb-6">
          {t("about.title")}
        </h1>

        <h2 className="text-xl font-semibold mt-8 mb-2">
          {t("about.goals")}
        </h2>
        <ul className="list-disc pl-6 space-y-1">
          {goals.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-2">
          {t("about.vision")}
        </h2>
        <p>{t("about.vision_text")}</p>

        <h2 className="text-xl font-semibold mt-8 mb-2">
          {t("about.mission")}
        </h2>
        <p>{t("about.mission_text")}</p>
      </div>
    </section>
  );
}

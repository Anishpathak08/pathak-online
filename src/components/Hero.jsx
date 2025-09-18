import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section
      id="hero-section"
      className="relative bg-gradient-to-b from-brand-dark to-black text-white overflow-hidden"
    >
      {/* Nepal Map Overlay */}
<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
  <motion.img
    src="/images/nepal-outline.png"
    alt="Nepal Map"
    className="w-[85%] max-w-5xl opacity-70"
    animate={{
      opacity: [0.3, 0.7, 0.3],
      scale: [1, 1.03, 1],
    }}
    transition={{
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />
</div>


      {/* Hero Content */}
      <div className="container relative z-10 py-28 md:py-36 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-bold max-w-3xl mx-auto"
        >
          {t("hero.title")}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-4 text-lg md:text-xl opacity-90 max-w-2xl mx-auto"
        >
          {t("hero.subtitle")}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.8 }}
          className="mt-8 flex justify-center"
        >
          
        <Link
  to="/services"
  className="px-6 py-3 rounded-xl bg-cyan-400 text-black font-semibold shadow-lg hover:bg-cyan-300 transition"
>
  {t("hero.see")}
</Link>



        </motion.div>
      </div>
    </section>
  );
}

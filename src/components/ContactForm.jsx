import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

export default function ContactForm() {
  const { register, handleSubmit, reset, formState } = useForm();
  const { errors, isSubmitting } = formState;
  const { t } = useTranslation();

  const onSubmit = async (data) => {
    alert("Message sent!\\n\\n" + JSON.stringify(data, null, 2));
    reset();
  };

  const cls =
    "w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-brand/50";

  return (
    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
      <input
        className={cls}
        placeholder={t("contact.name")}
        {...register("name", { required: true })}
      />
      <input
        type="email"
        className={cls}
        placeholder={t("contact.email")}
        {...register("email", { required: true })}
      />
      <input
        className={cls}
        placeholder={t("contact.subject")}
        {...register("subject")}
      />
      <textarea
        rows="5"
        className={cls}
        placeholder={t("contact.message")}
        {...register("message", { required: true })}
      ></textarea>
      <button
        disabled={isSubmitting}
        className="px-5 py-3 rounded-xl bg-brand text-white font-semibold hover:bg-brand.dark disabled:opacity-60"
      >
        {t("contact.send")}
      </button>
    </form>
  );
}

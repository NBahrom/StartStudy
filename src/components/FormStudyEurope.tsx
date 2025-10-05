import styles from "./FormStudyEurope.module.css";
import { useRef } from "react";
import { sendTelegramMessage } from "../util/sendTelegramMessage";

export default function FormStudyEurope() {
  const formRef = useRef<HTMLFormElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);
  const successMsg = useRef<HTMLDivElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    const name =
      formRef.current.querySelector<HTMLInputElement>("#name")?.value || "";
    const phone =
      formRef.current.querySelector<HTMLInputElement>("#phone")?.value || "";
    const message =
      formRef.current.querySelector<HTMLTextAreaElement>("#message")?.value ||
      "";

    if (!name.trim() || !phone.trim() || !message.trim()) {
      btnRef.current?.classList.add(styles.formError);
      btnRef.current?.addEventListener(
        "animationend",
        () => btnRef.current?.classList.remove(styles.formError),
        { once: true }
      );
      return;
    }

    const result = await sendTelegramMessage({
      name,
      phone,
      message,
      formTitle: "Форма Study Europe",
    });

    if (result.success) {
      successMsg.current?.classList.remove(styles.hidden);
      formRef.current.reset();
    } else {
      console.error(result.error);
    }
  };

  return (
    <section className={styles.section8}>
      <div className={styles.section8Anchor} id="section-8"></div>
      <div className="container-wide">
        <div className={styles.section8Inner}>
          <h2 className={`section-title ${styles.section8Title}`}>
            Хотите учиться в Европе?
          </h2>

          <div className={`${styles.section8Text} section-text-2`}>
            Пожалуйста укажите вашу контактную информацию в форме ниже. Наш
            менеджер свяжется с вами в ближайшее время и ответит на все ваши
            вопросы.
          </div>

          <form
            ref={formRef}
            className={styles.mainForm}
            onSubmit={handleSubmit}
            id="main-form"
          >
            <input
              className={`${styles.mainFormField} ${styles.mainFormInput}`}
              id="name"
              type="text"
              placeholder="Имя"
            />
            {/* <input
                            className={`${styles.mainFormField} ${styles.mainFormInput}`}
                            id="surname"
                            type="text"
                            placeholder="Фамилия"
                        /> */}
            <input
              className={`${styles.mainFormField} ${styles.mainFormInput}`}
              id="phone"
              type="tel"
              placeholder="Телефон"
              maxLength={17}
            />
            <textarea
              className={`${styles.mainFormField} ${styles.mainFormTextarea}`}
              id="message"
              placeholder="Сообщение"
            ></textarea>

            <div
              ref={successMsg}
              className={`${styles.mainFormSuccess} ${styles.hidden}`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="55"
                height="55"
                fill="none"
              >
                <path
                  fill="#CBCBCB"
                  d="M53.865 8.265 37.081 49.248a4.87 4.87 0 0 1-9.19-.532l-4.122-14.773a2.823 2.823 0 0 0-.158-.434l5.74-5.72a1.98 1.98 0 0 0-2.801-2.8l-5.72 5.74a2.808 2.808 0 0 0-.434-.158L5.604 26.449a4.855 4.855 0 0 1-.532-9.171L46.036.454a5.99 5.99 0 0 1 7.83 7.81ZM3.34 44.907l7.814-7.814a1.972 1.972 0 1 0-2.789-2.79L.551 42.119a1.973 1.973 0 0 0 2.788 2.789Zm8.88 8.879 7.813-7.814a1.972 1.972 0 0 0-2.789-2.79L9.43 50.998a1.972 1.972 0 0 0 2.788 2.789Z"
                />
              </svg>
              <div className="section-text-2">
                Ваша заявка <br /> успешно отправлена!
              </div>
            </div>

            <div className={styles.mainFormFooter}>
              <div className={`${styles.mainFormPolicy} section-text-2`}>
                <span>
                  Нажимая кнопку Отправить, вы соглашаетесь с <br />{" "}
                </span>
                <a
                  target="_blank"
                  href="https://startstudy.cz/privacy-policy.pdf"
                >
                  Политикой в отношении обработки персональных данных
                </a>
              </div>
              <div className="button-wrapper">
                <button
                  ref={btnRef}
                  type="submit"
                  className={`btn arrow-right ${styles.mainFormButton}`}
                  id="submit-btn"
                >
                  <span>Отправить</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="6"
                    height="10"
                    fill="none"
                  >
                    <path
                      stroke="#02191D"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="m1 9 4-4-4-4"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

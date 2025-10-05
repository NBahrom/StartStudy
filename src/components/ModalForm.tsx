import styles from './ModalForm.module.css';
import { createPortal } from 'react-dom';
import { useRef, useState } from 'react';
import { sendTelegramMessage } from "../util/sendTelegramMessage"

export default function ModalForm({ onClose }: { onClose: () => void }) {
  const [formError, setFormError] = useState(false);
  const [success, setSuccess] = useState(false);
  const btnRef = useRef<HTMLButtonElement>(null);
  const successRef = useRef<HTMLDivElement>(null);

  function validateForm(formData : FormData ) {
    const nameRegex = /^[a-zA-Zа-яА-ЯёЁ\s]+$/;

    const name = formData.get("name") as string;
    const phone = formData.get("phone") as string;
    const message = formData.get("message") as string;
    return nameRegex.test(name) && phone && message;
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.target as HTMLFormElement
    const formData = new FormData(form)

    if (!validateForm(formData)) {
      setFormError(true)
      setTimeout(() => setFormError(false), 500)
      return
    }

    const result = await sendTelegramMessage({
      name: formData.get("name") as string,
      phone: formData.get("phone") as string,
      message: formData.get("message") as string,
      formTitle: "Главная форма",
    })

    if (result.success) {
      setSuccess(true)
    } else {
      console.error(result.error)
    }
  }

  return createPortal(
    <div data-modal-form className={styles.modalForm} onClick={onClose}>
      <div className="container">
        <div onClick={e => e.stopPropagation()} className={styles.modalFormInner}>
          <div onClick={onClose} className={styles.modalFormClose}>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none">
              <path fill="#ABABAB" d="M.628 13.466a.437.437 0 0 1 0-.618L12.374 1.103a.437.437 0 0 1 .618.618L1.246 13.466a.437.437 0 0 1-.618 0Z" />
              <path fill="#ABABAB" d="M.884 1.227c.17-.17.448-.17.618 0l11.746 11.745a.437.437 0 0 1-.618.619L.884 1.845a.437.437 0 0 1 0-.618Z" />
            </svg>
          </div>

          <h2 data-section8-title="" className={`section-title ${styles.modalFormTitle}`}>
            Оставить заявку
          </h2>

          <div data-section8-text="" className={`${styles.modalFormText} section-text-1`}>
            Консультации по визам, консультации
            <br />по культурной адаптации, рекомендации <br />по планированию учебы/карьеры
          </div>

          <form className={styles.mainForm} action="" id="main-form" onSubmit={handleSubmit}>
            <input
              data-section8-name=""
              className={`${styles.mainFormField} ${styles.mainFormInput}`}
              id="name"
              name="name"
              type="text"
              placeholder="Имя"
            />
            <input
              data-section8-phone=""
              className={`${styles.mainFormField} ${styles.mainFormInput}`}
              id="phone"
              name="phone"
              type="tel"
              placeholder="Телефон"
              maxLength={17}
            />
            <textarea
              data-section8-textarea=""
              className={`${styles.mainFormField} ${styles.mainFormTextarea}`}
              id="message"
              name="message"
              placeholder="Сообщение"
            ></textarea>

            <div
              data-main-form-success
              ref={successRef}
              className={`${styles.mainFormSuccess} ${success ? "" : styles.hidden}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" fill="none">
                <path fill="#CBCBCB" d="M53.865 8.265 37.081 49.248a4.87 4.87 0 0 1-9.19-.532l-4.122-14.773a2.823 2.823 0 0 0-.158-.434l5.74-5.72a1.98 1.98 0 0 0-2.801-2.8l-5.72 5.74a2.808 2.808 0 0 0-.434-.158L5.604 26.449a4.855 4.855 0 0 1-.532-9.171L46.036.454a5.99 5.99 0 0 1 7.83 7.81ZM3.34 44.907l7.814-7.814a1.972 1.972 0 1 0-2.789-2.79L.551 42.119a1.973 1.973 0 0 0 2.788 2.789Zm8.88 8.879 7.813-7.814a1.972 1.972 0 0 0-2.789-2.79L9.43 50.998a1.972 1.972 0 0 0 2.788 2.789Z" />
              </svg>
              <div data-section8-success="" className="section-text-2">
                Ваша заявка <br /> успешно отправлена!
              </div>
            </div>

            <div className={styles.mainFormFooter}>
              <div className={`${styles.mainFormPolicy} section-text-2`}>
                <span data-section8-policy-1="">Принимаю </span>
                <a data-section8-policy-2="" target="_blank" href="https://startstudy.cz/privacy-policy.pdf">
                  политику в отношении обработки персональных данных
                </a>
              </div>
              <div className={styles.buttonWrapper}>
                <button
                  type='submit'
                  className={`btn arrow-right ${styles.mainFormButton}${formError ? ' form-error' : ''}`}
                  id="submit-btn"
                  ref={btnRef}
                >
                  <span data-section8-btn="">Отправить</span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>,
    document.getElementById('modal') as HTMLElement
  );
}
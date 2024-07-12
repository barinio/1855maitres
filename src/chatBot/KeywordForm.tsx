import { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";

import styles from "./styles/KeywordForm.module.scss";

interface FormData {
  email: string;
  name: string;
  number: string;
}

function KeywordForm() {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    name: "",
    number: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submittingError, setSubmittingError] = useState("");
  const { t } = useTranslation();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    axios
      .post("https://one855-product-code.onrender.com/add", formData)
      .then((response) => {
        console.log(response.data);
        setFormData({ email: "", name: "", number: "" });
        setSubmitted(true);
      })
      .catch((error) => {
        console.error("Error sending data:", error);
        setSubmittingError(t("messageError"));
      });
  };

  return (
    <div className={styles.formContainer}>
      <div className={styles.logoContainer}>{t("chatTitle")}</div>

      {!submitted ? (
        <form className={styles.formAll} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <input
              type="text"
              id="email"
              name="email"
              placeholder={t("inputEmailChat")}
              required
              onChange={handleChange}
              value={formData.email}
              className={styles.formInput}
            />
            <input
              type="text"
              id="name"
              name="name"
              placeholder={t("inputNameChat")}
              required
              onChange={handleChange}
              value={formData.name}
              className={styles.formInput}
            />
            <input
              type="text"
              id="number"
              name="number"
              placeholder={t("inputTelChat")}
              required
              onChange={handleChange}
              value={formData.number}
              className={styles.formInput}
            />
          </div>
          <button className={styles.formSubmitBtn} type="submit">
            {t("chatBtnSubmit")}
          </button>
        </form>
      ) : (
        <p className={styles.successMessage}>{t("messageSuccess")}</p>
      )}

      {submittingError && <div>{submittingError}</div>}
    </div>
  );
}

export default KeywordForm;

import styles from "./trackingInput.module.css";
import Search from "@/assets/Search";
import { useState } from "react";
import { useTranslation } from "react-i18next";

interface props {
  onInputChange: (val: string) => void;
  inputValue: string;
  onSubmit: () => void;
}

function TrackingInput({ onInputChange, inputValue, onSubmit }: props) {
  const { t, i18n } = useTranslation();
  const dir = i18n.language == "en" ? "ltr" : "rtl";

  const handleEnterKey = (key: string) => {
    if (key === "Enter") {
      onSubmit();
    }
  };

  return (
    <div className={styles.container}>
      <h4 className={styles.header}>{t("inputHeader")}</h4>
      <div className={styles.inputContainer}>
        <input
          className={styles.input}
          placeholder={t("inputPlaceHolder").toString()}
          value={inputValue}
          onChange={(event) => onInputChange(event.currentTarget.value)}
          onKeyPress={(g) => handleEnterKey(g.key)}
          dir={dir}
          data-testid="tracking-input"
        />
        <button
          className={styles.button}
          onClick={onSubmit}
          type="submit"
          aria-label="Search"
          dir={dir}
          data-testid="tracking-button"
        >
          <Search />
        </button>
      </div>
    </div>
  );
}

export default TrackingInput;

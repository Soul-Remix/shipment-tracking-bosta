import styles from "./errorMessage.module.css";
import Error from "@/assets/Error";
import { useTranslation } from "react-i18next";

interface props {
  shipmentNum: string;
}

function ErrorMessage({ shipmentNum }: props) {
  const { t } = useTranslation();

  return (
    <div>
      <div className={styles.shipmentNum}>
        {t("shipmentNum")} {shipmentNum}
      </div>
      <div className={styles.container}>
        <Error />
        <p>{t("errorMessage")}</p>
      </div>
    </div>
  );
}

export default ErrorMessage;

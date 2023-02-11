import styles from "./trackingDetail.module.css";
import dayjs from "dayjs";
import { useTranslation } from "react-i18next";

interface props {
  shipmentNum: string;
  status: string;
  message: string;
  date: Date;
  lastUpdate: Date;
}

function TrackingDetail({
  shipmentNum,
  status,
  message,
  date,
  lastUpdate,
}: props) {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <div className={`${styles.shipmentNum} ${styles.subHeader}`}>
        {t("shipmentNum")} {shipmentNum}
      </div>
      <div className={styles.shipmentStatus}>{t(status)}</div>
      <div className={styles.status}>
        <hr className={`${styles.statusDivider} ${styles.active}`} />
        <hr className={`${styles.statusDivider} ${styles.active}`} />
        {status === "DELIVERED" ? (
          <hr className={`${styles.statusDivider} ${styles.active}`} />
        ) : (
          <hr className={styles.statusDivider} />
        )}
      </div>
      <div className={`${styles.statusSubHeader} ${styles.subHeader}`}>
        {t("statusMessage" + message)}
        <span className={styles.statusDate}>
          {dayjs(date).format("ddd, DD MMM YYYY")}
        </span>
      </div>
      <div className={styles.lastUpdate}>
        {t("lastUpdate")} {dayjs(lastUpdate).fromNow()}
      </div>
      <hr className={styles.divider} />
    </div>
  );
}

export default TrackingDetail;

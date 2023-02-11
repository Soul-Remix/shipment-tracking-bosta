import styles from "./timeLineComponent.module.css";
import dayjs from "dayjs";
import { useTranslation } from "react-i18next";

interface Props {
  date: Date;
  events: Array<{
    time: Date;
    event: string;
    hub?: string;
  }>;
}

function TimeLineComponent({ date, events }: Props) {
  const { t, i18n } = useTranslation();

  return (
    <div className={styles.rightAlign}>
      <p className={styles.header}>{dayjs(date).format("ddd, DD MMM")}</p>
      {events.map((item, i) => (
        <div className={styles.box} key={item.event + i}>
          <p>
            {t(item.event + "_EVENT")} {item.hub !== undefined && item.hub}
          </p>
          <p className={styles.boxDate}>{dayjs(item.time).format("hh:mm A")}</p>
        </div>
      ))}
    </div>
  );
}

export default TimeLineComponent;

import styles from "./timeLineComponent.module.css"
import dayjs from "dayjs";

interface Props {
    date: Date,
    events: Array<{
        time: Date,
        event: string,
        hub?: string
    }>
}

function TimeLineComponent({date, events}: Props) {
    return <div>
        <p className={styles.header}>{dayjs(date).format("ddd, DD MMM")}</p>
        {events.map(item => <div className={styles.box}>
            <p>{item.event}</p>
            {item.hub !== undefined && <p>{item.hub}</p>}
            <p className={styles.boxDate}>{dayjs(item.time).format("hh:mm A")}</p>
        </div>)}
    </div>
}

export default TimeLineComponent;
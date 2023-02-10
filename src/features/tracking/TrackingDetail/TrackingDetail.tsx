import styles from "./trackingDetail.module.css"

interface props {
    shipmentNum: string,
    status: string,
    message: string,
    date: string,
    lastUpdate: string
}

function TrackingDetail({shipmentNum, status, message, date, lastUpdate}: props) {
    return <div className={styles.container}>
        <div className={`${styles.shipmentNum} ${styles.subHeader}`}>Shipment No. {shipmentNum}</div>
        <div className={styles.shipmentStatus}>{status}</div>
        <div className={styles.status}>
            <hr className={styles.statusDivider}/>
            <hr className={`${styles.statusDivider} ${styles.active}`}/>
            <hr className={styles.statusDivider}/>
        </div>
        <div className={`${styles.statusSubHeader} ${styles.subHeader}`}>{message}<span
            className={styles.statusDate}>{date}</span></div>
        <div className={styles.lastUpdate}>(Last update since {lastUpdate})</div>
        <hr className={styles.divider}/>
    </div>
}

export default TrackingDetail;
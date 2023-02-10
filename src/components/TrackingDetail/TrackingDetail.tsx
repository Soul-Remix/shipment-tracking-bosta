import styles from "./trackingDetail.module.css"

function TrackingDetail() {
    return <div className={styles.container}>
        <div className={`${styles.shipmentNum} ${styles.subHeader}`}>Shipment No. 234235346</div>
        <div className={styles.shipmentStatus}>Delivered</div>
        <div className={styles.status}>
            <hr className={styles.statusDivider}/>
            <hr className={`${styles.statusDivider} ${styles.active}`}/>
            <hr className={styles.statusDivider}/>
        </div>
        <div className={`${styles.statusSubHeader} ${styles.subHeader}`}>Order Is Delivered <span
            className={styles.statusDate}>Sun, 9 Jan 2022</span></div>
        <div className={styles.lastUpdate}>(Last update since 396 day ago.)</div>
        <hr className={styles.divider}/>
    </div>
}

export default TrackingDetail;
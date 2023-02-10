import styles from "./errorMessage.module.css";
import Error from "@/assets/Error";

interface props {
    shipmentNum: string
}

function ErrorMessage({shipmentNum}: props) {
    return <div>
        <div className={styles.shipmentNum}>Shipment No. {shipmentNum}</div>
        <div className={styles.container}>
            <Error/>
            <p>
                No record of this tracking number can be found at this time, please check the number and try again
                later.
                For
                further assistance, please contact Customer Service.
            </p>
        </div>
    </div>
}

export default ErrorMessage;
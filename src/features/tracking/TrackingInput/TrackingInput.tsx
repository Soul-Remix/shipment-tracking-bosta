import styles from "./trackingInput.module.css"
import Search from "@/assets/Search"
import {useState} from "react";

interface props {
    onInputChange: (val: string) => void,
    inputValue: string,
    onSubmit: () => void
}

function TrackingInput({onInputChange, inputValue, onSubmit}: props) {

    const handleEnterKey = (key: string) => {
        if (key === 'Enter') {
            onSubmit();
        }
    }

    return <div className={styles.container}>
        <h4 className={styles.header}>Track your shipment</h4>
        <div className={styles.inputContainer}>
            <input className={styles.input} placeholder="Tracking No." value={inputValue}
                   onChange={(event) => onInputChange(event.currentTarget.value)}
                   onKeyPress={(g) => handleEnterKey(g.key)}
            />
            <button className={styles.button} onClick={onSubmit} type="submit">
                <Search/>
            </button>
        </div>

    </div>
}

export default TrackingInput;
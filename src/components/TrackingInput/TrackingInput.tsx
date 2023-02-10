import styles from "./trackingInput.module.css"
import Search from "@/assets/Search"
import {FormEvent, useState} from "react";

function TrackingInput() {
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (event: FormEvent<HTMLInputElement>) => {
        setInputValue(event.currentTarget.value);
    }

    const handleClick = () => {
        console.log(inputValue)
    }

    const handleEnterKey = (key: string) => {
        if (key === 'Enter') {
            handleClick();
        }
    }

    return <div className={styles.container}>
        <h4 className={styles.header}>Track your shipment</h4>
        <div className={styles.inputContainer}>
            <input className={styles.input} placeholder="Tracking No." value={inputValue} onChange={handleInputChange}
                   onKeyPress={(g) => handleEnterKey(g.key)}/>
            <button className={styles.button} onClick={handleClick} type="submit">
                <Search/>
            </button>
        </div>

    </div>
}

export default TrackingInput;
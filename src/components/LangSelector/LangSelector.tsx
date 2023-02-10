import styles from "./langSelector.module.css";
import DownArrow from "@/assets/DownArrow";
import {useState} from "react";

function LangSelector() {
    const [isActive,setIsActive] = useState(false);
    
    const handleClick = () => {
        setIsActive(prop => !prop)
    }
    
    return <div className={`${isActive ? styles.active : ""} ${styles.lang}`} onClick={handleClick}>
        <p>En</p>
        <span className={styles.arrow}> <DownArrow/> </span>
    </div>
}

export default LangSelector;
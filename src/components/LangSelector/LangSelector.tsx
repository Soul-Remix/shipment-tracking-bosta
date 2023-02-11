import styles from "./langSelector.module.css";
import DownArrow from "@/assets/DownArrow";
import {MouseEvent, useState} from "react";
import {Menu, MenuItem} from "@mui/material";

function LangSelector() {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [isActive, setIsActive] = useState(false);

    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
        setIsActive(prop => !prop)
        setAnchorEl(event.currentTarget);
    }

    const handleClose = () => {
        setIsActive(false);
        setAnchorEl(null);
    }

    return <div>
        <button className={`${isActive ? styles.active : ""} ${styles.lang}`} onClick={handleClick}
                aria-controls={isActive ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={isActive ? 'true' : undefined}>
            EN
            <span className={styles.arrow}> <DownArrow/> </span>
        </button>
        <Menu id="basic-menu" anchorEl={anchorEl} open={isActive} onClose={handleClose} MenuListProps={{
            'aria-labelledby': 'basic-button',
        }}>
            <MenuItem onClick={handleClose}>English</MenuItem>
            <MenuItem onClick={handleClose}>عربي</MenuItem>
        </Menu>

    </div>
}

export default LangSelector;
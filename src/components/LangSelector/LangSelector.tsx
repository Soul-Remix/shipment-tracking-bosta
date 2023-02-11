import styles from "./langSelector.module.css";
import DownArrow from "@/assets/DownArrow";
import { MouseEvent, useState } from "react";
import { Menu, MenuItem } from "@mui/material";
import { useTranslation } from "react-i18next";

function LangSelector() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [isActive, setIsActive] = useState(false);

  const { i18n } = useTranslation();

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setIsActive((prop) => !prop);
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setIsActive(false);
    setAnchorEl(null);
  };

  const handleChangeLocale = (lang: string) => {
    if (i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }
    handleClose();
  };

  return (
    <div>
      <button
        className={`${isActive ? styles.active : ""} ${styles.lang}`}
        onClick={handleClick}
        aria-controls={isActive ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={isActive ? "true" : undefined}
      >
        {i18n.language === "en" ? "EN" : "عربي"}
        <span className={styles.arrow}>
          <DownArrow />
        </span>
      </button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={isActive}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {languages.map((x) => (
          <MenuItem onClick={() => handleChangeLocale(x.lang)}>
            {x.title}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}

export default LangSelector;

const languages = [
  {
    lang: "en",
    title: "English",
  },
  {
    lang: "ar",
    title: "عربي",
  },
];

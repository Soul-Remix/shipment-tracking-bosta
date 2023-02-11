import styles from "./navbar.module.css";
import Logo from "@/assets/Logo";
import LangSelector from "@/components/LangSelector/LangSelector";
import LogoArabic from "@/assets/LogoArabic";
import { useTranslation } from "react-i18next";

function NavBar() {
  const { i18n } = useTranslation();

  return (
    <nav className={styles.nav}>
      <a className={styles.logo} href="/" aria-label="Logo">
        {i18n.language === "en" ? <Logo /> : <LogoArabic />}
      </a>
      <LangSelector />
    </nav>
  );
}

export default NavBar;

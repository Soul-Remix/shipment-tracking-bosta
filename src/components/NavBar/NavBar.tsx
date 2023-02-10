import styles from "./navbar.module.css";
import Logo from '@/assets/logo'
import DownArrow from "@/assets/DownArrow";
import LangSelector from "@/components/LangSelector/LangSelector";

function NavBar() {
    return <nav className={styles.nav}>
        <a className={styles.logo} href="#">
            <Logo/>
        </a>
        <LangSelector/>
    </nav>;
}

export default NavBar;

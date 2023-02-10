import styles from "./navbar.module.css";
import Logo from '@/assets/logo'
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

import {} from "react-icons/fa";
import { useContext } from "react";
import Link from "next/link";
import styles from "../styles/Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          <a>D&D Campaing Finder</a>
        </Link>
      </div>

      <nav className={styles.navbar}>
        <ul>
          <li>
            <Link href="/events">
              <a>EVENTS</a>
            </Link>
          </li>
          <li>
            <Link href="/groups">
              <a>GROUPS</a>
            </Link>
          </li>
          <li>
            <Link href="/login">
              <a>LOGIN</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

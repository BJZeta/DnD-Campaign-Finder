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

      <nav>
        <ul>
          <li>
            <li href="/games"></li>
          </li>
        </ul>
      </nav>
    </header>
  );
}

import Link from "next/link";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Layout>
      <section className={styles.hero}>
        <h1>Dungeons & Dragons Campaign Finder</h1>
        <p>Find and join D&D campaigns running in your local area. </p>
        <strong>OR</strong>
        <p>
          Create and post your own campaign events for players to lookup and
          join
        </p>
      </section>
      <section className={styles.buttons}>
        <Link href="/events">
          <a className={styles.btn_1}>Find Campaign</a>
        </Link>
        <strong>OR</strong>
        <Link href="/profile/create-event">
          <a className={styles.btn_2}>Create Event</a>
        </Link>
      </section>
    </Layout>
  );
}

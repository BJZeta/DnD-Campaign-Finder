import { useState } from "react";
import Link from "next/link";
import Layout from "../components/Layout";
import styles from "../styles/SignUp.module.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmitAccount = () => {};

  return (
    <Layout>
      <div className={styles.signupScreen}>
        <h1>Sign In</h1>

        <form onSubmit={handleSubmitAccount}>
          <div className={styles.inputs}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              placeholder="Enter an Email"
              onChange={(e) => setEmail(e.target.value)}
              className={styles.input}
            />
          </div>
          <div className={styles.inputs}>
            <label htmlFor="password">Password</label>
            <input
              type="text"
              id="password"
              value={password}
              placeholder="Enter Password"
              onChange={(e) => setPassword(e.target.value)}
              className={styles.input}
            />
          </div>
          <button type="submit">Sign In</button>
        </form>
        <div className={styles.login_link}>
          <p>
            Don't have an account?{" "}
            <Link href="/login">
              <a>Sign Up Here</a>
            </Link>
          </p>
        </div>
      </div>
    </Layout>
  );
}

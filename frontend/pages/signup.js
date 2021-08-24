import { useState } from "react";
import Link from "next/link";
import Layout from "../components/Layout";
import styles from "../styles/SignUp.module.css";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmitAccount = () => {};

  return (
    <Layout>
      <div className={styles.signupScreen}>
        <h1>Create An Account</h1>

        <form onSubmit={handleSubmitAccount}>
          <div className={styles.inputs}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              placeholder="Enter a Name"
              onChange={(e) => setName(e.target.value)}
              className={styles.input}
            />
          </div>
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
          <div className={styles.inputs}>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="text"
              id="confirmPassword"
              value={confirmPassword}
              placeholder="Match Password"
              onChange={(e) => setConfirmPassword(e.target.value)}
              className={styles.input}
            />
          </div>
          <button type="submit">Enter New Account</button>
        </form>
        <div className={styles.login_link}>
          <p>
            Already have an account?{" "}
            <Link href="/login">
              <a>Sign In Here</a>
            </Link>
          </p>
        </div>
      </div>
    </Layout>
  );
}

import { useState } from "react";
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
            <label for="name">Name</label>
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
            <label for="email">Email</label>
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
            <label for="password">Password</label>
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
            <label for="confirmPassword">Confirm Password</label>
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
      </div>
    </Layout>
  );
}

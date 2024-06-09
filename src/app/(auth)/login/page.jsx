import styles from "./Login.module.css";
import LoginForm from "@/components/loginForm/LoginForm";
import { handleGithubLogin, handleLoginCredentials } from "@/lib/actions";
import { auth, signIn } from "@/lib/auth";

function Login() {
  // const session = await auth();
  // console.log("the auth session", session);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <form action={handleGithubLogin}>
          <button className={styles.github}>Login with Github</button>
        </form>
        <LoginForm />
      </div>
    </div>
  );
}

export default Login;

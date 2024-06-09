"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useFormState } from "react-dom";
import styles from "./LoginForm.module.css";

import { handleLoginCredentials } from "@/lib/actions";

function LoginForm() {
  const [state, formAction] = useFormState(handleLoginCredentials, undefined);

  // const router = useRouter();

  return (
    <>
      <form className={styles.form} action={formAction}>
        <input type="text" placeholder="username" name="username" />
        <input type="text" placeholder="password" name="password" />
        <button>Login with credentials</button>
        {state?.error}
        <Link href="/register">
          {"Don't have an account?"} <b>Register</b>
        </Link>
      </form>
    </>
  );
}

export default LoginForm;

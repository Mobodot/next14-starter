"use client";

import { useFormState } from "react-dom";

import { handleRegister } from "@/lib/actions";
import styles from "./RegisterForm.module.css";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

function RegisterForm() {
  const [state, formAction] = useFormState(handleRegister, undefined);

  const router = useRouter();

  useEffect(() => {
    state?.success && router.push("/login");
  }, [state?.success, router]);

  return (
    <form className={styles.form} action={formAction}>
      <input type="text" placeholder="username" name="username" />
      <input type="email" placeholder="email" name="email" />
      <input type="password" placeholder="password" name="password" />
      <input
        type="password"
        placeholder="password again"
        name="passwordRepeat"
      />
      <button>Register</button>
      {state?.error}
      <Link href="/login">
        Have an account? <b>Login</b>
      </Link>
    </form>
  );
}

export default RegisterForm;

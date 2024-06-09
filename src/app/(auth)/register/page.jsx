import { handleRegister } from "@/lib/actions";
import styles from "./Register.module.css";
import RegisterForm from "@/components/registerForm/RegisterForm";

function Register() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <RegisterForm />
      </div>
    </div>
  );
}

export default Register;

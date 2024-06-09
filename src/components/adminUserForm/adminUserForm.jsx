"use client";

import { useFormState } from "react-dom";

import styles from "./AdminUserForm.module.css";
import { addUser } from "@/lib/actions";

function AdminUserForm() {
  const [state, formAction] = useFormState(addUser, undefined);

  return (
    <form className={styles.container} action={formAction}>
      <h1>Add New User</h1>
      <input type="text" name="username" placeholder="Username" />
      <input type="text" name="email" placeholder="Email" />
      <input type="password" name="password" placeholder="Password" />
      <input type="text" name="img" placeholder="img" />
      <select name="isAdmin">
        <option value="false">isAdmin?</option>
        <option value="false">No</option>
        <option value="true">Yes</option>
      </select>
      <button>Add User</button>
      {state && state.errors}
    </form>
  );
}

export default AdminUserForm;

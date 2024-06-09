"use client";

import { addPost } from "@/lib/actions";
import styles from "./AdminPostForm.module.css";
import { useFormState } from "react-dom";

function AdminPostForm({ userId }) {
  const [state, formAction] = useFormState(addPost, undefined);

  return (
    <form className={styles.container} action={formAction}>
      <h1>Add New Post</h1>
      <input type="hidden" name="userId" value={userId} />
      <input type="text" name="title" placeholder="Title" />
      <input type="text" name="slug" placeholder="Slug" />
      <input type="text" name="img" placeholder="img" />
      <textarea name="desc" placeholder="desc" rows={10} />
      <button>Add Post</button>
      {state?.errors}
    </form>
  );
}

export default AdminPostForm;

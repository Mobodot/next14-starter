import { getusers } from "@/lib/data";
import styles from "./AdminUsers.module.css";
import Image from "next/image";
import { deleteUser } from "@/lib/actions";

async function AdminUsers() {
  const users = await getusers();

  // console.log("list of all the users", users);

  const renderedUsers = users.map((user) => {
    return (
      <div className={styles.user} key={user.id}>
        <div className={styles.detail}>
          <Image
            src={user.img || "/noavatar.png"}
            alt=""
            width={50}
            height={50}
          />
          <span>{user.username}</span>
        </div>
        <form action={deleteUser}>
          <input type="hidden" name="id" value={user.id} />
          <button className={styles.userButton}>Delete</button>
        </form>
      </div>
    );
  });
  return (
    <div className={styles.container}>
      <h1>Users</h1>
      {renderedUsers}
    </div>
  );
}

export default AdminUsers;

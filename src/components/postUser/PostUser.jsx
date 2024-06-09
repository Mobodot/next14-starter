import Image from "next/image";
import styles from "./PostUser.module.css";
import { getuser } from "@/lib/data";

// const getUser = async (id) => {
//   const user = await fetch(
//     `https://jsonplaceholder.typicode.com/users/${id}`,
//     {
//       method: "GET",
//       headers: { "content-type": "application/json" },
//     },
//     { cache: "no-store" }
//   );

//   return user.json();
// };

async function PostUser({ userid }) {
  const user = await getuser(userid);
  // console.log("incoming user", user);

  return (
    <div className={styles.profileInfo}>
      <div className={styles.profileImgContainer}>
        <Image
          className={styles.profileImg}
          src={user.img ? user.img : "/noavatar.png"}
          alt=""
          fill
        />
      </div>
      <div className={styles.profileDetails}>
        <div className={styles.details}>
          <h5>Author</h5>
          <p>{user.username}</p>
        </div>
        <div className={styles.details}>
          <h5>Published</h5>
          <p>-11-04T09:30</p>
        </div>
      </div>
    </div>
  );
}

export default PostUser;

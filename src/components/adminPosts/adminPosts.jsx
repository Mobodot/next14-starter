import { getPosts } from "@/lib/data";
import styles from "./AdminPosts.module.css";
import Image from "next/image";
import { deletePost } from "@/lib/actions";

async function AdminPosts() {
  const posts = await getPosts();
  const renderedPosts = posts.map((post) => {
    return (
      <div className={styles.post} key={post.id}>
        <div className={styles.detail}>
          <Image
            src={post.img || "/noavatar.png"}
            alt=""
            width={50}
            height={50}
          />
          <span className={styles.postTitle}>{post.title}</span>
        </div>
        <form action={deletePost}>
          <input type="hidden" name="id" value={post.id} />
          <button className={styles.postButton}>Delete</button>
        </form>
      </div>
    );
  });

  return (
    <div className={styles.container}>
      <h1>Posts</h1>
      {renderedPosts}
    </div>
  );
}

export default AdminPosts;

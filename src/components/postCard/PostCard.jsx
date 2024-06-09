import Image from "next/image";
import styles from "./PostCard.module.css";
import Link from "next/link";

function PostCard({ post }) {
  // console.log("post ", post);
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image
            className={styles.imgBlog}
            src="https://images.pexels.com/photos/24778705/pexels-photo-24778705/free-photo-of-people-hiking-on-hill-behind-cloud.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="post"
            fill
          />
        </div>
        <span className={styles.date}>09.15.2019</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.desc}>{post.body}</p>
        <Link className={styles.link} href={`/blogs/${post.slug}`}>
          READ MORE
        </Link>
      </div>
    </div>
  );
}

export default PostCard;

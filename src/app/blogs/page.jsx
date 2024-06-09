import PostCard from "@/components/postCard/PostCard";
import styles from "./Blogs.module.css";
import { getPosts } from "@/lib/data";

// const getPosts = async () => {
//   const posts = await fetch(
//     "https://jsonplaceholder.typicode.com/posts",
//     {
//       method: "GET",
//       headers: { "content-type": "application/json" },
//     },
//     { cache: "no-store" }
//   );

//   return posts.json();
// };

async function BlogPage() {
  const posts = await getPosts();
  // console.log("posts in blogs", posts);
  return (
    <div className={styles.container}>
      {posts &&
        posts.map((post) => {
          return (
            <div className={styles.post} key={post.id}>
              <PostCard post={post} />
            </div>
          );
        })}
      {/* <div className={styles.post}>
        <PostCard />
      </div>
      <div className={styles.post}>
        <PostCard />
      </div>
      <div className={styles.post}>
        <PostCard />
      </div> */}
    </div>
  );
}

export default BlogPage;

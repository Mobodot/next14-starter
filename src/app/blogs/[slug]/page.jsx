import Image from "next/image";
import { Suspense } from "react";

import styles from "./SinglePost.module.css";
import PostUser from "@/components/postUser/PostUser";
import { getPost } from "@/lib/data";

// const getPost = async (id) => {
//   const post = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
//     method: "GET",
//     headers: { "content-type": "application/json" },
//   });

//   return post.json();
// };

export const generateMetadata = async ({ params }) => {
  const { slug } = params;
  const post = await getPost(slug);
  return {
    title: post.title,
    description: post.desc,
  };
};

async function SingleBlog({ params }) {
  // console.log("server params", params);
  const post = await getPost(params["slug"]);
  // console.log("Incoming post", post);
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src={
            post.img
              ? post.img
              : "https://images.pexels.com/photos/24778705/pexels-photo-24778705/free-photo-of-people-hiking-on-hill-behind-cloud.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
          alt=""
          fill
        />
      </div>
      <div className={styles.detailContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        {/* user */}
        <Suspense fallback={<div>Loading...</div>}>
          <PostUser userid={post.userId} />
        </Suspense>
        <p className={styles.detailDesc}>{post.body}</p>
      </div>
    </div>
  );
}

export default SingleBlog;

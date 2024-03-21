import PostCard from "@/components/postCard/postCard";
import styles from "./blog.module.css";
import { getPosts } from "@/lib/data";



export const metadata = {
  title: "Blog",
  description: "Elevate your social grace with our specialized etiquette courses. From dining decorum to professional protocol, our classes provide practical insights and hands-on learning experiences to ensure you navigate any social setting with finesse.",
  keywords: ['social', 'grace', 'professional', 'dining', 'classes', 'learning'],
  alternates: {
    canonical: "https://modernmannerism.com/blog"
  }
};

// FETCH DATA WITH AN API
// const getData = async () => {
//    const response = await fetch("https://jsonplaceholder.typicode.com/posts",{cache:"no-store"});

//   if (!response.ok) {
//     throw new Error("Something went wrong");
//   }
//   const data = await response.json(); 
//   console.log(data)
//   return data;
// };

const BlogPage = async () => {

  const posts = await getPosts();

  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <div className={styles.post} key={post.id}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
};

export default BlogPage;

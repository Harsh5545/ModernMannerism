
import { Suspense } from "react";
import styles from "./singlePost.module.css"
import Image from "next/image";

const getData = async (slug) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);

    if (!response.ok) {
        console.log(Error)
    }
    const data = await response.json();
    console.log(data)
    return data;
};


const SinglePostPage = async ({ params }) => {
    const slug = params.slug;

    const post = await getData(slug);
    return (
        <div className={styles.container}>
            {post.img && (
                <div className={styles.imgContainer}>
                    <Image src={post.img} alt="" fill className={styles.img} />
                </div>
            )}
            <div className={styles.textContainer}>
                <h1 className={styles.title}>{post.title}</h1>
                <div className={styles.detail}>
                    {post && (
                        <Suspense fallback={<div>Loading...</div>}>

                        </Suspense>
                    )}
                    <div className={styles.detailText}>
                        <span className={styles.detailTitle}>Published</span>
                        <span className={styles.detailValue}>
                            {/* {post?.createdAt.toString().slice(4, 16)} */}
                        </span>
                    </div>
                </div>
                <div className={styles.content}>{post.body}</div>
            </div>
        </div>
    )
}

export default SinglePostPage
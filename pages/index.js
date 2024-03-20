import Link from "next/link";
import Feed from "@components/Feed";

export async function getStaticProps() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await res.json();
    return {
      props: {
        posts,
      },
    };
  } catch (error) {
    console.error("Error fetching posts:", error);
    return {
      props: {
        posts: [],
      },
    };
  }
}

export default function Home({ posts }) {
  return (
    <>
      <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center mb-[30px]">Welcome to P-Blog</h1>

        <h1 className="head_text text-center mb-[30px]">
          <span className="orange_gradient text-center">
            Explore Life Through Words
          </span>
        </h1>

        <p className="desc text-center mb-[50px]">
          Discover insightful articles, captivating stories, and thought-provoking
          discussions.
        </p>

        <Link className="black_btn mb-[30px]" href="/posts">
          View All Posts
        </Link>

        <h1 className="head_text mb-[30px] italic">Best blogs of the week</h1>
        <Feed posts={posts} />
      </section>
    </>
  );
}

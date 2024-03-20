import Link from "next/link";
import Feed from "@components/Feed";
import { Inter } from "next/font/google";
import Head from "next/head";
import Nav from "@components/Nav";

const inter = Inter({ subsets: ["latin"] });



export default function Home() {
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

        <h1 className="head_text mb-[30px] italic">Best blog of the week</h1>
        <Feed />
      </section>
    </>
  );
}

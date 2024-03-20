import Link from "next/link";

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

const Post = ({ posts }) => {
    return (

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10">

            {posts.map((post, index) => (

                <div key={index} className="max-w-sm rounded overflow-hidden shadow-lg">
                    <Link href={`/posts/${post.id}`}>
                    <img className="w-full" src="/assets/images/dummy.jpg" alt="Spain" />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">{post.title}</div>
                        <p className="text-gray-700 text-base">{post.body.slice(0, 100)}</p>
                    </div>
                    </Link>
                </div >

            ))}

        </div >
    );
};

export default Post;
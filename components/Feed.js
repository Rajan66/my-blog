import Link from "next/link";

const Feed = ({ posts }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10">
            {posts.slice(0, 6).map((post, index) => (
                <div key={index} className="max-w-sm rounded overflow-hidden shadow-lg">
                    <Link href={`/posts/${post.id}`}>
                        <img
                            className="w-full"
                            src="/assets/images/dummy.jpg"
                            alt="Spain"
                        />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">{post.title}</div>
                            <p className="text-gray-700 text-base">{post.body.slice(0, 100)}</p>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default Feed;

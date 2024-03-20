import Image from "next/image"
import Link from "next/link"


const PostDetail = ({ post }) => {
    return (
        <div className="w-full lg:w-[1000px] md:w-[600px] overflow-hidden">
            <Link href="/posts" className="flex items-center">
                <Image
                    src="/assets/icons/back.png"
                    alt="Back"
                    width={20}
                    height={20}
                    className="object-contain"
                />
                <p className="ml-2 font-satoshi text-gray-800 font-semibold text-xl">Back</p>
            </Link>
            <div className="flex-center mb-8 flex-col">
                <span className="title_text mt-10 text-center">{post.title}</span>
                <span className="mt-5 text-gray-600 sm:text-lg max-w-2xl text-md">20 March 2024 • 10:58pm</span>
            </div>
            <div className="flex-center flex-col">
                <Image
                    src="/assets/images/dummy.jpg"
                    alt="Back"
                    width={100}
                    height={200}
                    layout="responsive"
                    className="object-contain rounded-lg"
                />

                <br />
                <div className="mt-5 text-gray-600 sm:text-lg max-w-4xl text-md">
                    {post.body}
                </div>
            </div>
        </div>
    )
}

export default PostDetail
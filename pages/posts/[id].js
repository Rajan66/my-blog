import PostDetail from '@components/PostDetail'

export const getStaticPaths = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/`);
    const data = await res.json()

    const paths = data.map(post => {
        return {
            params: { id: post.id.toString() }
        }
    })
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await res.json()

    return {
        props: { post: data }
    }
}

const Post = ({ post }) => {
    return (
        <>
            <PostDetail post={post} />
        </>
    )
}

export default Post
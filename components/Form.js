const Form = ({ post, setPost, handleSubmit }) => {
    return (
        <seciton className="w-full lg:w-[1200px] md:w-[600px] max-w-full flex-center flex-col">
            <h1 className="head_text text-left">
                <span className="blue_gradient">Contact Us</span>
            </h1>
            <form
                onSubmit={handleSubmit}
                className="mt-10 w-full max-w-2xl flex flex-col gap-7 form_area"
            >
                <label>
                    <span className="font-satoshi font-semibold text-base text-gray-700">
                        Your Name
                    </span>
                </label>
                <input
                    value={post.name}
                    onChange={(e) => setPost({ ...post, name: e.target.value })}
                    placeholder="Write your name here..."
                    required
                    className="form_input"
                    type="text"
                />

                <label>
                    <span className="font-satoshi font-semibold text-base text-gray-700">
                        Your Email
                    </span>
                </label>
                <input
                    value={post.email}
                    onChange={(e) => setPost({ ...post, email: e.target.value })}
                    placeholder="Write your email here..."
                    required
                    className="form_input"
                    type="email"
                />

                <label>
                    <span className="font-satoshi font-semibold text-base text-gray-700">
                        Your Message
                    </span>
                </label>
                <textarea
                    value={post.message}
                    onChange={(e) => setPost({ ...post, message: e.target.value })}
                    placeholder="Write your message here..."
                    className="form_textarea"
                    required
                    type="text"
                />

                <button
                    type="submit"
                    className="w-20 px-5 py-1.5 text-sm bg-blue-500 rounded-full text-white"
                >
                    Submit
                </button>
            </form>
        </seciton>
    );
};

export default Form;
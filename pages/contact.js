"use client";
import { useState } from "react";
import Form from "@components/Form";
import { Bounce, toast } from "react-toastify";

const Contact = () => {
    const [post, setPost] = useState({
        name: "",
        email: "",
        message: "",
    });

    const createMessage = async (e) => {
        e.preventDefault();

        if (post.name.trim() === "" || post.message.trim()==="") { // Check if field is empty or contains only spaces
            toast.error("Field cannot be empty");
            return; 
        }

        toast.success("Message delivered", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });
        setPost({
            name: "",
            email: "",
            message: "",
        });
    };
    return <Form post={post} setPost={setPost} handleSubmit={createMessage} />;
};

export default Contact;

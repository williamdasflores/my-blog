import { useEffect, useState } from "react";
import { useParams } from "react-router"
import { PostService } from "../services/PostService";

export const PostDetails = () => {
    const { id } = useParams();
    const[post, setPost] = useState({});

    const fetchPost = async() => {
        const { data } = await PostService.getPostById(id);
        setPost(data);
    }

    useEffect(() => {
        fetchPost();
    }, [])

    return(
        <>
        <h1>{ post.name }</h1>
        <article>
            { post.body }
        </article>
        </>
    )
}
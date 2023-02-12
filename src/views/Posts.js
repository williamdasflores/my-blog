import { useEffect, useState } from "react"
import { PostList } from "../containers/PostList";
import { PostService} from "../services/PostService"

export const Posts = () => {
    const[posts, setPosts] = useState([]);

    const fetchPosts = async() => {
        const { data }  = await PostService.getPosts();
        setPosts(data);
    }

    useEffect(() => {
        fetchPosts();
    })

    return (
        <PostList posts={posts} />
    )
}
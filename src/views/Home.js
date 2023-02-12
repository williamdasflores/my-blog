import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { PostList } from '../containers/PostList';
import { PostService } from '../services/PostService';

export const Home = () => {
    const [posts, setPosts] = useState([]);

    const fetchPosts = async () => {
        const { data } = await PostService.getFirstFivePost();
        setPosts(data);
    }

    useEffect(() => {
        fetchPosts();
    }, [])

    return (
        <>
            <h2>Últimas do blog</h2>
            <PostList posts={posts} />
            <Link to="/posts">Ver tudo</Link>
        </>
    );
}
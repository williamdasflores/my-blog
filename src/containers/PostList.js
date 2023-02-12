import { PostsContainer } from "../styles/PostsContainer";
import { PostItem } from "./PostItem"

export const PostList = ({ posts }) => (
    <PostsContainer>
        <section>
            <ul>
                {posts.map(post => <PostItem post={post} />)}
            </ul>
        </section>
    </PostsContainer>
);
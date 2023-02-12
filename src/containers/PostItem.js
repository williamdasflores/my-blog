import { Link } from "react-router-dom"

export const PostItem = ({ post }) => (
    <li>
        <div>
            <Link to={`post/${post.id}`}>{ post.name }</Link>
        </div>
        <div>{ post.body }</div>
    </li>
);
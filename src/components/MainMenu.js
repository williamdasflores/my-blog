import { Link } from "react-router-dom";
import { MainMenuContainer } from "../styles/MainMenuContainer";

export const MainMenu = () => (
    <MainMenuContainer>
        <ul>
            <li>
                <Link to="/">Blog</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/description">Description</Link>
            </li>
        </ul>
    </MainMenuContainer>
   
);
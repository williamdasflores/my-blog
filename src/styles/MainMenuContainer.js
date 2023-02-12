import styled from "styled-components";

export const MainMenuContainer = styled.nav`
    ul {
        list-style: none;
        background-color: #4550bd;
        margin: 0;
        li {
            display: inline-block;
            margin-right: 10px;
            border-right: 1px solid;
            padding: 0 1em;
            font-color: white;
            font-family: Tahoma, Verdana, sans-serif;
        }
        li:last-child { border: 0; }
    }
`;
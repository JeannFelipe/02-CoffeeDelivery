import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
    }

    :focus{
        outline: 0;
        box-shadow: 0;
    }

    body{
        background-color: ${props => props.theme.background};
    }

    h1{
        font-family: 'Baloo 2', sans-serif;
        font-size: 3rem;
        font-style: normal;
        font-weight: 800;
        color: ${props => props.theme["base-title"]};
    }

    h2{
        font-family: 'Baloo 2';
        font-size: 2rem;
        font-style: normal;
        font-weight: 800;
        color: ${props => props.theme["base-subtitle"]};	
    }

    h3{
        font-family: 'Baloo 2';
        font-size: 1.125rem;
        font-style: normal;
        font-weight: 700;
        color: ${props => props.theme["base-subtitle"]};
    }
`;
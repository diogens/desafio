import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300&display=swap');

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body, #root{
        height: 100%100%;
        background: var(--primary);
    }

    *, button, input {
        border: 0;
        outline: 0;

        font-family: 'Roboto', sans-serif;
    }

    h1, h2, p, label {
        color: #888;        
    }

    a {
        text-decoration: none;
    }

    :root {
        --primary: #36393f;
        --secondary: #2f3136;
        --tertiary: rgb(32,34,37);

        --tomato: #FF6347;
        --blue: #007F88;
        --blue2: #20aaab;
        --dark: #202225;
        --white: #fff;
        --gray: #8a8c90;
    }
`;

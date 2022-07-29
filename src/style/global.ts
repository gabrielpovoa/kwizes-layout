import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        text-transform: capitalize;
        outline: none;
        list-style: none;
        transition: all .3s linear;
    }
    html {
        font-size: 62.5%;
        scroll-behavior: smooth;
        scroll-padding-top: 8rem;

        @media screen  and (max-width: 840px){
            html {
                font-size: 55%;
            }
        }
        @media screen  and (max-width: 500px){
            html {
                font-size: 55%;
            }
        }
    }
    body {
        font-family: sans-serif;
        font-size: 1.4rem;
        background-color: #454545;
        color: #FFF;
    }
`;
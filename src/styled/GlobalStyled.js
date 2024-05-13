import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{
        padding: 0px;
        margin: 0px;
        box-sizing: border-box;
        text-decoration: none;
        list-style: none;
    }
    body{
        background-color: ${props => props.sun === true ? "#F6F8FF" : "#141D2F"};
    }
`
export default GlobalStyles
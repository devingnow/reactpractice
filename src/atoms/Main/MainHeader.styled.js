import styled from "styled-components";

export const Header = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    position:relative;
    width:100vw;
    height:70px;
    background-color: beige;


    & > p{
        font-size:40px;
    }

    & > .login{
        position:absolute;
        right:120px;
    }

    & > .signup{
        position:absolute;
        right:40px;
    }
`
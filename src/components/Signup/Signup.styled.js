import styled from "styled-components";

export const Body = styled.div`
    display:flex;
    flex-direction: column;
    width:100vw;
    height:100vh;
    align-items: center;
    padding-top:40px;
    & > p{
        font-size:40px;
        font-weight: bold;
        display:flex;
        margin-top:60px;
    }

    & > p:hover{
        cursor: pointer;
    }
`

export const SignupFormStyle = styled.div`
    width:460px;
    height:300px;
    display:flex;
    flex-direction: column;
    border: 1px solid rgb(225,227,229);
    border-radius: 10px;
    padding:24px;
    box-sizing: border-box;
    margin-top:40px;

    & > form{
        display:flex;
        flex-direction:column;
        align-items: center;

        & > input{
            width:410px;
            height:60px;
            padding-left:20px;
            box-sizing:border-box;  
        }

        & > input:focus{
            outline:none;
        }

        & > input:nth-child(1){
            border:1px solid rgb(197,204,210);
            border-bottom:none;
            border-radius: 10px 10px 0 0;
        }

        & > input:nth-child(2){
            border:1px solid rgb(197,204,210);
        }

        & > input:nth-child(3){
            border:1px solid rgb(197,204,210);
            border-top:none;
            border-radius: 0 0 10px 10px;
        }

        & > input::placeholder{
            font-size:16px;
        }

        & > .btnBox{
            display:flex;
            width:410px;
            justify-content: space-between;
        }

        & > .btnBox > button{
            width:200px;
            height:50px;
            border:none;
            border-radius: 8px;
            background-color: #09aa5c;
            padding:13px 20px;
            font-size:17px;
            font-weight: bold;
            color:white;
            box-sizing:border-box;
            margin-top:20px;
        }

        & > .btnBox > a > button{
            width:200px;
            height:50px;
            border:none;
            border-radius: 8px;
            background-color: #09aa5c;
            padding:13px 20px;
            font-size:17px;
            font-weight: bold;
            color:white;
            box-sizing:border-box;
            margin-top:20px;
        }

        & > .btnBox > a > button:hover{
            cursor:pointer;
        }

        & > .btnBox > button:hover{
            cursor:pointer;
        }
    }
`
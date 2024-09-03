import styled from 'styled-components'



export const LoginFormStyle = styled.div`
    width:460px;
    height:270px;
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
            border-radius: 0 0 10px 10px;
        }

        & > input::placeholder{
            font-size:16px;
        }

        & > button{
            width:410px;
            height:50px;
            border:none;
            border-radius: 8px;
            background-color: #09aa5c;
            padding:13px 20px;
            font-size:17px;
            font-weight: bold;
            color:white;
            box-sizing:border-box; 
        }

        & > button:hover{
            cursor: pointer;
        }

        & > .checkbox{
            display:flex;
            width:410px;
            height:30px;
            margin: 10px 0 10px 0;
            position: relative;
            align-items: center;

            & > .text {
                font-size:14px;
                color:#767678;
                margin-left:5px;
            }

            & > .check{
                width:18px;
                height:18px;
                border:1.5px solid rgb(118,118,120);
                border-radius:15px;
                margin-left:3px;
            }

            & > .check::before{
                position:absolute;
                content:'';
                width:4px;
                height:0.1px;
                border: 0.5px solid rgb(118,118,120);
                border-radius:1px;
                transform: rotate(45deg);
                background-color: rgb(118,118,120);
                top:15px;
                left: 7px;
            }

            & > .check::after{
                position:absolute;
                content:'';
                width: 5.5px;
                height:0.1px;
                border: 0.5px solid rgb(118,118,120);
                border-radius:1px;
                background-color: rgb(118,118,120);
                transform: rotate(315deg);
                top:14px;
                left:10px;
            }

            & > .check:hover{
                cursor:pointer;
            }
        }
    }
`

export const Box = styled.div`
    display:flex;
    flex-direction: row;
    width:100vw;
    height:20px;
    justify-content: center;
    
    & > ul{
        display:flex;
        width:100vw;
        list-style: none;
        justify-content: center;
        padding: 20px 0;

        & > li {
            font-size:14px;
            color:#888888;
        }

        & > li > p:hover{
            cursor: pointer;
        }

        & > li:nth-child(2){
            position:relative;
            padding-left:28px;
        }

        & > li:nth-child(2)::before{
            content:'';
            position:absolute;
            width:0.1px;
            height:13px;
            background-color: #dadada;
            left:13px;
            top:3px;
        }

        & > li:nth-child(3){
            position:relative;
            padding-left:28px;
        }

        & > li:nth-child(3)::before{
            content:'';
            position:absolute;
            width:0.1px;
            height:13px;
            background-color: #dadada;
            left:15px;
            top:3px;
        }
    }
`

export const Footer = styled.div`
    display:flex;
    flex-direction:column;
    width:100vw;
    height:120px;
    margin-top:150px;
    justify-content: center;

    & > .img{
        display:flex;
        justify-content: center;
    }

    & > .img:hover{
        cursor:pointer;
    }

    & > .img > img{
        width:460px;
        height:auto;
    }

    & > div > ul {
        list-style: none;
        width:100vw;
        display:flex;
        justify-content: center;
        padding:28px 0px 10px 0px;
        margin-top:50px;

        & > li {
            font-size:12px;
        }

        & > li > p:hover {
            cursor:pointer;
        }

        & > li:nth-child(1){
            color:#888888;
        }

        & > li:nth-child(2){
            color:#888888;
            padding-left:13px;
            font-weight: bold;
            position:relative;
        }

        & > li:nth-child(2)::before{
            content:'';
            position:absolute;
            width:0.1px;
            height:10px;
            background-color: #dadada;
            left:6px;
            top:4px;
        }
        
        & > li:nth-child(3){
            position:relative;
            color:#888888;
            padding-left:13px;
        }

        & > li:nth-child(3)::before{
            content:'';
            position:absolute;
            width:0.1px;
            height:10px;
            background-color: #dadada;
            left:6px;
            top:4px;
        }

        & > li:nth-child(4){
            position:relative;
            color:#888888;
            padding-left:13px;
        }

        & > li:nth-child(4)::before{
            content:'';
            position:absolute;
            width:0.1px;
            height:10px;
            background-color: #dadada;
            left:6px;
            top:4px;
        }
    }

    & > .footerBox{ 
        display:flex;
        justify-content: center;
        align-items: end;

        & > span:nth-child(1){
            font-size:16px;
            color:green;
            font-weight: bold;
        }

        & > span:nth-child(1):hover{
            cursor:pointer;
        }

        & > span:nth-child(2){
            font-size:12px;
            color:#888;
            padding-left:5px;
        }

        & > span:nth-child(3){
            font-size:12px;
            padding-left:5px;
        }

        & > span:nth-child(4){
            font-size:12px;
            color:#888;
            padding-left:5px;
        }
    }

`
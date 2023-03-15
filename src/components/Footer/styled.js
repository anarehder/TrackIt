import styled from "styled-components"
import {coresFooter, coresLayout} from "../../constants/colors.js"

export const ContainerFooter = styled.div`
    background-color: ${coresFooter.background};
    width: 100%;
    height: 100px;
    color: ${coresFooter.text};
    font-family: 'Lexend Deca', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    z-index: 1;
    position: fixed;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    a {
        text-decoration: none;
    }
`
export const Vazio = styled.div`
    background-color: ${coresLayout.background};
    width: 100%;
    z-index: 2;
    height: 30px;
`

export const Menu = styled.div`
    z-index: 2;
    width: 375px;
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    div{
        margin: 0 30px;
    }
    margin-bottom: 5px;
`

export const Hoje = styled.a`
    width: 90px;
    height: 90px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${coresFooter.text};
    color:${coresFooter.background};
    z-index: 4;
    position: absolute;
    border-radius: 50%;
    img{
        position: absolute;
        bottom: 7%;
        left: 6%;
        margin-left: 10px;
        display: flex;
    }
    a {
        text-decoration: none;
    }
    p{
        color:${coresFooter.background};
    }
`
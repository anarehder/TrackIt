import styled from "styled-components"
import {coresLayout} from "../../constants/colors.js"

export const ContainerHistory = styled.div`
    width: 100vw;
    position: absolute;
    top: 70px;
    min-height: 75vh;
    padding-bottom: 110px;
    background-color: ${coresLayout.background};
    color: ${coresLayout.titulo};
    font-family: 'Lexend Deca', sans-serif;
    font-style: normal;
    font-weight: 400;
    overflow-y: scroll;
    h1{
        width: 340px;
        margin: 20px auto;
        font-size: 23px;
        line-height: 30px;
        text-align: start;
    }
    h2{
        color:${coresLayout.text};
        width: 340px;
        margin: 5px auto;
        font-size: 18px;
        line-height: 22px;
        text-align: start;
    }
`
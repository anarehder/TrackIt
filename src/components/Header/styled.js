import styled from "styled-components"
import {corHeader} from "../../constants/colors.js"

export const ContainerHeader = styled.div`
    background-color: ${corHeader.background};
    color: ${corHeader.text};
    font-family: 'Playball', cursive;
    font-style: normal;
    font-weight: 400;
    font-size: 40px;
    height: 50px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 0;
    position: fixed;
    top: 0;
    z-index: 2;
`

export const CaixaTopo = styled.div`
    width: 335px;
    height: 70px;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    img {
        width: 50px;
        background-color: white;
        border-radius: 50%;
    }
`
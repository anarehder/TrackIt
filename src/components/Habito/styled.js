import styled from "styled-components"
import {coresLayout} from "../../constants/colors.js"

export const ContainerHabito = styled.div`
    background-color: ${coresLayout.backgroundQuadros};
    border-radius: 5px;
    width: 340px;
    height: 100px;
    margin-top: 10px;
`

export const Titulo = styled.div`
    margin: 12px 10px 10px 15px;
    display: flex;
    justify-content: space-between;
    font-family: 'Lexend Deca', sans-serif;
    font-style: normal;
    font-weight: 400;
    color: ${coresLayout.text};
    font-size: 20px;
    line-height: 25px;
    img{
        width: 13px; 
        height: 15px;
    }
`

export const Dias = styled.div`
    display: flex;
    justify-content: flex-start;
    margin-left: 13px;
`

export const BotaoDia = styled.button`
    width: 30px;
    height: 30px;
    margin: 2px;
    font-family: 'Lexend Deca', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
    background-color: ${props => props.selecionado === "selecionado" ? 
    coresLayout.backgroundSelecionados : coresLayout.backgroundQuadros};;
    color: ${props => props.selecionado === "selecionado" ? 
    coresLayout.textSelecionados : coresLayout.textQuadros};
    border: 1px solid ${props => props.selecionado === "selecionado" ? 
    coresLayout.backgroundSelecionados : coresLayout.bordaQuadros};
`

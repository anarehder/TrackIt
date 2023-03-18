import styled from "styled-components"
import { coresLayout } from "../../constants/colors.js"

export const BotaoDia = styled.button`
    width: 30px;
    height: 30px;
    margin: 2px;
    font-family: 'Lexend Deca', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
    background-color: ${props => props.selecionado ? coresLayout.backgroundSelecionados : coresLayout.backgroundQuadros};;
    color: ${props => props.selecionado ? coresLayout.textSelecionados : coresLayout.textQuadros};
    border: 1px solid ${props => props.selecionado ? coresLayout.backgroundSelecionados : coresLayout.bordaQuadros};
`
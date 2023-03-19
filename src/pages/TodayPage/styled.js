import styled from "styled-components"
import {coresLayout, coresHabitos} from "../../constants/colors.js"

export const ContainerToday = styled.div`
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
        margin-bottom: 0;
        font-size: 23px;
        line-height: 30px;
        text-align: start;
    }
`

export const QuantidadeConcluida = styled.h2`
        color:${props => props.valorPorcentagem !== 0 ?
        coresHabitos.habitoConcluido : coresHabitos.vazio};
        width: 340px;
        margin: 5px auto;
        font-size: 18px;
        line-height: 22px;
        text-align: start;
`
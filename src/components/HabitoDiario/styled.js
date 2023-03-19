import styled from "styled-components"
import {coresLayout, coresHabitos} from "../../constants/colors.js"

export const ContainerHabitoDiario = styled.div`
    width: 340px;
    min-height: 100px;
    margin: 20px auto;
    border-radius: 5px;
    background-color: ${coresLayout.backgroundQuadros};
    font-family: 'Lexend Deca', sans-serif;
    font-style: normal;
    font-weight: 400;
    border-radius: 5px;
    color: ${coresLayout.text};
    display: flex;
    justify-content: space-between;
`

export const Texto = styled.div`
    width: 210px;
    margin: 15px 0 15px 15px;
    p{
        width: 210px;
        margin: 0 !important;
        font-size: 13px;
        line-height: 16px;
        color: ${coresLayout.text};
    }
`

export const Atual = styled.span`
    color: ${props => props.status === "concluido" ?
        coresHabitos.habitoConcluido : coresHabitos.habitoNaoConcluido};
`

export const Recorde = styled.span`
    color: ${props => props.status === "concluido" ?
        coresHabitos.habitoConcluido : coresHabitos.habitoNaoConcluido};
`

export const Titulo = styled.div`
    width: 210px;
    margin: 0 0 7px 0 !important;
    font-size: 20px;
    line-height: 25px;
    color: ${coresLayout.text};
`

export const Icone = styled.div`
    background-color: ${props => props.status === "concluido" ?
     coresHabitos.habitoConcluido : coresLayout.background};
    width: 70px;
    height: calc(100%-30px);
    margin: 15px 15px 15px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #E7E7E7;
    border-radius: 5px;
    img{
        width: 35px;
        height: 28px;
    }
`
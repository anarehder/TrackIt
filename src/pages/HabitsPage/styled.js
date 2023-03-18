import styled from "styled-components"
import {coresLayout} from "../../constants/colors.js"

export const ContainerHabitos = styled.div`
    width: 100vw;
    position: absolute;
    top: 70px;
    min-height: 75vh;
    padding-bottom: 110px;
    background-color: ${coresLayout.background};
    color: ${coresLayout.titulo};
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    font-family: 'Lexend Deca', sans-serif;
    font-style: normal;
    font-weight: 400;
    overflow-y: scroll;
`
export const TituloHabitos = styled.div`
    width: 340px;
    margin-top: 20px;
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 23px;
    line-height: 35px;
    button {
        width: 40px;
        height: 35px;
        border-radius: 5px;
        font-size: 27px;
        line-height: 35px;
    }
`
export const BotoesDias = styled.div`
    display: flex;
    justify-content: flex-start;
    margin-left: 18px;
`

export const ListaHabitos = styled.div`
    width: 340px;
    margin-top: 20px;
    font-size: 18px;
    line-height: 23px;
    color: ${coresLayout.text};
`
export const AdicionarHabitos = styled.div`
    width: 340px;
    height: 180px;
    margin: 20px auto;
    border-radius: 5px;
    background-color: #FFFFFF;
    font-family: 'Lexend Deca', sans-serif;
    font-style: normal;
    font-weight: 400;
    display: ${props => props.addHabito ? "" : "none"};
    input {
        width: 280px;
        font-size: 20px;
        line-height: 45px;
        color: ${coresLayout.text};
        border: 1px solid ${coresLayout.bordaQuadros};
        margin: 18px 18px 10px 20px;
        border-radius: 5px;
    }
    input::placeholder{
        color: ${coresLayout.textQuadros};
    }
    input:focus {
        border: 1px solid ${coresLayout.bordaQuadros};
        outline: 1px solid ${coresLayout.bordaQuadros};
    }
`

export const BotoesFinais = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-size: 16px;
    line-height: 35px;
    font-family: 'Lexend Deca', sans-serif;
    font-style: normal;
    font-weight: 400;
    margin-top: 25px;
    margin-right: 20px;
    div{
        margin-right: 20px;
        color:#52B6FF;
        text-align: center;
    }
    button{
        width: 84px;
        height: 35px;
        font-size: 16px;
    }   
`
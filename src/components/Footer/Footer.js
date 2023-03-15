import { ContainerFooter, Vazio, Menu, Hoje } from "./styled"
import vetorHoje from "../../assets/vetor_hoje.png"

export default function Footer() {
    return (
        <ContainerFooter>
            <Hoje>Hoje
                <img src={vetorHoje} alt="vetor" />
            </Hoje>
            <Vazio></Vazio>
            <Menu>
                <div>Hábitos</div>
                <div>Histórico</div>
            </Menu>
            
        </ContainerFooter>
    )
}
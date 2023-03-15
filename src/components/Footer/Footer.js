import { ContainerFooter, Vazio, Menu, Hoje } from "./styled"
import vetorHoje from "../../assets/vetor_hoje.png"
import { Link } from "react-router-dom"

export default function Footer() {
    return (
        <ContainerFooter>
            <Hoje>
                <Link to={"/hoje"}>
                    <p>Hoje</p>
                    <img src={vetorHoje} alt="vetor" />
                </Link>
            </Hoje>

            <Vazio></Vazio>
            <Menu>
                <Link to={"/habitos"}>
                    <div>Hábitos</div>
                </Link>
                <Link to={"/historico"}>
                    <div>Histórico</div>
                </Link>

            </Menu>
        </ContainerFooter>
    )
}
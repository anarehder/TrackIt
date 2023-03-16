import { ContainerFooter, Vazio, Menu, Hoje } from "./styled"
import vetorHoje from "../../assets/vetor_hoje.png"
import { Link } from "react-router-dom"

export default function Footer() {
    return (
        <ContainerFooter data-test="menu">
            <Hoje>
                <Link to={"/hoje"} data-test="today-link">
                    <p>Hoje</p>
                    <img src={vetorHoje} alt="vetor" />
                </Link>
            </Hoje>

            <Vazio></Vazio>
            <Menu>
                <Link to={"/habitos"} data-test="habit-link">
                    <div>Hábitos</div>
                </Link>
                <Link to={"/historico"} data-test="history-link">
                    <div>Histórico</div>
                </Link>

            </Menu>
        </ContainerFooter>
    )
}
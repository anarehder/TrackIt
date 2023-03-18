import { ContainerFooter, Vazio, Menu, Hoje, Progresso } from "./styled"
import { Link } from "react-router-dom"
import { PorcentagemContext } from "../../contexts/PorcentagemContext.js"
import { useContext } from "react"
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function Footer() {

    const [valorPorcentagem,] = useContext(PorcentagemContext);;
    console.log(valorPorcentagem);
    return (
        <ContainerFooter data-test="menu">
            <Hoje>
                <Link to={"/hoje"} data-test="today-link">
                    <Progresso>
                        <CircularProgressbar value={valorPorcentagem} text="Hoje"
                            background=""
                            strokeWidth={8}
                            className={Progresso}
                            styles={buildStyles({
                                textColor: "white",
                                pathColor: "white",
                                trailColor: "transparent"
                            })} />
                    </Progresso>
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
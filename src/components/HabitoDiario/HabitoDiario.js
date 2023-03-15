import { ContainerHabitoDiario, Texto, Icone, Titulo } from "./styled"
import feito from "../../assets/done.png"

export default function HabitoDiario() {
    return (
        <ContainerHabitoDiario >
            <Texto status={"concluido"}>
                <Titulo>Ler 1 capítulo de livro </Titulo>
                <p>Sequência atual: <span>3 dias</span></p>
                <p>Seu recorde: <span>3 dias</span></p>
            </Texto>
            <Icone status={""}>
                <img src={feito} alt ="concluido"/>
            </Icone>
        </ContainerHabitoDiario>
    )
}
import { ContainerHabitoDiario, Texto, Icone, Titulo } from "./styled"
import feito from "../../assets/done.png"

export default function HabitoDiario({habito}) {
    //console.log(habito);

    return (
        <ContainerHabitoDiario data-test="today-habit-container">
            <Texto status={"concluido"}>
                <Titulo data-test="today-habit-name">Ler 1 capítulo de livro </Titulo>
                <p data-test="today-habit-sequence" >Sequência atual: <span>3 dias</span></p>
                <p data-test="today-habit-record">Seu recorde: <span>3 dias</span></p>
            </Texto>
            <Icone status={""}>
                <img src={feito} alt ="concluido" data-test="today-habit-check-btn"/>
            </Icone>
        </ContainerHabitoDiario>
    )
}
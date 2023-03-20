import { ContainerHabitoDiario, Texto, Icone, Titulo, Atual, Recorde } from "./styled"
import done from "../../assets/done.png"

export default function HabitoDiario({ name, id, atual, feito, recorde, marcarHabito }) {
    console.log(atual, recorde);
    function marcar(id) {
        const body = {};
        console.log("marquei", id);
        marcarHabito(id, body, feito);
    }

    return (
        <ContainerHabitoDiario data-test="today-habit-container">
            <Texto>
                <Titulo data-test="today-habit-name">{name}</Titulo>
                <p data-test="today-habit-sequence" >
                    Sequência atual: <Atual status={feito === true ? "concluido" : ""}>{atual} dias</Atual>
                </p>
                <p data-test="today-habit-record">
                    Seu recorde: <Recorde status={feito === true && recorde === atual && recorde > 0 ? "concluido" : ""}>{recorde} dias</Recorde>
                </p>
            </Texto>
            <Icone status={feito === true ? "concluido" : ""} onClick={() => marcar(id, feito)}>
                <img src={done} alt="concluido" data-test="today-habit-check-btn" />
            </Icone>
        </ContainerHabitoDiario>
    )
}
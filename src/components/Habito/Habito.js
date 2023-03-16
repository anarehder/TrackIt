import { ContainerHabito, Titulo, Dias } from "./styled"
import lixeira from "../../assets/lixeira.png"
import { dias } from "../../constants/dias";

export default function Habito() {
    return (
        <ContainerHabito data-test="habit-container">
            <Titulo>
                <p data-test="habit-name">Qual o habito</p>
                <img src={lixeira} alt="lixeira" data-test="habit-delete-btn"/>
            </Titulo>
            <Dias>
                {dias.map((dia,i)=>(<button key={i} data-test="habit-day"> {dia} </button>))}
            </Dias>
            
        </ContainerHabito>
    )
}
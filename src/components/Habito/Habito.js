import { ContainerHabito, Titulo, Dias } from "./styled"
import lixeira from "../../assets/lixeira.png"
import { dias } from "../../constants/dias";

export default function Habito() {
    return (
        <ContainerHabito>
            <Titulo>
                Qual o habito
                <img src={lixeira} alt="lixeira" />
            </Titulo>
            <Dias>
                {dias.map((dia,i)=>(<button key={i}> {dia} </button>))}
            </Dias>
            
        </ContainerHabito>
    )
}
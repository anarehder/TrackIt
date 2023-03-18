import { ContainerHabito, Titulo, Dias, BotaoDia } from "./styled"
import lixeira from "../../assets/lixeira.png"
import { dias } from "../../constants/dias";

export default function Habito({ id, name, days, deletar }) {

    function deletarHabito(id){
        deletar(id);
    }

    return (
        <ContainerHabito data-test="habit-container">
            <Titulo>
                <p data-test="habit-name">{name}</p>
                <img src={lixeira} alt="lixeira" data-test="habit-delete-btn" onClick={() => deletarHabito(id)} />
            </Titulo>
            <Dias>
                {dias.map((dia, i) => (
                    <BotaoDia key={i} data-test="habit-day" 
                    selecionado={days!== undefined && days.includes(i) ? "selecionado" : "" }>
                        {dia}
                    </BotaoDia>))
                }
            </Dias>

        </ContainerHabito>
    )
}
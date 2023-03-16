import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import {ContainerHabitos, TituloHabitos, ListaHabitos, AdicionarHabitos, BotoesDias, BotoesFinais} from "./styled"
import { dias } from "../../constants/dias";
import Habito from "../../components/Habito/Habito.js";

export default function HabitsPage() {

    return (
        <>
            <Header />
            <ContainerHabitos>
                <TituloHabitos>
                    Meus hábitos
                    <button data-test="habit-create-btn"> + </button>
                </TituloHabitos>
                <ListaHabitos>
                Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
                </ListaHabitos>
                <AdicionarHabitos data-test="habit-create-container">
                    <input type="text" placeholder="nome do hábito" data-test="habit-name-input"/>
                    <BotoesDias>
                        {dias.map((dia,i)=>(<button key={i} data-test="habit-day"> {dia} </button>))}
                    </BotoesDias>
                    <BotoesFinais>
                        <div data-test="habit-create-cancel-btn">Cancelar</div>
                        <button data-test="habit-create-save-btn">Salvar</button>
                    </BotoesFinais>
                </AdicionarHabitos>
                <Habito/>
                <Habito/>
                <Habito/>
            </ContainerHabitos>
            <Footer />
        </>
    )
}
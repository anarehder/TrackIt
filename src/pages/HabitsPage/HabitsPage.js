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
                    <button> + </button>
                </TituloHabitos>
                <ListaHabitos>
                Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
                </ListaHabitos>
                <AdicionarHabitos>
                    <input type="text" placeholder="nome do hábito"/>
                    <BotoesDias>
                        {dias.map((dia,i)=>(<button key={i}> {dia} </button>))}
                    </BotoesDias>
                    <BotoesFinais>
                        <div>Cancelar</div>
                        <button>Salvar</button>
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
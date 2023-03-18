import Footer from "../../components/Footer/Footer";
import HabitoDiario from "../../components/HabitoDiario/HabitoDiario";
import Header from "../../components/Header/Header";
import { ContainerToday, QuantidadeConcluida } from "./styled";
import { URL_BASE } from "../../constants/url.js"
import { UserContext } from "../../contexts/UserContext"
import { PorcentagemContext } from "../../contexts/PorcentagemContext.js"
import { useContext, useState, useEffect } from "react"
import axios from "axios";
import dayjs from 'dayjs'
import {diasDaSemana} from "../../constants/dias"

export default function TodayPage() {
    const [userDados, ] = useContext(UserContext);
    const [habitosDeHoje, setHabitosDeHoje] = useState([]);
    const [valorPorcentagem , setValorPorcentagem] = useContext(PorcentagemContext);
    const [recarregar, setRecarregar] = useState(false);

    const diaDeHoje = dayjs().get("day");

    const config = {
        headers: {
            "Authorization": `Bearer ${userDados.token}`
        }
    }

    useEffect(() => {
        
        const url = `${URL_BASE}/habits/today`;
        
        const requisicao = axios.get(url, config);

        requisicao.then(resposta => {
            console.log(resposta.data);
            setHabitosDeHoje(resposta.data);
        });

        requisicao.catch(erro => {
            console.log(erro.response.data);
        });

    }, [recarregar]); 
    
    function marcarHabito(id, body, feito){
        let url = "";
        if (feito === false) {
            url = `${URL_BASE}/habits/${id}/check`;
        } else {
            url = `${URL_BASE}/habits/${id}/uncheck`;
        }
        const requisicao = axios.post(url, body, config);
        requisicao.then(resposta => {
            console.log("tarefa feita!",resposta.data);
            calculaPorcentagem();
            setRecarregar(!recarregar);
        });

        requisicao.catch(erro => {
            console.log(erro.response.data);
        });
    }
    if (habitosDeHoje.length > 0){
        calculaPorcentagem();
    }

    function calculaPorcentagem(){
        const tarefasTotais = habitosDeHoje.length;
        const habitosFeitos = habitosDeHoje.filter((h)=> h.done === true);
        const tarefasFeitas = habitosFeitos.length;
        const porcentagemAtual = Math.round((tarefasFeitas/tarefasTotais)*100);
        setValorPorcentagem(porcentagemAtual);
    }

    return (
        <ContainerToday status={""}>
            <Header />
            <h1 data-test="today">{diasDaSemana[diaDeHoje]}, {dayjs().get("date")}/{dayjs().get("month")+1}</h1>
            <QuantidadeConcluida data-test="today-counter" valorPorcentagem={valorPorcentagem}>
                {valorPorcentagem === 0 ? "Nenhum hábito concluído ainda" :
                `${valorPorcentagem}% dos hábitos concluídos`}
            </QuantidadeConcluida>
            {habitosDeHoje.length !== 0 && habitosDeHoje.map((h)=>(
                <HabitoDiario key={h.name} name={h.name} id={h.id} atual={h.currentSequence}
                feito={h.done} recorde={h.highestSequence} marcarHabito={marcarHabito}/>
            ))}
            <Footer />
        </ContainerToday>
    )
}
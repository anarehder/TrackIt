import Footer from "../../components/Footer/Footer";
import HabitoDiario from "../../components/HabitoDiario/HabitoDiario";
import Header from "../../components/Header/Header";
import { ContainerToday } from "./styled";
import { URL_BASE } from "../../constants/url.js"
import { UserContext } from "../../contexts/UserContext"
import { useContext, useState, useEffect } from "react"
import axios from "axios";
import dayjs from 'dayjs'
import {diasDaSemana} from "../../constants/dias"

export default function TodayPage() {
    const [userDados, ] = useContext(UserContext);
    const [habitosDeHoje, setHabitosDeHoje] = useState([]);

    const diaDeHoje = dayjs().get("day");

    useEffect(() => {
        
        const url = `${URL_BASE}/habits/today`;
        const config = {
            headers: {
                "Authorization": `Bearer ${userDados.token}`
            }
        }
        const requisicao = axios.get(url, config);

        requisicao.then(resposta => {
            console.log(resposta.data);
            setHabitosDeHoje(resposta.data);
        });

        requisicao.catch(erro => {
            console.log(erro.response.data);
        });

    }, []); 
    if (habitosDeHoje.length === 0){
        return (
            <ContainerToday status={""}>
            <Header />
            <h1 data-test="today">{diasDaSemana[diaDeHoje]}, {dayjs().get("date")}/{dayjs().get("month")+1}</h1>
            <h2 data-test="today-counter" >Nenhum hábito concluído ainda</h2>
            <Footer />
        </ContainerToday>
        )
    }

    return (
        <ContainerToday status={""}>
            <Header />
            <h1 data-test="today">{diasDaSemana[diaDeHoje]}, {dayjs().get("date")}/{dayjs().get("month")+1}</h1>
            <h2 data-test="today-counter" >Nenhum hábito concluído ainda</h2>
            {habitosDeHoje.map((h)=>(
                <HabitoDiario habitos={h}/>

            ))}
            <HabitoDiario />
            <Footer />
        </ContainerToday>
    )
}
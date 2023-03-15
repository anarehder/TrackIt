import Footer from "../../components/Footer/Footer";
import HabitoDiario from "../../components/HabitoDiario/HabitoDiario";
import Header from "../../components/Header/Header";
import { ContainerToday } from "./styled";

export default function TodayPage() {
    return (
        <ContainerToday status={""}>
            <Header />
            <h1>Segunda, 17/05</h1>
            <h2 >Nenhum hábito concluído ainda</h2>
            <HabitoDiario />
            <HabitoDiario />
            <HabitoDiario />
            <Footer />
        </ContainerToday>
    )
}
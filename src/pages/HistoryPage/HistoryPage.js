import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { ContainerHistory } from "./styled";

export default function HistoryPage() {
    return (
        <ContainerHistory>
            <Header/>
            <h1>Histórico</h1>
            <h2>Em breve você poderá ver o histórico dos seus hábitos aqui!</h2>
            <Footer/>
        </ContainerHistory>
    )
}

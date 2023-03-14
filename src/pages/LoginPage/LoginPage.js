import { ContainerLogin, DadosEntrada } from "./styled"
import logo from "../../assets/logo-completa.svg"
import { Link } from "react-router-dom"

export default function LoginPage() {
    return (
        <ContainerLogin>
            <img src={logo} alt="logo" />
            <DadosEntrada>
                <input placeholder="email"></input>
                <input placeholder="senha"></input>
                <button> Entrar </button>
            </DadosEntrada>
            <Link to={"/cadastro"}>Não tem uma conta? Cadastre-se!</Link>
            
        </ContainerLogin >        
    )
}
import { ContainerRegister, DadosCadastro } from "./styled"
import logo from "../../assets/logo-completa.svg"
import { Link } from "react-router-dom"

export default function RegisterPage() {
    return (
        <ContainerRegister>
            <img src={logo} alt="logo" />
            <DadosCadastro>
                <input placeholder="email"></input>
                <input placeholder="senha"></input>
                <input placeholder="nome"></input>
                <input placeholder="foto"></input>
                <button> Cadastrar </button>
            </DadosCadastro>
            <Link to={"/"}>Já tem uma conta? Faça login!</Link>
            
        </ContainerRegister >  
    )
}
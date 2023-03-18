import { ContainerLogin, DadosEntrada } from "./styled"
import logo from "../../assets/logo-completa.svg"
import { URL_BASE } from "../../constants/url.js"
import { ThreeDots } from 'react-loader-spinner';
import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../../contexts/UserContext";

export default function LoginPage() {

    const [form, setForm] = useState({ email: "", password: "" });
    const [desabilitado, SetDesabilitado] = useState(false);
    const navigate = useNavigate();
    const [ , setUserDados] = useContext(UserContext);

    const url = `${URL_BASE}/auth/login`;

    
    function handleChange(event) {
        const itemAtualizado = { ...form, [event.target.name]: event.target.value }
        setForm(itemAtualizado);
    }

    function logar(event) {
        event.preventDefault()
        const body = form;
        const promisse = axios.post(url, body);
        SetDesabilitado(true);
        promisse.then(resposta => {
            console.log(resposta.data);
            setUserDados(resposta.data);
            navigate("/hoje");
        })
        promisse.catch(erro => {
            console.log(erro.response.data);
            alert(erro.response.data.message);
            SetDesabilitado(false);
        })
    }

    return (
        <ContainerLogin>
            <img src={logo} alt="logo" />
            <DadosEntrada>
                <form onSubmit={logar}>
                    <input
                        data-test="email-input"
                        placeholder="email"
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        disabled={desabilitado}
                        required
                    />
                    <input
                        data-test="password-input"
                        placeholder="senha"
                        type="password"
                        name="password"
                        value={form.password}
                        onChange={handleChange}
                        disabled={desabilitado}
                        required
                    />
                    <button
                        data-test="login-btn"
                        type="submit" disabled={desabilitado}>
                        {desabilitado === true ? <ThreeDots color="#FFFFFF" height="50px" width="50px" /> : "Entrar"}
                    </button>
                </form>
                
            </DadosEntrada>
            <Link to={"/cadastro"} data-test="signup-link">Não tem uma conta? Cadastre-se!</Link>

        </ContainerLogin >
    )
}
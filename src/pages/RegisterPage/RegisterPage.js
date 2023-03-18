import { ContainerRegister, DadosCadastro } from "./styled"
import logo from "../../assets/logo-completa.svg"
import { URL_BASE } from "../../constants/url.js"
import { ThreeDots } from 'react-loader-spinner';
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";


export default function RegisterPage() {
    const [form, setForm] = useState({ email: "", name: "", image: "", password: "" });
    const [desabilitado, SetDesabilitado] = useState(false);
    const navigate = useNavigate();

    const url = `${URL_BASE}/auth/sign-up`;

    function handleChange(event) {
        const itemAtualizado = { ...form, [event.target.name]: event.target.value }
        setForm(itemAtualizado);
    }

    function registrar(event) {
        event.preventDefault()
        const body = form;
        const promisse = axios.post(url, body);
        SetDesabilitado(true);
        promisse.then(resposta => {
            console.log(resposta.data);
            navigate("/");
        })
        promisse.catch(erro => {
            console.log(erro.response.data);
            SetDesabilitado(false);
            alert(erro.response.data.message);
            //poderia setar o form de novo para zerar os inputs
        })
    }

    return (
        <ContainerRegister>
            <img src={logo} alt="logo" />
            <DadosCadastro>
                <form onSubmit={registrar}>
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
                    <input
                        data-test="user-name-input"
                        placeholder="nome"
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        disabled={desabilitado}
                        required
                    />
                    <input
                        data-test="user-image-input"
                        placeholder="foto"
                        type="url"
                        name="image"
                        value={form.image}
                        onChange={handleChange}
                        disabled={desabilitado}
                        required
                    />
                    <button
                        data-test="signup-btn"
                        type="submit" disabled={desabilitado}>
                        {desabilitado === true ? <ThreeDots color="#FFFFFF" height="50px" width="50px" /> : "Cadastrar"}
                    </button>
                </form>
            </DadosCadastro>
            <Link to={"/"} data-test="login-link">Já tem uma conta? Faça login!</Link>

        </ContainerRegister >
    )
}
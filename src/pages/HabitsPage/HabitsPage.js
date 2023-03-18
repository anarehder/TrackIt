import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { ContainerHabitos, TituloHabitos, ListaHabitos, AdicionarHabitos, BotoesDias, BotoesFinais } from "./styled"
import Habito from "../../components/Habito/Habito.js";
import BotaoDiaSemana from "../../components/BotaoDiaSemana/BotaoDiaSemana.js";
import { URL_BASE } from "../../constants/url.js"
import { UserContext } from "../../contexts/UserContext"
import { useContext, useState, useEffect } from "react"
import axios from "axios";
import { ThreeDots } from 'react-loader-spinner';
import { dias } from "../../constants/dias";

export default function HabitsPage() {
    const [form, setForm] = useState({ name: "", days: [] });
    const [userDados,] = useContext(UserContext);
    const [listaDeHabitos, setListaDeHabitos] = useState([]);
    const [addHabito, setAddHabito] = useState(false);
    const [dia, setDia] = useState([]);
    const [desabilitado, SetDesabilitado] = useState(false);

    const config = {
        headers: {
            "Authorization": `Bearer ${userDados.token}`
        }
    }
    console.log(form);
    
    useEffect(() => {

        const url = `${URL_BASE}/habits`;

        const requisicao = axios.get(url, config);

        requisicao.then(resposta => {
            console.log(resposta.data);
            setListaDeHabitos(resposta.data);
        });

        requisicao.catch(erro => {
            console.log(erro.response.data);
        });

    }, []);

    function adicionar() {
        setAddHabito(!addHabito);
    }

    function handleChange(event) {
        const itemAtualizado = { ...form, [event.target.name]: event.target.value }
        setForm(itemAtualizado);
        console.log(itemAtualizado);
    }

    function enviarHabito(e) {
        e.preventDefault();
        SetDesabilitado(true);

        const body = form;
        console.log(body);

        const url = `${URL_BASE}/habits`;
        
        const requisicao = axios.post(url, body, config);

        requisicao.then(resposta => {
            console.log(resposta.data);
            setListaDeHabitos([...listaDeHabitos, resposta.data]);
            setForm({ name: "", days: [] });
            setDia([]);
            setAddHabito(false);
            SetDesabilitado(false);
        });

        requisicao.catch(erro => {
            console.log(erro.response.data);
            SetDesabilitado(false);
        });
    }

    function cancelar(){
        setAddHabito(!addHabito);
    }

    function deletar(id){
       const confirmar = window.confirm("Vocẽ realmente gostaria de apagar este hábito?");
        if(confirmar){
            const url = `${URL_BASE}/${id}`;
            axios.delete(url,config);
            setListaDeHabitos(listaDeHabitos.filter(h => h.id !== id));
        }
    }

    function addDay(index) {
        const isSelected = dia.some((d) => d === index);
        if (isSelected) {
            const newList = dia.filter((d) => d !== index);
            setDia(newList);
            const itemAtualizado = { ...form, days: newList }
            setForm(itemAtualizado);
        } else {
            setDia([...dia, index])
            const itemAtualizado = { ...form, days: [...dia, index] }
            setForm(itemAtualizado);
        }
    }

    return (
        <>
            <Header />
            <ContainerHabitos>
                <TituloHabitos>
                    Meus hábitos
                    <button data-test="habit-create-btn" onClick={adicionar}> + </button>
                </TituloHabitos>
                <AdicionarHabitos data-test="habit-create-container" addHabito={addHabito}>
                    <form onSubmit={enviarHabito}>
                        <input type="text"
                            placeholder="nome do hábito"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            data-test="habit-name-input"
                            required
                        />
                        <BotoesDias>
                            {dias.map((dia, i) => <BotaoDiaSemana key={dia} dia={dia} index={i} addDay={addDay} desabilitado={desabilitado} />)}
                        </BotoesDias>
                        <BotoesFinais>
                            <div data-test="habit-create-cancel-btn" type="button" onClick={cancelar}>Cancelar</div>
                            <button data-test="habit-create-save-btn" type="submit" disabled={desabilitado}>{desabilitado === true ? <ThreeDots color="#FFFFFF" height="50px" width="50px" /> : "Salvar"}</button>
                        </BotoesFinais>
                    </form>
                </AdicionarHabitos>
                {listaDeHabitos.length === 0 && <ListaHabitos> Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear! </ListaHabitos>}
                {listaDeHabitos.map((l) => <Habito key={l.id} id={l.id} name={l.name} days={l.days} deletar={deletar}/>)}
            </ContainerHabitos>
            <Footer />
        </>
    )
}
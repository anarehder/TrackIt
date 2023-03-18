import { BotaoDia } from "./styled"
import { useState, useEffect } from "react"

export default function BotaoDiaSemana({dia, index, addDay, desabilitado}) {
    const [selecionado, setSelecionado] = useState(false);

    useEffect(() => {
        setSelecionado(false);
    }, [desabilitado]);

    function selecionaDia(index){
        addDay(index);
        setSelecionado(!selecionado);
    }


    return (
        <BotaoDia data-test="habit-day" selecionado={selecionado}
            type="button" disabled={desabilitado}
            onClick={() => selecionaDia(index)}>
            {dia}
        </BotaoDia>
    )
}
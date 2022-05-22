import { useEffect, useState } from "react";
import { Estado } from "../../types/Estado";
import { MaquinaTuring } from "../../types/MaquinaTuring";
import { Entrada } from "../Entrada";

export function Menu(){
    const [estadoAtual, setEstadoAtual] = useState<Estado>();
    const [posicao, setPosicao] = useState<number>(0);
    const [maquina, setMaquina] = useState<MaquinaTuring>();
    const [fita, setFita] = useState<string[]>([]);
    const [erro, setErro] = useState<string>("");
    const [sucesso, setSucesso] = useState<string>("");

    useEffect(()=>{
        setFita([maquina?.simboloBranco ?? ""]);
    },[])

    function passo(){
        const transicao = estadoAtual?.trasicoes.find((value) => value.simboloEntrada === fita[posicao])
        if(transicao !== undefined) {
            //Escreve na fita
            const fitaAuxiliar = [...fita]
            fitaAuxiliar[posicao] = transicao.simboloSaida;
            setFita(fitaAuxiliar);

            //Move posicao na fita
            switch(transicao.direcao){
                case 'D': setPosicao(posicao + 1); break;
                case 'E':setPosicao(posicao - 1); break;
            }
            
            //Muda estado atual
            const proxEstado = maquina?.estados.find((value) => value.nome === transicao.estadoDestino)
            setEstadoAtual(proxEstado);
        }else if(maquina?.estadosFinais.find((value) => value === estadoAtual?.nome)){
            setSucesso("ACEITA")
        }else if(maquina?.alfabetoFita.find((value) => value === fita[posicao]) === undefined){
            setErro("REJEITA: Simbolo não pertence ao alfabeto.")
        }else if(fita[posicao] === '|'){
            setErro("REJEITA: Índice da fita inválido.")
        }else{
            setErro("REJEITA: Nenhuma transição para esse símbolo encontrada.")
        }
    }

    return(
        <div>
            <Entrada setFita={setFita} fita={fita}/>
        </div>
    );
}

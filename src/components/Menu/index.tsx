import { useEffect, useState } from "react";
import { Estado } from "../../types/Estado";
import { MaquinaTuring } from "../../types/MaquinaTuring";
import { Entrada } from "../Entrada";
import data from "../data/maquina.json";

export function Menu(){
    const [estadoAtual, setEstadoAtual] = useState<Estado>();
    const [posicao, setPosicao] = useState<number>(0);
    const [maquina, setMaquina] = useState<MaquinaTuring>();
    const [fita, setFita] = useState<string[]>([]);
    const [erro, setErro] = useState<string>("");
    const [sucesso, setSucesso] = useState<string>("");
    
    const passos = [];

    useEffect(()=>{
        return () =>{
            setMaquina(data);
            setEstadoAtual(maquina?.estados.find((value) => value.nome ===    maquina.estadoInicial))
            setFita([maquina?.simboloBranco ?? ""]);
        }
    },[]);

    function limpa(){
        setPosicao(0);
        setEstadoAtual(maquina?.estados.find((value) => value.nome ===    maquina.estadoInicial))
        setFita([maquina?.simboloBranco ?? ""]);
        setErro("");
        setSucesso("");
    }

    function acelerar(){
        while(erro === "" && sucesso === ""){
            passo()
        }
    }

    function passo(){
        console.log(fita);

        //Salva passos
        let fitaString = "";
        fita.map((value) => fitaString.concat(value));
        passos.push(fitaString);

        //Aumenta tamanho da fita
        if(posicao === fita.length) fita.push(maquina?.simboloBranco?? "");

        const transicao = estadoAtual?.transicoes.find((value) => value.simboloEntrada === fita[posicao])
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
        }else{
            console.log(estadoAtual)
            setErro("REJEITA: Nenhuma transição para esse símbolo encontrada.")
        }
    }

    return(
        <div>
            <p>Estado atual: {estadoAtual?.nome}</p>
            <Entrada setFita={setFita} fita={fita}/>
            <button onClick={passo}>Proximo</button>
            {/* <button onClick={acelerar}>Acelerar</button> */}
            <button onClick={limpa}>Limpar</button>
            <br />
            {fita}
            <p>{sucesso}</p>
            <p>{erro}</p>
        </div>
    );
}

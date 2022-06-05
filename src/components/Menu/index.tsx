import { useEffect, useState } from 'react';
import { Estado } from '../../types/Estado';
import { MaquinaTuring } from '../../types/MaquinaTuring';
import { Entrada } from '../Entrada';
import data from '../data/maquina.json';
import { Maquina } from '../Maquina';
import {
  ButtonWrapper,
  PassosWrapper,
  WrapperDescription,
  WrapperFita,
  WrapperMachine,
  WrapperMenu,
  FitaPosicao
} from './styles';

export function Menu() {
  const [estadoAtual, setEstadoAtual] = useState<Estado>();
  const [posicao, setPosicao] = useState<number>(0);
  const [maquina, setMaquina] = useState<MaquinaTuring>();
  const [fita, setFita] = useState<string[]>([]);
  const [erro, setErro] = useState<string>('');
  const [sucesso, setSucesso] = useState<string>('');
  const [passos, setPassos] = useState<string[]>([]);

  useEffect(() => {
    return () => {
      setMaquina(data);
    };
  }, []);

  useEffect(() => {
    setEstadoAtual(
      maquina?.estados.find((value) => value.nome === maquina.estadoInicial)
    );
  }, [maquina]);

  useEffect(() => {
    if(!isFinished()){
      //Salva passos
      let fitaString = fita.join('');
      passos.push(fitaString + ' - ');
    }
  }, [fita]);

  function limpa() {
    setPosicao(0);
    setEstadoAtual(
      maquina?.estados.find((value) => value.nome === maquina.estadoInicial)
    );
    setFita([">",maquina?.simboloBranco ?? '']);
    setErro('');
    setSucesso('');
    setPassos([]);
  }

  function isFinished(): boolean{
    return sucesso.trim() !== '' || erro.trim() !=='';
  }

  function resultado() {
    setErro('');
    setSucesso('');
    if (maquina?.estadosFinais.find((value) => value === estadoAtual?.nome))
      setSucesso('ACEITA');
    else if (
      maquina?.alfabetoFita.find((value) => value === fita[posicao]) ===
      undefined
    )
      setErro('REJEITA: Simbolo não pertence ao alfabeto.');
    else setErro('REJEITA: Nenhuma transição para esse símbolo encontrada.');
  }

  function passo() {
    //Verifica se simbolo existe no alfabeto da fita
    const simboloExiste = maquina?.alfabetoFita.find((value) => value === fita[posicao]);

    //Aumenta tamanho da fita
    if (posicao === fita.length) fita.push(maquina?.simboloBranco ?? '');

    const transicao = estadoAtual?.transicoes.find(
      (value) => value.simboloEntrada === fita[posicao]
    );

    if (transicao !== undefined && simboloExiste) {
      //Escreve na fita
      const fitaAuxiliar = [...fita];
      fitaAuxiliar[posicao] = transicao.simboloSaida;
      setFita(fitaAuxiliar);

      //Move posicao na fita
      switch (transicao.direcao) {
        case 'D':
          setPosicao(posicao + 1);
          break;
        case 'E':
          setPosicao(Math.max(posicao - 1, 0));
          break;
      }

      //Muda estado atual
      const proxEstado = maquina?.estados.find(
        (value) => value.nome === transicao.estadoDestino
      );
      setEstadoAtual(proxEstado);
    } else {
      resultado();
    }
  }

  return (
    <WrapperMenu>
      <WrapperDescription>
        <h4>Máquina:</h4>
        <Maquina maquina={maquina} />
      </WrapperDescription>
      <WrapperMachine>
        <p>Estado atual: {estadoAtual?.nome}</p>
        <Entrada
          setFita={setFita}
          limpaFita={limpa}
          simboloBranco={maquina !== undefined ? maquina.simboloBranco : ''}
        />
        <ButtonWrapper onClick={passo}>Proximo</ButtonWrapper>
        <ButtonWrapper onClick={limpa}>Limpar </ButtonWrapper>
        <br />
        <WrapperFita>{fita.map((e, index) => {
          return <FitaPosicao isActive={index==posicao}>{e}</FitaPosicao>
        })}</WrapperFita>
        <p>{sucesso}</p>
        <p>{erro}</p>
      </WrapperMachine>
      <PassosWrapper>{passos}</PassosWrapper>
    </WrapperMenu>
  );
}

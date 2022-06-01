import { MaquinaTuring } from '../../types/MaquinaTuring';
import { Transicao } from '../../types/Transicao';
import { StatesWrapper, WrapperMaquina } from './styles';

interface Props {
  maquina: MaquinaTuring | undefined;
}

export function Maquina({ maquina }: Props) {
  function formataTransicao(transicao: Transicao, estado: string) {
    return `δ(${estado},${transicao.simboloEntrada}) = (${transicao.estadoDestino}, ${transicao.simboloSaida}, ${transicao.direcao})`;
  }

  function montaTransicoes(): string[] {
    if (maquina === undefined) return [''];

    const retorno: string[] = [];

    maquina.estados.forEach((value) => {
      value.transicoes.forEach((tr) => {
        retorno.push(formataTransicao(tr, value.nome));
      });
    });

    return retorno;
  }

  return maquina === undefined ? (
    <div></div>
  ) : (
    <WrapperMaquina>
      Estados:{' '}
      {maquina.estados.map((estado) => (
        <span>{estado.nome + ' '}</span>
      ))}
      <br />
      Transicoes:{' '}
      {montaTransicoes().map((tr) => (
        <p>{tr}</p>
      ))}
      <br />
      Alfabeto: {maquina.alfabeto + ' '}
      <br />
      AlfabetoFita: {maquina.alfabetoFita + ' '}
      <br />
      Estado inicial: {maquina.estadoInicial}
      <br />
      Estados finais: {maquina.estadosFinais + ' '}
      <br />
      Simbolo branco: {maquina.simboloBranco}
    </WrapperMaquina>
  );
}

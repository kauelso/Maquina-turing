import { Transicao } from "./Transicao";

export interface Estado{
    nome: string,
    transicoes: Transicao[]
}
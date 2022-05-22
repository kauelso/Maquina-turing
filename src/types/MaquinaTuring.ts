import { Estado } from "./Estado";

export interface MaquinaTuring{
    estados: Estado[],
    estadoInicial: string,
    alfabeto: string[],
    alfabetoFita: string[],
    simboloBranco: string,
    estadosFinais: string[]
}
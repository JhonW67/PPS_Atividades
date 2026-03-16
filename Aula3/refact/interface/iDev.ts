import { Funcionario } from "./funcionario";
import { PontoRegistravel } from "./pontoRegistravel";

export interface IDev extends Funcionario, PontoRegistravel {
    escreverCodigo(): void;
}
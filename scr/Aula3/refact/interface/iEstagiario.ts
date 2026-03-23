import { Funcionario } from "./funcionario";
import { PontoRegistravel } from "./pontoRegistravel";

export interface IEstagiario extends Funcionario, PontoRegistravel {
    aprender(): void;
    bolsaAuxilio(): void;
    escreverCodigo(): void;
}
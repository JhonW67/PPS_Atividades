import { Funcionario } from "./funcionario";
import { PontoRegistravel } from "./pontoRegistravel";

export interface IGerente extends Funcionario, PontoRegistravel {
    gerenciarEquipe(): void;
}
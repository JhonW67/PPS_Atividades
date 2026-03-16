import { Funcionario } from "./funcionario";

export interface IFreelancer extends Funcionario {
    escreverCodigo(): void;
    entregar(): void;
}
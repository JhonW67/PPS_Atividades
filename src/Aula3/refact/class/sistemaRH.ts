import { Funcionario } from "../interface/funcionario";
import { IGerente } from "../interface/iGerente";
import { IDev } from "../interface/iDev";
import { IFreelancer } from "../interface/iFreelancer";
import { IEstagiario } from "../interface/iEstagiario";
import { PontoRegistravel } from "../interface/pontoRegistravel";

class SistemaRH {
    processarFuncionario(funcionario: Funcionario): void {
        funcionario.trabalhar();
        funcionario.receberSalario();
    }
    processarGerente(gerente: IGerente): void {
        gerente.gerenciarEquipe();
    }
    processarProgramador(programador: IDev): void {
        programador.escreverCodigo();
    }
    processarPonto(funcionario: PontoRegistravel): void {
        funcionario.registrarPonto();
    }
    processarTrabalho(freelancer: IFreelancer): void {
        freelancer.trabalhar();
        freelancer.escreverCodigo();
        freelancer.entregar();
    }
    processarEstagio(estagiario: IEstagiario): void {
        estagiario.trabalhar();
        estagiario.escreverCodigo();
        estagiario.registrarPonto();
        estagiario.bolsaAuxilio();
        estagiario.aprender();
    }
}
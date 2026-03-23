import { IGerente } from "../interface/iGerente";

class Gerente implements IGerente {
    receberSalario(): void {
        console.log("Gerente recebendo salário");
    }

    gerenciarEquipe(): void {
        console.log("Gerente gerenciando equipe");
    }

    trabalhar(): void {
        console.log("Gerente trabalhando");
    }

    registrarPonto(): void {
        console.log("Gerente registrando ponto");
    }
}
import { IDev } from "../interface/iDev";

class Programador implements IDev{
    trabalhar(): void {
        console.log("Programador trabalhando");
    }

    registrarPonto(): void {
        console.log("Programador registrando ponto");
    }

    receberSalario(): void {
        console.log("Programador recebendo salário");
    }

    escreverCodigo(): void {
        console.log("Programador escrevendo código");
    }
}
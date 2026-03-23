import { IEstagiario } from "../interface/iEstagiario";

class Estagiario implements IEstagiario {
    trabalhar(): void {
        console.log("Estagiário trabalhando");
    }

    receberBeneficios(): void {
        console.log("Estagiário recebendo bolsa");
    }

    registrarPonto(): void {
        console.log("Estagiário registrando ponto");
    }

    escreverCodigo(): void {
        console.log("Estagiário escrevendo código");
    }

    aprender(): void {
        console.log("Estagiário aprendendo");
    }
}
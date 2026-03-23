import { IFreelancer } from "../interface/iFreelancer";



class Freelancer implements IFreelancer{
    trabalhar(): void {
        console.log("Freelancer trabalhando");
    }
    entregar(): void {
        console.log("Freelancer entregando projeto");
    }
    escreverCodigo(): void {
        console.log("Freelancer escrevendo código");
    }
}
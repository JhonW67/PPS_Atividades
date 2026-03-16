interface Funcionario {
trabalhar(): void;
registrarPonto(): void;
receberSalario(): void;
gerenciarEquipe(): void;
escreverCodigo(): void;
}
class Gerente implements Funcionario {
trabalhar(): void { console.log("Gerente trabalhando"); }
registrarPonto(): void { console.log("Ponto registrado"); }
receberSalario(): void { console.log("Salário recebido"); }
gerenciarEquipe(): void { console.log("Gerenciando equipe"); }
escreverCodigo(): void {
throw new Error("Gerente não escreve código");
}
}

class Desenvolvedor implements Funcionario {
trabalhar(): void { console.log("Desenvolvedor trabalhando"); }
registrarPonto(): void { console.log("Ponto registrado"); }
receberSalario(): void { console.log("Salário recebido"); }
gerenciarEquipe(): void {
throw new Error("Dev não gerencia equipe");
}
escreverCodigo(): void { console.log("Escrevendo código"); }
}

class Estagiario implements Funcionario {
trabalhar(): void { console.log("Estagiário trabalhando"); }
registrarPonto(): void { console.log("Ponto registrado"); }
receberSalario(): void {
throw new Error("Estagiário recebe bolsa, não salário");
}
gerenciarEquipe(): void {
throw new Error("Estagiário não gerencia");
}
escreverCodigo(): void { console.log("Estagiário escrevendo código"); }
}
### Parte 1

#### LSP — Liskov Substitution Principle

##### Trecho que viola:
Classes Gerente, Desenvolvedor e Estagiario implementam Funcionario, mas alguns métodos dão erro (throw new Error).

##### Exemplo:

escreverCodigo(): void {
throw new Error("Gerente não escreve código");
}

##### Por que é violação: 
Se uma classe implementa Funcionario, ela deveria poder substituir outra sem quebrar o sistema. Mas aqui alguns métodos não funcionam para certas classes.

##### Impacto: 
O sistema pode quebrar em tempo de execução quando chamar métodos que não fazem sentido para aquele funcionário.


#### ISP (Interface Segregation Principle)

##### Trecho que viola:

interface Funcionario {
trabalhar(): void;
registrarPonto(): void;
receberSalario(): void;
gerenciarEquipe(): void;
escreverCodigo(): void;
}

##### Por que é violação:
A interface é grande demais e força classes a implementar métodos que não usam.

##### Exemplo:

Gerente não escreve código, Dev não gerencia equipe e o Estagiário não recebe salário

##### Impacto:
Código fica mal estruturado e cheio de exceções (throw new Error).


#### DIP (Dependency Inversion Principle)

##### Trecho que viola:
As classes dependem diretamente da interface grande Funcionario, que mistura várias responsabilidades.

##### Por que é violação:
O ideal seria depender de interfaces menores e mais específicas (ex: Programador, Gestor, Pagavel).

##### Impacto:
Sistema fica difícil de manter e evoluir, porque qualquer mudança na interface afeta todas as classes.
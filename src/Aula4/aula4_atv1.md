# Analise dos Code Smells- atividade 4

## 1. God Class
**Localização:** Classe SistemaBiblioteca  
**Problema:**  
A classe concentra 6 responsabilidades distintas (gerenciar livros, usuários, empréstimos, relatórios, multas, envio de emails), violando o SRP. Isso torna difícil entender, testar e manter o código.

## 2. Long Method
**Localização:** realizarEmprestimo() (40+ linhas)  
**Problema:**  
Executa múltiplas tarefas (busca, validação, cálculo de limites, persistência, notificação). Difícil de ler, testar e reutilizar.

## 3. Primitive Obsession
**Localização:** livros: string[], usuarios: string[], emprestimos: string[]  
**Problema:**  
Uso de arrays primitivos para representar entidades complexas (Livro, Usuario, Emprestimo). Sem encapsulamento, validação ou legibilidade.

## 4. Switch Statements
**Localização:** gerarRelatorio(tipo: string)  
**Problema:**  
Cadeia de if/else para tipos de relatório viola OCP. Difícil adicionar novos tipos sem modificar o método existente.

## 5. Feature Envy
**Localização:** realizarEmprestimo() acessa this.livros e this.usuarios  
**Problema:**  
Método usa mais dados de outros contextos (livros/usuarios) do que próprios. A lógica deveria estar nas classes Livro/Usuario.

## 6. Data Clumps
**Localização:** Parâmetros de adicionarLivro(titulo, autor, isbn)  
**Problema:**  
Os 3 parâmetros sempre aparecem juntos formando um "Livro". Deveriam ser encapsulados em classe própria.
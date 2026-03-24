# Parte 3 – Documentação dos Code Smells e Refatorações

<table>
        <thead>
            <tr>
                <th>#</th>
                <th>Code Smell</th>
                <th>Localização</th>
                <th>Problema</th>
                <th>Refatoração Proposta</th>
                <th>Técnica</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td><strong>God Class</strong></td>
                <td><code>SistemaBiblioteca</code> (original)</td>
                <td>A classe concentrava 6 responsabilidades: livros, usuários, empréstimos, relatórios, multas e envio de e-mail, violando o SRP. Dificultava entendimento, testes e manutenção.</td>
                <td>Criar classes específicas: <code>LivroService</code>, <code>UsuarioService</code>, <code>EmprestimoService</code>, <code>RelatorioService</code>, <code>NotificacaoService</code>. <code>SistemaBiblioteca</code> tornou-se uma fachada que orquestra esses serviços.</td>
                <td><strong>Extract Class</strong></td>
            </tr>
            <tr>
                <td>2</td>
                <td><strong>Long Method</strong></td>
                <td><code>realizarEmprestimo()</code> (original)</td>
                <td>O método possuía mais de 40 linhas, realizando validações, buscas, cálculo de limites, persistência e notificações. Dificultava leitura, testes e reuso.</td>
                <td>Dividir o método em etapas menores: <code>buscarLivroDisponivel()</code>, <code>buscarUsuarioComVaga()</code>, e delegar a lógica de multa para a classe <code>Emprestimo</code>. O método principal ficou com apenas 4 linhas.</td>
                <td><strong>Extract Method</strong></td>
            </tr>
            <tr>
                <td>3</td>
                <td><strong>Primitive Obsession</strong></td>
                <td>Arrays <code>livros: string[][]</code>, <code>usuarios: string[][]</code>, <code>emprestimos: string[][]</code> (original)</td>
                <td>Entidades representadas como arrays de strings, sem encapsulamento, validação ou semântica. Dados como email, ISBN eram apenas strings soltas.</td>
                <td>Criar classes de domínio (<code>Livro</code>, <code>Usuario</code>, <code>Emprestimo</code>) e Value Objects (<code>ISBN</code>, <code>Email</code>). Cada classe encapsula seus atributos e comportamentos (validação, métodos específicos).</td>
                <td><strong>Value Object</strong>, <strong>Extract Class</strong></td>
            </tr>
            <tr>
                <td>4</td>
                <td><strong>Switch Statements</strong></td>
                <td>Método <code>gerarRelatorio(tipo: string)</code> com cadeia de <code>if/else</code></td>
                <td>Adicionar um novo tipo de relatório exigia modificar o método existente, violando o OCP.</td>
                <td>Aplicar <strong>Strategy Pattern</strong>: cada tipo de relatório (<code>RelatorioLivros</code>, <code>RelatorioUsuarios</code>, <code>RelatorioEmprestimos</code>) implementa a interface <code>IRelatorioStrategy</code>. O <code>RelatorioService</code> gerencia o registro e execução das estratégias, permitindo extensão sem alteração no código existente.</td>
                <td><strong>Strategy Pattern</strong>, <strong>Extract Class</strong></td>
            </tr>
            <tr>
                <td>5</td>
                <td><strong>Feature Envy</strong></td>
                <td>Método <code>realizarEmprestimo()</code> acessava diretamente os dados de livros e usuários (original)</td>
                <td>O método manipulava dados de <code>this.livros</code> e <code>this.usuarios</code> mais do que seus próprios atributos. A lógica de limite de empréstimos e multa estava descolada das entidades que deveriam possuí-la.</td>
                <td>Mover a lógica de limite para a classe <code>Usuario</code> (método <code>definirLimite()</code> e <code>atingiuLimite()</code>) e a lógica de multa para a classe <code>Emprestimo</code> (método <code>calcularMulta()</code>). As operações de busca e validação foram transferidas para os respectivos serviços.</td>
                <td><strong>Move Method</strong>, <strong>Move Field</strong></td>
            </tr>
            <tr>
                <td>6</td>
                <td><strong>Data Clumps</strong></td>
                <td>Parâmetros repetidos <code>(titulo, autor, isbn)</code> em <code>adicionarLivro()</code> e grupos de dados como <code>(nome, email, tipo)</code> em <code>cadastrarUsuario()</code></td>
                <td>Esses grupos de parâmetros apareciam juntos em vários lugares, indicando a existência de um conceito único (Livro, Usuário) que não estava representado explicitamente.</td>
                <td>Encapsular os dados em classes (<code>Livro</code>, <code>Usuario</code>). Os parâmetros são substituídos por objetos que carregam consigo validação e comportamento.</td>
                <td><strong>Extract Class</strong>, <strong>Introduce Parameter Object</strong></td>
            </tr>
        </tbody>
    </table>
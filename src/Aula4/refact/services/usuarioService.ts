import { Usuario } from "../entities/usuario";
import { TipoUsuario } from "../enums/tipoUsuario";
import { INotificacaoService } from "../interfaces/iNotificacaoService";
import { Email } from "../value-objects/email";

export class UsuarioService {
  private usuarios: Usuario[] = [];

  constructor(private readonly notificacao: INotificacaoService) {}

  cadastrar(nome: string, email: Email, tipo: TipoUsuario): Usuario {
    const usuario = new Usuario(nome, email, tipo);
    this.usuarios.push(usuario);

    this.notificacao.enviar(
      email,
      "Bem-vindo",
      "Cadastro realizado com sucesso!"
    );

    return usuario;
  }

  buscarPorEmail(email: Email): Usuario | null {
    return this.usuarios.find((u) => u.getEmail().equals(email)) ?? null;
  }

  listarTodos(): Usuario[] {
    return [...this.usuarios];
  }
}
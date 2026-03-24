import { Email } from "../value-objects/email";

export interface INotificacaoService {
  enviar(destinatario: Email, assunto: string, corpo: string): void;
}
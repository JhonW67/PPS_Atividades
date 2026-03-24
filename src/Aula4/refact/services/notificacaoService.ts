import { INotificacaoService } from "../interfaces/iNotificacaoService";
import { Email } from "../value-objects/email";

export class NotificacaoService implements INotificacaoService {
  enviar(destinatario: Email, assunto: string, corpo: string): void {
    console.log(
      `[EMAIL] Para: ${destinatario} | Assunto: ${assunto} | Corpo: ${corpo}`
    );
  }
}
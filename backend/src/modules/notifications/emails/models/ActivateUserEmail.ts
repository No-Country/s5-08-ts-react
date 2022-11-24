import { Email } from './Email.model';

export class ActivateUserEmail extends Email {
  constructor(fromEmail: string, toEmail: string, redirectLink: string) {
    const subject = 'Activar Usuario';
    const body = `Bienvenido ah InstiConecta. Establece una contraseña y activa tu usuario con el siguiente link ${redirectLink}`;
    super(fromEmail, toEmail, subject, body);
  }
}

import { Provider } from '@nestjs/common';
import { SendGridEmailSender } from './EmailSender';

export const EMAIL_SENDER_KEY = 'EMAIL_SENDER';

export const emailProviders: Provider[] = [
  {
    provide: EMAIL_SENDER_KEY,
    useClass: SendGridEmailSender,
  },
];

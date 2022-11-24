import { Inject } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import * as sgMail from '@sendgrid/mail';
import config from 'src/config';
import { Email } from './models/Email.model';

export interface EmailSender {
  send(email: Email): Promise<void>;
}

export class SendGridEmailSender implements EmailSender {
  constructor(
    @Inject(config.KEY) private configService: ConfigType<typeof config>,
  ) {}
  async send(email: Email): Promise<void> {
    try {
      console.log(this.configService.apiKeySendGrid);
      sgMail.setApiKey(this.configService.apiKeySendGrid);
      const response = await sgMail.send({
        to: email.toEmail,
        from: email.from,
        subject: email.subject,
        text: email.body,
      });
      console.log(response, '1');
      console.log(response[0], '2');
      console.log(response[1], '3');

      console.log(response[0].body, '4');
    } catch (err) {
      console.log(err, 'err');
      console.log('eeee');
      console.log(err.response.body, 'err');
    }
  }
}

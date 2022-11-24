import { Inject, Injectable } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { OnEvent } from '@nestjs/event-emitter';
import { JwtService } from '@nestjs/jwt';
import config from 'src/config';
import { UserCreatedEvent } from 'src/modules/user/events/user.events';
import { EMAIL_SENDER_KEY } from './emails.providers';
import { EmailSender } from './EmailSender';
import { ActivateUserEmail } from './models/ActivateUserEmail';

@Injectable()
export class EmailsService {
  readonly fromEmail: string;
  constructor(
    @Inject(EMAIL_SENDER_KEY)
    private emailSender: EmailSender,
    private readonly jwtService: JwtService,
    @Inject(config.KEY) private configService: ConfigType<typeof config>,
  ) {
    this.fromEmail = this.configService.emailOfCompany;
  }

  @OnEvent(UserCreatedEvent.EVENT_NAME, { async: true })
  async sendEmailActivateUser(payload: UserCreatedEvent) {
    const token = this.jwtService.sign(
      { id: payload.user.id },
      { secret: this.configService.secret.accessToken, expiresIn: '1d' },
    );
    const RedirectLink = `${this.configService.frontendHost}/users/activate?token=${token}`;
    const email = new ActivateUserEmail(
      this.fromEmail,
      payload.user.email,
      RedirectLink,
    );

    return await this.emailSender.send(email);
  }
}

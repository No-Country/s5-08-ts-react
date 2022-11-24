import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { emailProviders } from './emails.providers';
import { EmailsService } from './emails.service';

@Module({
  imports: [JwtModule],
  providers: [EmailsService, ...emailProviders],
})
export class EmailsModule {}

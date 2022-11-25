import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { InstitutionsController } from './institutions/controllers/institutions.controller';
import { InstitutionRepositorysProviders } from './institutions/InstitutionRepository.provider';
import { InstitutionsService } from './institutions/services/institutions.service';

@Module({
  imports: [JwtModule],
  controllers: [InstitutionsController],
  providers: [InstitutionsService, ...InstitutionRepositorysProviders],
})
export class InstitutionManagementModule {}

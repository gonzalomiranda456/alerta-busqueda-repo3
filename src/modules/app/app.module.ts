import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CasesModule } from '../cases/cases.module';
import { LocationsModule } from '../locations/locations.module';
import { AlertsModule } from '../alerts/alerts.module';

@Module({
  imports: [
    CasesModule,
    LocationsModule,
    AlertsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
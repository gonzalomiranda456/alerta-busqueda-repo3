import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from '../prisma/prisma.module';
import { CasesModule } from '../cases/cases.module';
import { LocationsModule } from '../locations/locations.module';
import { AlertsModule } from '../alerts/alerts.module';

@Module({
  imports: [
    PrismaModule,
    CasesModule,
    LocationsModule,
    AlertsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
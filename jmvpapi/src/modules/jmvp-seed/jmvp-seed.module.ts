import { Module } from '@nestjs/common';
import { JmvpSeedService } from './jmvp-seed.service';
import { JmvpSeedController } from './jmvp-seed.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JmvpAuthService } from '../jmvp-auth/jmvp-auth.service';
import { JmvpAparatosModule } from '../jmvp-aparatos/jmvp-aparatos.module';
import { JmvpAuthModule } from '../jmvp-auth/jmvp-auth.module';

@Module({
  controllers: [JmvpSeedController],
  providers: [JmvpSeedService],
  imports: [JmvpAparatosModule,JmvpAuthModule]

})
export class JmvpSeedModule {}




import { Module } from '@nestjs/common';
import { JmvpIncidenciasService } from './jmvp-incidencias.service';
import { JmvpIncidenciasController } from './jmvp-incidencias.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JmvpIncidencia } from './entities/jmvp-incidencia.entity';
import { JmvpAparatosModule } from '../jmvp-aparatos/jmvp-aparatos.module';
import { JmvpAuthModule } from '../jmvp-auth/jmvp-auth.module';

@Module({
  controllers: [JmvpIncidenciasController],
  providers: [JmvpIncidenciasService],
  imports: [
    JmvpAparatosModule,
    JmvpAuthModule,
    TypeOrmModule.forFeature([JmvpIncidencia])
  ],
  exports: [
    JmvpIncidenciasService,
    TypeOrmModule
  ]
})
export class JmvpIncidenciasModule {}

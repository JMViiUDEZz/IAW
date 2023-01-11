import { Module } from '@nestjs/common';
import { JmvpAparatosService } from './jmvp-aparatos.service';
import { JmvpAparatosController } from './jmvp-aparatos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JmvpAparato } from './entities/jmvp-aparato.entity';


@Module({
  controllers: [JmvpAparatosController],
  providers: [JmvpAparatosService],
  imports: [
    TypeOrmModule.forFeature([JmvpAparato])
  ],
  exports: [
    JmvpAparatosService,
    TypeOrmModule
  ]
})
export class JmvpAparatosModule {}
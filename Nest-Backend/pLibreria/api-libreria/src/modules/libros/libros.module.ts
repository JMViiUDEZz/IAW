import { Module } from '@nestjs/common';
import { LibrosService } from './libros.service';
import { LibrosController } from './libros.controller';
import { Libro } from './entities/libro.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientesModule } from '../clientes/clientes.module';

@Module({
  controllers: [LibrosController],
  providers: [LibrosService],
  imports: [
    ClientesModule,
    TypeOrmModule.forFeature([Libro])
  ],
  exports: [ LibrosService, TypeOrmModule ]
})
export class LibrosModule {}

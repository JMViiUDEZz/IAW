import { Module } from '@nestjs/common';
import { LibrosService } from './libros.service';
import { LibrosController } from './libros.controller';
import { Libro } from './entities/libro.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [LibrosController],
  providers: [LibrosService],
  imports: [
    TypeOrmModule.forFeature([Libro]) //importamos todas las entidades
  ],
  exports: [ LibrosService, TypeOrmModule ]
})
export class LibrosModule {}

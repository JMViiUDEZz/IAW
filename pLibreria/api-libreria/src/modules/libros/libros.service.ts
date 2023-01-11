import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateLibroDto } from './dto/create-libro.dto';
import { UpdateLibroDto } from './dto/update-libro.dto';
import { Libro } from './entities/libro.entity';
import { ClientesService } from '../clientes/clientes.service';

@Injectable()
export class LibrosService {

  constructor(

    @InjectRepository(Libro)
    private readonly libroRepository: Repository<Libro>,
    private readonly clientesService: ClientesService

  ) {}

  async create(createLibroDto: CreateLibroDto) {
    // return 'This action adds a new libro';
    try {
      // ANTES DE RELACION
      // const libro = this.libroRepository.create(createLibroDto);
      // await this.libroRepository.save(libro);
      // return libro;
      
      // DESPUES DE RELACION
      // prepara la consulta
      // const idC = createLibroDto.idCliente;
      const { idCliente, ...campos } = createLibroDto;
      console.log({ ...campos });
      const cliente = this.clientesService.findOne( idCliente );
      const libro = this.libroRepository.create({ ...campos });
      libro.cliente = await this.clientesService.findOne( idCliente );
      // se lanza la peticion al SGBD (postgres) --> esperar (x segundos)
      await this.libroRepository.save( libro );
      return libro;
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException('Error en BD!')
    }
  }
  
  findAll() {
    // return `This action returns all libros`;
    return this.libroRepository.find({});

  }

  findOne(idL: string) {
    return `This action returns a #${idL} libro`;
  }

  update(idL: string, updateLibroDto: UpdateLibroDto) {
    return `This action updates a #${idL} libro`;
  }

  remove(idL: string) {
    return `This action removes a #${idL} libro`;
  }
}

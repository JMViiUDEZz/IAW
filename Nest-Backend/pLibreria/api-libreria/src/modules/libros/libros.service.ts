import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateLibroDto } from './dto/create-libro.dto';
import { UpdateLibroDto } from './dto/update-libro.dto';
import { Libro } from './entities/libro.entity';


@Injectable()
export class LibrosService {

  constructor(

    @InjectRepository(Libro)
    private readonly libroRepository: Repository<Libro>

  ) {}

  async create(createLibroDto: CreateLibroDto) {
    // return 'This action adds a new libro';
    try {
      const libro = this.libroRepository.create(createLibroDto);
      await this.libroRepository.save(libro);
      return libro;
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException('Ayuda!')
    }
  }
  
  findAll() {
    // return `This action returns all libros`;
    return this.libroRepository.find({});

  }

  findOne(id: number) {
    return `This action returns a #${id} libro`;
  }

  update(id: number, updateLibroDto: UpdateLibroDto) {
    return `This action updates a #${id} libro`;
  }

  remove(id: number) {
    return `This action removes a #${id} libro`;
  }
}

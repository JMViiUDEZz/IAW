import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateJmvpAparatoDto } from './dto/create-jmvp-aparato.dto';
import { UpdateJmvpAparatoDto } from './dto/update-jmvp-aparato.dto';

// import { BadRequestException, Injectable, InternalServerErrorException, Logger, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';

import { JmvpAparato } from '../jmvp-aparatos/entities/jmvp-aparato.entity';
import { validate as isUUID } from 'uuid';

@Injectable()
export class JmvpAparatosService {

  // private readonly logger = new Logger('JmvpAparatosService');

  constructor(

    @InjectRepository(JmvpAparato)
    private readonly JmvpAparatoRepository: Repository<JmvpAparato>,
    // private readonly clienteService: ClientesService

    // private readonly dataSource: DataSource,

  ) {}

  async jmvpcreate(createJmvpAparatoDto: CreateJmvpAparatoDto) {
    // return 'This action adds a new jmvpAparato';
    try {
      // ANTES DE RELACION
      const aparato = this.JmvpAparatoRepository.create(createJmvpAparatoDto);
      await this.JmvpAparatoRepository.save(aparato);
      return aparato;
      
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException('Error en BD!')
    }
  }

  jmvpgetId(jmvpcod: string) {
    // return `This action returns a #${id} jmvpAuth`;
    return this.JmvpAparatoRepository.findOne({
      where: { 
        jmvpcod
      },
      relations: { 
        jmvpcodigoIn: true
      }
    });
  }

  jmvpgetAll() {
    // return `This action returns all jmvpAparatos`;
    return this.JmvpAparatoRepository.find({});
  }

  async jmvpdeleteAllAparatos() {
    const query = this.JmvpAparatoRepository.createQueryBuilder('aparato');

    try {
      return await query
        .delete()
        .where({})
        .execute();

    } catch (error) {
      this.handleDBErrors(error);
    }

  }

   private handleDBErrors (error: any): never{
   if (error.code === '23505')
     throw new BadRequestException(error.detail)
  
   throw new InternalServerErrorException('Please Check Server Error ...')
 }

  // findOne(id: number) {
  //   return `This action returns a #${id} jmvpAparato`;
  // }

  // update(id: number, updateJmvpAparatoDto: UpdateJmvpAparatoDto) {
  //   return `This action updates a #${id} jmvpAparato`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} jmvpAparato`;
  // }
}

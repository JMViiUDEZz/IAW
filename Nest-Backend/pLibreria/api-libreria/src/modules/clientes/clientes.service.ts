import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { Cliente } from './entities/cliente.entity';

@Injectable()
export class ClientesService {

  constructor(

    @InjectRepository(Cliente)
    private readonly clienteRepository: Repository<Cliente>

  ) {}

  async create(createClienteDto: CreateClienteDto) {
    // return 'This action adds a new cliente';
    try {
      const cliente = this.clienteRepository.create(createClienteDto);
      await this.clienteRepository.save(cliente);
      return cliente;
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException('Ayuda!')
    }
  }

  findAll() {
    // return `This action returns all clientes`;
    return this.clienteRepository.find({});
  }

  findOne(id: string) {
    // return `This action returns a #${id} cliente`;
    // DESPUES DE RELACION
    return this.clienteRepository.findOne({
      where: { 
        id 
      },
      relations: { 
        libros: true
      }
    });
  }

  update(id: string, updateClienteDto: UpdateClienteDto) {
    return `This action updates a #${id} cliente`;
  }

  remove(id: string) {
    return `This action removes a #${id} cliente`;
  }
}

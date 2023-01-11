import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ClientesService } from './clientes.service';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';

@Controller('clientes')
export class ClientesController {
  constructor(private readonly clientesService: ClientesService) {}

  @Post()
  create(@Body() createClienteDto: CreateClienteDto) {
    return this.clientesService.create(createClienteDto);
  }

  @Get()
  findAll() {
    return this.clientesService.findAll();
  }

  @Get(':idC')
  findOne(@Param('idC') idC: string) {
    return this.clientesService.findOne(idC);
  }

  @Patch(':idC')
  update(@Param('idC') idC: string, @Body() updateClienteDto: UpdateClienteDto) {
    return this.clientesService.update(idC, updateClienteDto);
  }

  @Delete(':idC')
  remove(@Param('idC') idC: string) {
    return this.clientesService.remove(idC);
  }
}

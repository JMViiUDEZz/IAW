/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';

@Controller('clientes')
export class ClientesController {
  
  @Get('list')
  getAllClientes() {
    return ['Listado de Clientes'];
  }

  @Get('new')
  newClientes() {
    return ['Creado de Clientes'];
  }

  @Get('update')
  updateClientes() {
    return ['Actualizado de Clientes'];
  }

  @Get('delete')
  deleteClientes() 
  {
    return ['Borrado de Clientes'];
  }
}
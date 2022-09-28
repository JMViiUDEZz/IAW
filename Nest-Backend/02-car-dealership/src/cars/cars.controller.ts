/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';

@Controller('cars')
export class CarsController {
  
  @Get('list')
  getAllCars() {
    return ['Listado de Cars'];
  }

  @Get('new')
  newCar() {
    return ['Creado de Cars'];
  }

  @Get('update')
  updateCar() {
    return ['Actualizado de Cars'];
  }

  @Get('delete')
  deleteCar() 
  {
    return ['Borrado de Cars'];
  }
}

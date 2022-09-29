/* eslint-disable prettier/prettier */
import { Controller, Delete, Get, Patch, Post } from '@nestjs/common';

@Controller('cars')
export class CarsController {
  
  @Get()
  getAllCars() {
    return ['Listado de Cars'];
  }

  @Get(':id')
  getCarById() {
    return ['Listado de un Car'];
  }

  @Post()
  newCar() {
    return ['Creado de Cars'];
  }

  @Patch()
  updateCar() {
    return ['Actualizado de Cars'];
  }

  @Delete()
  deleteCar() 
  {
    return ['Borrado de Cars'];
  }
}

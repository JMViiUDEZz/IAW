/* eslint-disable prettier/prettier */
import { Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {

  constructor(private readonly carsService: CarsService) {}
  
  @Get()
  getAllCars() {
    console.log('listar');
    // return `Listado de todos los Cars`;
    return this.carsService.findAll();
  }

  @Get(':id')
  getCarById( @Param('id') id: string ) {
    // return `Listado de Car ${ id }`;
    return this.carsService.findOneById(id);
    console.log(id);
  }

  @Post()
  newCar() {
    return ['Creado de Cars'];
  }

  @Patch(':id')
  updateCar( @Param('id') id: string ) {
    return `Actualizado de Car ${ id }`;
  }

  @Delete(':id')
  deleteCar( @Param('id') id: string ) {
    return `Borrado de Car ${ id }`;
  }
}

import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CarsService } from './cars.service';
import { ICar } from './interfaces/car.interface';

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
  getCarById( @Param('id') id: number ) {
    // return `Listado de Car ${ id }`;
    return this.carsService.findOneById(id);
    console.log(id);
  }

  @Post()
  create( @Body() dataCar: ICar ) {
    // return ['Creado de Cars'];
    return this.carsService.create(dataCar);

  }

  @Patch(':id')
  updateCar( @Param('id') id: number ) {
    return `Actualizado de Car ${ id }`;
  }

  @Delete(':id')
  deleteCar( @Param('id') id: number ) {
    // return `Borrado de Car ${ id }`;
    return this.carsService.delete(id);
  }
}

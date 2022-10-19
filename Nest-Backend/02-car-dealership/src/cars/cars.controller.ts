import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CarsService } from './cars.service';
import { ICar } from './interfaces/car.interface';
import { CreateCarDto } from './dto/create-car.dto';

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
    // console.log(id);
  }

  @Post()
  create( @Body() createCarDto: CreateCarDto ) {
    // return ['Creado de Cars'];
    return this.carsService.create(createCarDto);

  }

  @Patch(':id')
  updateCar( @Param('id') id: number,
    // return `Actualizado de Car ${ id }`;
    @Body() dataCar: ICar){
    return this.carsService.update(id, dataCar);
  }

  @Delete(':id')
  deleteCar( @Param('id') id: number ) {
    // return `Borrado de Car ${ id }`;
    return this.carsService.delete(id);
  }
}

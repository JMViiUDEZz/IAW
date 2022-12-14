import { Injectable, NotFoundException } from '@nestjs/common';
import { ICar } from './interfaces/car.interface';
import { CreateCarDto } from './dto/create-car.dto';
import { v4 as uuid } from 'uuid';

@Injectable()
export class CarsService {

    private cars: ICar[] = [
        {
            id: uuid(),
            brand: 'Toyota',
            model: 'Corola'
        },
        {
            id: uuid(),
            brand: 'Honda',
            model: 'Civic'
        },
        {
            id: uuid(),
            brand: 'Jeep',
            model: 'Cherokee'
        },
        {
            id: uuid(),
            brand: 'Audi',
            model: 'A4'
        }
    ];

    public findAll() {
        return this.cars;
    }
    
    findOneById(id: string){
        console.log (id);
        const car = this.cars.find(car => car.id === id);
        if (!car){
            throw new NotFoundException(`Car with id '${ id }' not found`);
        }
        return car;
    }

    create ( createCarDto: CreateCarDto){
        // // ANTES DE CREAR EL DTO (create-car.dto.ts)
        // const ultimo = this.cars[this.cars.length - 1];
        // // console.log(ultimo);
        // const newId = ultimo.id + 1;
        // // this.cars.push(createCarDto);
        // // return createCarDto;

        // //DESPUES DE CREAR EL DTO (create-car.dto.ts)
        // const car: ICar = {
        //     id: newId,
        //     ...createCarDto //esparce sus propiedades en este nuevo objeto
        //     // brand: carDTO.brand,
        //     // model: carDTO.model
        // }

        const car: ICar = {
            id: uuid(),
            ...createCarDto //esparce sus propiedades en este nuevo objeto
            // brand: carDTO.brand,
            // model: carDTO.model
        }

        this.cars.push( car );

        return car;
    }

    delete (id: string){
        // 1ª FORMA: filter()
        const carDB = this.findOneById(id);    
        this.cars = this.cars.filter(car => car.id != id);
        return `Borrado de Car ${ id }`; 

        // 2ª FORMA: splice() --> SOLO FUNCIONA SI LOS COCHES ESTÁN ORDENADOS POR ID
        //                        EN NUESTRO CASO, SI FUNCIONA
        // const posicion = id - 1;
        // this.cars.splice(posicion,1)
    }

    update (id: string, dataCar: ICar){
        let carDB = this.findOneById(id);
        //map devuelva un array de cars
        this.cars = this.cars.map ( car => { 
            if (car.id === id){ //id actualizado a tipo number
                carDB = {
                    ...carDB, //todos los campos de la BD
                    ...dataCar, //se sobreescriben con los campos de la Request
                    // id //
                }
                return carDB //el car modificado
            }
            return car //el mismo car
        });
        //devolvamos el carDB actualizador
        return carDB;
    }

}
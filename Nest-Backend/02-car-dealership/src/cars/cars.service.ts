import { Injectable, NotFoundException } from '@nestjs/common';
import { ICar } from './interfaces/car.interface';

@Injectable()
export class CarsService {

    private cars: ICar[] = [
        {
            id: 1,
            brand: 'Toyota',
            model: 'Corola'
        },
        {
            id: 2,
            brand: 'Honda',
            model: 'Civic'
        },
        {
            id: 3,
            brand: 'Jeep',
            model: 'Cherokee'
        },
        {
            id: 4,
            brand: 'Audi',
            model: 'A4'
        }
    ];

    public findAll() {
        return this.cars;
    }
    
    findOneById(id: number){
        console.log (id);
        const car = this.cars.find(car => car.id === +id);
        if (!car){
            throw new NotFoundException(`Car with id '${ id }' not found`);
        }
        return car;
    }

    create ( dataCar: ICar){
        const ultimo = this.cars[this.cars.length - 1];
        console.log(ultimo);
        dataCar.id = ultimo.id + 1;
        this.cars.push(dataCar);
        return dataCar;
    }

    delete (id: number){
        // 1ª FORMA: filter()
        const carDB = this.findOneById(id);    
        this.cars = this.cars.filter(car => car.id != id);
        return `Borrado de Car ${ id }`; 

        // 2ª FORMA: splice() --> SOLO FUNCIONA SI LOS COCHES ESTÁN ORDENADOS POR ID
        //                        EN NUESTRO CASO, SI FUNCIONA
        // const posicion = id - 1;
        // this.cars.splice(posicion,1)
    }
}


/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class CarsService {

    private cars = [
        {
            id: '1',
            brand: 'Toyota',
            model: 'Corola'
        },
        {
            id: '2',
            brand: 'Honda',
            model: 'Civic'
        },
        {
            id: '3',
            brand: 'Jeep',
            model: 'Cherokee'
        },
        {
            id: '4',
            brand: 'Audi',
            model: 'A4'
        }
    ];

    public findAll() {
        // console.log(this.cars);
        return this.cars;
    }
    
    findOneById(id: string){
        console.log (id);
        const car = this.cars.find(car => car.id === id);
        if (!car){
            throw new NotFoundException(`Car with id '${ id }' not found`);
        }
        // return this.cars[id];
        return car;
    }
}
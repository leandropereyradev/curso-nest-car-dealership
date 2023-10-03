import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { v4 as uuid } from 'uuid';

import { Car } from './interfaces/car.interface';
import { CreateCarDTO, UpdateCarDTO } from './dto';

@Injectable()
export class CarsService {
  private _cars: Car[] = [
    {
      id: uuid(),
      brand: 'Toyota',
      model: 'Corolla',
    },
    {
      id: uuid(),
      brand: 'Honda',
      model: 'Civic',
    },
    {
      id: uuid(),
      brand: 'Jeep',
      model: 'Cherokee',
    },
  ];

  findAll() {
    return this._cars;
  }

  findOneByID(id: string) {
    const car = this._cars.find((car) => car.id === id);

    if (!car) throw new NotFoundException(`Car with id: '${id}' not found`);

    return car;
  }

  create(createCarDTO: CreateCarDTO) {
    const car = {
      id: uuid(),
      ...createCarDTO,
    };

    this._cars.push(car);

    return car;
  }

  update(id: string, updateCarDTO: UpdateCarDTO) {
    if (updateCarDTO.id && updateCarDTO.id !== id)
      throw new BadRequestException('Car id is not valid inside body');

    let carDB = this.findOneByID(id);

    this._cars = this._cars.map((car) => {
      if (car.id === id) {
        carDB = {
          ...carDB,
          ...updateCarDTO,
          id,
        };
        return carDB;
      }

      return car;
    });

    return carDB;
  }

  delete(id: string) {
    this.findOneByID(id);

    this._cars = this._cars.filter((car) => car.id !== id);
  }

  fillCarsSeed(cars: Car[]) {
    this._cars = cars;
  }
}

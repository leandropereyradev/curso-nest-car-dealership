import { Injectable } from '@nestjs/common';

@Injectable()
export class CarsService {
  private _cars = [
    {
      id: 1,
      brand: 'Toyota',
      model: 'Corolla',
    },
    {
      id: 3,
      brand: 'Honda',
      model: 'Civic',
    },
    {
      id: 3,
      brand: 'Jeep',
      model: 'Cherokee',
    },
  ];

  findAll() {
    return this._cars;
  }

  findOneByID(id: number) {
    return this._cars.find((car) => car.id === id);
  }
}

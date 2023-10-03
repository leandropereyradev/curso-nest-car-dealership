import { Controller, Get, Param } from '@nestjs/common';

@Controller('cars')
export class CarsController {
  private _cars: string[] = ['Toyota', 'Honda', 'Jeep'];

  @Get()
  getAllCars() {
    return this._cars;
  }

  @Get(':id')
  getCardByID(@Param('id') id: string) {
    return this._cars[id];
  }
}

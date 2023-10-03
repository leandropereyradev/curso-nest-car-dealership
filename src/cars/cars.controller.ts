import { Controller, Get, Param } from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {
  constructor(private readonly _carsService: CarsService) {}

  @Get()
  getAllCars() {
    return this._carsService.findAll();
  }

  @Get(':id')
  getCardByID(@Param('id') id: string) {
    return this._carsService.findOneByID(+id);
  }
}

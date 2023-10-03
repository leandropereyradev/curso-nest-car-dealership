import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  ParseUUIDPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDTO, UpdateCarDTO } from './dto';

@Controller('cars')
export class CarsController {
  constructor(private readonly _carsService: CarsService) {}

  @Get()
  getAllCars() {
    return this._carsService.findAll();
  }

  @Get(':id')
  getCardByID(@Param('id', ParseUUIDPipe) id: string) {
    return this._carsService.findOneByID(id);
  }

  @Post()
  createCar(@Body() createCarDTO: CreateCarDTO) {
    return this._carsService.create(createCarDTO);
  }

  @Patch(':id')
  updateCar(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateCarDTO: UpdateCarDTO,
  ) {
    return this._carsService.update(id, updateCarDTO);
  }

  @Delete(':id')
  deleteCar(@Param('id', ParseIntPipe) id: number) {
    return {
      method: 'Delete',
      id,
    };
  }
}

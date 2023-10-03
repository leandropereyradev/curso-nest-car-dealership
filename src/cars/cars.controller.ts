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
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDTO } from './dto/create-car.dto';

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
    return createCarDTO;
  }

  @Patch(':id')
  updateCar(@Param('id', ParseIntPipe) id: number, @Body() body: any) {
    return body;
  }

  @Delete(':id')
  deleteCar(@Param('id', ParseIntPipe) id: number) {
    return {
      method: 'Delete',
      id,
    };
  }
}

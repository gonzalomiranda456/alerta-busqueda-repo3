import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { LocationsService } from './locations.service';
import { CreateProvinceDto } from './dto/create-province.dto';
import { CreateMunicipalityDto } from './dto/create-municipality.dto';

@Controller('locations')
export class LocationsController {
  constructor(private readonly locationsService: LocationsService) {}

  @Post('provinces')
  createProvince(@Body() createProvinceDto: CreateProvinceDto) {
    return this.locationsService.createProvince(createProvinceDto);
  }

  @Get('provinces')
  findAllProvinces() {
    return this.locationsService.findAllProvinces();
  }

  @Get('provinces/:id')
  findOneProvince(@Param('id', ParseIntPipe) id: number) {
    return this.locationsService.findOneProvince(id);
  }

  @Post('municipalities')
  createMunicipality(@Body() createMunicipalityDto: CreateMunicipalityDto) {
    return this.locationsService.createMunicipality(createMunicipalityDto);
  }

  @Get('provinces/:provinceId/municipalities')
  findMunicipalitiesByProvince(
    @Param('provinceId', ParseIntPipe) provinceId: number,
  ) {
    return this.locationsService.findMunicipalitiesByProvince(provinceId);
  }
  
  @Get('municipalities/:id')
  findOneMunicipality(@Param('id', ParseIntPipe) id: number) {
    return this.locationsService.findOneMunicipality(id);
  }
}
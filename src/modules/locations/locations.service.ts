import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateProvinceDto } from './dto/create-province.dto';
import { CreateMunicipalityDto } from './dto/create-municipality.dto';

@Injectable()
export class LocationsService {
  constructor(private readonly prisma: PrismaService) {}

  async createProvince(createProvinceDto: CreateProvinceDto) {
    const existingProvince = await this.prisma.province.findUnique({
      where: { name: createProvinceDto.name },
    });

    if (existingProvince) {
      throw new ConflictException(
        `La provincia "${createProvinceDto.name}" ya se encuentra registrada.`,
      );
    }

    return this.prisma.province.create({
      data: createProvinceDto,
    });
  }

  async findAllProvinces() {
    return this.prisma.province.findMany({
      orderBy: { name: 'asc' },
    });
  }

  async findOneProvince(id: number) {
    const province = await this.prisma.province.findUnique({
      where: { id },
      include: {
        municipalities: {
          orderBy: { name: 'asc' },
        },
      },
    });

    if (!province) {
      throw new NotFoundException(
        `No se encontró la provincia con ID ${id}.`,
      );
    }

    return province;
  }

  async createMunicipality(createMunicipalityDto: CreateMunicipalityDto) {
    const province = await this.prisma.province.findUnique({
      where: { id: createMunicipalityDto.province_id },
    });

    if (!province) {
      throw new NotFoundException(
        `No existe una provincia con ID ${createMunicipalityDto.province_id}.`,
      );
    }

    const existingMunicipality = await this.prisma.municipality.findFirst({
      where: {
        name: createMunicipalityDto.name,
        province_id: createMunicipalityDto.province_id,
      },
    });

    if (existingMunicipality) {
      throw new ConflictException(
        `El municipio "${createMunicipalityDto.name}" ya existe en ${province.name}.`,
      );
    }

    return this.prisma.municipality.create({
      data: createMunicipalityDto,
      include: { province: true },
    });
  }

  async findMunicipalitiesByProvince(provinceId: number) {
    const province = await this.prisma.province.findUnique({
      where: { id: provinceId },
    });

    if (!province) {
      throw new NotFoundException(
        `No se encontró la provincia con ID ${provinceId}.`,
      );
    }

    return this.prisma.municipality.findMany({
      where: { province_id: provinceId },
      orderBy: { name: 'asc' },
    });
  }

  async findOneMunicipality(id: number) {
    const municipality = await this.prisma.municipality.findUnique({
      where: { id },
      include: {
        province: true,
      },
    });

    if (!municipality) {
      throw new NotFoundException(
        `No se encontró el municipio con ID ${id}.`,
      );
    }

    return municipality;
  }
}
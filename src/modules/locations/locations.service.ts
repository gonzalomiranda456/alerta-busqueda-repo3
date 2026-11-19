import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateLocationDto } from './dto/create-location.dto';
import { UpdateLocationDto } from './dto/update-location.dto';

@Injectable()
export class LocationsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createLocationDto: CreateLocationDto) {
    return this.prisma.location.create({
      data: createLocationDto,
    });
  }

  async findAll() {
    return this.prisma.location.findMany({
      orderBy: { id: 'asc' },
    });
  }

  async findOne(id: number) {
    const location = await this.prisma.location.findUnique({
      where: { id },
      include: { cases: true },
    });

    if (!location) {
      throw new NotFoundException(`No se encontró la ubicación con ID ${id}`);
    }

    return location;
  }

  async update(id: number, updateLocationDto: UpdateLocationDto) {
    await this.findOne(id);

    return this.prisma.location.update({
      where: { id },
      data: updateLocationDto,
    });
  }

  async remove(id: number) {
    await this.findOne(id);

    return this.prisma.location.delete({
      where: { id },
    });
  }
}
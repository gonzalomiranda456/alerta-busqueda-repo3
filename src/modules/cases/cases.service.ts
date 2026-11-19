import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCaseDto } from './dto/create-case.dto';
import { UpdateCaseDto } from './dto/update-case.dto';

@Injectable()
export class CasesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createCaseDto: CreateCaseDto) {
    const locationExists = await this.prisma.location.findUnique({
      where: { id: createCaseDto.location_id },
    });

    if (!locationExists) {
      throw new NotFoundException(
        `No existe una ubicación con ID ${createCaseDto.location_id}`,
      );
    }

    return this.prisma.case.create({
      data: createCaseDto,
      include: { location: true },
    });
  }

  async findAll() {
    return this.prisma.case.findMany({
      include: {
        location: true,
        alerts: true,
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  async findOne(id: number) {
    const foundCase = await this.prisma.case.findUnique({
      where: { id },
      include: {
        location: true,
        alerts: true,
      },
    });

    if (!foundCase) {
      throw new NotFoundException(`No se encontró el caso con ID ${id}`);
    }

    return foundCase;
  }

  async update(id: number, updateCaseDto: UpdateCaseDto) {
    await this.findOne(id);

    if (updateCaseDto.location_id) {
      const locationExists = await this.prisma.location.findUnique({
        where: { id: updateCaseDto.location_id },
      });

      if (!locationExists) {
        throw new NotFoundException(
          `No existe una ubicación con ID ${updateCaseDto.location_id}`,
        );
      }
    }

    return this.prisma.case.update({
      where: { id },
      data: updateCaseDto,
      include: { location: true },
    });
  }

  async remove(id: number) {
    await this.findOne(id);

    return this.prisma.case.delete({
      where: { id },
    });
  }
}
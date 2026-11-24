import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCaseDto } from './dto/create-case.dto';
import { UpdateCaseDto } from './dto/update-case.dto';

const municipalityInclude = {
  include: {
    province: true,
  },
};

@Injectable()
export class CasesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createCaseDto: CreateCaseDto) {
    const municipalityExists = await this.prisma.municipality.findUnique({
      where: { id: createCaseDto.municipality_id },
    });

    if (!municipalityExists) {
      throw new NotFoundException(
        `No existe un municipio con ID ${createCaseDto.municipality_id}.`,
      );
    }

    if (createCaseDto.user_id) {
      const userExists = await this.prisma.user.findUnique({
        where: { id: createCaseDto.user_id },
      });

      if (!userExists) {
        throw new NotFoundException(
          `No existe un usuario con ID ${createCaseDto.user_id}.`,
        );
      }
    }

    return this.prisma.case.create({
      data: createCaseDto,
      include: {
        municipality: municipalityInclude,
      },
    });
  }

  async findAll() {
    return this.prisma.case.findMany({
      include: {
        municipality: municipalityInclude,
        alerts: true,
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  async findOne(id: number) {
    const foundCase = await this.prisma.case.findUnique({
      where: { id },
      include: {
        municipality: municipalityInclude,
        alerts: true,
      },
    });

    if (!foundCase) {
      throw new NotFoundException(`No se encontró el caso con ID ${id}.`);
    }

    return foundCase;
  }

  async update(id: number, updateCaseDto: UpdateCaseDto) {
    await this.findOne(id);

    if (updateCaseDto.municipality_id) {
      const municipalityExists = await this.prisma.municipality.findUnique({
        where: { id: updateCaseDto.municipality_id },
      });

      if (!municipalityExists) {
        throw new NotFoundException(
          `No existe un municipio con ID ${updateCaseDto.municipality_id}.`,
        );
      }
    }

    if (updateCaseDto.user_id) {
      const userExists = await this.prisma.user.findUnique({
        where: { id: updateCaseDto.user_id },
      });

      if (!userExists) {
        throw new NotFoundException(
          `No existe un usuario con ID ${updateCaseDto.user_id}.`,
        );
      }
    }

    return this.prisma.case.update({
      where: { id },
      data: updateCaseDto,
      include: {
        municipality: municipalityInclude,
      },
    });
  }

  async remove(id: number) {
    await this.findOne(id);

    return this.prisma.case.delete({
      where: { id },
    });
  }
}
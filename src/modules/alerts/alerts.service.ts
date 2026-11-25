import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateAlertDto } from './dto/create-alert.dto';
import { UpdateAlertDto } from './dto/update-alert.dto';

@Injectable()
export class AlertsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createAlertDto: CreateAlertDto) {
    const caseExists = await this.prisma.case.findUnique({
      where: { id: createAlertDto.case_id },
    });

    if (!caseExists) {
      throw new NotFoundException(
        `No existe un caso con ID ${createAlertDto.case_id}`,
      );
    }

    return this.prisma.alert.create({
      data: createAlertDto,
      include: { case: true },
    });
  }

  async findAll() {
    return this.prisma.alert.findMany({
      include: { case: true },
      orderBy: { createdAt: 'desc' },
    });
  }

  async findOne(id: number) {
    const alert = await this.prisma.alert.findUnique({
      where: { id },
      include: { case: true },
    });

    if (!alert) {
      throw new NotFoundException(`No se encontró la alerta con ID ${id}`);
    }

    return alert;
  }

  async update(id: number, updateAlertDto: UpdateAlertDto) {
    await this.findOne(id);

    if (updateAlertDto.case_id) {
      const caseExists = await this.prisma.case.findUnique({
        where: { id: updateAlertDto.case_id },
      });

      if (!caseExists) {
        throw new NotFoundException(
          `No existe un caso con ID ${updateAlertDto.case_id}`,
        );
      }
    }

    return this.prisma.alert.update({
      where: { id },
      data: updateAlertDto,
      include: { case: true },
    });
  }

  async remove(id: number) {
    await this.findOne(id);

    return this.prisma.alert.delete({
      where: { id },
    });
  }
}
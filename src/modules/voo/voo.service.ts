import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { PrismaService } from '../../database/PrismaService';
import { VooDTO } from './voo.dto';
import { v4 as uuidv4 } from 'uuid';
@Injectable()
export class VooService {
  constructor(private prisma: PrismaService) {}

  async create(data: VooDTO) {
    const dataVoo = new Date(data.data);  // Converte a string para um objeto Date

    // Verifica se há voos para o mesmo destino no mesmo dia
    const voosMesmoDestino = await this.prisma.voo.findFirst({
      where: {
        destinoId: data.destinoId,
        data: {
          gte: new Date(dataVoo.setHours(0, 0, 0, 0)), // início do dia
          lt: new Date(dataVoo.setHours(23, 59, 59, 999)), // final do dia
        },
      },
    });

    if (voosMesmoDestino) {
      throw new HttpException('Já existe um voo para o mesmo destino no mesmo dia', HttpStatus.CONFLICT);
    }

    // Verifica se há voos com diferença menor que 30 minutos
    const vooExistente = await this.prisma.voo.findFirst({
      where: {
        data: {
          gte: new Date(dataVoo.getTime() - 30 * 60 * 1000),
          lte: new Date(dataVoo.getTime() + 30 * 60 * 1000),
        },
      },
    });

    if (vooExistente) {
      throw new HttpException('Já existe um voo próximo deste horário (30 minutos de diferença)', HttpStatus.CONFLICT);
    }

    const codigo = `VOO-${uuidv4()}`; // Gera código único do voo

    return await this.prisma.voo.create({
      data: {
        codigo,  // O campo codigo gerado é incluído aqui
        origemId: data.origemId,
        destinoId: data.destinoId,
        data: data.data,  // Mantém a data original
      },
    });
  }

  async findAll() {
    return this.prisma.voo.findMany();
  }

  async findOne(id: string) {
    return this.prisma.voo.findUnique({
      where: { id },
    });
  }

  async update(id: string, data: VooDTO) {
    return this.prisma.voo.update({
      where: { id },
      data: {
        origemId: data.origemId,
        destinoId: data.destinoId,
        data: data.data,
        codigo: data.codigo,  // Incluindo o código na atualização
      },
    });
  }

  async delete(id: string) {
    return this.prisma.voo.delete({
      where: { id },
    });
  }
}

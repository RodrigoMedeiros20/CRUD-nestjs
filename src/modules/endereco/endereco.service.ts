import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/PrismaService';
import { EnderecoDTO } from './endereco.dto';

@Injectable()
export class EnderecoService {
  constructor(private prisma: PrismaService) {}

  async create(data: EnderecoDTO) {
    return this.prisma.endereco.create({ data });
  }

  async findAll() {
    return this.prisma.endereco.findMany();
  }

  async findOne(id: string) {
    return this.prisma.endereco.findUnique({ where: { id } });
  }

  async update(id: string, data: EnderecoDTO) {
    return this.prisma.endereco.update({
      where: { id },
      data,
    });
  }
  async delete(id: string) {
    const enderecoExists = await this.prisma.endereco.findUnique({
      where: {
        id,
      },
    });

    if (!enderecoExists) {
      throw new Error('endereco does not exists!');
    }

    return await this.prisma.endereco.delete({
      where: {
        id,
      },
    });
  }
}

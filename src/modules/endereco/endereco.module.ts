import { Module } from '@nestjs/common';
import { EnderecoService } from './endereco.service';
import { EnderecoController } from './endereco.controller';
import { PrismaService } from '../../database/PrismaService';

@Module({
  controllers: [EnderecoController],
  providers: [EnderecoService, PrismaService],
})
export class EnderecoModule {}

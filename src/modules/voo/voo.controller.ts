import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { VooService } from './voo.service';
import { VooDTO } from './voo.dto';
import { checkExistence } from '../../utils/check-existence.util';

@Controller('voo')
export class VooController {
  constructor(private readonly vooService: VooService) {}

  @Post()
  async create(@Body() data: VooDTO) {
    return this.vooService.create(data);
  }

  @Get()
  async findAll() {
    return this.vooService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const voo = await  this.vooService.findOne(id);
    return checkExistence(voo, 'voo não encontrado');
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() data: VooDTO) {
    const voo = await this.vooService.update(id, data);
    return checkExistence(voo, 'voo não encontrado');
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    const voo = await this.vooService.delete(id);
    return checkExistence(voo, 'voo não encontrado');
  }
}

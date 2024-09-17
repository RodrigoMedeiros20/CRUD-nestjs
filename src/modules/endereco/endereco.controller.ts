import { Controller, Get, Post, Put, Delete, Body, Param , HttpException, HttpStatus} from '@nestjs/common';
import { EnderecoService } from './endereco.service';
import { EnderecoDTO } from './endereco.dto';
import { checkExistence } from '../../utils/check-existence.util';
@Controller('endereco')
export class EnderecoController {
  constructor(private readonly enderecoService: EnderecoService) {}

  @Post()
  async create(@Body() data: EnderecoDTO) {
    return this.enderecoService.create(data);
  }

  @Get()
  async findAll() {
    return this.enderecoService.findAll();
  }

 
  @Get(':id')
  async findOne(@Param('id') id: string) {
    const endereco = await this.enderecoService.findOne(id);
    return checkExistence(endereco, 'Endereço não encontrado');
  }
  @Put(':id')
  async update(@Param('id') id: string, @Body() data: EnderecoDTO) {
    
    
    const endereco = await this.enderecoService.update(id, data);

    return checkExistence(endereco, 'Endereço não encontrado');

  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    const endereco = await  this.enderecoService.delete(id);
    return checkExistence(endereco, 'Endereço não encontrado');

  }
}

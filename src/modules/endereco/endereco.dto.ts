import { IsString, IsNotEmpty } from 'class-validator';

export class EnderecoDTO {
  @IsNotEmpty()
  @IsString()
  cep: string;

  @IsNotEmpty()
  @IsString()
  pais: string;

  @IsNotEmpty()
  @IsString()
  cidade: string;

  @IsNotEmpty()
  @IsString()
  estado: string;

  @IsNotEmpty()
  @IsString()
  rua: string;  // Campo adicionado

  @IsNotEmpty()
  @IsString()
  numero: string;  // Campo adicionado
}

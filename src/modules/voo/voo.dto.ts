import { IsString, IsNotEmpty, IsDateString } from 'class-validator';

export class VooDTO {
  @IsNotEmpty()
  @IsString()
  origemId: string;

  @IsNotEmpty()
  @IsString()
  destinoId: string;

  // Corrigido para string
  @IsNotEmpty()
  @IsString()
  codigo: string;

  @IsNotEmpty()
  @IsDateString()
  data: Date;
}

import { Module } from '@nestjs/common';
import { EnderecoModule } from './modules/endereco/endereco.module';
import { VooModule } from './modules/voo/voo.module';

@Module({
  imports: [EnderecoModule, VooModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

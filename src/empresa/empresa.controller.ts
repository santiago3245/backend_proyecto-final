import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { EmpresaService } from './empresa.service';
import { Empresa } from './empresa.entity';

@Controller('empresa')
export class EmpresaController {
  constructor(private readonly empresaService: EmpresaService) {}

  @Get()
  findAll(): Promise<Empresa[]> {
    return this.empresaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Empresa> {
    return this.empresaService.findOne(id);
  }

  @Post()
  create(@Body() empresa: Empresa): Promise<Empresa> {
    return this.empresaService.create(empresa);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() empresa: Empresa): Promise<void> {
    return this.empresaService.update(id, empresa);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.empresaService.remove(id);
  }
}
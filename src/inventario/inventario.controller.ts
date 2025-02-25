import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { InventarioService } from './inventario.service';
import { Inventario } from './inventario.entity';

@Controller('inventario')
export class InventarioController {
  constructor(private readonly inventarioService: InventarioService) {}

  @Get()
  findAll(): Promise<Inventario[]> {
    return this.inventarioService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Inventario> {
    return this.inventarioService.findOne(id);
  }

  @Post()
  create(@Body() inventario: Inventario): Promise<Inventario> {
    return this.inventarioService.create(inventario);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() inventario: Inventario): Promise<void> {
    return this.inventarioService.update(id, inventario);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.inventarioService.remove(id);
  }
}
import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { MovimientoInventarioService } from './movimiento_inventario.service';
import { MovimientoInventario } from './movimiento_inventario.entity';

@Controller('movimiento-inventario')
export class MovimientoInventarioController {
  constructor(private readonly movimientoInventarioService: MovimientoInventarioService) {}

  @Get()
  findAll(): Promise<MovimientoInventario[]> {
    return this.movimientoInventarioService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<MovimientoInventario> {
    return this.movimientoInventarioService.findOne(id);
  }

  @Post()
  create(@Body() movimientoInventario: MovimientoInventario): Promise<MovimientoInventario> {
    return this.movimientoInventarioService.create(movimientoInventario);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() movimientoInventario: MovimientoInventario): Promise<void> {
    return this.movimientoInventarioService.update(id, movimientoInventario);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.movimientoInventarioService.remove(id);
  }
}
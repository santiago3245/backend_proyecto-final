import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { PedidoService } from './pedido.service';
import { Pedido } from './pedido.entity';

@Controller('pedido')
export class PedidoController {
  constructor(private readonly pedidoService: PedidoService) {}

  @Get()
  findAll(): Promise<Pedido[]> {
    return this.pedidoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Pedido> {
    return this.pedidoService.findOne(id);
  }

  @Post()
  create(@Body() pedido: Pedido): Promise<Pedido> {
    return this.pedidoService.create(pedido);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() pedido: Pedido): Promise<void> {
    return this.pedidoService.update(id, pedido);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.pedidoService.remove(id);
  }
}
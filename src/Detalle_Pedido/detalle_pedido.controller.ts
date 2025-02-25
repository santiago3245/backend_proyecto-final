import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { Detalle_Pedido } from './detalle_pedido.entity';
import { Detalle_PedidoService } from './detalle_pedido.service';



@Controller('detalle-pedido')
export class Detalle_PedidoController {
  constructor(private readonly detallePedidoService: Detalle_PedidoService) {}

  @Get()
  findAll(): Promise<Detalle_Pedido[]> {
    return this.detallePedidoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Detalle_Pedido> {
    return this.detallePedidoService.findOne(id);
  }

  @Post()
  create(@Body() detallePedido: Detalle_Pedido): Promise<Detalle_Pedido> {
    return this.detallePedidoService.create(detallePedido);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() detallePedido: Detalle_Pedido): Promise<void> {
    return this.detallePedidoService.update(id, detallePedido);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.detallePedidoService.remove(id);
  }
}
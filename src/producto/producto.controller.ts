import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ProductoService } from './producto.service';
import { Producto } from './producto.entity';

@Controller('producto')
export class ProductoController {
  constructor(private readonly productoService: ProductoService) {}

  @Get()
  findAll(): Promise<Producto[]> {
    return this.productoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Producto> {
    return this.productoService.findOne(id);
  }

  @Post()
  create(@Body() producto: Producto): Promise<Producto> {
    return this.productoService.create(producto);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() producto: Producto): Promise<void> {
    return this.productoService.update(id, producto);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.productoService.remove(id);
  }
}
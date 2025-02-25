import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ProveedorService } from './proveedor.service';
import { Proveedor } from './proveedor.entity';

@Controller('proveedor')
export class ProveedorController {
  constructor(private readonly proveedorService: ProveedorService) {}

  @Get()
  findAll(): Promise<Proveedor[]> {
    return this.proveedorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Proveedor> {
    return this.proveedorService.findOne(id);
  }

  @Post()
  create(@Body() proveedor: Proveedor): Promise<Proveedor> {
    return this.proveedorService.create(proveedor);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() proveedor: Proveedor): Promise<void> {
    return this.proveedorService.update(id, proveedor);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.proveedorService.remove(id);
  }
}